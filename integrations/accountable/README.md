# Accountable Integration · Intégration Accountable · Accountable Integratie · Accountable Integration

**FR** · Accountable (app.accountable.eu) — application de comptabilité pour indépendants belges.
**NL** · Accountable (app.accountable.eu) — boekhoudapplicatie voor Belgische zelfstandigen.
**DE** · Accountable (app.accountable.eu) — Buchhaltungsanwendung für belgische Selbstständige.
**EN** · Accountable (app.accountable.eu) — accounting app for Belgian freelancers and self-employed.

---

## Setup · Configuration · Configuratie · Einrichtung

**FR**
1. Se connecter sur app.accountable.eu
2. Paramètres → Intégrations → API → Générer une clé API
3. Copier la clé dans `.env`

**NL**
1. Inloggen op app.accountable.eu
2. Instellingen → Integraties → API → API-sleutel genereren
3. Sleutel kopiëren naar `.env`

**DE**
1. Anmelden auf app.accountable.eu
2. Einstellungen → Integrationen → API → API-Schlüssel generieren
3. Schlüssel in `.env` eintragen

**EN**
1. Log in at app.accountable.eu
2. Settings → Integrations → API → Generate API key
3. Copy the key to `.env`

```bash
ACCOUNTABLE_API_KEY=your_api_key_here
ACCOUNTABLE_BASE_URL=https://api.accountable.eu
```

---

## What this integration does · Ce que fait cette intégration · Wat doet deze integratie · Was diese Integration tut

| Action | FR | EN |
|--------|----|----|
| Import expenses | Importer les dépenses → écriture PCMN automatique | Import expenses → automatic PCMN entry |
| Import invoices | Importer les factures → contrôle CA et TVA collectée | Import invoices → revenue and VAT control |
| VAT reconciliation | Export vers `accountant-be` → réconciliation TVA trimestrielle | Export to `accountant-be` → quarterly VAT reconciliation |
| Bank sync | Sync Swan (IBAN BE) → rapprochement bancaire automatique | Swan (IBAN BE) sync → automatic bank reconciliation |

---

## Usage · Gebruik · Verwendung

```bash
# FR: Importer toutes les données
# EN: Import all data
node integrations/accountable/fetch.js

# FR: Déclaration TVA trimestrielle
# EN: Quarterly VAT return
node integrations/accountable/fetch.js vat <quarter> <year>
# Example: node integrations/accountable/fetch.js vat 1 2025
```

---

## Output · Sortie · Uitvoer · Ausgabe

FR: Les données sont exportées vers `data/accountable-export.json`.
EN: Data is exported to `data/accountable-export.json`.

```json
{
  "invoices": [...],
  "expenses": [...],
  "transactions": [...],
  "vat": { "quarter": 1, "year": 2025, "due": 0 }
}
```

---

## Notes

**FR** — Les endpoints Accountable sont indicatifs. Récupérer la clé API dans app.accountable.eu → Paramètres → Intégrations avant utilisation.
**EN** — Accountable API endpoints are indicative. Retrieve your API key from app.accountable.eu → Settings → Integrations before use.
