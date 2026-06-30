# Integrations · Intégrations · Integraties · Integrationen

**FR** · Connecteurs pour récupérer automatiquement transactions bancaires et opérations de paiement.
**NL** · Connectoren voor automatisch ophalen van banktransacties en betalingsverrichtingen.
**DE** · Konnektoren zum automatischen Abrufen von Banktransaktionen und Zahlungsvorgängen.
**EN** · Connectors for automatic retrieval of bank transactions and payment operations.

---

## FR — Connecteurs disponibles · NL — Beschikbare connectoren · DE — Verfügbare Konnektoren · EN — Available connectors

| Connector | Description | Env vars |
|-----------|-------------|----------|
| [Qonto](qonto/) | FR: Transactions bancaires via API Qonto · EN: Bank transactions via Qonto API | `QONTO_ID`, `QONTO_API_SECRET` |
| [Stripe](stripe/) | FR: Charges, payouts, fees via API Stripe · EN: Charges, payouts, fees via Stripe API | Per account (configurable) |
| [Accountable](accountable/) | FR: Comptabilité freelance BE · EN: Belgian freelance accounting | `ACCOUNTABLE_API_KEY` |

---

## Configuration

### Qonto

**FR** — Dans votre dashboard Qonto : **Settings > Integrations > API**
**NL** — In uw Qonto-dashboard: **Settings > Integrations > API**
**DE** — In Ihrem Qonto-Dashboard: **Settings > Integrations > API**
**EN** — In your Qonto dashboard: **Settings > Integrations > API**

```bash
export QONTO_ID="your-organisation-slug"
export QONTO_API_SECRET="your-secret-key"
```

`company.json`:
```json
"qonto": {
  "enabled": true
}
```

### Stripe

#### FR: Compte unique · NL: Enkelvoudige rekening · DE: Einzelkonto · EN: Single account

```bash
export STRIPE_SECRET="sk_live_..."
```

`company.json`:
```json
"stripe_accounts": [
  { "id": "main", "name": "My Product", "env_key": "STRIPE_SECRET" }
]
```

#### FR: Stripe Connect · EN: Stripe Connect (platform with sub-accounts)

```json
"stripe_accounts": [
  { "id": "client-a", "name": "Client A", "env_key": "STRIPE_PLATFORM_SECRET", "stripe_account_id": "acct_xxx" },
  { "id": "client-b", "name": "Client B", "env_key": "STRIPE_PLATFORM_SECRET", "stripe_account_id": "acct_yyy" }
]
```

---

## Usage · Gebruik · Verwendung

```bash
# Qonto — all transactions / toutes les transactions
npm run fetch:qonto

# Qonto — date filter / filtre par date
node integrations/qonto/fetch.js --start 2025-01-01 --end 2025-12-31

# Stripe — all accounts / tous les comptes
npm run fetch:stripe

# Stripe — filter by date and account
node integrations/stripe/fetch.js --start 2025-01-01 --end 2025-12-31 --account main

# Accountable
node integrations/accountable/fetch.js

# All / Tout / Alles
npm run fetch
```

---

## Output format · Format de sortie · Uitvoerformaat · Ausgabeformat

FR: Les transactions sont enregistrées dans `data/transactions/` au format JSON.
EN: Transactions are saved to `data/transactions/` in JSON format.

```json
{
  "id": "txn_xxx",
  "source": "qonto",
  "date": "2025-03-15T10:30:00Z",
  "amount": -45.99,
  "currency": "EUR",
  "label": "Amazon Web Services",
  "our_category": null,
  "raw": {}
}
```

FR: Le champ `our_category` est rempli par le skill `accountant-be` lors de la catégorisation (PCMN).
EN: The `our_category` field is populated by the `accountant-be` skill during categorisation (PCMN mapping).

---

## Security · Sécurité · Beveiliging · Sicherheit

**FR** — Les clés API ne sont jamais stockées dans le repo. Ne commitez jamais de fichier `.env`.
**NL** — API-sleutels worden nooit opgeslagen in de repo. Commit nooit een `.env`-bestand.
**DE** — API-Schlüssel werden niemals im Repo gespeichert. Committen Sie niemals eine `.env`-Datei.
**EN** — API keys are never stored in the repo. Never commit a `.env` file containing secrets.
