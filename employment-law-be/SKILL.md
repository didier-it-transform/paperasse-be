---
name: employment-law-be
metadata:
  last_updated: 2026-06-22
  jurisdiction: Belgium
description: |
  Droit du travail belge. ONSS/RSZ (cotisations patronales/salariales), Dimona, DmfA,
  contrats de travail, barèmes CP, congés légaux belges, chômage temporaire, crédit-temps,
  rupture du contrat (préavis Loi 26/12/2013), frais propres à l'employeur.
---

## Langue · Taal · Sprache · Language
Ce skill répond dans la langue utilisée par l'utilisateur. **FR** · **NL** · **DE** · **EN**
Termes → [Glossaire quadrilingue](../terminology/glossary.md)

---

# Droit du Travail — Belgique · Arbeidsrecht · Arbeitsrecht

## Base légale principale

- Loi du 03/07/1978 relative aux contrats de travail
- Loi du 05/12/1968 sur les conventions collectives de travail (CCT) et les commissions paritaires
- Loi du 26/12/2013 harmonisant les régimes de préavis (« Wet Eenheidsstatuut »)
- AR du 25/10/2013 — Dimona
- Loi du 27/06/1969 — ONSS

---

## ONSS — Cotisations sociales

### Taux 2025

| Cotisation | Patronale | Salariale |
|-----------|----------|----------|
| Taux global approx. | **~27%** | **13.07%** |
| Sécurité sociale de base | 24.92% | 13.07% |
| Cotisation spéciale SSI | 0.01% | — |
| Vacances annuelles (ouvriers) | ~10.27% | — |
| Accidents du travail | ~1% (variable) | — |

**Plafond salarial ONSS 2025 :** ~4,993 EUR/mois brut (vérifier indexation)

### Réductions ONSS courantes

| Réduction | Cible |
|-----------|-------|
| Réduction groupe-cible jeunes | < 25 ans, premier emploi |
| Réduction groupe-cible âgés | ≥ 55 ans |
| Réduction premier travailleur | Première embauche : exonération totale permanente |
| Win-Win (Flandre) / Airbag (Wallonie) | PME en difficulté |
| Activation allocations chômage | Chômeur longue durée |

---

## Dimona

**Déclaration Immédiate d'Emploi** — obligatoire avant le premier jour de travail.

```
Canaux : portail ONSS (www.socialsecurity.be) ou via mandataire social
Types : IN (entrée), OUT (sortie), UPDATE (modification)
Délai IN : avant le début du premier jour de travail
Sanction : amende administrative 150-2,500 EUR par travailleur
```

Types de Dimona :
- `STU` : étudiant (max 475h/an)
- `FLX` : flexi-job
- `EXT` : extra (horeca)
- `O/W` : ouvrier / werknemer
- `A` : apprenti

---

## DmfA — Déclaration multifonctionnelle

Déclaration trimestrielle ONSS (données salariales + sociales de tous les travailleurs).

```
Q1 : dépôt avant le dernier jour de Q2 (30 juin)
Q2 : dépôt avant le dernier jour de Q3 (30 sept)
Q3 : dépôt avant le dernier jour de Q4 (31 déc)
Q4 : dépôt avant le 31 mars
```

Via : www.socialsecurity.be ou mandataire social (secrétariat social).

---

## Types de contrats

| Type | Durée | Conditions |
|------|-------|-----------|
| CDI (*COD* contrat à durée indéterminée) | Indéterminée | Standard |
| CDD (*contract bepaalde duur*) | Déterminée | Max 2 ans, 4 renouvellements → CDI automatique |
| Contrat pour un travail nettement défini | Durée tâche | Fin à l'achèvement de la tâche |
| Contrat de remplacement | Durée du remplacement | Peut être renouvelé sans limite |
| Contrat d'étudiant | Max 475h/an calendrier | Cotisations ONSS réduites (2.71% patronale + 5.42% salariale) |
| Flexi-job | Variable | Secteurs spécifiques, complément, cotisations réduites |
| Intérim | Défini | Via agence interim agréée, 3 motifs légaux |

**Forme écrite obligatoire :** CDI : pas obligatoire mais recommandé. CDD : **obligatoire avant le début**, sinon présumé CDI.

---

## Commissions Paritaires (CP/SCP)

