---
name: controleur-spf-be
metadata:
  last_updated: 2026-06-22
  jurisdiction: Belgium
  source_fork: romainsimon/paperasse (MIT)
description: |
  Simulation de contrôle fiscal belge. SPF Finances, ISI (Inspection Spéciale des Impôts),
  BBI (Brigade des Brigades), CIR/WIB, contrôle TVA, chefs de redressement belges,
  prescription, abus fiscal, commission des rulings.
---

## Langue · Taal · Sprache · Language

Ce skill répond dans la langue utilisée par l'utilisateur.
**FR** Français · **NL** Nederlands · **DE** Deutsch · **EN** English

Tous les termes techniques → [Glossaire quadrilingue](../terminology/glossary.md)

---

# Contrôleur SPF Finances IA · Belastingcontroleur FOD Financiën IA · SPF-Steuerprüfer IA

Simulation de contrôle fiscal belge. Identifier les chefs de redressement potentiels avec base légale CIR/WIB et montants estimés.

## Structures de contrôle SPF Finances

| Structure | Cible | Spécialité |
|-----------|-------|-----------|
| **Administration Générale Fiscalité (AGFisc)** | PME et particuliers | Contrôles courants ISOC/IPP/TVA |
| **ISI (Inspection Spéciale des Impôts)** | Grandes sociétés, fraude complexe | Prix de transfert, constructions abusives |
| **BBI (Bijzondere Belastinginspectie)** | Fraude grave et organisée | Carrousels TVA, fraude internationale |
| **AAII (Admin. Aanvullende Impôts)** | Revenus non déclarés | Signes extérieurs de richesse |

---

## Délais de contrôle (prescription)

| Type | Délai | Base légale |
|------|-------|------------|
| Contrôle ordinaire | **3 ans** à partir du 01/01 de l'exercice | Art. 354 CIR |
| Fraude | **7 ans** à partir du 01/01 de l'exercice (si indices de fraude) | Art. 354 al. 2 CIR |
| Sans déclaration | **7 ans** | Art. 354 al. 2 CIR |
| TVA ordinaire | **3 ans** à partir du fait générateur | Art. 81bis CTVA |
| TVA fraude | **7 ans** | Art. 81bis §2 CTVA |
| Revenus étrangers non déclarés | **10 ans** | Art. 358 §2 CIR |

---

## Chefs de redressement courants

### ISOC

| Chef | Base légale | Sanction courante |
|------|------------|------------------|
| DNA (dépenses non admises) non corrigées | Art. 53 CIR | Impôt + intérêts 4%/an |
| Avantages anormaux ou bénévoles (groupe) | Art. 26 CIR | + secret commission tax 103% |
| Secret commission (ATN non déclarés) | Art. 219 CIR | 103% sur montant |
| Requalification revenus mobiliers | Art. 18 CIR | PrM 30% + pénalités |
| Opérations à valeur anormale (transfer pricing) | Art. 185 §2 CIR | Ajustement base imposable |

### TVA

| Chef | Base légale | Sanction |
|------|------------|---------|
| Déduction TVA non justifiée | Art. 45 CTVA | Rappel TVA + amende 10-200% |
| Ventes non facturées | Art. 39bis CTVA | Rappel TVA + amende 100% |
| Taux erroné appliqué | Art. 1 AR 20 | Rappel différentiel |
| Déclaration tardive | Art. 70bis CTVA | Amende 500 EUR/mois retard |

### IPP / Dirigeants

| Chef | Base légale | Sanction |
|------|------------|---------|
| ATN voiture sous-évalué | Art. 36 CIR + AR | Rappel IPP + intérêts |
| Dépenses privées en charges professionnelles | Art. 49 CIR | Rappel IPP + pénalité 10-50% |
| Revenus étrangers non déclarés | Art. 228 CIR | 7 ans + amende |
| Revenus mobiliers non déclarés | Art. 17 CIR | PrM rappel + pénalité |

---

## Abus fiscal (art. 344 §1 CIR)

L'administration peut requalifier une opération dont :
1. Le contribuable réalise un **avantage fiscal** contraire à l'objectif de la loi, ET
2. L'opération n'a pas d'**autre justification économique substantielle** que l'avantage fiscal

**Charge de la preuve :** renversée — le contribuable doit prouver que l'opération se justifie autrement que fiscalement.

**Exemples courants :**
- Vente-donation (donation déguisée)
- Construction circulaire de capital
- Split sale (achat prix sous-évalué + loyer rente)
- Scission partielle non justifiée

---

## Commission des Décisions Anticipées (Ruling)

**Possibilité de sécuriser une opération a priori** via un accord préalable avec le SPF Finances (ruling — Loi 24/12/2002).

**Délai :** 3 mois (réponse) — urgent : 5 semaines (coût supérieur).
**Durée de validité :** 5 ans (sauf modification législative ou changement de circonstances).

**Utile pour :**
- Valorisation intragroupe (prix de transfert)
- Restructuration (fusion, scission, apport de branche)
- Application du régime VVPRbis
- Qualification fiscale d'une nouvelle structure
- Plan de pension dirigeant (règle des 80%)

---

## Procédure de contrôle — Droits du contribuable

```
1. Avis de contrôle (préavis 1 mois minimum sauf fraude)
2. Demande d'informations (art. 316 CIR — délai réponse: 1 mois, prorogeable)
3. Réunion de contrôle / examen des pièces
4. Proposition de rectification (art. 346 CIR — délai réponse: 1 mois)
5. Décision motivée (rectification ou abandon)
6. Voies de recours :
   - Réclamation (6 mois) → Directeur régional
   - Tribunal de Première Instance (juridiction fiscale depuis 2020)
   - Cour d'Appel
   - Cour de Cassation (questions de droit)
```

**Médiateur fiscal :** recours amiable possible avant/pendant le contentieux.
