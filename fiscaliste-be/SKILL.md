---
name: fiscaliste-be
metadata:
  last_updated: 2026-06-22
  jurisdiction: Belgium
  source_fork: romainsimon/paperasse (MIT)
description: |
  Fiscaliste IA pour particuliers belges. IPP (tranches 25/40/45/50%), précompte
  mobilier, TOB, épargne-pension (EIP/CPTI/pilier 3), stock-options (Loi 26/3/1999),
  revenus fonciers, avantages de toute nature, revenus de remplacement.
---

## Langue · Taal · Sprache · Language

Ce skill répond dans la langue utilisée par l'utilisateur.
**FR** Français · **NL** Nederlands · **DE** Deutsch · **EN** English

⚠️ **Communauté germanophone** : droit fédéral belge + taux wallons pour additionnels régionaux. Tax-on-web disponible en allemand depuis 2022.

Tous les termes techniques → [Glossaire quadrilingue](../terminology/glossary.md)

---

# Fiscaliste IA — Particuliers Belges · Belastingadviseur IA · Steuerberater IA — Belgien

## Règle absolue

**Ne jamais donner de conseil sans profil fiscal validé.** Toujours demander : état civil, régime matrimonial, revenus par catégorie, charges déductibles, région de résidence (détermine le centième additionnel communal et certains avantages régionaux).

---

## IPP — Impôt des Personnes Physiques

Base légale : CIR 1992 (Code des Impôts sur les Revenus), art. 1-178.

### Tranches d'imposition 2025 (exercice d'imposition 2026)

| Tranche de revenu imposable | Taux |
|----------------------------|------|
| 0 — 15,820 EUR | 25% |
| 15,820 — 27,920 EUR | 40% |
| 27,920 — 48,320 EUR | 45% |
| > 48,320 EUR | 50% |

*Vérifier actualisation annuelle — tranches indexées chaque année.*

### Quotient conjugal

Si un des conjoints gagne moins de 30% des revenus professionnels communs : transfert de 30% des revenus de l'autre conjoint (max. 11,900 EUR — vérifier indexation).

### Déduction pour enfants à charge

| Nombre d'enfants | Déduction (montant forfaitaire) |
|------------------|---------------------------------|
| 1 | 1,690 EUR |
| 2 | 4,340 EUR |
| 3 | 9,730 EUR |
| 4 | 15,740 EUR |
| Par enfant supplémentaire | + 6,010 EUR |

*Montants 2025 — indexés annuellement. Vérifier via MyMinfin.*

### Additionnels communaux

S'ajoutent à l'IPP fédéral. Varient de 0% (Lasne, Koekelberg) à plus de 9% selon la commune. Toujours vérifier le taux communal exact.

---

## Catégories de revenus

| Catégorie | CIR | Exemples |
|-----------|-----|---------|
| Revenus professionnels | Art. 23-89 | Salaires, rémunérations dirigeants, bénéfices |
| Revenus immobiliers | Art. 7-15 | RC, loyers (sur net) |
| Revenus mobiliers | Art. 17-22 | Dividendes, intérêts, redevances |
| Revenus divers | Art. 90-103 | Plus-values spéculatives, prix et subsides |

---

## Revenus mobiliers — Précompte mobilier (PrM)

| Type de revenu | Taux PrM | Libératoire ? |
|---------------|---------|--------------|
| Dividendes | 30% | Oui (sauf option déclaration) |
| Intérêts | 30% | Oui |
| Dividendes VVPRbis (PME qualifiante) | 15% (si actions émises après 01/07/2013, 2ème div. après 2 ans, 3ème+) | Oui |
| Dividendes VVPR ter (apport en nature) | 20% ou 15% | Oui |
| Intérêts carnet d'épargne réglementé (tranche exonérée) | 0% sur 1er 1,020 EUR | — |
| Intérêts carnet au-delà | 15% | Oui |

**VVPRbis (Verlaagde Voorheffing / Précompte Réduit) :** Taux réduit de 15% sur dividendes d'actions nominatives émises après le 01/07/2013 contre apport en numéraire, si :
- PME art. 1:24 CSA
- Pas de distribution les 2 premières années (seuil différent selon timing)

---

## Taxe sur les Opérations de Bourse (TOB)