La Belgique compte environ **300 commissions paritaires** sectorielles définissant :
- Salaires minima sectoriels (barèmes)
- Primes sectorielles (fin d'année, ancienneté, nuit/week-end)
- Conditions de travail spécifiques

### CP importantes IT/services

| CP | Secteur |
|----|---------|
| CP 200 | Employés industrie (généraliste) |
| CP 218 | Employés assurances |
| CP 220 | Employés entreprises de travaux intérimaires |
| CP 226 | Agences de presse |
| PC 337 | Secteur des services marchands aux entreprises (**IT, consultance**) |

**Pour IT-Transform/SaaS :** CP 337 (services aux entreprises) — vérifier CCT sectorielle.

---

## Préavis — Loi du 26 décembre 2013

Depuis le 01/01/2014 : **régime unifié ouvriers/employés** basé sur l'ancienneté.

### Délais de préavis (donné par l'employeur — licenciement)

| Ancienneté | Délai préavis |
|-----------|--------------|
| 0 — 3 mois | 2 semaines |
| 3 — 6 mois | 4 semaines |
| 6 — 9 mois | 6 semaines |
| 9 — 12 mois | 7 semaines |
| 12 — 15 mois | 8 semaines |
| 15 — 18 mois | 9 semaines |
| 18 — 21 mois | 10 semaines |
| 21 — 24 mois | 11 semaines |
| 2 — 3 ans | 12 semaines |
| 3 — 4 ans | 13 semaines |
| Par année supplémentaire (jusqu'à 5 ans) | +3 semaines |
| Par année supplémentaire (au-delà 5 ans) | +3 semaines (max selon ancienneté) |

**Préavis donné par le travailleur (démission) :** environ moitié du préavis employeur, plafonné à 13 semaines (> 8 ans d'ancienneté).

### Motif grave

Licenciement sans préavis ni indemnité possible si **faute grave** rendant toute collaboration immédiatement impossible.
Délai : 3 jours ouvrables pour notifier après prise de connaissance.

### Indemnité de rupture

```
= Rémunération brute × (délai préavis / nombre de semaines dans la période de référence)
```

---

## Congés

### Congé annuel (employés)

- **20 jours légaux** (sur base temps plein)
- Pécule de vacances : 15.38% du salaire brut annuel (simple) + pécule de vacances simple (92% 1 semaine) + double pécule de vacances (~92% rémunération mensuelle brute)
- Pris via employeur ou caisse de vacances (ouvriers)

### Jours fériés légaux (10 fixes + 1 flexible)

```
1 janvier   — Nouvel An
Lundi de Pâques
1 mai       — Fête du Travail
Ascension
Lundi de Pentecôte
21 juillet  — Fête Nationale
15 août     — Assomption
1 novembre  — Toussaint
11 novembre — Armistice
25 décembre — Noël
+ 1 jour de remplacement par CP
```

Communauté germanophone : Vendredi Saint et 26 décembre (Saint-Étienne) additionnels.

### Congé de maternité

- 15 semaines (17 semaines si grossesse multiple)
- 1 semaine obligatoire avant terme + 9 semaines obligatoires après
- INAMI : ~77% du salaire plafonné

### Congé de paternité / co-parentalité

- **20 jours** (depuis 2023, via augmentation progressive)
- Pris dans les 4 mois suivant la naissance
- INAMI : 82% du salaire brut plafonné les 3 premiers jours (employeur), INAMI ensuite

### Crédit-temps

Via CCT n°103 (CNT) — réduction du temps de travail.

| Type | Durée max | Allocation ONEM |
|------|-----------|----------------|
| Sans motif (1/5 temps) | 5 ans carrière | Oui |
| Soins enfant < 8 ans | 51 mois | Allocation majorée |
| Soins palliatifs | 6 mois | Allocation majorée |
| Formation reconnue | 36 mois | Oui |

---

## Frais propres à l'employeur

Non soumis aux cotisations ONSS ni à l'IPP si conditions respectées.

| Avantage | Montant max exonéré | Condition |
|---------|-------------------|---------|
| **Chèques-repas** | 8 EUR/jour travaillé (dont 6.91 EUR employeur + 1.09 EUR travailleur) | Électroniques uniquement, CCT ou contrat individuel |
| **Eco-chèques** | 250 EUR/an | Dépenses écologiques listées par CCT n°98 |
| **Chèques-sport/culture** | 100 EUR/an | CCT ou accord sectoriel |
| **Intervention transport domicile-travail** | Variable (transports publics : 100% exonéré) | Selon CP et distance |
| **GSM/smartphone** | Usage professionnel justifié | Politique BYOD possible |
| **Voiture société (ATN)** | Valeur catalogue × CO2 coeff × 6/7 × 4% | Fiche 281.20 obligatoire |
| **PC/tablette à domicile** | 1 appareil, usage mixte | ATN si usage privé > pro |

### Voiture de société — Déductibilité depuis 2026

Depuis l'accord Vivaldi et la loi fiscale verte :
- **Véhicules électriques achetés avant 2026 :** 100% déductibles (phase-out)
- **Hybrides :** déductibilité réduite progressivement
- **Essence/diesel** : déductibilité limitée (CO2 dépendant, en baisse)
- **2026+ :** seuls les véhicules zéro émission entièrement déductibles (pour nouvelles voitures)
