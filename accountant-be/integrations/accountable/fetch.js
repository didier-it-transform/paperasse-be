#!/usr/bin/env node
/**
 * Accountable integration — fetch transactions, invoices, expenses
 * Docs: app.accountable.eu → Paramètres → API
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const API_KEY = process.env.ACCOUNTABLE_API_KEY
const BASE_URL = process.env.ACCOUNTABLE_BASE_URL || 'https://api.accountable.eu'

if (!API_KEY) {
  console.error('ACCOUNTABLE_API_KEY manquant — voir integrations/accountable/README.md')
  process.exit(1)
}

const headers = {
  'Authorization': `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

async function fetchAccountable(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`, { headers })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Accountable API ${endpoint}: ${res.status} — ${body}`)
  }
  return res.json()
}

async function fetchAll() {
  console.log('Accountable — import en cours...\n')

  const [invoices, expenses, transactions] = await Promise.allSettled([
    fetchAccountable('/v1/invoices'),
    fetchAccountable('/v1/expenses'),
    fetchAccountable('/v1/transactions'),
  ])

  const output = {
    exported_at: new Date().toISOString(),
    invoices: invoices.status === 'fulfilled' ? invoices.value : { error: invoices.reason?.message },
    expenses: expenses.status === 'fulfilled' ? expenses.value : { error: expenses.reason?.message },
    transactions: transactions.status === 'fulfilled' ? transactions.value : { error: transactions.reason?.message },
  }

  const outPath = path.join(__dirname, '../../data/accountable-export.json')
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2))

  console.log(`✓ Factures     : ${Array.isArray(output.invoices) ? output.invoices.length : output.invoices?.error || '?'}`)
  console.log(`✓ Dépenses     : ${Array.isArray(output.expenses) ? output.expenses.length : output.expenses?.error || '?'}`)
  console.log(`✓ Transactions : ${Array.isArray(output.transactions) ? output.transactions.length : output.transactions?.error || '?'}`)
  console.log(`\nExporté → ${outPath}`)

  return output
}

async function fetchVATSummary(quarter, year) {
  // Résumé TVA pour une déclaration trimestrielle
  const q = quarter || Math.ceil((new Date().getMonth() + 1) / 3)
  const y = year || new Date().getFullYear()
  console.log(`TVA T${q}/${y}...`)
  try {
    const data = await fetchAccountable(`/v1/vat?quarter=${q}&year=${y}`)
    console.log(JSON.stringify(data, null, 2))
    return data
  } catch (e) {
    console.error(`Endpoint TVA non disponible: ${e.message}`)
  }
}

// CLI
const [,, cmd, ...args] = process.argv
switch (cmd) {
  case 'vat':   await fetchVATSummary(...args); break
  default:      await fetchAll()
}
