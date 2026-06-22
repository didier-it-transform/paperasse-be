---
name: insurance-be
metadata:
  last_updated: 2026-06-22
  jurisdiction: Belgium
description: |
  Droit des assurances belge. Loi du 4/04/2014, FSMA. Assurance vie (branches 21/23),
  assurance non-vie (RC, incendie, auto, accidents du travail), RC professionnelle,
  assurance accidents du travail (Loi 10/04/1971), taxe sur les primes, Ombudsman.
---

## Langue · Taal · Sprache · Language
Ce skill répond dans la langue utilisée par l'utilisateur. **FR** · **NL** · **DE** · **EN**

---

# Assurances — Belgique · Verzekeringen · Versicherungen

## Base légale

- **Loi du 4 avril 2014** relative aux assurances (LAL — Loi Assurances Large)
  - Remplace la Loi du 25/06/1992 (contrat d'assurance terrestre)
  - Remplace la Loi du 27/03/1995 (intermédiation)
- **Loi du 10 avril 1971** — accidents du travail
- **Loi du 21 novembre 1989** — RC auto obligatoire
- **FSMA** : Financial Services and Markets Authority (supervision)
- **BNB** : Banque Nationale de Belgique (supervision prudentielle)

---

## Classification des assurances

### Assurances vie (Branche vie)

| Branche | Description | Rendement |
|---------|-------------|---------|
| **21** | Assurance vie à rendement garanti | Taux garanti + participations bénéficiaires |
| **23** | Assurance vie liée à des fonds d'investissement | Variable (fonds) — pas de garantie capital |
| **26** | Opérations de capitalisation | Accumulation sans aléa vie |

**Fiscalité assurance vie (BE) :**
- Primes branche 21 : taxe 2% sur les primes
- Produit à l'échéance : précompte mobilier 30% (si < 8 ans) ou 0% (si > 8 ans + règle des 60 ans)
- Branche 23 : taxe 2% sur les primes, pas de PrM sur la plus-value

### Assurances non-vie (Branche non-vie)

| Type | Obligatoire | Base légale |
|------|------------|------------|
| **RC auto** | Oui | Loi 21/11/1989 |
| **Accidents du travail** | Oui (employeurs) | Loi 10/04/1971 |
| **RC professionnelle** | Oui (secteurs réglementés) | Lois sectorielles |
| **RC vie privée** (familiale) | Non — mais fortement recommandée | — |
| **Incendie** (propriétaire) | Non (sauf copropriété) | — |
| **Incendie** (locataire) | Non légalement (mais souvent exigée par bail) | — |
| **RC exploitation** | Non (sauf secteurs) | — |

---

## RC Auto — Assurance obligatoire

**Loi du 21/11/1989** : obligation de RC auto pour tout véhicule automoteur.

### Couvertures RC auto

```
RC (couverture obligatoire) :
  → Dommages aux tiers (corporels et matériels) — couverture illimitée en corporel
  → Passagers du véhicule assuré inclus

Options (non obligatoires) :
  → Dommages propres (omnium / mini-omnium)
  → Assistance
  → Protection juridique
  → Bris de vitre
  → Incendie et vol
```

**Mini-omnium** : dommages propres limités (bris de vitre, incendie, vol, chocs animaux, catastrophes naturelles).
**Omnium complète** : tous dommages propres inclus, même accidents fautifs.

### Bonus-malus

Système belge : **0 à 22** (0 = maximum bonus, 22 = malus maximum).
- Départ : position 11 (sinistre responsable = +1, sans sinistre = -1)
- Tarif proportionnel à la position BM

### Bureau Central de Tarification (BCT)

Si refus d'assurance par tous les assureurs : recours au BCT obligé d'attribuer une RC auto.

---

## Accidents du Travail

**Loi du 10/04/1971** : obligation pour tout employeur de souscrire une assurance AT.

### Couverture légale

```
Accident sur le lieu de travail ou sur le trajet domicile-travail :
  → Frais médicaux, chirurgicaux, pharmaceutiques
  → Incapacité temporaire : 90% du salaire de base les 30 premiers jours, 90% du salaire plafonné ensuite
  → Incapacité permanente : rente proportionnelle au degré d'incapacité
  → Décès : rente aux ayants droit + frais funèbres
```

**Salaire de base plafonné 2025 :** ~56,200 EUR/an (vérifier indexation annuelle).

**Fedris** (Fonds des Accidents du Travail) : supervision + indemnisation en cas de défaillance de l'assureur.

---

## RC Professionnelle

Couvre les dommages causés à des tiers dans le cadre de l'activité professionnelle.

### Obligations légales par secteur

| Profession | Base légale |
|-----------|------------|
| Architectes | Loi 20/02/1939 + Loi 31/05/2017 |
| Avocats | Code déontologique OBFG/OVB |
| Experts-comptables (ITAA) | AR 30/01/2001 |
| Réviseurs d'entreprises (IRE) | Loi 7/12/2016 |
| Agents immobiliers (IPI) | AR 06/09/1993 |
| Médecins | Loi droits du patient |
| Entrepreneurs de construction | — (recommandé mais pas toujours obligatoire) |
| Courtiers en assurances | Loi 4/04/2014 |

### Éléments à vérifier dans un contrat RC Pro

```
□ Activités couvertes (exact avec l'objet social)
□ Plafond par sinistre et par an
□ Franchise (montant restant à charge)
□ Clause "claims made" vs "actes commis" (étendue temporelle)
□ Couverture rétroactive (actes antérieurs à la prise d'effet)
□ Couverture des sous-traitants
□ Extensions : responsabilité des dirigeants, cyber, données
```

---

## Assurance incendie

### Obligations selon statut

| Statut | Obligation |
|--------|-----------|
| **Propriétaire occupant** | Non légalement — mais exigée par crédit hypothécaire |
| **Locataire** | Non légalement — mais souvent exigée dans le bail |
| **Syndic copropriété** | Oui — parties communes obligatoirement assurées |
| **Entreprise** | Non légalement — mais essentielle (locaux, stock, équipements) |

### Couverture standard

```
□ Incendie, foudre, explosion
□ Tempête, grêle, neige (charge)
□ Dégâts des eaux (rupture de canalisation)
□ Catastrophes naturelles (couverture légale — Pool RE.BE)
□ Vol et vandalisme (option)
□ Bris de vitres (option)
□ RC vis-à-vis des voisins (souvent incluse)
```

---

## Taxe annuelle sur les primes d'assurance

Base légale : Loi du 4/07/1989, Code divers droits et taxes.

| Type d'assurance | Taux taxe |
|-----------------|----------|
| Assurance vie (branche 21) | **2%** |
| Assurance vie (branche 23) | **2%** |
| RC auto | **9.25%** |
| Incendie | **9.25%** |
| RC vie privée | **9.25%** |
| RC professionnelle | **9.25%** |
| Accidents du travail | **9.25%** |
| Assurance hospitalisation | **9.25%** |
| Assurance solde restant dû | **2%** |

**Taxe perçue par l'assureur** et reversée à l'État — apparaît généralement sur la quittance.

---

## Ombudsman des Assurances

Médiation gratuite entre assurés et compagnies d'assurances.

- **Site :** ombudsman.as
- **Compétence :** tous litiges entre consommateurs/professionnels et assureurs ou intermédiaires
- **Délai de réponse :** 90 jours
- **Recours préalable obligatoire** : épuiser le service de réclamation interne de l'assureur avant saisine de l'Ombudsman

### Procédure

```
1. Réclamation écrite à l'assureur (service réclamations)
2. Si pas de réponse satisfaisante dans 30 jours :
3. Saisine de l'Ombudsman des Assurances (formulaire en ligne)
4. Médiation — accord ou avis
5. Si avis non suivi : recours judiciaire (Tribunal de l'entreprise)
```

---

## FSMA — Supervision

**Financial Services and Markets Authority** — supervise :
- Les assureurs (agrément, solvabilité)
- Les intermédiaires d'assurances (inscription registre)
- Les produits d'assurance vie (branche 23, règles commercialisation)
- La publicité et les pratiques commerciales

**Registre FSMA :** vérifier l'agrément de tout assureur ou courtier sur fsma.be avant de souscrire.
