---
name: self-employed-social-be
metadata:
  last_updated: 2026-06-22
  jurisdiction: Belgium
description: |
  Statut social des travailleurs indépendants belges. INASTI/RSVZ, cotisations sociales
  trimestrielles (provisoires + régularisation), droits sociaux (pension, maladie-invalidité,
  allocations familiales, maternité/paternité), catégories de statut, caisses d'assurances sociales.
---

## Langue · Taal · Sprache · Language
Ce skill répond dans la langue utilisée par l'utilisateur. **FR** · **NL** · **DE** · **EN**
Termes → [Glossaire quadrilingue](../terminology/glossary.md)

---

# Statut Social Indépendant — Belgique · Sociaal Statuut Zelfstandige · Selbstständiger Sozialstatus

## Base légale

- Loi du 27/07/1967 instituant le statut social des travailleurs indépendants
- AR du 19/12/1967 portant règlement général (cotisations)
- INASTI : Institut National d'Assurances Sociales pour Travailleurs Indépendants (Bruxelles)
- RSVZ : Rijksinstituut voor de Sociale Verzekeringen der Zelfstandigen

---

## Catégories de statut

| Catégorie | Conditions | Cotisations |
|-----------|-----------|------------|
| **Indépendant à titre principal** | Activité principale, pas de salarié à temps plein en parallèle | Taux pleins |
| **Indépendant à titre complémentaire** | Activité secondaire + statut salarié ou fonctionnaire à au moins mi-temps | Taux réduits jusqu'à un seuil |
| **Dirigeant d'entreprise** | Mandat rémunéré dans une société | Taux pleins si rémunération ≥ seuil |
| **Étudiant-indépendant** | < 25 ans, études + activité indépendante | Cotisation réduite (20,5% sur revenus > 3,344 EUR) |
| **Indépendant après pension** | Pensionné + activité | Taux réduits ou exonération selon conditions |
| **Conjoint aidant** | Aide le conjoint indépendant | Mini-statut (cotisations réduites) ou maxi-statut (droits complets) |

---

## Cotisations sociales INASTI

Base légale : AR 19/12/1967, art. 11-13. Révisées annuellement.

### Taux 2025 (exercice cotisation 2025, revenus 2023 de référence)

| Tranche de revenu | Taux |
|------------------|------|
| 0 — 72,810.02 EUR | **20.50%** |
| 72,810.02 — 107,300.69 EUR | **14.16%** |
| > 107,300.69 EUR | **0%** (plafond) |

**Cotisation minimale** (titre principal) : 889.99 EUR/trimestre (revenus faibles ou démarrage)
**Cotisation minimale** (titre complémentaire) : selon revenus — peut être 0 EUR si revenus < seuil

### Structure de calcul

```
Revenus nets professionnels (année N-3 = référence initiale)
  × taux applicable par tranche
= Cotisation annuelle
÷ 4
= Cotisation trimestrielle provisoire

Régularisation : revenus réels année N connus → recalcul + rappel ou remboursement
```

### Délais de paiement trimestriels

| Trimestre | Date limite |
|-----------|------------|
| Q1 (jan-mar) | 31 mars |
| Q2 (avr-jun) | 30 juin |
| Q3 (jul-sep) | 30 septembre |
| Q4 (oct-déc) | 31 décembre |

⚠️ Majorations si paiement tardif : 3% du montant dû par trimestre de retard.

### Demande de cotisations provisoires réduites

Si revenus estimés < revenus de référence : demander réduction via caisse d'assurances sociales.
**Risque** : si revenus réels > estimation → rappel + intérêt de retard.

---

## Caisses d'assurances sociales (CAS)

Affiliation obligatoire à une CAS agréée dans les **90 jours** du début d'activité.

| Caisse | Public cible |
|--------|-------------|
| Acerta | Généraliste |
| Liantis | Généraliste, Flandre-oriented |
| Partena Professional | Généraliste |
| UCM | PME wallonnes et bruxelloises |
| Xerius | Flandre/Bruxelles |
| Securex | Généraliste |
| GROUP S | Généraliste |
| CGSLB / ACV / CSC | Syndicales |

Changement de caisse : possible au 1er janvier, préavis 3 mois.

---

## Droits sociaux

### Pension indépendant

- **Pension légale** : calcul sur revenus cotisés × coefficient (inférieur à la pension salarié)
- **Pension minimum** : ~1,426 EUR/mois (isolé) / ~1,782 EUR/mois (ménage) — vérifier indexation
- **EIP (Engagement Individuel de Pension)** : via société — règle des 80%
- **CPTI (Convention Pension Travailleur Indépendant)** : via caisse, déductible à 30% revenus nets
- **PLCI (Pension Libre Complémentaire Indépendant)** : jusqu'à 8.17% des revenus nets (plafond ~3,700 EUR)

### Assurance maladie-invalidité

- **Indemnités maladie (incapacité primaire)** : à partir du 1er mois (délai de carence supprimé depuis 2018)
- **Taux indemnité** : ~57-60% du revenu de référence plafonné
- **Incapacité > 1 an** : invalidité — INAMI
- Affiliation à une mutualité obligatoire

### Maternité / Paternité / Adoption

- **Congé de maternité** : 12 semaines (3 obligatoires, 9 facultatives)
- **Allocation de maternité** : ~3,820 EUR (forfait) + indemnité journalière pendant interruption
- **Congé de paternité/co-parentalité** : 10 jours (5 obligatoires)

### Allocations familiales

- Via caisse d'allocations familiales (FAMIFED remplacé par caisses régionales depuis 2019)
- Montants selon région : Flandre (Opgroeien), Wallonie (FAMIWAL), Bruxelles (Iriscare)
- Indépendants : mêmes droits que salariés depuis la 6ème réforme de l'État

---

## Début d'activité — Checklist

```
□ Inscription à la BCE (Banque Carrefour des Entreprises) — via guichet d'entreprises agréé
□ Activation numéro TVA (si assujetti) — déclaration MyMinfin
□ Affiliation caisse d'assurances sociales (CAS) — dans les 90 jours
□ Affiliation mutualité (maladie-invalidité)
□ Choix caisse allocations familiales (si enfants)
□ Compte bancaire professionnel séparé (obligatoire pour SRL — recommandé pour toutes formes)
□ Assurance RC professionnelle (obligatoire selon secteur)
□ Déclaration DIMONA (si employeur)
```

---

## Cumul emploi-indépendant

**Salarié + indépendant complémentaire :**
- Cotisations réduites si revenus complémentaires < seuil (~1,800 EUR net/an — vérifier)
- Au-delà : cotisations normales sur le dépassement
- Droits sociaux via le statut principal (salarié)
- Pas de double pension : seule la pension la plus élevée est payée (théorème de mixité)

**Fonctionnaire + indépendant :**
- Autorisation préalable de l'employeur public souvent requise
- Restrictions selon statut et niveau
