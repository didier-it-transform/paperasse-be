---
name: syndic-be
metadata:
  last_updated: 2026-06-22
  jurisdiction: Belgium
  source_fork: romainsimon/paperasse (MIT)
description: |
  Syndic IA pour la gestion de copropriétés belges. Code Civil Livre 3 Titre 2
  (art. 3.82-3.111, ex-loi 30/06/1994 modifiée 2018), PCCN, AG avec quorums BE,
  appels de fonds, IPI, travaux, impayés.
---

# Syndic IA — Copropriété Belge

## Base légale

- **Code Civil, Livre 3, Titre 2, Sous-titre 3** : art. 3.82-3.111 (issu Loi 4/02/2020, entrée en vigueur 01/09/2021)
- Anciennement : Loi du 30/06/1994 relative à la copropriété (modifiée en 2010 et 2018)
- **Plan Comptable des Copropriétés Normalisé (PCCN)** : AR 14/09/2018

**Syndic professionnel :** doit être reconnu par l'**IPI** (Institut Professionnel des Agents Immobiliers) — Loi Laruelle 11/02/2013.

---

## Structure de la copropriété

| Organe | Composition | Rôle |
|--------|------------|------|
| **Assemblée Générale (AG)** | Tous les copropriétaires | Décisions fondamentales |
| **Syndic** | Personne physique ou morale, mandat max. 3 ans renouvelable | Gestion courante + exécution décisions AG |
| **Conseil de copropriété** | Min. 3 copropriétaires si > 20 lots | Contrôle syndic, avis sur gestion |
| **Commissaire aux comptes** | Facultatif ou obligatoire si > 20 lots | Vérification comptes |

---

## Assemblée Générale

### Convocation

- **Délai minimal :** 15 jours avant (recommandé et RAR ou courrier électronique avec accusé de réception)
- **Ordre du jour :** fixé par le syndic + requêtes reçues ≥ 15 jours avant
- **1/5 des copropriétaires** peut exiger une AG extraordinaire
- **AG annuelle :** au moins une par exercice (généralement entre le 30ème et le 120ème jour après la clôture de l'exercice)

### Quorums et majorités (art. 3.89-3.91 Code Civil)

| Type de décision | Majorité requise |
|-----------------|-----------------|
| Gestion courante (maintenance, contrats courants) | 1/2 des voix + 1/2 des copropriétaires présents/représentés |
| Travaux importants (ravalement, toiture) | 3/4 des voix |
| Modification statuts / règlement de copropriété (actes modif. immeuble) | 4/5 des voix |
| Dissolution copropriété / démolition | Unanimité |
| Travaux privatifs affectant parties communes | 4/5 des voix (AG) + accord propriétaire lot concerné |

**Absence de quorum en 1ère convocation :** une 2ème AG peut être convoquée (délai min. 15 jours) — elle délibère valablement quel que soit le nombre de copropriétaires présents/représentés (avec les mêmes majorités).

**Vote par procuration :** chaque copropriétaire peut se faire représenter, mais une même personne ne peut être mandataire de plus de 3 copropriétaires (sauf dans les petites copropriétés).

---

## Plan Comptable Copropriété Normalisé (PCCN)

Base légale : AR 14/09/2018 fixant les règles de comptabilité des copropriétés.

### Comptes principaux PCCN

```
Classe 1 : Fonds et provisions
  1100  Fonds de roulement
  1200  Fonds de réserve (obligatoire — 5% min. du budget ordinaire)

Classe 4 : Créances et dettes
  4000  Copropriétaires — charges
  4001  Copropriétaires — fonds de réserve
  4100  Fournisseurs

Classe 6 : Charges
  6100  Honoraires syndic
  6200  Assurances
  6300  Entretien parties communes
  6400  Eau, électricité parties communes
  6500  Ascenseur
  6600  Nettoyage / jardinage

Classe 7 : Recettes
  7100  Quote-parts charges ordinaires
  7200  Quote-parts fonds de réserve
```

**Fonds de réserve obligatoire** (art. 3.93 Code Civil) : au moins 5% du budget ordinaire annuel. Alimenté annuellement, non restituable en cas de vente du lot (reste attaché au lot).

---

## Charges de copropriété

### Répartition

Selon l'acte de base et le règlement de copropriété (quote-parts définies en millièmes).

**Charges communes générales :** réparties selon les millièmes de toutes les parties communes.
**Charges communes particulières :** réparties uniquement entre les copropriétaires bénéficiaires (ex: ascenseur si lot sans accès).

### Appels de fonds

- **Fonds de roulement :** provision trimestrielle sur budget prévisionnel approuvé en AG
- **Fonds de réserve :** appel annuel (min. 5% budget ordinaire)
- **Appel exceptionnel :** si travaux urgents non prévus

### État des dépenses

Établi annuellement par le syndic, présenté à l'AG pour approbation.

---

## Obligations du syndic (art. 3.88 Code Civil)

1. Exécuter et faire exécuter les décisions de l'AG
2. Accomplir tous actes conservatoires et d'administration provisoire
3. Représenter la copropriété en justice (demandeur et défendeur)
4. Tenir la comptabilité distincte par copropriété (PCCN)
5. Maintenir un registre des décisions d'AG et des procès-verbaux
6. Tenir le carnet d'entretien de l'immeuble à jour
7. Conserver les fonds de roulement et réserve sur comptes séparés (obligatoire)
8. Souscrire l'assurance RC copropriété + assurance incendie parties communes

---

## Mutation — État daté

Lors de la vente d'un lot, le notaire demande au syndic un **état daté** (art. 3.96 Code Civil) contenant :
- Montant des charges ordinaires dues pour l'exercice en cours
- Montant des arriérés et dettes du lot
- Quote-part dans le fonds de réserve (attachée au lot)
- Décisions d'AG prises mais non encore exécutées (travaux votés)
- Litiges en cours impliquant la copropriété
- Demandes de provisions exigibles après la date d'acte

**Délai de réponse syndic :** 15 jours (délai légal).
**Frais état daté :** libres, doivent être mentionnés dans le contrat de syndic.

---

## Assurances obligatoires

| Assurance | Obligatoire | Qui souscrit |
|-----------|------------|-------------|
| RC copropriété (parties communes) | Oui | Syndic |
| Incendie parties communes | Oui | Syndic |
| RC syndic professionnel | Oui (IPI) | Syndic |
| RC ascenseur | Oui (si présent) | Syndic |

---

## Travaux

### Urgence

Le syndic peut engager des travaux urgents sans AG préalable si :
- Danger immédiat pour l'immeuble ou les occupants
- Impossibilité matérielle de réunir l'AG en temps utile

Rapport à l'AG suivante obligatoire.

### Grands travaux (> seuil AG)

1. Appel d'offres (min. 3 si montant significatif)
2. Vote en AG (3/4 des voix)
3. Appel de fonds exceptionnel si réserve insuffisante
4. Suivi de chantier (syndic ou architecte selon ampleur)
