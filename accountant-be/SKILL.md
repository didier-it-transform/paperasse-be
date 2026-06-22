---
name: accountant-be
metadata:
  last_updated: 2026-06-22
  jurisdiction: Belgium
  source_fork: romainsimon/paperasse (MIT)
includes:
  - data/**
  - scripts/**
  - integrations/**
  - company.example.json
description: |
  Comptabilité, fiscalité et facturation pour entreprises belges. Gère écritures PCMN,
  déclarations TVA (SPF Finances), ISOC/IPP, clôture annuelle, comptes annuels CNC,
  facturation (mentions obligatoires BE, PEPPOL BIS). Formes CSA 2019 : SRL, SA, SC, SNC.
  Utiliser dès qu'une question porte sur comptabilité belge, TVA, ISOC, IPP, bilan, compte
  de résultat, amortissement, clôture, facture, devis, PCMN, SPF Finances.
---

## Langue · Taal · Sprache · Language

Ce skill répond dans la langue utilisée par l'utilisateur.
**FR** Français (défaut) · **NL** Nederlands · **DE** Deutsch · **EN** English

Tous les termes techniques → [Glossaire quadrilingue](../terminology/glossary.md)

---

# Expert-Comptable IA — Belgique · Boekhouder IA — België · Buchhalter IA — Belgien

Co-pilote comptable, fiscal et facturation pour entreprises belges. Compliance-first. Droit belge uniquement.

## Prérequis : company.json

**À chaque début de conversation**, vérifier si `company.json` existe à la racine du projet :

- [ ] `company.json` existe → le lire, passer au workflow
- [ ] Absent → lancer le **setup guidé** (voir [references/setup.md](references/setup.md))

**Ne jamais donner de conseil sans contexte entreprise validé.**

## Fraîcheur des données

Vérifier `metadata.last_updated` dans le frontmatter. Si > 6 mois : signaler que certains taux/délais peuvent avoir évolué (SPF Finances, CNC, BCE).

---

## Plan Comptable Minimum Normalisé (PCMN)

Base légale : AR 12/09/1983 (modifié), Loi 17/07/1975 relative à la comptabilité des entreprises.

### Classes PCMN

| Classe | Libellé |
|--------|---------|
| 1 | Fonds propres, provisions et dettes à long terme |
| 2 | Frais d'établissement, actifs immobilisés et créances à plus d'un an |
| 3 | Stocks et commandes en cours d'exécution |
| 4 | Créances et dettes à un an au plus |
| 5 | Placements de trésorerie et valeurs disponibles |
| 6 | Charges |
| 7 | Produits |

### Comptes TVA — PCMN standard

```
411  TVA à récupérer (déductible)
451  TVA à payer (collectée)
4111 TVA sur achats — régularisations
4511 TVA sur ventes — régularisations
```

### Comptes fréquents

```
100  Capital souscrit
109  Capital non appelé (-)
130  Réserves indisponibles (légale : 5% des bénéfices, min. 1/10 du capital)
160  Dettes financières à long terme
200  Frais d'établissement
210  Immobilisations incorporelles
211  Concessions, brevets, licences
230  Immobilisations corporelles
400  Clients
440  Fournisseurs
451  TVA à payer
453  Précompte professionnel à remettre
456  Rémunérations dues
600  Achats marchandises
700  Ventes et prestations
756  Subsidies en capital
780  Reprises sur amortissements
```

---

## TVA — Belgique

Base légale : Code TVA belge (CTVA), AR 29/12/1992.
Gestionnaire : SPF Finances (MyMinfin.be).

### Taux applicables

| Taux | Application |
|------|------------|
| **21%** | Taux normal — tous biens/services sauf exceptions |
| **12%** | Produits agricoles, phyto, combustibles minéraux, restauration (aliments — depuis 2010) |
| **6%** | Alimentation humaine, médicaments non remboursés, livres, logements sociaux, travaux immobiliers sur habitations > 10 ans, transport de personnes |
| **0%** | Journaux quotidiens, recyclage et récupération |

### Régimes déclaratifs

| Régime | Conditions | Fréquence |
|--------|-----------|-----------|
| Mensuel | CA annuel > 2,5M EUR ou choix volontaire | Mensuelle — dépôt avant le 20 du mois suivant |
| Trimestriel | CA annuel ≤ 2,5M EUR (sauf dérogation) | Trimestrielle — dépôt avant le 20 du mois suivant le trimestre |
| Régime forfaitaire | Petits assujettis secteurs spécifiques | Trimestrielle |
| Franchise TVA | CA ≤ 25,000 EUR (Loi-programme 27/12/2021, montant révisé) | Pas de déclaration — mention "Régime de franchise de TVA" sur factures |

### Obligations déclaratives TVA

1. **Déclaration périodique** (mensuelle ou trimestrielle) via MyMinfin
2. **Listing annuel clients** : avant le 31 mars, pour chaque client BE assujetti avec CA > 250 EUR
3. **Listing intracommunautaire** (relevé des opérations intra-UE) : mensuel ou trimestriel selon volume
4. **Acomptes TVA** : uniquement pour déposants trimestriels — acompte de décembre = 1/3 du T3 ou estimation

### Opérations spécifiques

**Autoliquidation (report de perception) :**
- Acquisitions intracommunautaires (art. 25 CTVA)
- Services intra-UE B2B (art. 51 §2 CTVA)
- Travaux immobiliers par entrepreneur étranger
- Vente d'immeubles neufs entre assujettis (option)

**Mention sur facture :** "Autoliquidation — art. XX CTVA" — TVA = 0 sur la facture, déclarée par l'acheteur.

---

## Impôt des Sociétés (ISOC)

Base légale : CIR 1992 (Code des Impôts sur les Revenus), art. 179-219bis.

### Taux

| Régime | Taux | Conditions |
|--------|------|-----------|
| Taux normal | **25%** | Toutes sociétés |
| Taux réduit PME | **20%** | Sur les premiers 100,000 EUR de bénéfice imposable — conditions PME art. 215 CIR |

**Conditions taux réduit PME (art. 215 CIR) :**
- Petite société (art. 1:24 CSA) : 2 des 3 critères : ≤ 50 ETP, ≤ 9M EUR CA, ≤ 4.5M EUR bilan
- Rémunération minimale dirigeant : ≥ 45,000 EUR ou = bénéfice imposable si < 45,000 EUR
- Pas de participation dans une société-mère (holding pure)
- Actions nominatives uniquement

### Base imposable ISOC

```
Bénéfice comptable
+ Dépenses non admises (DNA)
+ Excédent des avantages anormaux ou bénévoles
- Revenus définitivement taxés (RDT) — dividendes qualifiants (95% exonérés si >10% ou >2.5M EUR)
- Déduction pour investissement
- Pertes fiscales antérieures (sans limite temporelle — mais limitation à 70% au-delà de 1M EUR)
- Innovation Income Deduction (IID) — 85% exonération revenus brevets qualifiants
= Revenu imposable
```

### Dépenses non admises (DNA) courantes

```
50% frais de voiture (selon émissions CO2/motorisation)
50% frais de restaurant
100% amendes et pénalités
100% impôts (sauf précomptes remboursables)
100% avantages de toute nature non déclarés (+ 309% secret commission tax)
100% frais vestimentaires (sauf EPI, vêtements de travail)
```

### Calendrier ISOC

| Obligation | Délai |
|-----------|-------|
| Dépôt déclaration ISOC | 7ème mois après clôture exercice (min. 6 mois après clôture) |
| Versements anticipés (VA) | VA1: 10 avril / VA2: 10 juillet / VA3: 10 octobre / VA4: 20 décembre |
| Majoration sans VA | Actuellement taux de base BCE + 7% (variable) |
| Paiement solde ISOC | 2 mois après envoi avis de paiement |

---

## Formes de sociétés — CSA 2019

Base légale : Code des Sociétés et des Associations (CSA), loi du 23/03/2019.

| Forme | Description | Capital minimum | Responsabilité |
|-------|-------------|----------------|----------------|
| **SRL** | Société à Responsabilité Limitée | Aucun (plan financier requis) | Limitée à l'apport |
| **SA** | Société Anonyme | 61,500 EUR (min. 1/4 libéré) | Limitée à l'apport |
| **SC** | Société Coopérative | Aucun | Variable selon statuts |
| **SNC** | Société en Nom Collectif | Aucun | Illimitée et solidaire |
| **SCS** | Société en Commandite Simple | Aucun | Mixte (commandité/commanditaire) |
| **ASBL** | Association Sans But Lucratif | Aucun | Limitée |
| **AISBL** | Association Internationale SBL | Aucun | Limitée |

**Note SRL :** Depuis le CSA 2019, la SPRL est devenue SRL. Capital minimum supprimé mais plan financier (art. 5:4 CSA) et test d'actif net + test de liquidité obligatoires avant toute distribution.

---

## Comptes annuels — CNC

Base légale : AR 30/01/2001 portant exécution du Code des sociétés (droit commun des comptes annuels).
Dépôt : Banque Nationale de Belgique (BNB) — application e-deposit ou XBRL.

### Modèles

| Modèle | Conditions | Délai dépôt BNB |
|--------|-----------|----------------|
| **Micro** | 2 des 3 : ≤ 10 ETP, ≤ 700k EUR CA, ≤ 350k EUR bilan | 7 mois après clôture |
| **Abrégé** | 2 des 3 : ≤ 50 ETP, ≤ 9M EUR CA, ≤ 4.5M EUR bilan | 7 mois après clôture |
| **Complet** | Sociétés dépassant les seuils abrégé | 7 mois après clôture |

**Réserve légale :** 5% du bénéfice net annuel, jusqu'à 1/10 du capital social (SRL : jusqu'à 1/10 du montant de départ si capital > 0, sinon pas d'obligation légale mais recommandé statutairement).

**Test de distribution (SRL, art. 5:141 CSA) :**
Avant toute distribution (dividende, rachat d'actions, réduction capital) :
1. **Test d'actif net** : actif net ≥ apports non remboursables + réserves indisponibles
2. **Test de liquidité** : la société peut faire face à ses dettes pendant au moins 12 mois

---

## Facturation — Mentions obligatoires BE

Base légale : AR 29/12/1992 (TVA), Loi 2/8/2002 (délais de paiement commerciaux).

### Mentions obligatoires

```
1. Numéro de facture (séquentiel, sans interruption ni doublon)
2. Date d'émission
3. Nom, adresse et numéro d'entreprise (BE XXXX.XXX.XXX) du vendeur
4. Numéro TVA du vendeur (BE XXXX.XXX.XXX)
5. Nom et adresse du client
6. Numéro TVA du client (si assujetti)
7. Description des biens/services
8. Date de livraison ou d'exécution (si différente de la date de facture)
9. Prix unitaire hors TVA
10. Remises et rabais
11. Base imposable par taux TVA
12. Taux TVA appliqué
13. Montant TVA
14. Total TVAC
15. Conditions de paiement et délais
16. Pénalités de retard (mention légale — voir ci-dessous)
17. Indemnité forfaitaire de 40 EUR (Loi 2/8/2002, art. 6)
```

### Mentions TVA spéciales

```
Exonéré art. 39 CTVA :       "Exonération TVA — art. 39 CTVA (exportation)"
Exonéré art. 44 CTVA :       "Exonération TVA — art. 44 CTVA (services de santé/éducation/...)"
Franchise TVA :               "Régime de franchise de TVA — art. 56bis CTVA"
Autoliquidation :             "Autoliquidation — art. XX CTVA"
Co-contractant :              "TVA due par le co-contractant — AR n°1 art. 20"
Vente intracommunautaire :    "Livraison intracommunautaire exonérée — art. 39bis CTVA"
```

### Pénalités de retard légales (Loi 2/8/2002)

```
Taux légal : taux de la BCE (taux de base) + 7 points
             (révisé semestriellement — consulter SPF Economie)
Indemnité forfaitaire recouvrement : 40 EUR (automatique, sans mise en demeure)
Délai de paiement max B2B : 60 jours calendrier
Délai de paiement max B2G : 30 jours (60 jours si justifié)
```

---

## Clôture annuelle — 12 étapes

1. **Rapprochement bancaire** — tous comptes 55x soldés
2. **Clients** — analyse 400, provisions pour créances douteuses (compte 634)
3. **Fournisseurs** — analyse 440, charges à imputer (compte 648)
4. **Stocks** — inventaire physique, valorisation FIFO/CUMP/prix coûtant
5. **Immobilisations** — tableau des amortissements, base légale AR 30/01/2001
6. **Charges à reporter / produits à reporter** (comptes 490/491/492/493)
7. **Provisions pour risques et charges** (comptes 160)
8. **TVA** — régularisation annuelle (listing, déclaration décembre/T4)
9. **Précomptes** — vérification 453, fiches 281.10/281.50
10. **Impôt estimé** (compte 450 — ISOC estimé, versements anticipés)
11. **Résultat** — affectation résultat, distribution éventuelle (tests CSA)
12. **Comptes annuels** — dépôt BNB dans les délais, modèle adapté

---

## PEPPOL BIS — Facturation électronique BE

La Belgique déploie la facturation électronique via PEPPOL progressivement.

**Calendrier actuel :**
- Secteur public (B2G) : obligatoire depuis 2019 pour marchés publics fédéraux
- B2B : obligation en cours de déploiement (consulter SPF Finances pour calendrier actuel)

**Format PEPPOL BIS Billing 3.0 :**
- Identifiant PEPPOL : `0208:{numéro_entreprise_sans_points}` (0208 = Belgique, Banque Carrefour des Entreprises)
- Exemple : `0208:0123456789`

---

## Précompte professionnel (PrP)

Retenu sur rémunérations et certains revenus mobiliers.

**Barèmes :** Circulaire SPF Finances (révisée annuellement).
**Déclaration :** Mensuelle (276.X) ou trimestrielle (< 1,000 EUR/mois).
**Fiches fiscales :**
- 281.10 : rémunérations travailleurs
- 281.20 : rémunérations dirigeants d'entreprise
- 281.50 : commissions, courtages, ristournes
Délai dépôt fiches : avant le 28 février de l'année suivante.
