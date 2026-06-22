# Paperasse BE

**Skills pour agents IA spécialisés dans la bureaucratie belge.**

Fork belge de [paperasse](https://github.com/romainsimon/paperasse) par Romain Simon.

Adapté pour la **Belgique** : droit des sociétés (CSA 2019), comptabilité (PCMN), fiscalité (ISOC/IPP/TVA SPF Finances), droit notarial (droits d'enregistrement régionaux), copropriété (Code Civil livre 3), révision d'entreprise (IRE).

---

## Les 6 skills

| Skill | Rôle | Ce qu'il fait |
|-------|------|---------------|
| **`comptable-be`** | Expert-Comptable | Écritures PCMN, TVA (21%/12%/6%), ISOC/IPP, clôture annuelle, comptes annuels CNC, facturation (mentions obligatoires BE, PEPPOL BIS), formes CSA 2019 (SRL, SA, SC) |
| **`notaire-be`** | Notaire | Droits d'enregistrement régionaux (Flandre/Wallonie/BXL), émoluments RFBN 2020, succession/donation, cohabitation légale, contrats de mariage, SRL holding, plus-value immobilière |
| **`fiscaliste-be`** | Fiscaliste Particuliers | IPP (tranches 25/40/45/50%), précompte mobilier 30%, TOB, épargne-pension (EIP/CPTI/pilier 3), stock-options (Loi 26/3/1999), revenus fonciers, avantages de toute nature |
| **`syndic-be`** | Syndic de Copropriété | Code Civil art. 3.82-3.111, PCCN, AG (quorums BE), appels de fonds, IPI, impayés, travaux |
| **`reviseur-be`** | Réviseur d'Entreprises | Audit IRE/ISA, seuils légaux BE, opinions motivées, normes IRE |
| **`controleur-spf-be`** | Contrôle SPF Finances | Simulation contrôle ISI/BBI, CIR/WIB, TVA, chefs de redressement belges |

---

## Installation

```
Installe tous les skills du repo github https://github.com/IT-Transform/paperasse-be
Lance ensuite le setup pour la gestion de ma paperasse belge
```

---

## Stack technique

- **Comptabilité** : PCMN (AR 12/09/1983 modifié), normes CNC
- **Fiscalité sociétés** : CIR/WIB, SPF Finances
- **Droit des sociétés** : CSA 2019 (Code des Sociétés et des Associations)
- **Notariat** : RFBN 2020, droits régionaux
- **Copropriété** : Code Civil Livre 3, Titre 2 (ex-loi 1994)
- **Révision** : Normes IRE + ISA adaptées
- **Intégrations** : Qonto (BE), Stripe, Isabel6 (à venir)

---

## Différences clés France → Belgique

| Concept FR | Équivalent BE |
|------------|--------------|
| PCG | PCMN |
| IS 25% | ISOC 25% (20% PME ≤ 100k) |
| IR barème | IPP tranches 25/40/45/50% |
| IFI | N/A (inexistant en Belgique) |
| PFU 30% | Précompte mobilier 30% |
| PEA | Compte-titres + TOB |
| LMNP | Location meublée (PrN) |
| RSU/BSPCE | Stock-options Loi 26/3/1999 |
| PER | EIP / CPTI / pilier 3 |
| CAC/NEP | Réviseur d'entreprises / IRE |
| DGFIP | SPF Finances |
| CGI | CIR/WIB |
| SARL/SAS/SA | SRL/SA/SC (CSA 2019) |
| DMTO (par dept) | Droits d'enreg. régionaux |
| Loi 1965 copropriété | Code Civil art. 3.82-3.111 |
| PACS | Cohabitation légale |
| FEC | Pas d'équivalent direct |
| Factur-X | PEPPOL BIS (en déploiement) |
| Liasse 2033/2065 | Déclaration ISOC (fiches SPF) |

---

## Licence

MIT — Fork de [romainsimon/paperasse](https://github.com/romainsimon/paperasse) (MIT)

Contributions bienvenues. Les données légales/fiscales doivent être vérifiées avant usage en production.
