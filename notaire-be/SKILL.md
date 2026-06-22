---
name: notaire-be
metadata:
  last_updated: 2026-06-22
  jurisdiction: Belgium
  source_fork: romainsimon/paperasse (MIT)
description: |
  Notaire IA pour le droit immobilier, les successions, les donations et le droit de la
  famille en Belgique. Droits d'enregistrement régionaux (Flandre/Wallonie/Bruxelles),
  émoluments notariaux (RFBN 2020), cohabitation légale, contrats de mariage (régimes
  matrimoniaux BE), SRL holding immobilière, plus-value immobilière.

  Triggers : notaire, droits d'enregistrement, acte de vente, compromis, succession,
  donation, héritage, testament, cohabitation légale, contrat de mariage, SRL immobilière,
  plus-value immobilière, droits de mutation, usufruit, nue-propriété, partage successoral,
  réserve héréditaire, viager, diagnostics PEB, préemption, droit immobilier belge.
---

## Langue · Taal · Sprache · Language

Ce skill répond dans la langue utilisée par l'utilisateur.
**FR** Français · **NL** Nederlands · **DE** Deutsch · **EN** English

⚠️ **Communauté germanophone (DG)** : droit de la Région wallonne applicable (droits d'enregistrement 12.5%, droits de succession wallons). Institutions : Eupen, Parlement DG, Conseil d'État.

Tous les termes techniques → [Glossaire quadrilingue](../terminology/glossary.md)

---

# Notaire IA — Belgique · Notaris IA — België · Notar IA — Belgien

Copilote juridique pour le droit immobilier, les successions, les donations et le droit de la famille en Belgique.

## Règle Absolue

**Ne jamais donner de conseil sans contexte validé.**

Avant toute analyse, identifier :
- Nature de l'opération (vente, succession, donation, mariage, SRL holding, etc.)
- Parties (identité, lien de parenté, situation matrimoniale, régime matrimonial)
- Biens concernés (nature, **localisation = région belge déterminante**, valeur estimée)
- Contexte fiscal (résidence principale, durée de détention, droits antérieurs)

**La région du bien ou du défunt détermine le droit applicable.** Toujours confirmer la région avant tout calcul.

**Ne jamais inventer de taux ou de règle de droit.** Si un point est incertain, le signaler et renvoyer vers le texte applicable.

---

## Droits d'enregistrement — Immobilier

Les droits d'enregistrement immobiliers sont une **compétence régionale** depuis la 6ème réforme de l'État.

### Région Flamande (Vlaams Gewest)

Base légale : Code flamand de la fiscalité (Vlaamse Codex Fiscaliteit — VCF).

| Situation | Taux | Conditions |
|-----------|------|-----------|
| Habitation propre et unique (*eigen woning*) | **3%** | Depuis 01/01/2022 — voir conditions ci-dessous |
| Autres immeubles (investissement, 2ème bien) | **12%** | Taux normal |
| Sociétés (apport immeuble) | **12%** | Sur valeur vénale |

**Conditions habitation propre et unique (3% Flandre) :**
- L'acheteur doit y établir sa résidence principale dans les 3 ans
- L'immeuble doit être l'unique propriété résidentielle à la date de l'acte
- En cas de déménagement contraint (professionnel), délai prolongeable

**Woonbonus supprimé en Flandre** depuis le 01/01/2020.

**Abattement (*meeneembaarheid*) :** La Flandre permet de reporter des droits payés lors d'une précédente acquisition sur le nouvel achat (déduction ou imputation).

### Région Wallonne

Base légale : Décret wallon 27/03/2014, Code des droits d'enregistrement wallon.

| Situation | Taux | Conditions |
|-----------|------|-----------|
| Taux normal | **12.5%** | Immeuble en Région wallonne |
| Habitation modeste (*chèque habitat* supprimé) | 12.5% | — |
| Abattement habitation propre et unique | 12.5% sur (base - 20,000 EUR) | Voir conditions |

**Abattement Wallonie (art. 53 CDEnr wallon) :**
- Réduction de la base imposable de **20,000 EUR** si :
  - L'immeuble sert de résidence principale
  - L'acheteur ne possède pas d'autre immeuble à usage résidentiel en propriété entière
  - Prix ≤ 350,000 EUR (seuil — vérifier actualisation)
- **Économie maximale :** 20,000 EUR × 12.5% = 2,500 EUR

**Taux réduit tranche basse (Wallonie) :** 6% sur tranche de 0 à 150,000 EUR pour terrains à bâtir (vérifier actualisation).

### Région de Bruxelles-Capitale

Base légale : Ordonnance du 10/10/2019, Code bruxellois des droits d'enregistrement.

| Situation | Taux | Base |
|-----------|------|------|
| Taux normal | **12.5%** | Valeur vénale |
| Avec abattement | 12.5% sur (base - 175,000 EUR) | Voir conditions |

**Abattement Bruxelles (art. 46bis OCDBE) :**
- Réduction de la base imposable de **175,000 EUR** si :
  - Habitation destinée à la résidence principale de l'acheteur
  - L'acheteur ne possède pas d'autre immeuble en pleine propriété en Belgique
  - Domiciliation dans les 2 ans après l'acte
- **Économie maximale :** 175,000 EUR × 12.5% = 21,875 EUR

---

## Émoluments notariaux

Base légale : AR 16/12/1950 modifié par AR 26/04/2020 (RFBN — Règlement des Frais et Honoraires du Notariat Belge).

### Barème émoluments (actes immobiliers — base TVA incluse 21%)

| Tranche de prix | Taux |
|----------------|------|
| 0 — 7,500 EUR | 4.56% |
| 7,500 — 17,500 EUR | 2.85% |
| 17,500 — 30,000 EUR | 2.28% |
| 30,000 — 45,495 EUR | 1.710% |
| 45,495 — 64,095 EUR | 1.368% |
| 64,095 — 250,095 EUR | 1.140% |
| > 250,095 EUR | 0.057% (min. 285.47 EUR sur cette tranche) |

**Minimum légal :** 280 EUR HTVA par acte (AR 2020).

**TVA sur honoraires :** 21% sur les émoluments.

### Frais accessoires typiques

```
Frais de transcription hypothécaire : 0.30% du prix
Contribution au Fonds d'Archives : 7.50 EUR
Droits d'hypothèque (si crédit) : 1% du capital garanti
Frais d'expédition et de copie : variables
Honoraires d'estimation (si requise) : libres
Frais de recherches préalables : variables (Centre de coordination)
```

### Calcul frais totaux typiques (achat résidence principale, Région wallonne)

```
Exemple : achat à 250,000 EUR, 1ère habitation propre

Droits d'enregistrement :
  (250,000 - 20,000) × 12.5% = 28,750 EUR

Émoluments notaire (approximatif) :
  Selon barème dégressif ≈ 3,500 EUR HTVA
  + 21% TVA ≈ 735 EUR
  Total émoluments ≈ 4,235 EUR

Frais transcription : 250,000 × 0.30% = 750 EUR

TOTAL frais ≈ 33,735 EUR (≈ 13.5% du prix)
```

---

## Plus-value immobilière

La fiscalité des plus-values immobilières est très différente de la France.

### Résidence principale

**Exonérée** — aucune taxe sur la plus-value de la résidence principale (pas d'équivalent de la règle française des 30 ans).

### Autres immeubles (bâtis)

| Durée de détention | Taxation |
|-------------------|---------|
| Moins de 5 ans | Plus-value taxée à **16.5% + additionnels communaux** (via IPP) |
| Plus de 5 ans | **Exonérée** |

Base de calcul : prix de vente - prix d'achat actualisé (× coefficient annuel CPI) - frais.

### Terrains

| Durée de détention | Taxation |
|-------------------|---------|
| Moins de 8 ans | Plus-value taxée à **33%** (spéculation) |
| 8 à 20 ans | Taxée à **16.5%** |
| Plus de 20 ans | **Exonérée** |

---

## Succession

Les droits de succession sont une **compétence régionale**. La région compétente est celle où le défunt avait son domicile fiscal durant les 5 années précédant le décès (en cas de déménagement inter-régional, la région la plus longtemps occupée sur les 5 ans).

### Droits de succession — Région wallonne

Base légale : Code des droits de succession wallon (CDS wallon).

**En ligne directe et entre époux/cohabitants légaux :**

| Tranche nette | Taux |
|--------------|------|
| 0 — 12,500 EUR | 3% |
| 12,500 — 25,000 EUR | 4% |
| 25,000 — 50,000 EUR | 5% |
| 50,000 — 100,000 EUR | 7% |
| 100,000 — 150,000 EUR | 10% |
| 150,000 — 200,000 EUR | 14% |
| 200,000 — 250,000 EUR | 18% |
| 250,000 — 500,000 EUR | 24% |
| > 500,000 EUR | 30% |

**Entre frères/sœurs :**
| Tranche | Taux |
|---------|------|
| 0 — 12,500 EUR | 20% |
| 12,500 — 25,000 EUR | 25% |
| > 25,000 EUR | 35% |

**Entre autres personnes (non-parents) :**
| Tranche | Taux |
|---------|------|
| 0 — 12,500 EUR | 30% |
| 12,500 — 25,000 EUR | 35% |
| > 25,000 EUR | 60% |

**Exonérations notables (Wallonie) :**
- Résidence principale entre époux/cohabitants légaux : **exonérée** (part nette du conjoint/cohabitant)
- Entreprise familiale (SOWALFIN) : 0% sur la valeur d'entreprise (conditions art. 60bis CDSuc wallon)

### Droits de succession — Région flamande

**En ligne directe :**
| Tranche | Taux |
|---------|------|
| 0 — 50,000 EUR | 3% |
| 50,000 — 250,000 EUR | 9% |
| > 250,000 EUR | 27% |

**Entre partenaires (époux et cohabitants légaux = ligne directe en Flandre depuis 2021)**

**Résidence familiale (Flandre) :** Exonérée entre partenaires et en ligne directe (depuis 2012).

### Droits de succession — Région de Bruxelles-Capitale

**En ligne directe et entre époux/cohabitants légaux :**
| Tranche | Taux |
|---------|------|
| 0 — 50,000 EUR | 3% |
| 50,000 — 100,000 EUR | 8% |
| 100,000 — 175,000 EUR | 9% |
| 175,000 — 250,000 EUR | 18% |
| 250,000 — 500,000 EUR | 24% |
| > 500,000 EUR | 30% |

---

## Donation

### Droits de donation — Biens meubles (mobilier, argent, œuvres d'art)

Les droits de donation mobilière sont **identiques dans les 3 régions** (per analogiam — vérifier actualisation) :
| Lien | Taux |
|------|------|
| Ligne directe, époux, cohabitants légaux | **3.3%** |
| Frères/sœurs, oncles/tantes, neveux/nièces | **5.5%** |
| Autres | **7.7%** |

Ces taux s'appliquent uniquement aux donations enregistrées. Une donation par virement bancaire (don manuel) n'est pas obligatoirement enregistrée mais comporte un risque si le donateur décède dans les 3 ans (rappel fiscal en succession).

### Droits de donation — Biens immeubles

**Région wallonne :**
| Lien et tranche | Taux |
|----------------|------|
| Ligne directe 0-150k | 3.3% |
| Ligne directe 150k-250k | 5.5% |
| Ligne directe 250k-450k | 8.8% |
| Ligne directe > 450k | 11% |

**Région flamande :**
| Lien et tranche | Taux |
|----------------|------|
| Ligne directe 0-150k | 3% |
| Ligne directe 150k-250k | 9% |
| Ligne directe > 250k | 27% |

**Région de Bruxelles-Capitale :**
Similaire à la Wallonie — vérifier les taux actuels sur le site de Bruxelles Fiscalité.

---

## Droit de la famille

### Régimes matrimoniaux

| Régime | Description | Applicabilité |
|--------|-------------|--------------|
| **Communauté légale** (défaut) | Biens communs = acquêts pendant mariage ; biens propres = antérieurs/héritage/donation | Mariage sans contrat |
| **Séparation de biens** | Chacun garde ses biens ; pas de patrimoine commun | Contrat notarial requis |
| **Communauté universelle** | Tous les biens sont communs (y.c. antérieurs) | Contrat notarial requis |

**Cohabitation légale (Loi 23/11/1998) :**
- Déclaration à l'officier d'état civil (pas de notaire requis sauf accord)
- Protection limitée du logement familial
- Pas de régime matrimonial légal (contrairement au mariage)
- Rupture unilatérale possible (déclaration officier d'état civil)

**Cohabitation de fait :** Aucune protection légale automatique. Recommander accord de cohabitation notarié.

### Réserve héréditaire

| Héritier | Quotité réservataire |
|----------|---------------------|
| 1 enfant | 1/2 de la succession |
| 2 enfants | 2/3 |
| 3 enfants ou plus | 3/4 |
| Conjoint survivant | Usufruit de la moitié + droit au logement familial |

Depuis la réforme successorale du 01/09/2018 : la réserve des enfants est globale (1/2 quelle que soit la descendance). La part disponible peut aller jusqu'à 1/2.

---

## Diagnostics immobiliers obligatoires (BE)

| Diagnostic | Obligatoire | Région |
|-----------|------------|--------|
| **PEB** (Performance Énergétique des Bâtiments) | Oui — toujours | Toutes |
| **Attestation sol** (*bodemattest* / attestation du sol) | Oui | Flandre (OVAM) |
| **Attestation d'installation électrique** | Oui si > 25 ans ou vente | Flandre |
| **Attestation citernes** (*stookolietank*) | Oui si citerne > 3,000L | Flandre |
| **Attestation sismique** | Non (BE hors zone sismique active) | — |
| **Rapport d'étanchéité des égouts** | Oui | Flandre (certaines communes) |
| **Dossier d'intervention ultérieure (DIU)** | Si travaux après 01/05/2001 | Toutes |
| **Inventaire amiante** | Oui si construction avant 2001 | Flandre (depuis 23/11/2022) |
| **Renseignements urbanistiques** | Oui | Toutes |

---

## Workflow vente immobilière typique

```
1. COMPROMIS
   - Conditions suspensives (financement, PEB, urbanisme)
   - Délai typique : 3-4 mois avant acte authentique
   - Acompte : généralement 10% du prix

2. RECHERCHES PRÉALABLES (notaire)
   - Titres de propriété (chaîne depuis 30 ans)
   - Charges hypothécaires
   - Renseignements urbanistiques (permis, infractions, préemption)
   - Attestation sol (si Flandre)
   - Situation cadastrale

3. ACTE AUTHENTIQUE
   - Lecture acte (présence obligatoire ou procuration notariée)
   - Paiement : prix + droits + frais

4. FORMALITÉS POST-ACTE
   - Transcription hypothécaire (dans les 15 jours)
   - Enregistrement (simultané)
   - Information copropriété / commune

5. REMISE DES CLÉS
```
