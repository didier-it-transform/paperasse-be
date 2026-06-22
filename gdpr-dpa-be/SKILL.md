---
name: gdpr-dpa-be
metadata:
  last_updated: 2026-06-22
  jurisdiction: Belgium + EU
description: |
  RGPD (Règlement UE 2016/679) appliqué en Belgique + Loi du 30/07/2018 (LTD).
  APD (Autorité de Protection des Données) — plaintes, inspections, sanctions.
  DPO, registre des traitements, AIPD, droits des personnes, transferts internationaux.
  Spécificités sectorielles belges.
---

## Langue · Taal · Sprache · Language
Ce skill répond dans la langue utilisée par l'utilisateur. **FR** · **NL** · **DE** · **EN**

---

# RGPD / APD — Belgique · AVG / GBA · DSGVO / DSB · GDPR / DPA Belgium

## Base légale

- **RGPD** : Règlement (UE) 2016/679 du 27/04/2016 (applicable depuis 25/05/2018)
- **LTD** : Loi du 30/07/2018 relative à la protection des personnes physiques à l'égard des traitements de données à caractère personnel
- **APD** : Autorité de Protection des Données — `autoriteprotectiondonnees.be`
- **GBA** : Gegevensbeschermingsautoriteit (version NL de l'APD)

---

## Registre des traitements (art. 30 RGPD)

**Obligatoire pour :** toute organisation (sauf dérogation PME < 250 personnes sans traitements à risque élevé).

### Structure minimale du registre

```
Pour chaque traitement :
□ Nom et coordonnées du responsable du traitement (+ DPO si applicable)
□ Finalités du traitement
□ Catégories de personnes concernées
□ Catégories de données traitées
□ Catégories de destinataires (y.c. transferts hors UE)
□ Délais de conservation (ou critères)
□ Mesures de sécurité techniques et organisationnelles
□ Base légale (art. 6 RGPD)
```

### Bases légales (art. 6 RGPD)

| Base | Code | Usage typique |
|------|------|--------------|
| Consentement | 6.1.a | Marketing, cookies non essentiels |
| Contrat | 6.1.b | Exécution d'un contrat avec la personne |
| Obligation légale | 6.1.c | Comptabilité, déclarations fiscales |
| Intérêts vitaux | 6.1.d | Urgences médicales |
| Mission d'intérêt public | 6.1.e | Autorités publiques |
| Intérêts légitimes | 6.1.f | Sécurité, prévention fraude, B2B marketing |

**Données sensibles (art. 9 RGPD) :** santé, origine ethnique, religion, opinions politiques, biométrie, orientation sexuelle → base légale renforcée obligatoire.

---

## DPO (Délégué à la Protection des Données)

### Désignation obligatoire quand

1. Autorité ou organisme public
2. Traitements à grande échelle de données sensibles (art. 9)
3. Surveillance systématique à grande échelle de personnes

### Missions du DPO

```
□ Informer et conseiller le responsable du traitement
□ Contrôler le respect du RGPD
□ Conseiller sur les AIPD
□ Coopérer avec l'APD
□ Point de contact pour les personnes concernées
```

**DPO externe :** possible (contrat de service). Coordonnées à communiquer à l'APD.

---

## AIPD — Analyse d'Impact (art. 35 RGPD)

**Obligatoire quand** : traitement susceptible d'engendrer un risque élevé.

### Traitements nécessitant une AIPD (liste APD BE)

- Profilage à grande échelle
- Traitement de données sensibles à grande échelle
- Surveillance systématique d'un lieu accessible au public
- Traitement de données de personnes vulnérables (enfants, patients)
- Croisement de bases de données à des finalités différentes
- Décisions automatisées avec effet juridique significatif

### Structure AIPD

```
1. Description du traitement et de ses finalités
2. Évaluation de la nécessité et proportionnalité
3. Évaluation des risques pour les droits et libertés
4. Mesures pour faire face aux risques
5. Consultation préalable APD si risque résiduel élevé (art. 36)
```

---

## Droits des personnes concernées

| Droit | Article | Délai réponse | Notes |
|-------|---------|--------------|-------|
| Information | Art. 13-14 | Lors de la collecte | Politique de confidentialité |
| Accès | Art. 15 | 1 mois (+ 2 mois si complexe) | Copie gratuite |
| Rectification | Art. 16 | 1 mois | |
| Effacement (droit à l'oubli) | Art. 17 | 1 mois | Exceptions : archivage, liberté d'expression |
| Limitation | Art. 18 | 1 mois | |
| Portabilité | Art. 20 | 1 mois | Format structuré, lisible par machine |
| Opposition | Art. 21 | Immédiat (marketing) | |
| Décision automatisée | Art. 22 | — | Droit à intervention humaine |

---

## Cookies et traceurs

**Base légale en Belgique :** Loi du 13/06/2005 relative aux communications électroniques (art. 129) + RGPD.

### Classification

| Type | Consentement requis |
|------|-------------------|
| Cookies strictement nécessaires | Non |
| Cookies fonctionnels | Non (si nécessaires à la demande) |
| Cookies analytiques | Oui (sauf anonymisation réelle) |
| Cookies marketing/publicité | Oui |
| Cookies de réseaux sociaux | Oui |

**CMP (Consent Management Platform) :** obligatoire pour tout site avec cookies non essentiels. TCF (Transparency & Consent Framework) d'IAB recommandé.

---

## APD — Autorité de Protection des Données

### Structure

- **Comité de direction** : 6 membres, mandats 6 ans
- **Centre de Connaissances** : recommandations et avis
- **Service d'Inspection** : pouvoirs d'enquête (perquisitions, auditions)
- **Chambre Contentieuse** : décisions et sanctions

### Procédure de plainte

```
1. Plainte déposée sur autoriteprotectiondonnees.be (formulaire en ligne)
2. Recevabilité vérifiée (délai 1 mois)
3. Tentative de médiation (1er ligne)
4. Si non résolue → transmission Service d'Inspection
5. Instruction (auditions, demandes d'information, inspections sur place)
6. Rapport d'inspection → Chambre Contentieuse
7. Décision motivée (correction, amende, interdiction)
8. Recours : Cour des Marchés (Bruxelles)
```

### Sanctions (art. 83 RGPD)

| Niveau | Montant max | Infractions typiques |
|--------|------------|---------------------|
| Niveau 1 | **10,000,000 EUR** ou 2% CA mondial | Obligations techniques, registres, sécurité |
| Niveau 2 | **20,000,000 EUR** ou 4% CA mondial | Principes fondamentaux, droits des personnes, transferts |

**Sanctions APD BE notables :**
- IAB Europe : 250,000 EUR (2022 — TCF non conforme)
- Telecom operator : 50,000 EUR (2021)
- Commune : 5,000 EUR (vidéosurveillance)

---

## Transferts hors UE/EEE

| Mécanisme | Conditions |
|-----------|-----------|
| Décision d'adéquation | Pays listé par Commission UE (UK, Suisse, Canada, Israël, Japon, Corée du Sud, US via DPF) |
| Clauses contractuelles types (CCT) | Modules 1-4 selon direction du transfert |
| Règles d'entreprise contraignantes (BCR) | Groupes multinationaux — validation APD |
| Dérogations art. 49 | Consentement explicite, exécution contrat, intérêt public |

**USA → Data Privacy Framework (DPF) :** accord UE-US depuis 10/07/2023 (post-Schrems II). Vérifier liste entreprises certifiées sur dataprivacyframework.gov.

---

## Sécurité des données (art. 32 RGPD)

### Mesures minimales recommandées APD BE

```
Technique :
□ Chiffrement des données au repos et en transit (TLS 1.2+, AES-256)
□ Authentification forte (MFA) pour accès aux données sensibles
□ Gestion des accès (principe du moindre privilège)
□ Sauvegardes chiffrées + tests de restauration
□ Journalisation des accès aux données personnelles
□ Pseudonymisation si possible

Organisationnel :
□ Politique de sécurité documentée
□ Formation du personnel
□ Procédure de violation de données (notification en 72h)
□ Gestion des sous-traitants (DPA — Data Processing Agreement)
```

### Violation de données (art. 33-34 RGPD)

```
□ Détection de la violation
□ Évaluation du risque pour les personnes
□ Si risque : notification APD dans les 72h (via enotification.autoriteprotectiondonnees.be)
□ Si risque élevé : notification aux personnes concernées sans délai
□ Documentation interne de toutes les violations (même sans notification)
```

---

## Checklist RGPD — SaaS belge

```
□ Registre des traitements à jour (art. 30)
□ Politique de confidentialité publiée et à jour
□ Bannière cookies conforme (CMP)
□ Mentions légales complètes
□ Procédure de réponse aux droits des personnes (délai 1 mois)
□ DPA signé avec chaque sous-traitant (hébergeur, CRM, emailing...)
□ Transferts hors UE : mécanisme légal identifié
□ Procédure violation de données documentée
□ DPO désigné si obligatoire (coordonnées publiées + notifiées APD)
□ AIPD réalisée pour traitements à risque élevé
□ Sécurité : chiffrement, MFA, gestion accès, journalisation
□ Durées de conservation définies et appliquées
```
