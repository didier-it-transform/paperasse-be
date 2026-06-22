# Paperasse BE

**FR** · Skills pour agents IA spécialisés dans la bureaucratie belge.
**NL** · Skills voor AI-agenten gespecialiseerd in de Belgische bureaucratie.
**DE** · Skills für KI-Agenten spezialisiert auf belgische Bürokratie.
**EN** · Skills for AI agents specialised in Belgian red tape.

Fork belge de [paperasse](https://github.com/romainsimon/paperasse) par Romain Simon — adapté pour la Belgique par [Atelya](https://atelya.be).

---

## FR — Français

Collection de 16 skills pour agents IA couvrant la comptabilité, fiscalité, droit notarial, droit social, urbanisme, marchés publics, immobilier et procédures d'exécution belges. Répond en FR · NL · DE · EN selon la langue de votre question.

### Les 16 skills

**Comptabilité & Fiscalité**

| Skill | Rôle | Ce qu'il fait |
|-------|------|---------------|
| **`accountant-be`** | Expert-Comptable | PCMN, TVA (21/12/6%), ISOC/IPP, clôture annuelle, comptes annuels CNC, facturation BE, PEPPOL BIS, formes CSA 2019 |
| **`notary-be`** | Notaire | Droits d'enregistrement régionaux, émoluments RFBN 2020, succession, donation, cohabitation légale, SRL holding |
| **`tax-advisor-be`** | Fiscaliste Particuliers | IPP, précompte mobilier 30%, TOB, épargne-pension (EIP/CPTI), stock-options Loi 26/3/1999 |
| **`statutory-auditor-be`** | Réviseur d'Entreprises | Audit IRE/ISA, seuils légaux BE, missions légales CSA |
| **`tax-inspector-be`** | Contrôle SPF Finances | Simulation ISI/BBI, CIR/WIB, TVA, abus fiscal, ruling |

**Droit & Société**

| Skill | Rôle | Ce qu'il fait |
|-------|------|---------------|
| **`condo-manager-be`** | Syndic de Copropriété | Code Civil art. 3.82-3.111, PCCN, AG (quorums BE), IPI |
| **`self-employed-social-be`** | Statut social indépendant | INASTI/RSVZ, cotisations trimestrielles, CAS, pension, maladie, maternité, Dimona |
| **`tenancy-be`** | Droit du bail résidentiel | 3 régimes régionaux : Décret wallon 2018, Vlaams Huurdecreet 2018, Ordonnance BXL 2017 |
| **`gdpr-dpa-be`** | RGPD / APD belge | Loi 30/07/2018, registre traitements, AIPD, droits personnes, APD sanctions, DPO |
| **`employment-law-be`** | Droit du travail | ONSS, Dimona, DmfA, contrats, CP 337, préavis Loi 2013, congés, frais propres |
| **`nonprofit-be`** | ASBL / VZW | CSA 2019 livre 9, constitution, AG, comptabilité simplifiée/double, IPM, don déductible |
| **`planning-law-be`** | Urbanisme | CoBAT/CoDT/VCRO, permis d'urbanisme, infractions, PEB/EPC, préemption, renseignements |
| **`public-procurement-be`** | Marchés publics | Loi 17/06/2016, seuils EU 2024, procédures, MEAT, e-Procurement, standstill, recours |
| **`insurance-be`** | Assurances | Loi 4/04/2014, FSMA, RC auto, AT (Loi 1971), RC pro, branches 21/23, taxe primes |

**Immobilier**

| Skill | Rôle | Ce qu'il fait |
|-------|------|---------------|
| **`real-estate-agent-be`** | Agent Immobilier | IPI/BIV agrément, mandats, commission, due diligence par région, compromis, anti-blanchiment Loi 2017, Airbnb, gestion locative |

**Procédures d'exécution**

| Skill | Rôle | Ce qu'il fait |
|-------|------|---------------|
| **`bailiff-be`** | Huissier de Justice | Significations (art. 32-46 CJ), commandements, saisies (quotités 2025, protection 1 341 EUR), expulsion, vente judiciaire, constats, RCD, tarif AR 30/11/1976 |

### Installation

```
Installe tous les skills du repo github https://github.com/atelya-be/paperasse-be
Lance ensuite le setup pour la gestion de ma paperasse belge
```

### Intégrations

- **Qonto** — transactions bancaires (commun avec paperasse FR)
- **Stripe** — paiements (commun avec paperasse FR)
- **Accountable** — comptabilité freelance belge (`integrations/accountable/`)

---

## NL — Nederlands

Collectie van 16 skills voor AI-agenten voor de Belgische boekhouding, fiscaliteit, notarieel recht, sociaal recht, stedenbouw, vastgoed en gerechtelijke uitvoering. Antwoordt in FR · NL · DE · EN naargelang de taal van uw vraag.

### De 16 skills

**Boekhouding & Fiscaliteit**

| Skill | Rol | Wat doet het |
|-------|-----|-------------|
| **`accountant-be`** | Boekhouder | MAR/PCMN, BTW (21/12/6%), VenB/PB, jaarafsluiting, jaarrekening NBB, facturatie BE, PEPPOL BIS, WVV 2019 |
| **`notary-be`** | Notaris | Registratierechten per gewest, ereloon RFBN 2020, erfenis, schenking, wettelijke samenwoning, BV holding |
| **`tax-advisor-be`** | Fiscalist particulieren | PB, roerende voorheffing 30%, TOB, pensioensparen (IPT/VAPZ), aandelenopties Wet 26/3/1999 |
| **`statutory-auditor-be`** | Bedrijfsrevisor | Audit IBR/ISA, wettelijke drempels BE, wettelijke opdrachten WVV |
| **`tax-inspector-be`** | FOD Financiën controle | Simulatie BBI, WIB, BTW, belastingmisbruik, voorafgaande beslissing |

**Recht & Maatschappij**

| Skill | Rol | Wat doet het |
|-------|-----|-------------|
| **`condo-manager-be`** | Syndicus mede-eigendom | Burgerlijk Wetboek art. 3.82-3.111, PCMN copro, AV (quorums BE), BIV |
| **`self-employed-social-be`** | Sociaal statuut zelfstandige | RSVZ, kwartaalbijdragen, sociale verzekeringskassen, pensioen, ziekte, moederschap |
| **`tenancy-be`** | Huurrecht | 3 gewestelijke regimes: Waals Decreet 2018, Vlaams Huurdecreet 2018, Brussels Ordonnantie 2017 |
| **`gdpr-dpa-be`** | AVG / GBA | Wet 30/07/2018, register verwerkingen, DPIA, rechten betrokkenen, GBA sancties, DPO |
| **`employment-law-be`** | Arbeidsrecht | RSZ, Dimona, DmfA, contracten, PC 337, opzeggingstermijnen Wet 2013, verlof, kostenvergoedingen |
| **`nonprofit-be`** | VZW | WVV 2019 boek 9, oprichting, AV, vereenvoudigde/dubbele boekhouding, RPB, fiscale attesten giften |
| **`planning-law-be`** | Ruimtelijke ordening | CoBAT/CoDT/VCRO, omgevingsvergunning, stedenbouwkundige overtredingen, EPC, recht van voorkoop |
| **`public-procurement-be`** | Overheidsopdrachten | Wet 17/06/2016, EU-drempels 2024, procedures, MEAT, e-Procurement, standstilltermijn, beroep |
| **`insurance-be`** | Verzekeringen | Wet 4/04/2014, FSMA, BA auto, arbeidsongevallen (Wet 1971), BA beroep, takken 21/23, premietaks |

**Vastgoed**

| Skill | Rol | Wat doet het |
|-------|-----|-------------|
| **`real-estate-agent-be`** | Vastgoedmakelaar | BIV-erkenning, mandaten, commissie, due diligence per gewest, compromis, witwaspreventie Wet 2017, kortetermijnverhuur, rentebeheer |

**Gerechtelijke uitvoering**

| Skill | Rol | Wat doet het |
|-------|-----|-------------|
| **`bailiff-be`** | Gerechtsdeurwaarder | Betekeningen (art. 32-46 Ger.W.), bevelen, beslagen (quotiteiten 2025, bescherming 1 341 EUR), uithuiszetting, gerechtelijke verkoop, vaststellingsakten, collectieve schuldenregeling, tarief KB 30/11/1976 |

### Installatie

```
Installeer alle skills van de github repo https://github.com/atelya-be/paperasse-be
Start daarna de setup voor het beheer van mijn Belgische administratie
```

---

## DE — Deutsch

Sammlung von 16 Skills für KI-Agenten für belgische Buchhaltung, Steuerrecht, Notariatsrecht, Sozialrecht, Städtebaurecht, Immobilien und Zwangsvollstreckung. Antwortet auf FR · NL · DE · EN je nach Sprache Ihrer Frage.

**Hinweis Deutschsprachige Gemeinschaft (DG):** Das wallonische Recht gilt für Einregistrierungsgebühren und Erbschaftssteuer. Sitz: Eupen. Steuerformulare (Tax-on-web) seit 2022 auf Deutsch verfügbar.

### Die 16 Skills

**Buchhaltung & Steuerrecht**

| Skill | Rolle | Funktion |
|-------|-------|---------|
| **`accountant-be`** | Buchhalter | PCMN, MwSt (21/12/6%), Körperschaft-/Einkommensteuer, Jahresabschluss, Jahresberichte BNB, Rechnungsstellung BE, PEPPOL BIS, GmbH-Recht 2019 |
| **`notary-be`** | Notar | Einregistrierungsgebühren je Region (Flandern 3%, Wallonie 12,5%, Brüssel 12,5%), Notarhonorar RFBN 2020, Erbschaft, Schenkung, gesetzliches Zusammenleben |
| **`tax-advisor-be`** | Steuerberater Privatpersonen | Einkommensteuer, Kapitalertragsteuer 30%, TOB, Pensionssparen (IPT/VAPZ), Aktienoptionen Gesetz 26/3/1999 |
| **`statutory-auditor-be`** | Unternehmensrevisor | Revision IRE/ISA, gesetzliche Schwellenwerte BE, gesetzliche Mandate GmbH-Recht |
| **`tax-inspector-be`** | FÖD Finanzen Prüfer | Simulation BBI, EStG/WIB, MwSt, Steuermissbrauch, Vorababstimmung |

**Recht & Gesellschaft**

| Skill | Rolle | Funktion |
|-------|-------|---------|
| **`condo-manager-be`** | Wohnungseigentumsverwalter | BGB Art. 3.82-3.111, PCMN Miteigentum, Eigentümerversammlung (BE-Quoren), BIV |
| **`self-employed-social-be`** | Sozialstatut Selbstständige | RSVZ, Quartalsbeiträge, Sozialversicherungskassen, Rente, Krankheit, Mutterschaft |
| **`tenancy-be`** | Mietrecht | 3 regionale Regime: Wallonisches Dekret 2018, Flämisches Mietdekret 2018, Brüsseler Ordonnanz 2017 |
| **`gdpr-dpa-be`** | DSGVO / DSB Belgien | Gesetz 30/07/2018, Verarbeitungsregister, DSFA, Betroffenenrechte, GBA-Sanktionen, DSB |
| **`employment-law-be`** | Arbeitsrecht | ONSS/RSZ, Dimona, DmfA, Verträge, KP 337, Kündigungsfristen Gesetz 2013, Urlaub, Spesenerstattung |
| **`nonprofit-be`** | Verein ohne Gewinnzweck (VoG) | GmbH-Recht Buch 9, Gründung, Hauptversammlung, vereinfachte/doppelte Buchführung, Körperschaftsteuer |
| **`planning-law-be`** | Städtebaurecht | CoBAT/CoDT/VCRO, Baugenehmigung, Verstöße, Energieausweis, Vorkaufsrecht |
| **`public-procurement-be`** | Öffentliche Aufträge | Gesetz 17/06/2016, EU-Schwellenwerte 2024, Verfahren, MEAT, e-Vergabe, Stillhaltefrist, Rechtsbehelfe |
| **`insurance-be`** | Versicherungen | Gesetz 4/04/2014, FSMA, Kfz-Haftpflicht, Arbeitsunfälle (Gesetz 1971), Berufshaftpflicht, Zweige 21/23 |

**Immobilien**

| Skill | Rolle | Funktion |
|-------|-------|---------|
| **`real-estate-agent-be`** | Immobilienmakler | IPI/BIV-Zulassung, Mandate, Provision, Due-Diligence je Region, Kaufversprechen, Geldwäscheprävention Gesetz 2017, Kurzzeitvermietung, Mietverwaltung |

**Zwangsvollstreckung**

| Skill | Rolle | Funktion |
|-------|-------|---------|
| **`bailiff-be`** | Gerichtsvollzieher | Zustellungen (Art. 32-46 GerO), Zahlungsbefehle, Pfändungen (Pfändungsfreigrenzen 2025, Kontoschutz 1 341 EUR), Zwangsräumung, Versteigerung, Feststellungsprotokolle, kollektive Schuldenregelung, Tarif KB 30/11/1976 |

### Installation

```
Installiere alle Skills aus dem GitHub-Repo https://github.com/atelya-be/paperasse-be
Starte danach das Setup für die Verwaltung meiner belgischen Bürokratie
```

---

## EN — English

Collection of 16 AI agent skills for Belgian accounting, taxation, notarial law, social law, planning, real estate and debt enforcement. Responds in FR · NL · DE · EN depending on the language of your question.

### The 16 skills

**Accounting & Taxation**

| Skill | Role | What it does |
|-------|------|-------------|
| **`accountant-be`** | Accountant | PCMN chart of accounts, VAT (21/12/6%), corporate/personal tax, year-end closing, annual accounts (NBB filing), Belgian invoicing, PEPPOL BIS, CSA 2019 company forms |
| **`notary-be`** | Notary | Regional registration duties (Flanders 3%, Wallonia 12.5%, Brussels 12.5%), notary fees RFBN 2020, inheritance, gifts, legal cohabitation, SRL property holding |
| **`tax-advisor-be`** | Personal tax advisor | Personal income tax, withholding tax 30%, stock exchange tax (TOB), pension savings (EIP/CPTI), stock options Law 26/3/1999 |
| **`statutory-auditor-be`** | Statutory auditor | IRE/ISA audit, Belgian legal thresholds, statutory missions under CSA |
| **`tax-inspector-be`** | FPS Finance inspector | ISI/BBI audit simulation, income tax code, VAT, tax abuse, advance rulings |

**Law & Society**

| Skill | Role | What it does |
|-------|------|-------------|
| **`condo-manager-be`** | Co-ownership manager | Civil Code art. 3.82-3.111, co-ownership accounts (PCCN), general meeting (Belgian quorums), IPI/BIV |
| **`self-employed-social-be`** | Self-employed social status | INASTI/RSVZ, quarterly contributions, social insurance funds, pension, sickness, maternity |
| **`tenancy-be`** | Residential tenancy law | 3 regional regimes: Walloon Decree 2018, Flemish Tenancy Decree 2018, Brussels Ordinance 2017 |
| **`gdpr-dpa-be`** | GDPR / Belgian DPA | Law 30/07/2018, processing register, DPIA, data subject rights, APD sanctions, DPO |
| **`employment-law-be`** | Labour law | ONSS/RSZ, Dimona, DmfA, employment contracts, JC 337, notice periods Law 2013, leave, expense reimbursements |
| **`nonprofit-be`** | Non-profit association | CSA 2019 book 9, incorporation, general meeting, simplified/double accounting, IPM, tax-deductible donations |
| **`planning-law-be`** | Planning & zoning | CoBAT/CoDT/VCRO, planning permits, violations, PEB/EPC energy certificates, pre-emption rights |
| **`public-procurement-be`** | Public procurement | Law 17/06/2016, EU thresholds 2024, procedures, MEAT, e-Procurement, standstill period, appeals |
| **`insurance-be`** | Insurance | Law 4/04/2014, FSMA, motor liability, workplace accidents (Law 1971), professional liability, branches 21/23 |

**Real Estate**

| Skill | Role | What it does |
|-------|------|-------------|
| **`real-estate-agent-be`** | Real Estate Agent | IPI/BIV licence, mandates, commission, regional due diligence, sale agreement, AML Law 2017, short-term rental, property management |

**Debt Enforcement**

| Skill | Role | What it does |
|-------|------|-------------|
| **`bailiff-be`** | Bailiff / Process Server | Service of process (art. 32-46 JC), payment orders, garnishment (2025 exempt amounts, €1,341 bank protection), eviction, judicial sale, official records, collective debt settlement, regulated tariff AR 30/11/1976 |

### Installation

```
Install all skills from the github repo https://github.com/atelya-be/paperasse-be
Then run the setup for managing my Belgian administrative paperwork
```

---

## Différences clés France → Belgique · FR→BE Differences

| FR | BE |
|----|-----|
| PCG | PCMN / MAR |
| IS 25% | ISOC / VenB 25% (20% KMO/PME ≤ 100k) |
| IR barème | IPP / PB (25/40/45/50%) |
| IFI | N/A — inexistant en Belgique |
| PFU 30% | Précompte mobilier / Roerende voorheffing 30% |
| PEA | Compte-titres + TOB |
| RSU/BSPCE | Stock-options Loi 26/3/1999 |
| PER | EIP / IPT · CPTI / VAPZ · Pilier 3 |
| CAC / NEP | Réviseur IRE / Bedrijfsrevisor IBR |
| DGFIP | SPF Finances / FOD Financiën / FÖD Finanzen |
| CGI | CIR / WIB |
| SARL/SAS | SRL / BV (CSA/WVV 2019) |
| DMTO par département | Droits enreg. régionaux (3% / 12.5%) |
| Loi 1965 copropriété | Code Civil art. 3.82-3.111 |
| PACS | Cohabitation légale / Wettelijke samenwoning |
| FEC | Pas d'équivalent direct |
| Factur-X | PEPPOL BIS |

Glossaire complet 4 langues → [terminology/glossary.md](terminology/glossary.md)

---

## Licence / Licentie / Lizenz / License

MIT — Fork de [romainsimon/paperasse](https://github.com/romainsimon/paperasse) (MIT)