| Type d'opération | Taux | Plafond/transaction |
|-----------------|------|-------------------|
| Actions belges cotées, fonds de capitalisation | 0.35% | 1,600 EUR |
| Obligations, fonds de distribution | 0.12% | 1,300 EUR |
| Actions étrangères cotées, ETF | 0.35% | 1,600 EUR |
| Fonds monétaires | 0.12% | — |

---

## Épargne-pension

### Pilier 3 — Épargne-pension individuelle

| Versement annuel | Avantage fiscal |
|-----------------|----------------|
| Jusqu'à 1,020 EUR | 30% de réduction d'impôt |
| 1,020 EUR — 1,310 EUR | 25% de réduction d'impôt |

**Taxe anticipative :** 8% à 60 ans ou au 10ème anniversaire du contrat.

### EIP — Engagement Individuel de Pension

Contrat de pension pour indépendants et dirigeants de société.
- Prime déductible en charges professionnelles dans la société (DNA si non respecté)
- **Règle des 80%** : pension légale + pension complémentaire ≤ 80% de la dernière rémunération normale brute annuelle
- Avantage fiscal maximum si souscrit via société (pas à titre privé)

### CPTI — Convention de Pension pour Travailleurs Indépendants

Pour indépendants personnes physiques (pas via société).
- Déductible à 30% maximum des revenus professionnels nets
- Plafond annuel environ 3,564 EUR (vérifier indexation)

---

## Stock-options

Base légale : Loi du 26/03/1999 relative au plan belge d'action pour l'emploi.

**Avantage imposable = valeur des options à l'octroi** (pas à l'exercice) :
- 18% de la valeur de l'action sous-jacente (si options exercées dans les 5 ans)
- 9% si conditions particulières (sans droit de souscription dans les 3 ans)

**Imposition à l'octroi**, pas à l'exercice : avantage de toute nature intégré dans la rémunération et soumis au PrP et IPP.

---

## Revenus immobiliers

### Revenu cadastral (RC)

Base légale : CIR art. 7-15.

- **Habitation propre :** exonérée d'IPP depuis réforme 6ème réforme État (compétence régionale)
- **Biens loués à titre privé :** RC × 1.40 ajouté à la base IPP (pas le loyer réel si personne physique locataire)
- **Biens loués à usage professionnel ou à une société :** loyer réel - forfait charges (40% pour bâtiments, plafonné)

### Location meublée

- Revenus mobiliers (60% meublé) + revenus immobiliers (40% RC)
- Si gestion de plus de 3-4 biens : risque de requalification en activité professionnelle

---

## Avantages de toute nature (ATN)

Imposés dans le chef du bénéficiaire (via fiche 281.20 pour dirigeants).

| ATN | Évaluation |
|-----|-----------|
| Mise à disposition d'une voiture | Formule = valeur catalogue × 6/7 × coeff. CO2 × 4% (min.) — variable selon CO2/type moteur |
| Logement gratuit | Forfait légal selon RC du bien |
| Chauffage/électricité gratuit | Forfait 2,150 EUR / 1,020 EUR (vérifier indexation) |
| Prêt sans intérêts ou à taux réduit | Différence avec taux BNB référence |
| Repas à prix réduit | Différence si < 1.09 EUR/repas (seuil 2025 — indexé) |

---

## Déclaration IPP — Workflow

```
1. COLLECTE (jan-mars)
   - Fiches 281.10 / 281.20 / 281.50 de l'employeur / société
   - Attestations bancaires (intérêts, dividendes)
   - Attestations prêt hypothécaire
   - Reçus épargne-pension

2. DÉCLARATION (mai-juillet)
   - En ligne : MyMinfin → Tax-on-web
   - Délai papier : fin juin
   - Délai Tax-on-web : fin juillet (vérifier chaque année)
   - Mandataire (comptable) : délai prolongé

3. VÉRIFICATION
   - Avertissement-extrait de rôle (AER) : reçu en automne
   - Délai réclamation : 6 mois à compter de l'envoi de l'AER

4. PAIEMENT
   - Versements anticipés pour indépendants (VA1-VA4 : 10/04, 10/07, 10/10, 20/12)
   - Majoration si pas de VA (actuellement: taux de base BCE + 7%)
```
