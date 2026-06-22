# Intégration Accountable

Accountable (app.accountable.eu) — application de comptabilité pour indépendants belges.

## Setup

1. Se connecter sur app.accountable.eu
2. Paramètres → Intégrations → API → Générer une clé API
3. Copier la clé dans `.env` :
   ```
   ACCOUNTABLE_API_KEY=your_api_key_here
   ACCOUNTABLE_BASE_URL=https://api.accountable.eu
   ```

## Ce que cette intégration fait

- **Importer les dépenses** depuis Accountable → écriture PCMN automatique
- **Importer les revenus/factures** → contrôle CA et TVA collectée
- **Exporter vers comptable-be** → réconciliation TVA trimestrielle
- **Sync Swan (IBAN BE03)** → rapprochement bancaire automatique

## Utilisation

```bash
node integrations/accountable/fetch.js
```
