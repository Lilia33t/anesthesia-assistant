/*!
 * Efstathia's Anesthesia Assistant
 * Copyright © 2026 Dr Efstathia Pistioli. All rights reserved.
 *
 * This software and its content are the original work and intellectual property
 * of the author. Unauthorised copying, modification, distribution, or use of any
 * part of this code or its clinical content, in whole or in part, is prohibited
 * without the express written permission of the author.
 *
 * Provided for clinical decision support only; it does not replace clinical
 * judgement. No warranty is given as to accuracy or fitness for any purpose.
 */
/*!
 * Efstathia's Anesthesia Assistant
 * Copyright © 2026 Dr Efstathia Pistioli. All rights reserved.
 *
 * This software and its content are the original work and intellectual property
 * of the author. Unauthorised copying, modification, distribution, or use of any
 * part of this code or its clinical content, in whole or in part, is prohibited
 * without the express written permission of the author.
 *
 * Provided for clinical decision support only; it does not replace clinical
 * judgement. No warranty is given as to accuracy or fitness for any purpose.
 */
const {
  useState,
  useRef,
  useEffect
} = React;

// App logo (embedded so it renders everywhere, incl. offline & previews)
const LOGO_DATA = "data:image/png;base64,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";

/**
 * @typedef {Object} DoseRange
 * @property {string} el - Greek label for this dosing indication
 * @property {string} en - English label for this dosing indication
 * @property {number} [lo] - Low end of per-kg (or per-kg/time) range
 * @property {number} [hi] - High end of per-kg (or per-kg/time) range
 * @property {string} [unit] - Unit string, e.g. "mg/kg", "mcg/kg/min"
 * @property {number|null} [max] - Absolute dose ceiling, if any (in the same unit's numerator)
 * @property {number} [minAbs] - Absolute minimum dose floor, if any
 * @property {string} [fixed] - Use instead of lo/hi/unit when the dose is a fixed string (not weight-scaled)
 */

/**
 * @typedef {Object} Drug
 * @property {string} id - Unique slug, e.g. "propofol"
 * @property {string} name - Display name
 * @property {string} cat - Category: "induction" | "opioid" | "nmb" | "reversal" | "emergency" | "vasoactive" | "sedation" | ...
 * @property {DoseRange[]} doses - One or more dosing indications for this drug
 * @property {string} notesEl - Greek clinical notes
 * @property {string} notesEn - English clinical notes
 * @property {string} ciEl - Greek contraindications ("—" if none)
 * @property {string} ciEn - English contraindications ("—" if none)
 */

// ============ DRUG DATABASE ============
// perKg doses in the unit shown; max = absolute ceiling where applicable
/** @type {Drug[]} */
const DRUGS = [{
  id: "propofol",
  name: "Propofol",
  cat: "induction",
  doses: [{
    el: "Εισαγωγή (ενήλικες)",
    en: "Induction (adult)",
    lo: 1.5,
    hi: 2.5,
    unit: "mg/kg",
    max: null
  }, {
    el: "Εισαγωγή (παιδιά)",
    en: "Induction (peds)",
    lo: 2.5,
    hi: 3.5,
    unit: "mg/kg",
    max: null
  }, {
    el: "Συντήρηση TIVA",
    en: "Maintenance TIVA",
    lo: 4,
    hi: 12,
    unit: "mg/kg/h",
    max: null
  }, {
    el: "Καταστολή",
    en: "Sedation",
    lo: 0.5,
    hi: 1,
    unit: "mg/kg",
    max: null
  }],
  notesEl: "Μείωση δόσης σε ηλικιωμένους/υποογκαιμία. Πόνος στην έγχυση — προσθήκη λιδοκαΐνης.",
  notesEn: "Reduce dose in elderly/hypovolemia. Injection pain — add lidocaine.",
  ciEl: "Αλλεργία σε σόγια/αυγό (σχετική), σοβαρή υπόταση",
  ciEn: "Soy/egg allergy (relative), severe hypotension"
}, {
  id: "etomidate",
  name: "Etomidate",
  cat: "induction",
  doses: [{
    el: "Εισαγωγή",
    en: "Induction",
    lo: 0.2,
    hi: 0.3,
    unit: "mg/kg",
    max: null
  }],
  notesEl: "Αιμοδυναμική σταθερότητα. Καταστολή επινεφριδίων — αποφυγή σε σήψη/συνεχή έγχυση.",
  notesEn: "Hemodynamic stability. Adrenal suppression — avoid in sepsis/infusion.",
  ciEl: "Σήψη (σχετική), πορφυρία",
  ciEn: "Sepsis (relative), porphyria"
}, {
  id: "ketamine",
  name: "Ketamine",
  cat: "induction",
  doses: [{
    el: "Εισαγωγή IV",
    en: "Induction IV",
    lo: 1,
    hi: 2,
    unit: "mg/kg",
    max: null
  }, {
    el: "Εισαγωγή IM",
    en: "Induction IM",
    lo: 4,
    hi: 6,
    unit: "mg/kg",
    max: null
  }, {
    el: "Αναλγησία",
    en: "Analgesia",
    lo: 0.1,
    hi: 0.3,
    unit: "mg/kg",
    max: null
  }],
  notesEl: "Διατήρηση ΑΠ/αναπνοής. Βρογχοδιαστολή. Ψυχομιμητικά — συγχορήγηση μιδαζολάμης.",
  notesEn: "Preserves BP/respiration. Bronchodilation. Emergence phenomena — co-administer midazolam.",
  ciEl: "Σοβαρή στεφανιαία νόσος, ↑ICP με αποκλεισμένη παροχέτευση (αμφιλεγόμενο)",
  ciEn: "Severe CAD, raised ICP with obstructed drainage (controversial)"
}, {
  id: "midazolam",
  name: "Midazolam",
  cat: "induction",
  doses: [{
    el: "Προνάρκωση IV",
    en: "Premed IV",
    lo: 0.02,
    hi: 0.05,
    unit: "mg/kg",
    max: 5
  }, {
    el: "Προνάρκωση PO (παιδιά)",
    en: "Premed PO (peds)",
    lo: 0.3,
    hi: 0.5,
    unit: "mg/kg",
    max: 20
  }],
  notesEl: "Αναστρέφεται με φλουμαζενίλη 0.2 mg IV (τιτλοποίηση).",
  notesEn: "Reversed with flumazenil 0.2 mg IV (titrate).",
  ciEl: "Μυασθένεια gravis (σχετική), οξεία γλαύκωμα κλειστής γωνίας",
  ciEn: "Myasthenia gravis (relative), acute angle-closure glaucoma"
}, {
  id: "remimazolam",
  name: "Remimazolam (Byfavo)",
  cat: "induction",
  doses: [{
    el: "Καταστολή — φόρτιση",
    en: "Procedural sedation — bolus",
    fixed: "5 mg IV, μετά 2.5 mg κάθε ≥2 min κατ' ανάγκη"
  }, {
    el: "Γενική — εισαγωγή",
    en: "GA — induction",
    lo: 0.1,
    hi: 0.3,
    unit: "mg/kg",
    max: null
  }, {
    el: "Γενική — συντήρηση",
    en: "GA — maintenance",
    lo: 1,
    hi: 2,
    unit: "mg/kg/h",
    max: null
  }],
  notesEl: "Νέα υπερβραχείας δράσης βενζοδιαζεπίνη, μεταβολισμός από εστεράσες (ουδέτερος ως προς ήπαρ/νεφρό, χωρίς συσσώρευση). Ταχεία & προβλέψιμη ανάνηψη. Καρδιαγγειακή σταθερότητα. Αναστρέφεται με φλουμαζενίλη.",
  notesEn: "Novel ultra-short-acting benzodiazepine, esterase-metabolised (organ-independent, no accumulation). Rapid, predictable recovery. Cardiovascular stability. Reversed with flumazenil.",
  ciEl: "Γνωστή υπερευαισθησία σε δεξτράνη 40 (έκδοχο), σοβαρή μη αντιρροπούμενη ΚΑ",
  ciEn: "Known hypersensitivity to dextran 40 (excipient), severe decompensated HF"
}, {
  id: "thiopental",
  name: "Thiopental",
  cat: "induction",
  doses: [{
    el: "Εισαγωγή",
    en: "Induction",
    lo: 3,
    hi: 5,
    unit: "mg/kg",
    max: null
  }],
  notesEl: "Ταχεία έναρξη. Εγκεφαλοπροστασία (↓CMRO2).",
  notesEn: "Rapid onset. Cerebroprotection (↓CMRO2).",
  ciEl: "Πορφυρία, σοβαρό άσθμα, υποογκαιμία",
  ciEn: "Porphyria, severe asthma, hypovolemia"
}, {
  id: "sevoflurane",
  name: "Sevoflurane",
  cat: "volatile",
  doses: [{
    el: "MAC (40 ετών)",
    en: "MAC (age 40)",
    fixed: "2.0% (χωρίς N₂O)"
  }, {
    el: "Εισαγωγή με μάσκα",
    en: "Mask induction",
    fixed: "6–8% (σταδιακά)"
  }, {
    el: "Συντήρηση",
    en: "Maintenance",
    fixed: "1.5–2.5% (τιτλοποίηση)"
  }],
  notesEl: "Χαμηλή διαλυτότητα → ταχεία εισαγωγή/ανάνηψη. Μη ερεθιστικό → κατάλληλο για εισαγωγή με μάσκα. Age-adjusted MAC: βλ. Εργαλεία → MAC.",
  notesEn: "Low solubility → rapid induction/emergence. Non-irritant → suitable for mask induction. Age-adjusted MAC: see Tools → MAC.",
  ciEl: "Ιστορικό κακοήθους υπερθερμίας, σοβαρή υποογκαιμία",
  ciEn: "History of malignant hyperthermia, severe hypovolaemia"
}, {
  id: "desflurane",
  name: "Desflurane",
  cat: "volatile",
  doses: [{
    el: "MAC (40 ετών)",
    en: "MAC (age 40)",
    fixed: "6.4% (χωρίς N₂O)"
  }, {
    el: "Συντήρηση",
    en: "Maintenance",
    fixed: "4–7% (τιτλοποίηση)"
  }],
  notesEl: "Χαμηλότερη διαλυτότητα → ταχύτερη ανάνηψη (χρήσιμο σε παχύσαρκους/μακρές επεμβάσεις). Ερεθιστικό αεραγωγού → ΟΧΙ για εισαγωγή με μάσκα (βήχας, λαρυγγόσπασμος). Ταχεία αύξηση → συμπαθητική διέγερση.",
  notesEn: "Lower solubility → fastest emergence (useful in obesity/long cases). Airway irritant → NOT for mask induction (cough, laryngospasm). Rapid ↑ → sympathetic stimulation.",
  ciEl: "Ιστορικό κακοήθους υπερθερμίας· αποφυγή σε αντιδραστικό αεραγωγό",
  ciEn: "History of malignant hyperthermia; avoid in reactive airway"
}, {
  id: "isoflurane",
  name: "Isoflurane",
  cat: "volatile",
  doses: [{
    el: "MAC (40 ετών)",
    en: "MAC (age 40)",
    fixed: "1.15% (χωρίς N₂O)"
  }, {
    el: "Συντήρηση",
    en: "Maintenance",
    fixed: "0.8–1.5% (τιτλοποίηση)"
  }],
  notesEl: "Οικονομικό. Μέτρια διαλυτότητα → βραδύτερη ανάνηψη. Ερεθιστικό → όχι για εισαγωγή. Αγγειοδιαστολή, πιθανή coronary steal (θεωρητικά).",
  notesEn: "Economical. Intermediate solubility → slower emergence. Irritant → not for induction. Vasodilation, theoretical coronary steal.",
  ciEl: "Ιστορικό κακοήθους υπερθερμίας",
  ciEn: "History of malignant hyperthermia"
}, {
  id: "n2o",
  name: "Nitrous oxide (N₂O)",
  cat: "volatile",
  doses: [{
    el: "MAC",
    en: "MAC",
    fixed: "104% (μόνο του δεν επαρκεί)"
  }, {
    el: "Συνήθης χρήση",
    en: "Typical use",
    fixed: "50–70% με O₂ (μείγμα)"
  }, {
    el: "Επίδραση MAC-sparing",
    en: "MAC-sparing effect",
    fixed: "~1% N₂O ≈ 1% μείωση MAC πτητικού"
  }],
  notesEl: "Αναλγητικό/αγχολυτικό αέριο, ταχεία έναρξη/αποδρομή. Μειώνει την απαιτούμενη συγκέντρωση πτητικού (αθροιστικό MAC). Second-gas effect, diffusion hypoxia στην αποδρομή (100% O₂). Αδρανοποιεί βιταμίνη B12 (παρατεταμένη έκθεση).",
  notesEn: "Analgesic/anxiolytic gas, rapid on/offset. Reduces required volatile (additive MAC). Second-gas effect, diffusion hypoxia on emergence (100% O₂). Inactivates vitamin B12 (prolonged exposure).",
  ciEl: "Πνευμοθώρακας, εντερική απόφραξη, μέση/κόλπος αέρα, πνευμοκρανίο, εμβολή αέρα, πρώιμη εγκυμοσύνη, ↑B12/φυλλικό έλλειμμα",
  ciEn: "Pneumothorax, bowel obstruction, air-filled spaces, pneumocephalus, air embolism, early pregnancy, B12/folate deficiency"
}, {
  id: "fentanyl",
  name: "Fentanyl",
  cat: "opioid",
  doses: [{
    el: "Εισαγωγή",
    en: "Induction",
    lo: 1,
    hi: 3,
    unit: "mcg/kg",
    max: null
  }, {
    el: "Διεγχειρητικά bolus",
    en: "Intraop bolus",
    lo: 0.5,
    hi: 1,
    unit: "mcg/kg",
    max: null
  }, {
    el: "Ραχιαία (spinal)",
    en: "Spinal",
    fixed: "10–25 mcg (adjunct σε τοπικό)"
  }, {
    el: "Επισκληρίδιος (bolus)",
    en: "Epidural (bolus)",
    fixed: "50–100 mcg"
  }, {
    el: "Επισκληρίδιος (έγχυση)",
    en: "Epidural (infusion)",
    fixed: "2–4 mcg/mL στο μείγμα"
  }],
  notesEl: "Κορύφωση 3–5 min. Δύσκαμπτος θώρακας σε ταχεία υψηλή δόση. Νευραξονικά: λιπόφιλο, ταχεία έναρξη, εντοπισμένη δράση.",
  notesEn: "Peak 3–5 min. Chest wall rigidity with rapid high dose. Neuraxial: lipophilic, fast onset, segmental effect.",
  ciEl: "—",
  ciEn: "—"
}, {
  id: "sufentanil",
  name: "Sufentanil",
  cat: "opioid",
  doses: [{
    el: "Εισαγωγή",
    en: "Induction",
    lo: 0.1,
    hi: 0.5,
    unit: "mcg/kg",
    max: null
  }, {
    el: "Διεγχειρητικά bolus",
    en: "Intraop bolus",
    lo: 0.1,
    hi: 0.25,
    unit: "mcg/kg",
    max: null
  }, {
    el: "Ραχιαία (spinal)",
    en: "Spinal",
    fixed: "2.5–10 mcg (adjunct)"
  }, {
    el: "Επισκληρίδιος (bolus)",
    en: "Epidural (bolus)",
    fixed: "10–20 mcg"
  }, {
    el: "Επισκληρίδιος (έγχυση)",
    en: "Epidural (infusion)",
    fixed: "0.5–1 mcg/mL στο μείγμα"
  }],
  notesEl: "~10× ισχυρότερη της φαιντανύλης. Υψηλή λιποφιλία, γρήγορη έναρξη. Νευραξονικά συχνά με τοκετό/μαιευτική.",
  notesEn: "~10× more potent than fentanyl. Highly lipophilic, rapid onset. Neuraxial common in labour/obstetrics.",
  ciEl: "—",
  ciEn: "—"
}, {
  id: "alfentanil",
  name: "Alfentanil",
  cat: "opioid",
  doses: [{
    el: "Bolus (εισαγωγή)",
    en: "Bolus (induction)",
    lo: 10,
    hi: 20,
    unit: "mcg/kg",
    max: null
  }, {
    el: "Απόσβεση λαρυγγοσκόπησης",
    en: "Blunt laryngoscopy",
    lo: 10,
    hi: 15,
    unit: "mcg/kg",
    max: null
  }, {
    el: "Έγχυση",
    en: "Infusion",
    lo: 0.5,
    hi: 2,
    unit: "mcg/kg/min",
    max: null
  }],
  notesEl: "Ταχεία έναρξη (~1 min) λόγω υψηλού μη-ιονισμένου κλάσματος. Σύντομη δράση. Ιδανικό για βραχείες έντονες διεγέρσεις. Δεν χρησιμοποιείται νευραξονικά.",
  notesEn: "Rapid onset (~1 min) due to high un-ionised fraction. Short duration. Ideal for brief intense stimuli. Not used neuraxially.",
  ciEl: "—",
  ciEn: "—"
}, {
  id: "remifentanil",
  name: "Remifentanil",
  cat: "opioid",
  doses: [{
    el: "Έγχυση",
    en: "Infusion",
    lo: 0.05,
    hi: 0.5,
    unit: "mcg/kg/min",
    max: null
  }, {
    el: "Bolus (προσεκτικά)",
    en: "Bolus (caution)",
    lo: 0.5,
    hi: 1,
    unit: "mcg/kg",
    max: null
  }],
  notesEl: "Υπερταχεία αποδρομή (εστεράσες). Σχεδιασμός μετεγχειρητικής αναλγησίας πριν τη διακοπή. Βραδυκαρδία/υπόταση. Δεν χορηγείται νευραξονικά (η γλυκίνη στο σκεύασμα είναι νευροτοξική).",
  notesEn: "Ultra-rapid offset (esterases). Plan postop analgesia before stopping. Bradycardia/hypotension. Not for neuraxial use (glycine excipient is neurotoxic).",
  ciEl: "Όχι bolus σε αυτόματη αναπνοή χωρίς ετοιμότητα αερισμού. Όχι νευραξονικά.",
  ciEn: "No bolus in spontaneous ventilation without airway readiness. Not neuraxial."
}, {
  id: "morphine",
  name: "Morphine",
  cat: "opioid",
  doses: [{
    el: "Αναλγησία IV",
    en: "Analgesia IV",
    lo: 0.05,
    hi: 0.1,
    unit: "mg/kg",
    max: null
  }, {
    el: "Ραχιαία (spinal)",
    en: "Spinal",
    fixed: "100–300 mcg (0.1–0.3 mg)"
  }, {
    el: "Επισκληρίδιος",
    en: "Epidural",
    fixed: "2–4 mg"
  }],
  notesEl: "Έναρξη 5–10 min, διάρκεια 3–4 h. Ισταμινοαπελευθέρωση. Προσοχή σε νεφρική ανεπάρκεια (M6G). Νευραξονικά: υδρόφιλο → όψιμη αναπνευστική καταστολή (έως 24 h) — παρακολούθηση.",
  notesEn: "Onset 5–10 min, duration 3–4 h. Histamine release. Caution in renal failure (M6G). Neuraxial: hydrophilic → delayed respiratory depression (up to 24 h) — monitor.",
  ciEl: "Σοβαρή νεφρική ανεπάρκεια (σχετική)",
  ciEn: "Severe renal failure (relative)"
}, {
  id: "rocuronium",
  name: "Rocuronium",
  cat: "nmb",
  doses: [{
    el: "Διασωλήνωση",
    en: "Intubation",
    lo: 0.6,
    hi: 0.6,
    unit: "mg/kg",
    max: null
  }, {
    el: "RSI",
    en: "RSI",
    lo: 1,
    hi: 1.2,
    unit: "mg/kg",
    max: null
  }, {
    el: "Συντήρηση",
    en: "Maintenance",
    lo: 0.1,
    hi: 0.15,
    unit: "mg/kg",
    max: null
  }],
  notesEl: "RSI: συνθήκες σε ~60 s. Αναστροφή με sugammadex.",
  notesEn: "RSI: conditions in ~60 s. Reversal with sugammadex.",
  ciEl: "Γνωστή αναφυλαξία σε αμινοστεροειδή",
  ciEn: "Known anaphylaxis to aminosteroids"
}, {
  id: "succinylcholine",
  name: "Succinylcholine",
  cat: "nmb",
  doses: [{
    el: "RSI IV",
    en: "RSI IV",
    lo: 1,
    hi: 1.5,
    unit: "mg/kg",
    max: null
  }, {
    el: "IM (παιδιά, χωρίς φλέβα)",
    en: "IM (peds, no IV)",
    lo: 4,
    hi: 4,
    unit: "mg/kg",
    max: 150
  }],
  notesEl: "Έναρξη 30–60 s, διάρκεια 5–10 min.",
  notesEn: "Onset 30–60 s, duration 5–10 min.",
  ciEl: "Υπερκαλιαιμία, εγκαύματα/denervation >24–48h, μυοπάθειες, ιστορικό ΚΥ, ανεπάρκεια ψευδοχοληνεστεράσης",
  ciEn: "Hyperkalemia, burns/denervation >24–48h, myopathies, MH history, pseudocholinesterase deficiency"
}, {
  id: "cisatracurium",
  name: "Cisatracurium",
  cat: "nmb",
  doses: [{
    el: "Διασωλήνωση",
    en: "Intubation",
    lo: 0.15,
    hi: 0.2,
    unit: "mg/kg",
    max: null
  }, {
    el: "Συντήρηση",
    en: "Maintenance",
    lo: 0.03,
    hi: 0.03,
    unit: "mg/kg",
    max: null
  }],
  notesEl: "Hofmann αποδόμηση — ιδανικό σε νεφρική/ηπατική ανεπάρκεια.",
  notesEn: "Hofmann elimination — ideal in renal/hepatic failure.",
  ciEl: "—",
  ciEn: "—"
}, {
  id: "sugammadex",
  name: "Sugammadex",
  cat: "reversal",
  doses: [{
    el: "Μέτριος αποκλεισμός (T2)",
    en: "Moderate block (T2)",
    lo: 2,
    hi: 2,
    unit: "mg/kg",
    max: null
  }, {
    el: "Βαθύς αποκλεισμός (PTC 1–2)",
    en: "Deep block (PTC 1–2)",
    lo: 4,
    hi: 4,
    unit: "mg/kg",
    max: null
  }, {
    el: "Άμεση αναστροφή",
    en: "Immediate reversal",
    lo: 16,
    hi: 16,
    unit: "mg/kg",
    max: null
  }],
  notesEl: "Μόνο για ροκουρόνιο/βεκουρόνιο. Αλληλεπίδραση με ορμονικά αντισυλληπτικά.",
  notesEn: "Rocuronium/vecuronium only. Interacts with hormonal contraceptives.",
  ciEl: "Σοβαρή νεφρική ανεπάρκεια (eGFR<30, σχετική)",
  ciEn: "Severe renal failure (eGFR<30, relative)"
}, {
  id: "neostigmine",
  name: "Neostigmine + Glycopyrrolate",
  cat: "reversal",
  doses: [{
    el: "Αναστροφή (TOF≥4 με fade)",
    en: "Reversal (TOF≥4 with fade)",
    lo: 0.04,
    hi: 0.07,
    unit: "mg/kg",
    max: 5
  }],
  notesEl: "Με γλυκοπυρρολάτη 0.01 mg/kg ή ατροπίνη 0.02 mg/kg.",
  notesEn: "With glycopyrrolate 0.01 mg/kg or atropine 0.02 mg/kg.",
  ciEl: "Μηχανική απόφραξη εντέρου/ουροφόρων",
  ciEn: "Mechanical bowel/urinary obstruction"
}, {
  id: "naloxone",
  name: "Naloxone (Narcan)",
  cat: "reversal",
  doses: [{
    el: "Ανακοπή αναπνοής (τιτλοποίηση)",
    en: "Respiratory arrest (titrate)",
    fixed: "0.4 mg IV, επανάληψη κάθε 2–3 min"
  }, {
    el: "Περιεγχειρητικά (προσεκτικά)",
    en: "Perioperative (careful)",
    fixed: "20–40 mcg IV bolus, τιτλοποίηση"
  }, {
    el: "Παιδιά",
    en: "Paediatric",
    lo: 0.01,
    hi: 0.01,
    unit: "mg/kg",
    max: 0.4
  }, {
    el: "Έγχυση",
    en: "Infusion",
    fixed: "~2/3 της αρχικής αποτελεσματικής δόσης ανά ώρα"
  }],
  notesEl: "Ανταγωνιστής οπιοειδών. Τιτλοποίηση σε μικρές δόσεις περιεγχειρητικά (αποφυγή οξέος πόνου/υπέρτασης/πνευμονικού οιδήματος). Διάρκεια (30–60 min) συχνά < του οπιοειδούς → κίνδυνος επαναναρκοποίησης, χρειάζεται παρακολούθηση ή έγχυση.",
  notesEn: "Opioid antagonist. Titrate in small doses perioperatively (avoid acute pain/hypertension/pulmonary oedema). Duration (30–60 min) often shorter than the opioid → re-narcotisation risk, needs monitoring or infusion.",
  ciEl: "Οπιοειδοεξαρτημένοι (οξύ στερητικό) — σχετική",
  ciEn: "Opioid-dependent (acute withdrawal) — relative"
}, {
  id: "flumazenil",
  name: "Flumazenil (Anexate)",
  cat: "reversal",
  doses: [{
    el: "Αρχική",
    en: "Initial",
    fixed: "0.2 mg IV σε 15 s"
  }, {
    el: "Επανάληψη",
    en: "Repeat",
    fixed: "0.1 mg κάθε 60 s (max ~1 mg· 3 mg/h)"
  }, {
    el: "Έγχυση (υποτροπή)",
    en: "Infusion (resedation)",
    fixed: "0.1–0.4 mg/h"
  }],
  notesEl: "Ανταγωνιστής βενζοδιαζεπινών. Βραχεία δράση (~1 h) → κίνδυνος επανακαταστολής. Χρήση με προσοχή: μπορεί να προκαλέσει σπασμούς (χρόνια λήψη BZD, μικτή δηλητηρίαση με τρικυκλικά).",
  notesEn: "Benzodiazepine antagonist. Short duration (~1 h) → resedation risk. Use cautiously: may precipitate seizures (chronic BZD use, mixed TCA overdose).",
  ciEl: "Χρόνια εξάρτηση BZD, συγχορήγηση με προσπασμωδικά, μικτή δηλητηρίαση με τρικυκλικά",
  ciEn: "Chronic BZD dependence, co-ingested proconvulsants, mixed TCA overdose"
}, {
  id: "atropine",
  name: "Atropine",
  cat: "emergency",
  doses: [{
    el: "Βραδυκαρδία",
    en: "Bradycardia",
    lo: 0.02,
    hi: 0.02,
    unit: "mg/kg",
    max: 1,
    minAbs: 0.1
  }],
  notesEl: "Ελάχιστη δόση 0.1 mg (παράδοξη βραδυκαρδία).",
  notesEn: "Minimum dose 0.1 mg (paradoxical bradycardia).",
  ciEl: "Γλαύκωμα κλειστής γωνίας",
  ciEn: "Angle-closure glaucoma"
}, {
  id: "adrenaline",
  name: "Adrenaline (Epinephrine)",
  cat: "emergency",
  doses: [{
    el: "Ανακοπή IV",
    en: "Arrest IV",
    lo: 0.01,
    hi: 0.01,
    unit: "mg/kg",
    max: 1
  }, {
    el: "Αναφυλαξία IM (ενήλ.)",
    en: "Anaphylaxis IM (adult)",
    fixed: "0.5 mg (1:1000)"
  }, {
    el: "Αναφυλαξία IM (παιδιά)",
    en: "Anaphylaxis IM (peds)",
    lo: 0.01,
    hi: 0.01,
    unit: "mg/kg",
    max: 0.5
  }, {
    el: "Έγχυση",
    en: "Infusion",
    lo: 0.05,
    hi: 0.5,
    unit: "mcg/kg/min",
    max: null
  }],
  notesEl: "Ανακοπή: 1:10,000 IV. Αναφυλαξία: 1:1000 IM προσθιοπλάγια μηρού.",
  notesEn: "Arrest: 1:10,000 IV. Anaphylaxis: 1:1000 IM anterolateral thigh.",
  ciEl: "—",
  ciEn: "—"
}, {
  id: "ephedrine",
  name: "Ephedrine",
  cat: "vasoactive",
  doses: [{
    el: "Bolus",
    en: "Bolus",
    fixed: "5–10 mg IV (ενήλ.) / 0.1–0.2 mg/kg (παιδιά)"
  }],
  notesEl: "Έμμεση δράση — ταχυφυλαξία. ↑ΚΣ + ↑ΑΠ.",
  notesEn: "Indirect action — tachyphylaxis. ↑HR + ↑BP.",
  ciEl: "—",
  ciEn: "—"
}, {
  id: "phenylephrine",
  name: "Phenylephrine",
  cat: "vasoactive",
  doses: [{
    el: "Bolus",
    en: "Bolus",
    lo: 0.5,
    hi: 1,
    unit: "mcg/kg",
    max: 200
  }, {
    el: "Έγχυση",
    en: "Infusion",
    lo: 0.1,
    hi: 1,
    unit: "mcg/kg/min",
    max: null
  }],
  notesEl: "Καθαρός α1 — αντανακλαστική βραδυκαρδία.",
  notesEn: "Pure α1 — reflex bradycardia.",
  ciEl: "Σοβαρή βραδυκαρδία",
  ciEn: "Severe bradycardia"
}, {
  id: "noradrenaline",
  name: "Noradrenaline",
  cat: "vasoactive",
  doses: [{
    el: "Έγχυση",
    en: "Infusion",
    lo: 0.05,
    hi: 0.5,
    unit: "mcg/kg/min",
    max: null
  }],
  notesEl: "Πρώτης γραμμής αγγειοσυσπαστικό σε κατανεμητική καταπληξία.",
  notesEn: "First-line vasopressor in distributive shock.",
  ciEl: "—",
  ciEn: "—"
}, {
  id: "dobutamine",
  name: "Dobutamine",
  cat: "vasoactive",
  doses: [{
    el: "Έγχυση",
    en: "Infusion",
    lo: 2.5,
    hi: 10,
    unit: "mcg/kg/min",
    max: null
  }],
  notesEl: "β1-ινότροπο + ήπια β2-αγγειοδιαστολή. Καρδιογενής καταπληξία/χαμηλή παροχή. Εύρος 0.5–20 µg/kg/min. Ταχυκαρδία/αρρυθμίες, πιθανή ↓ΑΠ.",
  notesEn: "β1-inotrope + mild β2-vasodilation. Cardiogenic shock/low output. Range 0.5–20 µg/kg/min. Tachycardia/arrhythmias, may ↓BP.",
  ciEl: "Δυναμική απόφραξη LVOT (π.χ. HOCM), σοβαρή αορτική στένωση",
  ciEn: "Dynamic LVOT obstruction (e.g. HOCM), severe aortic stenosis"
},
// ---------- Αντιυπερτασικά ----------
{
  id: "labetalol",
  name: "Labetalol",
  cat: "antihtn",
  doses: [{
    el: "Bolus IV",
    en: "IV bolus",
    fixed: "5–10 mg, επανάληψη/διπλασιασμός κάθε 10 min (max ~200 mg)"
  }, {
    el: "Έγχυση",
    en: "Infusion",
    fixed: "0.5–2 mg/min, τιτλοποίηση"
  }],
  notesEl: "α+β αποκλειστής (1:7 IV). Περιεγχειρητική υπέρταση, προεκλαμψία, αορτικός διαχωρισμός. Δράση 5–10 min.",
  notesEn: "Combined α+β blocker (1:7 IV). Periop hypertension, pre-eclampsia, aortic dissection. Onset 5–10 min.",
  ciEl: "Άσθμα, βραδυκαρδία, AV block 2°/3°, μη αντιρροπούμενη ΚΑ",
  ciEn: "Asthma, bradycardia, 2°/3° AV block, decompensated HF"
}, {
  id: "esmolol",
  name: "Esmolol",
  cat: "antihtn",
  doses: [{
    el: "Φόρτιση (1 min)",
    en: "Loading (1 min)",
    lo: 0.5,
    hi: 1,
    unit: "mg/kg",
    max: null
  }, {
    el: "Έγχυση",
    en: "Infusion",
    lo: 50,
    hi: 200,
    unit: "mcg/kg/min",
    max: null
  }],
  notesEl: "Υπερβραχείας δράσης β1. Ταχυκαρδία/υπέρταση κατά τη διασωλήνωση, θυρεοτοξίκωση. t½ ~9 min.",
  notesEn: "Ultra-short-acting β1. Intubation tachy/hypertension, thyrotoxicosis. t½ ~9 min.",
  ciEl: "Βραδυκαρδία, AV block, μη αντιρροπούμενη ΚΑ, σοβαρό άσθμα",
  ciEn: "Bradycardia, AV block, decompensated HF, severe asthma"
}, {
  id: "metoprolol",
  name: "Metoprolol",
  cat: "antihtn",
  doses: [{
    el: "Bolus IV",
    en: "IV bolus",
    fixed: "1–5 mg/2min, επανάληψη έως ~15 mg"
  }],
  notesEl: "β1-εκλεκτικός. Περιεγχειρητική ταχυκαρδία/ισχαιμία, έλεγχος ρυθμού.",
  notesEn: "β1-selective. Periop tachycardia/ischaemia, rate control.",
  ciEl: "Βραδυκαρδία, AV block, μη αντιρροπούμενη ΚΑ",
  ciEn: "Bradycardia, AV block, decompensated HF"
}, {
  id: "urapidil",
  name: "Urapidil (Ebrantil)",
  cat: "antihtn",
  doses: [{
    el: "Bolus IV (αργό)",
    en: "IV bolus (slow)",
    fixed: "10–50 mg, επανάληψη μετά 5 min"
  }, {
    el: "Έγχυση",
    en: "Infusion",
    fixed: "αρχ. 2 mg/min, συντήρηση 9–30 mg/h"
  }],
  notesEl: "α1-αποκλειστής + κεντρική 5-HT1A δράση. Περιεγχειρητική υπέρταση χωρίς αντανακλαστική ταχυκαρδία. Δεν ↑ ενδοκράνια πίεση.",
  notesEn: "α1-blocker + central 5-HT1A action. Periop hypertension without reflex tachycardia. Does not raise ICP.",
  ciEl: "Αορτική στένωση, αρτηριοφλεβικό shunt",
  ciEn: "Aortic stenosis, arteriovenous shunt"
}, {
  id: "hydralazine",
  name: "Hydralazine",
  cat: "antihtn",
  doses: [{
    el: "Bolus IV",
    en: "IV bolus",
    fixed: "5–10 mg κάθε 20–30 min"
  }],
  notesEl: "Άμεσο αρτηριακό αγγειοδιασταλτικό. Προεκλαμψία/κύηση. Αντανακλαστική ταχυκαρδία, καθυστερημένη/απρόβλεπτη δράση (20 min).",
  notesEn: "Direct arterial vasodilator. Pre-eclampsia/pregnancy. Reflex tachycardia, delayed/unpredictable onset (20 min).",
  ciEl: "Ταχυκαρδία, σοβαρή στεφανιαία νόσος, αορτικός διαχωρισμός",
  ciEn: "Tachycardia, severe CAD, aortic dissection"
}, {
  id: "nicardipine",
  name: "Nicardipine",
  cat: "antihtn",
  doses: [{
    el: "Έγχυση",
    en: "Infusion",
    fixed: "5 mg/h, ↑2.5 mg/h κάθε 5–15 min (max 15 mg/h)"
  }],
  notesEl: "Διυδροπυριδινικός ανταγωνιστής ασβεστίου. Ελεγχόμενη υπόταση, νευροχειρουργική, προεκλαμψία. Λιγότερη αρνητική ινοτροπία.",
  notesEn: "Dihydropyridine calcium antagonist. Controlled hypotension, neurosurgery, pre-eclampsia. Less negative inotropy.",
  ciEl: "Προχωρημένη αορτική στένωση",
  ciEn: "Advanced aortic stenosis"
}, {
  id: "gtn",
  name: "Glyceryl trinitrate (GTN)",
  cat: "antihtn",
  doses: [{
    el: "Έγχυση",
    en: "Infusion",
    fixed: "5–200 µg/min, τιτλοποίηση"
  }],
  notesEl: "Κυρίως φλεβοδιασταλτικό (↓προφόρτιση). Ισχαιμία μυοκαρδίου, οξύ πνευμονικό οίδημα, ελεγχόμενη υπόταση.",
  notesEn: "Predominantly venodilator (↓preload). Myocardial ischaemia, acute pulmonary oedema, controlled hypotension.",
  ciEl: "Υποογκαιμία, PDE-5 αναστολείς, σοβαρή αορτική στένωση",
  ciEn: "Hypovolaemia, PDE-5 inhibitors, severe aortic stenosis"
}, {
  id: "snp",
  name: "Sodium nitroprusside",
  cat: "antihtn",
  doses: [{
    el: "Έγχυση",
    en: "Infusion",
    lo: 0.3,
    hi: 10,
    unit: "mcg/kg/min",
    max: null
  }],
  notesEl: "Αρτηριακό+φλεβικό αγγειοδιασταλτικό. Υπερτασική κρίση, ελεγχόμενη υπόταση. Κίνδυνος τοξικότητας κυανίου (>2 µg/kg/min παρατεταμένα). Προστασία από φως.",
  notesEn: "Arterial+venous vasodilator. Hypertensive emergency, controlled hypotension. Cyanide toxicity risk (>2 µg/kg/min prolonged). Protect from light.",
  ciEl: "Ηπατική/νεφρική ανεπάρκεια, οπτική νευροπάθεια Leber",
  ciEn: "Hepatic/renal failure, Leber optic neuropathy"
}, {
  id: "clonidine",
  name: "Clonidine",
  cat: "antihtn",
  doses: [{
    el: "IV (αργό, 10 min)",
    en: "IV (slow, 10 min)",
    lo: 1,
    hi: 2,
    unit: "mcg/kg",
    max: 150
  }],
  notesEl: "Κεντρικός α2-αγωνιστής. Περιεγχειρητική υπέρταση, αναλγητικό adjunct, στέρηση. Καταστολή, βραδυκαρδία, rebound υπέρταση.",
  notesEn: "Central α2-agonist. Periop hypertension, analgesic adjunct, withdrawal. Sedation, bradycardia, rebound hypertension.",
  ciEl: "Βραδυκαρδία, sick sinus, σοβαρή στεφανιαία νόσος",
  ciEn: "Bradycardia, sick sinus, severe CAD"
}, {
  id: "dexmedetomidine",
  name: "Dexmedetomidine",
  cat: "sedation",
  doses: [{
    el: "Φόρτιση (10 min)",
    en: "Loading (10 min)",
    lo: 0.5,
    hi: 1,
    unit: "mcg/kg",
    max: null
  }, {
    el: "Έγχυση",
    en: "Infusion",
    lo: 0.2,
    hi: 0.7,
    unit: "mcg/kg/h",
    max: null
  }],
  notesEl: "Καταστολή χωρίς αναπνευστική καταστολή. Βραδυκαρδία/υπόταση.",
  notesEn: "Sedation without respiratory depression. Bradycardia/hypotension.",
  ciEl: "Προχωρημένος κολποκοιλιακός αποκλεισμός",
  ciEn: "Advanced AV block"
}, {
  id: "lidocaine",
  name: "Lidocaine",
  cat: "local",
  doses: [{
    el: "Μέγιστη δόση (απλή)",
    en: "Max dose (plain)",
    lo: 3,
    hi: 3,
    unit: "mg/kg",
    max: 300
  }, {
    el: "Μέγιστη δόση (+αδρεναλίνη)",
    en: "Max dose (+epi)",
    lo: 7,
    hi: 7,
    unit: "mg/kg",
    max: 500
  }, {
    el: "IV πριν προποφόλη",
    en: "IV before propofol",
    lo: 0.5,
    hi: 1,
    unit: "mg/kg",
    max: null
  }],
  notesEl: "Σημεία LAST: περιστοματική αιμωδία, εμβοές, σπασμοί, αρρυθμίες.",
  notesEn: "LAST signs: perioral numbness, tinnitus, seizures, arrhythmias.",
  ciEl: "—",
  ciEn: "—"
}, {
  id: "ropivacaine",
  name: "Ropivacaine",
  cat: "local",
  doses: [{
    el: "Μέγιστη δόση",
    en: "Max dose",
    lo: 3,
    hi: 3,
    unit: "mg/kg",
    max: 225
  }],
  notesEl: "Λιγότερο καρδιοτοξική από βουπιβακαΐνη. Διαφορικός αποκλεισμός.",
  notesEn: "Less cardiotoxic than bupivacaine. Differential block.",
  ciEl: "—",
  ciEn: "—"
}, {
  id: "bupivacaine",
  name: "Bupivacaine",
  cat: "local",
  doses: [{
    el: "Μέγιστη δόση",
    en: "Max dose",
    lo: 2,
    hi: 2.5,
    unit: "mg/kg",
    max: 175
  }],
  notesEl: "Καρδιοτοξικότητα — ποτέ IV. Ραχιαία: 10–15 mg υπέρβαρο 0.5%.",
  notesEn: "Cardiotoxic — never IV. Spinal: 10–15 mg hyperbaric 0.5%.",
  ciEl: "Ενδοφλέβια περιοχική αναισθησία (IVRA)",
  ciEn: "IV regional anesthesia (IVRA)"
}, {
  id: "ondansetron",
  name: "Ondansetron",
  cat: "antiemetic",
  doses: [{
    el: "Προφύλαξη PONV",
    en: "PONV prophylaxis",
    lo: 0.1,
    hi: 0.1,
    unit: "mg/kg",
    max: 4
  }],
  notesEl: "5-HT₃ ανταγωνιστής. Χορήγηση στο τέλος. Προσοχή QT.",
  notesEn: "5-HT₃ antagonist. Give at end of surgery. QT caution.",
  ciEl: "Συγγενές μακρύ QT",
  ciEn: "Congenital long QT"
}, {
  id: "metoclopramide",
  name: "Metoclopramide",
  cat: "antiemetic",
  doses: [{
    el: "Αντιεμετικό",
    en: "Antiemetic",
    fixed: "10 mg IV (παιδιά 0.15 mg/kg)"
  }],
  notesEl: "D₂ ανταγωνιστής + προκινητικό. Λιγότερο ισχυρό ως μονοθεραπεία PONV. Εξωπυραμιδικά/δυστονία (ιδίως νέοι/υψηλές δόσεις).",
  notesEn: "D₂ antagonist + prokinetic. Weak PONV monotherapy. Extrapyramidal/dystonia (esp. young/high dose).",
  ciEl: "Απόφραξη/διάτρηση εντέρου, φαιοχρωμοκύττωμα, Parkinson",
  ciEn: "Bowel obstruction/perforation, phaeochromocytoma, Parkinson's"
}, {
  id: "droperidol",
  name: "Droperidol",
  cat: "antiemetic",
  doses: [{
    el: "Προφύλαξη PONV",
    en: "PONV prophylaxis",
    fixed: "0.625–1.25 mg IV"
  }],
  notesEl: "Βουτυροφαινόνη (D₂). Ισχυρό αντιεμετικό σε χαμηλή δόση. Παρακολούθηση QT (black box). Αποφυγή σε βραδυκαρδία/υποκαλιαιμία.",
  notesEn: "Butyrophenone (D₂). Potent low-dose antiemetic. Monitor QT (black box). Avoid in bradycardia/hypokalaemia.",
  ciEl: "Μακρύ QT, φαιοχρωμοκύττωμα",
  ciEn: "Long QT, phaeochromocytoma"
}, {
  id: "dexamethasone",
  name: "Dexamethasone",
  cat: "antiemetic",
  doses: [{
    el: "PONV / αναλγησία",
    en: "PONV / analgesia",
    lo: 0.1,
    hi: 0.15,
    unit: "mg/kg",
    max: 8
  }],
  notesEl: "Χορήγηση μετά την εισαγωγή. Περινεϊκός κνησμός σε ξύπνιο ασθενή.",
  notesEn: "Give after induction. Perineal itching if awake.",
  ciEl: "—",
  ciEn: "—"
}, {
  id: "paracetamol",
  name: "Paracetamol",
  cat: "adjunct",
  doses: [{
    el: "IV ≥50 kg",
    en: "IV ≥50 kg",
    fixed: "1 g ανά 6h (max 4 g/24h)"
  }, {
    el: "IV 10–50 kg",
    en: "IV 10–50 kg",
    lo: 15,
    hi: 15,
    unit: "mg/kg",
    max: 1000
  }],
  notesEl: "Μείωση σε ηπατική νόσο/καχεξία (max 3 g/24h ή 60 mg/kg).",
  notesEn: "Reduce in hepatic disease/cachexia (max 3 g/24h or 60 mg/kg).",
  ciEl: "Σοβαρή ηπατική ανεπάρκεια",
  ciEn: "Severe hepatic failure"
}, {
  id: "parecoxib",
  name: "Parecoxib (Dynastat)",
  cat: "adjunct",
  doses: [{
    el: "IV/IM",
    en: "IV/IM",
    fixed: "40 mg, μετά 20–40 mg q6–12h (max 80 mg/24h)"
  }],
  notesEl: "Εκλεκτικός COX-2 (χωρίς επίδραση αιμοπεταλίων → κατάλληλο περιεγχειρητικά). Αποφυγή σε στεφανιαία/ΑΕΕ, νεφρική βλάβη, αλλεργία σουλφοναμιδίων.",
  notesEn: "Selective COX-2 (no platelet effect → good perioperatively). Avoid in CAD/stroke, renal impairment, sulfonamide allergy.",
  ciEl: "Ισχαιμική καρδιοπάθεια, ΑΕΕ, ενεργό έλκος, σοβαρή καρδιακή/νεφρική ανεπάρκεια, 3ο τρίμηνο",
  ciEn: "Ischaemic heart disease, stroke, active ulcer, severe HF/renal failure, 3rd trimester"
}, {
  id: "ketorolac",
  name: "Ketorolac",
  cat: "adjunct",
  doses: [{
    el: "IV/IM",
    en: "IV/IM",
    fixed: "10–30 mg q6h (max 90 mg/24h· >65y ή <50kg: 60 mg/24h)"
  }],
  notesEl: "Ισχυρό ΜΣΑΦ. Μέγιστη διάρκεια 5 ημέρες (κίνδυνος έλκους/αιμορραγίας). Επίδραση αιμοπεταλίων.",
  notesEn: "Potent NSAID. Max 5 days (ulcer/bleeding risk). Platelet effect.",
  ciEl: "Νεφρική ανεπάρκεια, αιμορραγικός κίνδυνος, ενεργό έλκος, bypass στεφανιαίων",
  ciEn: "Renal impairment, bleeding risk, active ulcer, CABG"
}, {
  id: "diclofenac_ad",
  name: "Diclofenac",
  cat: "adjunct",
  doses: [{
    el: "IV/IM/PO/PR",
    en: "IV/IM/PO/PR",
    fixed: "50 mg q8h ή 75 mg q12h (max 150 mg/24h)"
  }],
  notesEl: "Μη εκλεκτικό ΜΣΑΦ. IV έγχυση σε 30 min. Καρδιαγγειακός κίνδυνος σε παρατεταμένη/υψηλή δόση.",
  notesEn: "Non-selective NSAID. IV over 30 min. Cardiovascular risk with prolonged/high dose.",
  ciEl: "Νεφρική/καρδιακή ανεπάρκεια, ενεργό έλκος, αιμορραγικός κίνδυνος, 3ο τρίμηνο",
  ciEn: "Renal/heart failure, active ulcer, bleeding risk, 3rd trimester"
}, {
  id: "ibuprofen_ad",
  name: "Ibuprofen",
  cat: "adjunct",
  doses: [{
    el: "PO / IV",
    en: "PO / IV",
    fixed: "400 mg q6–8h (max 2.4 g/24h PO· 1.2 g IV)"
  }],
  notesEl: "Μη εκλεκτικό ΜΣΑΦ, ηπιότερο προφίλ. Λήψη με τροφή PO.",
  notesEn: "Non-selective NSAID, milder profile. Take with food PO.",
  ciEl: "Νεφρική/καρδιακή ανεπάρκεια, ενεργό έλκος, σοβαρό άσθμα (ΜΣΑΦ-ευαίσθητο)",
  ciEn: "Renal/heart failure, active ulcer, severe (NSAID-sensitive) asthma"
}, {
  id: "lornoxicam",
  name: "Lornoxicam (Xefo)",
  cat: "adjunct",
  doses: [{
    el: "IV/IM/PO",
    en: "IV/IM/PO",
    fixed: "8 mg q12h (max 16 mg/24h)"
  }],
  notesEl: "Οξικάμη (μη εκλεκτικό). Ευρεία χρήση στην Ελλάδα περιεγχειρητικά.",
  notesEn: "Oxicam (non-selective). Widely used perioperatively in Greece.",
  ciEl: "Νεφρική/καρδιακή ανεπάρκεια, ενεργό έλκος, αιμορραγικός κίνδυνος",
  ciEn: "Renal/heart failure, active ulcer, bleeding risk"
}, {
  id: "magnesium",
  name: "Magnesium sulfate",
  cat: "adjunct",
  doses: [{
    el: "Opioid-sparing (φόρτιση)",
    en: "Opioid-sparing (load)",
    lo: 30,
    hi: 50,
    unit: "mg/kg",
    max: 4000
  }, {
    el: "Pre-eclampsia (φόρτιση)",
    en: "Pre-eclampsia (load)",
    fixed: "4 g IV σε 15–20 min"
  }, {
    el: "Pre-eclampsia (έγχυση)",
    en: "Pre-eclampsia (infusion)",
    fixed: "1 g/h"
  }, {
    el: "Torsades",
    en: "Torsades",
    fixed: "2 g IV"
  }],
  notesEl: "Αναλγητικό adjunct (NMDA), αντιαρρυθμικό, ενισχύει NMBDs. Παρακολούθηση αντανακλαστικών/αναπνοής σε pre-eclampsia (τοξικότητα > 3.5 mmol/L → ασβέστιο αντίδοτο).",
  notesEn: "Analgesic adjunct (NMDA), antiarrhythmic, potentiates NMBDs. Monitor reflexes/respiration in pre-eclampsia (toxicity > 3.5 mmol/L → calcium antidote).",
  ciEl: "Σοβαρή νεφρική ανεπάρκεια, μυασθένεια, κολποκοιλιακός αποκλεισμός",
  ciEn: "Severe renal failure, myasthenia, heart block"
}, {
  id: "glycopyrrolate",
  name: "Glycopyrrolate",
  cat: "adjunct",
  doses: [{
    el: "Με νεοστιγμίνη",
    en: "With neostigmine",
    lo: 0.01,
    hi: 0.01,
    unit: "mg/kg",
    max: 0.6
  }, {
    el: "Αντισιελόρροια",
    en: "Antisialagogue",
    fixed: "0.2–0.4 mg IV"
  }],
  notesEl: "Αντιμουσκαρινικό. Δεν διαπερνά ΑΕΦ (χωρίς κεντρικά φαινόμενα). Λιγότερη ταχυκαρδία από ατροπίνη.",
  notesEn: "Antimuscarinic. Does not cross BBB (no central effects). Less tachycardia than atropine.",
  ciEl: "Ταχυαρρυθμίες, γλαύκωμα κλειστής γωνίας",
  ciEn: "Tachyarrhythmias, angle-closure glaucoma"
}, {
  id: "ketamine_analgesic",
  name: "Ketamine (analgesic)",
  cat: "adjunct",
  doses: [{
    el: "Bolus (χαμηλή δόση)",
    en: "Bolus (low-dose)",
    lo: 0.15,
    hi: 0.5,
    unit: "mg/kg",
    max: null
  }, {
    el: "Έγχυση",
    en: "Infusion",
    fixed: "0.1–0.3 mg/kg/h"
  }],
  notesEl: "Υπο-αναισθητική δόση: opioid-sparing, αντι-υπεραλγησία, χρόνιος/opioid-tolerant πόνος. NMDA ανταγωνιστής.",
  notesEn: "Sub-anaesthetic dose: opioid-sparing, anti-hyperalgesia, chronic/opioid-tolerant pain. NMDA antagonist.",
  ciEl: "Ανεξέλεγκτη υπέρταση, ενεργή ψύχωση, αυξημένη ΕΚΠ (σχετική)",
  ciEn: "Uncontrolled hypertension, active psychosis, raised ICP (relative)"
}, {
  id: "lidocaine_iv",
  name: "Lidocaine IV (systemic)",
  cat: "adjunct",
  doses: [{
    el: "Bolus",
    en: "Bolus",
    lo: 1,
    hi: 1.5,
    unit: "mg/kg",
    max: null
  }, {
    el: "Έγχυση",
    en: "Infusion",
    fixed: "1–2 mg/kg/h (διεγχειρητικά)"
  }],
  notesEl: "Συστηματική: opioid-sparing, αντιφλεγμονώδες, ↓ ειλεός (κοιλιακή/λαπαροσκοπική). Παρακολούθηση σημείων LAST· διακοπή στο τέλος ή έως 1h μετά. Προσοχή σε ηπατική/καρδιακή νόσο.",
  notesEn: "Systemic: opioid-sparing, anti-inflammatory, ↓ ileus (abdominal/laparoscopic). Watch for LAST; stop at end or ≤1h postop. Caution in hepatic/cardiac disease.",
  ciEl: "Καρδιακός αποκλεισμός, σοβαρή ηπατική ανεπάρκεια, ταυτόχρονο νευραξονικό/περιοχικό (αθροιστική τοξικότητα)",
  ciEn: "Heart block, severe hepatic failure, concurrent neuraxial/regional (additive toxicity)"
}, {
  id: "txa",
  name: "Tranexamic acid",
  cat: "hemostatic",
  doses: [{
    el: "Φόρτιση",
    en: "Loading",
    lo: 10,
    hi: 15,
    unit: "mg/kg",
    max: 1000
  }],
  notesEl: "Τραύμα: 1 g/10 min εντός 3h, μετά 1 g/8h.",
  notesEn: "Trauma: 1 g over 10 min within 3h, then 1 g over 8h.",
  ciEl: "Ενεργός θρομβοεμβολική νόσος",
  ciEn: "Active thromboembolic disease"
}, {
  id: "dantrolene",
  name: "Dantrolene",
  cat: "emergency",
  doses: [{
    el: "Κακοήθης Υπερπυρεξία",
    en: "Malignant Hyperthermia",
    lo: 2.5,
    hi: 8,
    unit: "mg/kg",
    max: null
  }],
  notesEl: "Bolus 2.5 mg/kg, τιτλοποίηση κατά ΚΣ/δυσκαμψία/θερμοκρασία· επανάληψη έως 10 mg/kg. Διακοπή πτητικών, 100% O2, υπερκαλιαιμία/οξέωση.",
  notesEn: "Bolus 2.5 mg/kg, titrate to HR/rigidity/temperature; repeat up to 10 mg/kg. Stop volatiles, 100% O2, treat hyperkalemia/acidosis.",
  ciEl: "—",
  ciEn: "—"
}, {
  id: "intralipid",
  name: "Intralipid 20% (LAST)",
  cat: "emergency",
  doses: [{
    el: "Bolus",
    en: "Bolus",
    lo: 1.5,
    hi: 1.5,
    unit: "mL/kg",
    max: 100
  }, {
    el: "Έγχυση",
    en: "Infusion",
    lo: 15,
    hi: 15,
    unit: "mL/kg/h",
    max: null
  }],
  notesEl: "Επανάληψη bolus ×2 αν ασταθής. Max συνολικά 12 mL/kg.",
  notesEn: "Repeat bolus ×2 if unstable. Max cumulative 12 mL/kg.",
  ciEl: "—",
  ciEn: "—"
},
// ---------- Αιμοστατικά ----------
{
  id: "fibrinogen",
  name: "Fibrinogen concentrate",
  cat: "hemostatic",
  doses: [{
    el: "Εμπειρική δόση",
    en: "Empiric dose",
    lo: 25,
    hi: 50,
    unit: "mg/kg",
    max: null
  }, {
    el: "Στοχευμένη",
    en: "Targeted",
    fixed: "Δόση(g) = [στόχος − τρέχον (g/L)] × βάρος(kg) / 17"
  }],
  notesEl: "Στόχος >1.5–2 g/L (μαιευτική >2). Καθοδήγηση με FIBTEM/Clauss. ~70 mg/kg ↑ ~1 g/L.",
  notesEn: "Target >1.5–2 g/L (obstetric >2). Guide with FIBTEM/Clauss. ~70 mg/kg raises ~1 g/L.",
  ciEl: "Ενεργός θρόμβωση (σχετική)",
  ciEn: "Active thrombosis (relative)"
}, {
  id: "pcc",
  name: "Prothrombin complex concentrate (4F-PCC)",
  cat: "hemostatic",
  doses: [{
    el: "INR 2–4",
    en: "INR 2–4",
    lo: 25,
    hi: 25,
    unit: "IU/kg",
    max: null
  }, {
    el: "INR 4–6",
    en: "INR 4–6",
    lo: 35,
    hi: 35,
    unit: "IU/kg",
    max: null
  }, {
    el: "INR >6",
    en: "INR >6",
    lo: 50,
    hi: 50,
    unit: "IU/kg",
    max: null
  }, {
    el: "Επείγουσα (εμπειρική)",
    en: "Emergency (empiric)",
    fixed: "1000–2000 IU (units factor IX)"
  }],
  notesEl: "Αναστροφή VKA + βιταμίνη K 5–10 mg IV. Χορήγηση βάσει units παράγοντα IX. Max ~5000 IU. Θρομβωτικός κίνδυνος.",
  notesEn: "VKA reversal + vitamin K 5–10 mg IV. Dose by factor IX units. Max ~5000 IU. Thrombotic risk.",
  ciEl: "HIT, DIC, πρόσφατη θρόμβωση",
  ciEn: "HIT, DIC, recent thrombosis"
}, {
  id: "desmopressin",
  name: "Desmopressin (DDAVP)",
  cat: "hemostatic",
  doses: [{
    el: "IV (σε 20–30 min)",
    en: "IV (over 20–30 min)",
    lo: 0.3,
    hi: 0.3,
    unit: "mcg/kg",
    max: 20
  }],
  notesEl: "Ουραιμική/αντιαιμοπεταλιακή δυσλειτουργία, ήπια αιμορροφιλία A, vWD τύπου 1. Ταχυφυλαξία μετά τη 2η δόση. Υπονατριαιμία — περιορισμός υγρών.",
  notesEn: "Uremic/antiplatelet dysfunction, mild haemophilia A, type-1 vWD. Tachyphylaxis after 2nd dose. Hyponatremia — restrict fluids.",
  ciEl: "vWD τύπου 2B, υπονατριαιμία, σοβαρή στεφανιαία νόσος",
  ciEn: "Type 2B vWD, hyponatremia, severe CAD"
},
// ---------- Αντίδοτα DOAC ----------
{
  id: "idarucizumab",
  name: "Idarucizumab (Praxbind)",
  cat: "hemostatic",
  doses: [{
    el: "Αναστροφή dabigatran",
    en: "Dabigatran reversal",
    fixed: "5 g IV (2 × 2.5 g, ≤15 min μεταξύ)"
  }],
  notesEl: "Ειδικό αντίδοτο δαβιγατράνης. Άμεση πλήρης αναστροφή. 2η δόση 5 g αν επανεμφάνιση αιμορραγίας/επείγουσα χειρουργική.",
  notesEn: "Dabigatran-specific antidote. Immediate complete reversal. Repeat 5 g if re-bleeding/urgent surgery.",
  ciEl: "—",
  ciEn: "—"
}, {
  id: "andexanet",
  name: "Andexanet alfa (Ondexxya)",
  cat: "hemostatic",
  doses: [{
    el: "Χαμηλή δόση",
    en: "Low dose",
    fixed: "400 mg bolus + 480 mg έγχυση/2h"
  }, {
    el: "Υψηλή δόση",
    en: "High dose",
    fixed: "800 mg bolus + 960 mg έγχυση/2h"
  }],
  notesEl: "Αναστροφή anti-Xa (rivaroxaban/apixaban). Υψηλή δόση: αν >last dose εντός 8h ή rivaroxaban >10 mg/apixaban >5 mg. Bolus 30 mg/min.",
  notesEn: "Anti-Xa reversal (rivaroxaban/apixaban). High dose: if last dose >8h or rivaroxaban >10 mg/apixaban >5 mg. Bolus at 30 mg/min.",
  ciEl: "Θρομβωτικός κίνδυνος — μη εγκεκριμένο προ χειρουργικής",
  ciEn: "Thrombotic risk — not approved for pre-surgical reversal"
},
// ---------- Inodilators ----------
{
  id: "milrinone",
  name: "Milrinone",
  cat: "vasoactive",
  doses: [{
    el: "Φόρτιση (προαιρετική, 10 min)",
    en: "Loading (optional, 10 min)",
    lo: 50,
    hi: 50,
    unit: "mcg/kg",
    max: null
  }, {
    el: "Έγχυση",
    en: "Infusion",
    lo: 0.25,
    hi: 0.75,
    unit: "mcg/kg/min",
    max: null
  }],
  notesEl: "Αναστολέας PDE-3: ινότροπο + αγγειοδιαστολή (↓SVR/PVR). Φόρτιση συχνά παραλείπεται (υπόταση). Μείωση σε νεφρική ανεπάρκεια.",
  notesEn: "PDE-3 inhibitor: inotrope + vasodilation (↓SVR/PVR). Loading often omitted (hypotension). Reduce in renal impairment.",
  ciEl: "Σοβαρή υπόταση, σοβαρή αποφρακτική βαλβιδοπάθεια",
  ciEn: "Severe hypotension, severe obstructive valvular disease"
}, {
  id: "levosimendan",
  name: "Levosimendan",
  cat: "vasoactive",
  doses: [{
    el: "Φόρτιση (προαιρετική, 10 min)",
    en: "Loading (optional, 10 min)",
    lo: 6,
    hi: 12,
    unit: "mcg/kg",
    max: null
  }, {
    el: "Έγχυση (έως 24h)",
    en: "Infusion (up to 24h)",
    lo: 0.05,
    hi: 0.2,
    unit: "mcg/kg/min",
    max: null
  }],
  notesEl: "Ευαισθητοποιητής ασβεστίου + άνοιγμα K-ATP: ινότροπο χωρίς ↑O2. Δράση διαρκεί ~7–9 ημέρες (ενεργός μεταβολίτης). Φόρτιση συχνά παραλείπεται.",
  notesEn: "Calcium sensitiser + K-ATP opener: inotropy without ↑O2 demand. Effect lasts ~7–9 days (active metabolite). Loading often omitted.",
  ciEl: "Σοβαρή υπόταση/ταχυκαρδία, σοβαρή νεφρική/ηπατική ανεπάρκεια",
  ciEn: "Severe hypotension/tachycardia, severe renal/hepatic impairment"
}];
const CATS = [{
  id: "all",
  el: "Όλα",
  en: "All"
}, {
  id: "induction",
  el: "Εισαγωγή",
  en: "Induction"
}, {
  id: "volatile",
  el: "Αέρια",
  en: "Gases"
}, {
  id: "opioid",
  el: "Οπιοειδή",
  en: "Opioids"
}, {
  id: "nmb",
  el: "Π.Ν.Αποκλειστές",
  en: "NMBs"
}, {
  id: "reversal",
  el: "Αναστροφή",
  en: "Reversal"
}, {
  id: "vasoactive",
  el: "Αγγειοδραστικά",
  en: "Vasoactive"
}, {
  id: "antihtn",
  el: "Αντιυπερτασικά",
  en: "Antihypertensives"
}, {
  id: "antiemetic",
  el: "Αντιεμετικά",
  en: "Antiemetics"
}, {
  id: "hemostatic",
  el: "Αιμοστατικά & Αντίδοτα",
  en: "Hemostatic & Antidotes"
}, {
  id: "sedation",
  el: "Καταστολή",
  en: "Sedation"
}, {
  id: "local",
  el: "Τοπικά",
  en: "Locals"
}, {
  id: "adjunct",
  el: "Συμπληρωματικά",
  en: "Adjuncts"
}, {
  id: "emergency",
  el: "Επείγοντα",
  en: "Emergency"
}];

// ============ EMERGENCY CHECKLISTS ============
const CL_CATS = [{
  id: "all",
  el: "Όλα",
  en: "All"
}, {
  id: "acls",
  el: "Ανακοπή / ACLS",
  en: "Arrest / ACLS"
}, {
  id: "airway",
  el: "Αεραγωγός / Αναπνοή",
  en: "Airway / Breathing"
}, {
  id: "circ",
  el: "Κυκλοφορικό",
  en: "Circulation"
}, {
  id: "drug",
  el: "Φάρμακα / Αλλεργία",
  en: "Drug / Allergy"
}, {
  id: "regional",
  el: "Περιοχική",
  en: "Regional"
}, {
  id: "ob",
  el: "Μαιευτική",
  en: "Obstetric"
}, {
  id: "system",
  el: "Συστήματα",
  en: "Systems"
}, {
  id: "proc",
  el: "Διαδικασίες",
  en: "Procedures"
}];
const CHECKLISTS = [
// ---------- ACLS ----------
{
  id: "vfvt",
  cat: "acls",
  titleEl: "Κοιλιακή Μαρμαρυγή / Ταχυκαρδία (VF/VT)",
  titleEn: "VF / Pulseless VT (Shockable)",
  color: "#C9544B",
  stepsEl: ["Κλήση για βοήθεια & code cart — έναρξη ΚΑΡΠΑ 100–120/min, 5–6 cm", "FiO2 100%, αερισμός 10/min (μην υπεραερίζετε)", "Απινίδωση ΑΜΕΣΑ: 150–200 J διφασικό — άμεση επανέναρξη ΚΑΡΠΑ", "Αδρεναλίνη 1 mg IV μετά τη 2η απινίδωση, επανάληψη q3–5 min", "Αμιωδαρόνη 300 mg μετά την 3η απινίδωση (μετά 150 mg)", "Κύκλοι 2 min — έλεγχος ρυθμού/σφυγμού, εναλλαγή χειριστών q2min", "Διακοπή πτητικών/αγγειοδιασταλτικών εγχύσεων", "Αναζήτηση 4Η/4Τ: υποξία, υποογκαιμία, H+, υπο/υπερκαλιαιμία, πνευμοθώρακας υπό τάση, επιπωματισμός, τοξίνες, θρόμβωση (PE/στεφανιαία)", "TEE/TTE για αιτία — σκέψη ECMO αν αναστρέψιμο"],
  stepsEn: ["Call for help & code cart — start CPR 100–120/min, 5–6 cm", "FiO2 100%, ventilate 10/min (do not hyperventilate)", "Defibrillate NOW: 150–200 J biphasic — resume CPR immediately", "Adrenaline 1 mg IV after 2nd shock, repeat q3–5 min", "Amiodarone 300 mg after 3rd shock (then 150 mg)", "2-min cycles — check rhythm/pulse, rotate compressors q2min", "Stop volatiles/vasodilator infusions", "Seek 4H/4T: hypoxia, hypovolemia, H+, hypo/hyperkalemia, tension pneumothorax, tamponade, toxins, thrombosis (PE/coronary)", "TEE/TTE for cause — consider ECMO if reversible"]
}, {
  id: "asystole_pea",
  cat: "acls",
  titleEl: "Ασυστολία / PEA (μη-απινιδώσιμος)",
  titleEn: "Asystole / PEA (Non-Shockable)",
  color: "#C9544B",
  stepsEl: ["Κλήση για βοήθεια & code cart — έναρξη ΚΑΡΠΑ 100–120/min", "FiO2 100%, αερισμός 10/min, εξασφάλιση IV/IO", "Αδρεναλίνη 1 mg IV ΑΜΕΣΑ, επανάληψη q3–5 min", "Επιβεβαίωση ασυστολίας (απαγωγές/gain) — αν VF/VT → απινίδωση", "Διακοπή πτητικών/αγγειοδιασταλτικών", "Κύκλοι 2 min — εναλλαγή χειριστών", "Αναζήτηση & θεραπεία 4Η/4Τ — συχνά στο χειρουργείο: auto-PEEP (αποσύνδεση), υψηλή ραχιαία, αναφυλαξία, λάθος φαρμάκου, αιμορραγία", "TEE/TTE για αιτία — σκέψη ECMO αν αναστρέψιμο"],
  stepsEn: ["Call for help & code cart — start CPR 100–120/min", "FiO2 100%, ventilate 10/min, secure IV/IO", "Adrenaline 1 mg IV NOW, repeat q3–5 min", "Confirm asystole (leads/gain) — if VF/VT → defibrillate", "Stop volatiles/vasodilators", "2-min cycles — rotate compressors", "Seek & treat 4H/4T — common in OR: auto-PEEP (disconnect), high spinal, anaphylaxis, medication error, hemorrhage", "TEE/TTE for cause — consider ECMO if reversible"]
}, {
  id: "brady",
  cat: "acls",
  titleEl: "Ασταθής Βραδυκαρδία",
  titleEn: "Unstable Bradycardia",
  color: "#D98A38",
  stepsEl: ["FiO2 100%, διακοπή χειρουργικού ερεθίσματος & πτητικού", "Έλεγχος υποξίας (συχνότερη αιτία στα παιδιά)", "Ατροπίνη 0.5 mg IV (παιδιά 0.02 mg/kg) — επανάληψη έως 3 mg", "Ανθεκτική: Αδρεναλίνη 2–10 µg/min ή Ντοπαμίνη 2–20 µg/kg/min", "Διαδερμική βηματοδότηση — ρυθμός ≥80/min, επιβεβαίωση σύλληψης + σφυγμού", "Αιτίες: υποξία, υψηλή ραχιαία, πνευμονογαστρικό αντανακλαστικό, β-/Ca-αναστολείς, ↑ΕΦΠ"],
  stepsEn: ["FiO2 100%, halt surgical stimulus & volatile", "Check for hypoxia (commonest cause in children)", "Atropine 0.5 mg IV (peds 0.02 mg/kg) — repeat up to 3 mg", "Refractory: Adrenaline 2–10 µg/min or Dopamine 2–20 µg/kg/min", "Transcutaneous pacing — rate ≥80/min, confirm capture + pulse", "Causes: hypoxia, high spinal, vagal reflex, β-/Ca-blockers, ↑ICP"]
}, {
  id: "svt_stable",
  cat: "acls",
  titleEl: "Σταθερή Ταχυκαρδία (SVT)",
  titleEn: "Stable Tachycardia (SVT)",
  color: "#D98A38",
  stepsEl: ["Έλεγχος & αντιμετώπιση αιτίας: υπο-αναισθησία, υπογκαιμία, υποξία, πυρετός, υπερκαπνία", "12-λεις ΗΚΓ — διάκριση στενών/ευρέων QRS, regular/irregular", "Στενά regular: χειρισμοί πνευμονογαστρικού", "Αδενοσίνη 6 mg ταχεία ώση → 12 mg → 12 mg", "Έλεγχος συχνότητας: β-αναστολέας ή διλτιαζέμη (όχι σε ΚΑ)", "Κολπική μαρμαρυγή/πτερυγισμός: σκέψη αμιωδαρόνης", "Αν γίνει ασταθής → συγχρονισμένη ανάταξη"],
  stepsEn: ["Identify & treat cause: light anesthesia, hypovolemia, hypoxia, fever, hypercarbia", "12-lead ECG — narrow vs wide QRS, regular vs irregular", "Narrow regular: vagal maneuvers", "Adenosine 6 mg rapid push → 12 mg → 12 mg", "Rate control: beta-blocker or diltiazem (not in HF)", "AF/flutter: consider amiodarone", "If becomes unstable → synchronized cardioversion"]
}, {
  id: "svt_unstable",
  cat: "acls",
  titleEl: "Ασταθής Ταχυκαρδία",
  titleEn: "Unstable Tachycardia",
  color: "#C9544B",
  stepsEl: ["Σημεία αστάθειας: υπόταση, ισχαιμία, σύγχυση, καρδιακή ανεπάρκεια", "Συγχρονισμένη ανάταξη ΑΜΕΣΑ", "Στενά regular: 50–100 J · Στενά irregular (AF): 120–200 J", "Ευρέα regular: 100 J · Ευρέα irregular: μη-συγχρονισμένη (απινίδωση)", "Καταστολή αν ασθενής σε εγρήγορση (κεταμίνη/ετομιδάτη/μιδαζολάμη)", "FiO2 100%, αντιμετώπιση αιτίας", "Επιμένουσα VT με σφυγμό: αμιωδαρόνη 150 mg/10 min"],
  stepsEn: ["Instability signs: hypotension, ischemia, ↓consciousness, heart failure", "Synchronized cardioversion NOW", "Narrow regular: 50–100 J · Narrow irregular (AF): 120–200 J", "Wide regular: 100 J · Wide irregular: unsynchronized (defibrillate)", "Sedate if awake (ketamine/etomidate/midazolam)", "FiO2 100%, treat cause", "Persistent VT with pulse: amiodarone 150 mg over 10 min"]
},
// ---------- AIRWAY / BREATHING ----------

{
  id: "difficult_airway",
  cat: "airway",
  titleEl: "Δύσκολη Διασωλήνωση — DAS 2025 (Plan A–D)",
  titleEn: "Difficult Intubation — DAS 2025 (Plan A–D)",
  color: "#D98A38",
  stepsEl: ["— ΠΡΟΕΤΟΙΜΑΣΙΑ —", "Δομημένη εκτίμηση αεραγωγού· αναγνώριση «φυσιολογικά δύσκολου» αεραγωγού (καταπληξία, υποξία, παχυσαρκία)", "Peroxygenation ως standard: συνεχής O2 (HFNO/CPAP), θέση ramped/head-up", "Έτοιμα: βιντεολαρυγγοσκόπιο (1ης γραμμής), bougie/stylet, SAD 2ης γενιάς, eFONA kit· team brief & ρόλοι", "— PLAN A: ΔΙΑΣΩΛΗΝΩΣΗ —", "Βιντεολαρυγγοσκόπιο 1ης γραμμής (asleep)· πλήρης & πρώιμη μυοχάλαση", "Βελτιστοποίηση: θέση, εξωτερικός λαρυγγικός χειρισμός, bougie", "Έως 3 προσπάθειες (+1 από πιο έμπειρο) — επιβεβαίωση με καπνογραφία", "Δήλωση αποτυχίας → Plan B", "— PLAN B: SAD —", "Τοποθέτηση SAD 2ης γενιάς (max 3 προσπάθειες) — οξυγόνωση", "STOP & THINK: αφύπνιση / 2η προσπάθεια διασωλήνωσης μέσω SAD (ινοπτικά) / συνέχιση με SAD / μετάβαση σε FONA", "Αποτυχία οξυγόνωσης μετά από 3 → Plan C", "— PLAN C: ΜΑΣΚΑ —", "Τελική προσπάθεια αερισμού με μάσκα: 2 χειριστές, στοματο-/ρινοφαρυγγικοί αεραγωγοί, πλήρης μυοχάλαση", "Επιτυχία → αφύπνιση / περαιτέρω επιλογές· Αποτυχία → δήλωση CICO → Plan D", "— PLAN D: eFONA (CICO) —", "Δήλωση «CICO» — κλήση για βοήθεια", "Scalpel-bougie-tube, τυποποιημένη ΚΑΘΕΤΗ τομή (DAS 2025)", "Laryngeal handshake → εντοπισμός κρικοθυρεοειδούς υμένα", "Τομή → στροφή λεπίδας → bougie → ΕΤΤ 6.0 με cuff → επιβεβαίωση καπνογραφίας", "Συνεχής οξυγόνωση σε όλα τα στάδια· καταγραφή & ενημέρωση ασθενούς μετά"],
  stepsEn: ["— PREPARATION —", "Structured airway assessment; identify the 'physiologically difficult' airway (shock, hypoxia, obesity)", "Peroxygenation as standard: continuous O2 (HFNO/CPAP), ramped/head-up position", "Ready: videolaryngoscope (first-line), bougie/stylet, 2nd-gen SAD, eFONA kit; team brief & roles", "— PLAN A: INTUBATION —", "Videolaryngoscope first-line (asleep); full & early neuromuscular block", "Optimize: position, external laryngeal manipulation, bougie", "Up to 3 attempts (+1 by more experienced operator) — confirm with capnography", "Declare failure → Plan B", "— PLAN B: SAD —", "Insert 2nd-gen SAD (max 3 attempts) — oxygenate", "STOP & THINK: wake up / 2nd intubation attempt via SAD (fibreoptic) / continue with SAD / proceed to FONA", "Failure to oxygenate after 3 → Plan C", "— PLAN C: FACEMASK —", "Final facemask ventilation attempt: 2-person, oro-/nasopharyngeal airways, full paralysis", "Success → wake up / further options; Failure → declare CICO → Plan D", "— PLAN D: eFONA (CICO) —", "Declare 'CICO' — call for help", "Scalpel-bougie-tube, standardised VERTICAL incision (DAS 2025)", "Laryngeal handshake → identify cricothyroid membrane", "Incise → rotate blade → bougie → cuffed ETT 6.0 → confirm capnography", "Continuous oxygenation throughout; document & inform patient afterward"]
}, {
  id: "das_ati",
  cat: "airway",
  titleEl: "Ξύπνια Διασωλήνωση (ATI) — DAS 2020",
  titleEn: "Awake Tracheal Intubation (ATI) — DAS 2020",
  color: "#6E8B6A",
  stepsEl: ["Ένδειξη: προβλεπόμενος δύσκολος αεραγωγός — σκέψου ATI. Checklist πριν & κατά τη διάρκεια", "Setup: έμπειρη βοήθεια, monitoring, έτοιμη αντιμετώπιση LAST (lipid emulsion), ιδανικά 2 χειριστές", "— ΟΞΥΓΟΝΩΣΗ —", "Συμπληρωματικό O2 από την άφιξη & συνεχώς· HFNO η τεχνική επιλογής", "— ΤΟΠΙΚΟΠΟΙΗΣΗ —", "Αποτελεσματική τοπικοποίηση: max λιδοκαΐνη 9 mg/kg LBM (ανώτατο, όχι στόχος)", "Ρινικό αγγειοσυσπαστικό αν ρινική οδός· έλεγχος επάρκειας ατραυματικά πριν την ενόργανη προσπέλαση", "— ΚΑΤΑΣΤΟΛΗ —", "Ελάχιστη καταστολή, ιδανικά από ανεξάρτητο χειριστή· ΟΧΙ υποκατάστατο ανεπαρκούς τοπικοποίησης", "— ΕΚΤΕΛΕΣΗ —", "ATI με ινοπτικό (FB) ή βιντεολαρυγγοσκόπιο (VL)", "Max 3 προσπάθειες (+1 από πιο έμπειρο)· σε νέα προσπάθεια άλλαξε στοιχείο (π.χ. VL↔FB)", "Two-point check: οπτική επιβεβαίωση + καπνογραφία ΠΡΙΝ την εισαγωγή αναισθησίας", "Μετά: NBM 2 h (ημιζωή λιδοκαΐνης), καταγραφή & ενημέρωση ασθενούς"],
  stepsEn: ["Indication: anticipated difficult airway — consider ATI. Checklist before & during", "Setup: experienced help, monitoring, LAST treatment ready (lipid emulsion), ideally 2 operators", "— OXYGENATION —", "Supplemental O2 from arrival & throughout; HFNO is the technique of choice", "— TOPICALISATION —", "Effective topicalisation: max lidocaine 9 mg/kg LBW (a maximum, not a target)", "Nasal vasoconstrictor if nasal route; test adequacy atraumatically before instrumentation", "— SEDATION —", "Minimal sedation, ideally by an independent operator; NOT a substitute for inadequate topicalisation", "— PERFORMANCE —", "ATI with flexible bronchoscope (FB) or videolaryngoscope (VL)", "Max 3 attempts (+1 by more experienced operator); on a new attempt change an element (e.g. VL↔FB)", "Two-point check: visual confirmation + capnography BEFORE inducing anaesthesia", "After: NBM 2 h (lidocaine half-life), document & inform patient"]
}, {
  id: "das_extubation",
  cat: "airway",
  titleEl: "Αποδιασωλήνωση — DAS 2012",
  titleEn: "Tracheal Extubation — DAS 2012",
  color: "#6E8B6A",
  stepsEl: ["— ΒΗΜΑ 1: ΣΧΕΔΙΑΣΜΟΣ —", "Ταξινόμηση: «χαμηλού κινδύνου» (νηστικός, μη επηρεασμένος αεραγωγός, χωρίς γενικούς παράγοντες) vs «αυξημένου κινδύνου» (αβέβαιη οξυγόνωση/επαναδιασωλήνωση, γενικοί/χειρουργικοί παράγοντες)", "— ΒΗΜΑ 2: ΠΡΟΕΤΟΙΜΑΣΙΑ —", "Βελτιστοποίηση ασθενούς (αιμοδυναμικά, θερμοκρασία, πλήρης αναστροφή μυοχάλασης TOF >0.9) & logistics (εξοπλισμός, έμπειρη βοήθεια)", "— ΒΗΜΑ 3: ΕΚΤΕΛΕΣΗ —", "Χαμηλού κινδύνου: προοξυγόνωση 100% O2, αναρρόφηση, bite block, θέση ανακαθιστή, ξύπνια αποδιασωλήνωση μετά από εντολές", "Αυξημένου κινδύνου: απόφαση αν είναι ασφαλής η αφαίρεση", "Αν ναι → «ξύπνια» τεχνική με adjuncts: τεχνική ρεμιφεντανίλης, καθετήρας ανταλλαγής αεραγωγού (AEC), ή αλλαγή σε SAD (Bailey manoeuvre)", "Αν όχι → αναβολή αποδιασωλήνωσης / τραχειοστομία", "— ΒΗΜΑ 4: ΜΕΤΑ-ΑΠΟΔΙΑΣΩΛΗΝΩΣΗ —", "Συνεχής O2 & monitoring, έμπειρη βοήθεια διαθέσιμη, σαφής επικοινωνία & καταγραφή, κριτήρια επαναδιασωλήνωσης"],
  stepsEn: ["— STEP 1: PLAN —", "Classify: 'low-risk' (fasted, uncomplicated airway, no general factors) vs 'at-risk' (uncertain oxygenation/reintubation, general/surgical factors)", "— STEP 2: PREPARE —", "Optimize patient (hemodynamics, temperature, full reversal of NMB TOF >0.9) & logistics (equipment, experienced help)", "— STEP 3: PERFORM —", "Low-risk: preoxygenate 100% O2, suction, bite block, sit up, awake extubation after commands", "At-risk: decide whether removal is safe", "If yes → 'awake' technique with adjuncts: remifentanil technique, airway exchange catheter (AEC), or exchange to SAD (Bailey manoeuvre)", "If no → postpone extubation / tracheostomy", "— STEP 4: POST-EXTUBATION —", "Continuous O2 & monitoring, experienced help available, clear communication & documentation, reintubation criteria"]
}, {
  id: "laryngospasm",
  cat: "airway",
  titleEl: "Λαρυγγόσπασμος",
  titleEn: "Laryngospasm",
  color: "#D98A38",
  stepsEl: ["Άρση ερεθίσματος — διακοπή χειρισμού/εκκρίσεων", "FiO2 100%, CPAP με σφιχτή μάσκα, ανύψωση κάτω γνάθου", "Πίεση στο σημείο Larson (όπισθεν λοβού ωτός)", "Βάθυνση αναισθησίας: προποφόλη 0.5–1 mg/kg IV", "Επιμένων: σουκινυλοχολίνη 0.5–1 mg/kg IV (ή 4 mg/kg IM)", "Επαναδιασωλήνωση αν χρειαστεί", "Προσοχή: πνευμονικό οίδημα αρνητικής πίεσης μετά την άρση"],
  stepsEn: ["Remove stimulus — stop manipulation/secretions", "FiO2 100%, CPAP with tight mask, jaw thrust", "Pressure at Larson's point (behind earlobe)", "Deepen anesthesia: propofol 0.5–1 mg/kg IV", "Persistent: succinylcholine 0.5–1 mg/kg IV (or 4 mg/kg IM)", "Reintubate if required", "Watch: negative-pressure pulmonary edema after release"]
}, {
  id: "bronchospasm",
  cat: "airway",
  titleEl: "Βρογχόσπασμος",
  titleEn: "Bronchospasm",
  color: "#D98A38",
  stepsEl: ["FiO2 100%, βάθυνση αναισθησίας (πτητικό/προποφόλη/κεταμίνη)", "Χειροκίνητος αερισμός — εκτίμηση ενδοτικότητας", "Σαλβουταμόλη εισπνεόμενη μέσω κυκλώματος (6–12 ψεκασμοί)", "Σοβαρός: Αδρεναλίνη 10–100 µg IV bolus ή έγχυση", "Υδροκορτιζόνη 100–200 mg, Θειικό μαγνήσιο 2 g/20 min", "Αποκλεισμός: θέση/συστροφή ΕΤΤ, ενδοβρογχική, αναφυλαξία, πνευμοθώρακας"],
  stepsEn: ["FiO2 100%, deepen anesthesia (volatile/propofol/ketamine)", "Hand-ventilate — assess compliance", "Inhaled salbutamol via circuit (6–12 puffs)", "Severe: Adrenaline 10–100 µg IV bolus or infusion", "Hydrocortisone 100–200 mg, Magnesium sulfate 2 g over 20 min", "Exclude: ETT position/kink, endobronchial, anaphylaxis, pneumothorax"]
}, {
  id: "hypoxemia",
  cat: "airway",
  titleEl: "Υποξαιμία (διαφορική)",
  titleEn: "Hypoxemia (Differential)",
  color: "#C9544B",
  stepsEl: ["FiO2 100% υψηλή ροή — επιβεβαίωση SpO2 & κυματομορφής", "Χειροκίνητος αερισμός — εκτίμηση ενδοτικότητας/ανύψωσης θώρακα", "Επιβεβαίωση θέσης ΕΤΤ με καπνογραφία + ακρόαση", "DOPES: Displacement, Obstruction, Pneumothorax, Equipment, Stacking (auto-PEEP)", "Αναρρόφηση, χειρισμοί επιστράτευσης", "Αποκλεισμός: βρογχόσπασμος, εισρόφηση, οίδημα, εμβολή, shunt", "Έλεγχος εξοπλισμού: παροχή O2, αναλυτής, κύκλωμα"],
  stepsEn: ["FiO2 100% high flow — confirm SpO2 & waveform", "Hand-ventilate — assess compliance/chest rise", "Confirm ETT position with capnography + auscultation", "DOPES: Displacement, Obstruction, Pneumothorax, Equipment, Stacking (auto-PEEP)", "Suction, recruitment maneuvers", "Exclude: bronchospasm, aspiration, edema, embolism, shunt", "Check equipment: O2 supply, analyzer, circuit"]
}, {
  id: "aspiration",
  cat: "airway",
  titleEl: "Εισρόφηση",
  titleEn: "Aspiration",
  color: "#D98A38",
  stepsEl: ["Θέση κεφαλής κάτω/πλάγια — αναρρόφηση αεραγωγού ΠΡΙΝ τον θετικό αερισμό", "Εξασφάλιση αεραγωγού — διασωλήνωση", "Αναρρόφηση μέσω ΕΤΤ πριν τον αερισμό", "FiO2 100%, PEEP", "ΟΧΙ προφυλακτικά στεροειδή/αντιβιοτικά (μόνο επί λοίμωξης)", "Ακτινογραφία θώρακα, σκέψη βρογχοσκόπησης για στερεά", "Απόφαση αναβολής vs συνέχισης ανάλογα με βαρύτητα"],
  stepsEn: ["Head down/lateral — suction airway BEFORE positive ventilation", "Secure airway — intubate", "Suction via ETT before ventilating", "FiO2 100%, PEEP", "NO prophylactic steroids/antibiotics (only if infection)", "Chest X-ray, consider bronchoscopy for solids", "Decide defer vs proceed based on severity"]
}, {
  id: "pneumothorax",
  cat: "airway",
  titleEl: "Πνευμοθώρακας υπό Τάση",
  titleEn: "Tension Pneumothorax",
  color: "#C9544B",
  stepsEl: ["Υποψία: υποξία, υπόταση, ↑πιέσεις αεραγωγού, μονόπλευρη σιγή, απόκλιση τραχείας", "FiO2 100%, διακοπή N2O", "ΑΜΕΣΗ αποσυμπίεση με βελόνα: 2ο μεσοπλεύριο μεσοκλειδικά Ή 4ο–5ο πρόσθια μασχαλιαία", "Τοποθέτηση θωρακικού σωλήνα", "Αιμοδυναμική υποστήριξη", "Επιβεβαίωση με υπέρηχο/ακτινογραφία αν σταθεροποιηθεί"],
  stepsEn: ["Suspect: hypoxia, hypotension, ↑airway pressures, unilateral silence, tracheal deviation", "FiO2 100%, stop N2O", "IMMEDIATE needle decompression: 2nd ICS midclavicular OR 4th–5th anterior axillary", "Insert chest drain", "Hemodynamic support", "Confirm with ultrasound/X-ray once stabilized"]
}, {
  id: "scoop",
  cat: "airway",
  titleEl: "Αιμάτωμα μετά Θυρεοειδεκτομή (SCOOP)",
  titleEn: "Post-Thyroidectomy Haematoma (SCOOP)",
  color: "#C9544B",
  stepsEl: ["— ΑΝΑΓΝΩΡΙΣΗ (DESATS) —", "Δυσκολία κατάποσης/δυσφορία · EWS/NEWS ↑ · Οίδημα τραχήλου · Ανησυχία · Ταχύπνοια/δύσπνοια · Στριδόρας", "— ΑΜΕΣΗ ΔΡΑΣΗ —", "HFNO 30 L/min, θέση 45° ανάκλιση κεφαλής", "ΑΜΕΣΗ κλήση χειρουργού — ΜΗΝ περιμένετε μεταφορά σε χειρουργείο αν επείγον", "Αν επιδεινούμενη απόφραξη: άνοιγμα τραύματος ΣΤΟ ΚΡΕΒΑΤΙ αμέσως", "— SCOOP (8 βήματα) —", "Skin exposure: αφαίρεση επιδέσμων/steristrips", "Cut sutures: κοπή ραμμάτων/κλιπ δέρματος", "Open skin: άνοιγμα δερματικής τομής", "Open muscles: άνοιγμα των πρόσθιων μυών του τραχήλου (strap muscles) — ΚΡΙΣΙΜΟ βήμα, συχνά παραλείπεται", "Pack wound: επιπωματισμός τραύματος μετά την εκκένωση του αιματώματος", "ΔΕΝ χρειάζεται τοπική αναισθησία πριν το άνοιγμα — η ταχύτητα προέχει", "⚠ Αν το δέρμα έκλεισε με κόλλα (όχι ράμματα): άνοιγμα δέρματος ΠΡΙΝ την αναζήτηση ραμμάτων", "— ΜΕΤΑ ΤΗΝ ΕΚΚΕΝΩΣΗ —", "Επανεκτίμηση αεραγωγού — η διασωλήνωση γίνεται ΜΕΤΑ το άνοιγμα του τραύματος (καλύτερες συνθήκες, λιγότερο οίδημα)", "Επιμένουσα απόφραξη μετά SCOOP → πρωτόκολλο Δύσκολου Αεραγωγού/CICO (Plan A–D)"],
  stepsEn: ["— RECOGNITION (DESATS) —", "Difficulty swallowing/discomfort · EWS/NEWS ↑ · Swelling of neck · Anxiety · Tachypnoea/difficulty breathing · Stridor", "— IMMEDIATE ACTION —", "HFNO 30 L/min, 45° head-up position", "IMMEDIATE call to surgeon — do NOT wait for transfer to theatre if urgent", "If worsening obstruction: open wound AT THE BEDSIDE immediately", "— SCOOP (8 steps) —", "Skin exposure: remove dressings/steristrips", "Cut sutures: cut skin sutures/clips", "Open skin: open the skin incision", "Open muscles: open the anterior strap muscles — CRITICAL step, often missed", "Pack wound: pack the wound after evacuating the haematoma", "Local anaesthetic NOT required before opening — speed is paramount", "⚠ If skin was closed with glue (not sutures): open skin BEFORE searching for sutures", "— AFTER EVACUATION —", "Reassess airway — intubation should be attempted AFTER opening the wound (better conditions, less oedema)", "Persistent obstruction after SCOOP → Difficult Airway/CICO protocol (Plan A–D)"]
},
// ---------- CIRCULATION ----------
{
  id: "hypotension",
  cat: "circ",
  titleEl: "Διεγχειρητική Υπόταση (διαφορική)",
  titleEn: "Intraoperative Hypotension (Differential)",
  color: "#D98A38",
  stepsEl: ["Επιβεβαίωση: περιχειρίδα, αρτηριακή γραμμή, παλμός", "↓ Πτητικό/TIVA — έλεγχος βάθους", "Υγρά: bolus κρυσταλλοειδών 4–5 mL/kg", "Αγγειοσυσπαστικό: φαινυλεφρίνη/εφεδρίνη ανά ΚΣ", "Αναζήτηση αιτίας: αιμορραγία, αναφυλαξία, εμβολή, πνευμοθώρακας, επιπωματισμός, καρδιογενής, υψηλή ραχιαία", "TEE/υπέρηχος αν ανθεκτική", "Ανθεκτική: νοραδρεναλίνη + αρτηριακή γραμμή, σκέψη βαζοπρεσίνης/αδρεναλίνης"],
  stepsEn: ["Confirm: cuff, art line, pulse", "↓ Volatile/TIVA — check depth", "Fluids: crystalloid bolus 4–5 mL/kg", "Vasopressor: phenylephrine/ephedrine per HR", "Seek cause: bleeding, anaphylaxis, embolism, pneumothorax, tamponade, cardiogenic, high spinal", "TEE/ultrasound if refractory", "Refractory: noradrenaline + art line, consider vasopressin/adrenaline"]
}, {
  id: "hemorrhage",
  cat: "circ",
  titleEl: "Μαζική Αιμορραγία / Πρωτόκολλο Μετάγγισης",
  titleEn: "Massive Hemorrhage / Transfusion Protocol",
  color: "#C9544B",
  stepsEl: ["Κλήση για βοήθεια — ενεργοποίηση πρωτοκόλλου μαζικής μετάγγισης", "2 φλέβες μεγάλου εύρους / κεντρική — ταχεία έγχυση, θερμαντήρας", "Μετάγγιση 1:1:1 (RBC:FFP:αιμοπετάλια) — O-αρνητικό μέχρι διασταύρωση", "Τρανεξαμικό οξύ 1 g/10 min, μετά 1 g/8 h (εντός 3 h τραύματος)", "Ασβέστιο (CaCl2), διατήρηση θερμοκρασίας >36°C", "Στόχοι: Hb >7–8, ινωδογόνο >1.5–2 g/L, αιμοπετάλια >50, pH/Ca/K", "Cell salvage, χειρουργικός έλεγχος εστίας, ROTEM/TEG αν διαθέσιμο"],
  stepsEn: ["Call for help — activate massive transfusion protocol", "2 large-bore IV / central — rapid infusion, fluid warmer", "Transfuse 1:1:1 (RBC:FFP:platelets) — O-neg until crossmatch", "Tranexamic acid 1 g over 10 min, then 1 g over 8 h (within 3 h of trauma)", "Calcium (CaCl2), keep temperature >36°C", "Targets: Hb >7–8, fibrinogen >1.5–2 g/L, platelets >50, pH/Ca/K", "Cell salvage, surgical source control, ROTEM/TEG if available"]
}, {
  id: "ischemia",
  cat: "circ",
  titleEl: "Μυοκαρδιακή Ισχαιμία",
  titleEn: "Myocardial Ischemia",
  color: "#D98A38",
  stepsEl: ["FiO2 100% — βελτιστοποίηση ισοζυγίου O2: ↓ΚΣ, διατήρηση διαστολικής πίεσης", "12-λεις ΗΚΓ, τροπονίνες σε σειρά", "Νιτρογλυκερίνη αν επιτρέπει η ΑΠ (έγχυση)", "Έλεγχος συχνότητας: β-αναστολέας αν ταχυκαρδία & σταθερός", "Διόρθωση αναιμίας (Hb), αντιμετώπιση αιτίας", "Ασπιρίνη/ηπαρίνη κατόπιν συνεννόησης με καρδιολόγο", "TEE/TTE — διαταραχές τοιχωματικής κινητικότητας, σκέψη επαναγγείωσης"],
  stepsEn: ["FiO2 100% — optimize O2 balance: ↓HR, maintain diastolic pressure", "12-lead ECG, serial troponins", "Nitroglycerin if BP allows (infusion)", "Rate control: beta-blocker if tachycardic & stable", "Correct anemia (Hb), treat cause", "Aspirin/heparin in consultation with cardiology", "TEE/TTE — wall-motion abnormalities, consider revascularization"]
}, {
  id: "vae",
  cat: "circ",
  titleEl: "Φλεβική Εμβολή Αέρα",
  titleEn: "Venous Air Embolism",
  color: "#C9544B",
  stepsEl: ["Διακοπή εισόδου αέρα: πλημμύρισμα πεδίου με ορό, κήρωμα οστών", "Χαμήλωμα χειρουργικού πεδίου κάτω από το επίπεδο της καρδιάς", "FiO2 100%, διακοπή N2O", "Θέση: αριστερή πλάγια κατάκλιση + κεφαλή κάτω (Durant)", "Αναρρόφηση αέρα από κεντρικό καθετήρα αν υπάρχει", "Αιμοδυναμική υποστήριξη — ΚΑΡΠΑ αν ανακοπή", "Παρακολούθηση: πτώση EtCO2, mill-wheel φύσημα, υπόταση"],
  stepsEn: ["Stop air entry: flood field with saline, bone wax", "Lower surgical site below heart level", "FiO2 100%, stop N2O", "Position: left lateral decubitus + head down (Durant)", "Aspirate air via central catheter if present", "Hemodynamic support — CPR if arrest", "Monitor: ↓EtCO2, mill-wheel murmur, hypotension"]
},
// ---------- DRUG / ALLERGY ----------
{
  id: "anaphylaxis",
  cat: "drug",
  titleEl: "Αναφυλαξία",
  titleEn: "Anaphylaxis",
  color: "#C9544B",
  stepsEl: ["Διακοπή πιθανού αιτίου (αντιβιοτικό, NMB, latex, κολλοειδή, χλωρεξιδίνη)", "Αδρεναλίνη IM 0.5 mg (παιδιά 0.01 mg/kg) ή IV 50–100 µg τιτλοποιημένα", "FiO2 100%, διασφάλιση αεραγωγού", "Κρυσταλλοειδή 20 mL/kg ταχέως", "Ανθεκτική: έγχυση αδρεναλίνης 0.05–0.5 µg/kg/min", "Δεύτερη γραμμή: υδροκορτιζόνη 200 mg, αντιισταμινικά", "Τρυπτάση: 0–1 h, 4 h, 24 h", "Παραπομπή σε αλλεργιολογικό έλεγχο"],
  stepsEn: ["Remove trigger (antibiotic, NMB, latex, colloids, chlorhexidine)", "Adrenaline IM 0.5 mg (peds 0.01 mg/kg) or IV 50–100 µg titrated", "FiO2 100%, secure airway", "Crystalloid 20 mL/kg rapidly", "Refractory: adrenaline infusion 0.05–0.5 µg/kg/min", "Second line: hydrocortisone 200 mg, antihistamines", "Tryptase: 0–1 h, 4 h, 24 h", "Refer for allergy testing"]
}, {
  id: "last",
  cat: "drug",
  titleEl: "Τοξικότητα Τοπικών Αναισθητικών (LAST)",
  titleEn: "Local Anesthetic Toxicity (LAST)",
  color: "#C9544B",
  stepsEl: ["Διακοπή έγχυσης τοπικού — κλήση για βοήθεια", "Διασφάλιση αεραγωγού, FiO2 100%, αποφυγή υποξίας/οξέωσης", "Σπασμοί: βενζοδιαζεπίνες (αποφυγή προποφόλης σε αστάθεια)", "Intralipid 20%: bolus 1.5 mL/kg σε 1 min", "Έγχυση 15 mL/kg/h — επανάληψη bolus ×2 αν ασταθής", "ΚΑΡΠΑ: παρατεταμένη (≥60 min) — αδρεναλίνη ≤1 µg/kg", "ΟΧΙ βαζοπρεσίνη, ΟΧΙ ανταγωνιστές Ca/β, ΟΧΙ λιδοκαΐνη", "Max Intralipid 12 mL/kg συνολικά"],
  stepsEn: ["Stop local anesthetic — call for help", "Secure airway, FiO2 100%, avoid hypoxia/acidosis", "Seizures: benzodiazepines (avoid propofol if unstable)", "Intralipid 20%: bolus 1.5 mL/kg over 1 min", "Infusion 15 mL/kg/h — repeat bolus ×2 if unstable", "CPR: prolonged (≥60 min) — adrenaline ≤1 µg/kg", "NO vasopressin, NO Ca/β-blockers, NO lidocaine", "Max Intralipid 12 mL/kg cumulative"]
}, {
  id: "mh",
  cat: "drug",
  titleEl: "Κακοήθης Υπερπυρεξία",
  titleEn: "Malignant Hyperthermia",
  color: "#C9544B",
  stepsEl: ["Διακοπή πτητικών & σουκινυλοχολίνης — κλήση για βοήθεια", "Υπεραερισμός με FiO2 100%, ροή ≥10 L/min", "Δαντρολένιο 2.5 mg/kg IV ταχέως — επανάληψη έως 10 mg/kg", "Ενεργητική ψύξη (στόχος <38.5°C)", "Υπερκαλιαιμία: CaCl2, ινσουλίνη/γλυκόζη, διττανθρακικά", "Αρρυθμίες: αμιωδαρόνη (ΟΧΙ ανταγωνιστές Ca)", "Διούρηση >2 mL/kg/h — μυοσφαιρινουρία", "ΜΕΘ 24–48 h, CK/K+/αέρια ανά 6 h, γραμμή MHAUS"],
  stepsEn: ["Stop volatiles & succinylcholine — call for help", "Hyperventilate FiO2 100%, flow ≥10 L/min", "Dantrolene 2.5 mg/kg IV rapidly — repeat up to 10 mg/kg", "Active cooling (target <38.5°C)", "Hyperkalemia: CaCl2, insulin/glucose, bicarbonate", "Arrhythmias: amiodarone (NOT Ca-channel blockers)", "Urine output >2 mL/kg/h — myoglobinuria", "ICU 24–48 h, CK/K+/gases q6h, MHAUS hotline"]
}, {
  id: "transfusion",
  cat: "drug",
  titleEl: "Αντίδραση Μετάγγισης",
  titleEn: "Transfusion Reaction",
  color: "#D98A38",
  stepsEl: ["ΑΜΕΣΗ διακοπή μετάγγισης — διατήρηση φλεβικής γραμμής με ορό", "Έλεγχος ταυτοπροσωπίας ασθενούς/μονάδας", "Οξεία αιμολυτική: υγρά, διατήρηση διούρησης, αντιμετώπιση DIC/υπερκαλιαιμίας", "Αναφυλακτική: αδρεναλίνη ως πρωτόκολλο αναφυλαξίας", "TRALI: αναπνευστική υποστήριξη, προστατευτικός αερισμός (όχι διουρητικά)", "TACO: διουρητικά, περιορισμός υγρών", "Αποστολή μονάδας & δειγμάτων στην αιμοδοσία, αναφορά"],
  stepsEn: ["STOP transfusion immediately — keep IV line open with saline", "Verify patient/unit identity", "Acute hemolytic: fluids, maintain urine output, treat DIC/hyperkalemia", "Anaphylactic: adrenaline per anaphylaxis protocol", "TRALI: respiratory support, lung-protective ventilation (not diuretics)", "TACO: diuretics, fluid restriction", "Send unit & samples to blood bank, report"]
},
// ---------- REGIONAL ----------
{
  id: "total_spinal",
  cat: "regional",
  titleEl: "Ολική Ραχιαία Αναισθησία",
  titleEn: "Total Spinal Anesthesia",
  color: "#C9544B",
  stepsEl: ["Σημεία: ταχεία άνοδος αποκλεισμού, δύσπνοια, βραδυκαρδία, υπόταση, απώλεια συνείδησης", "ABC: υποστήριξη αεραγωγού/αερισμού — διασωλήνωση", "FiO2 100%", "Υπόταση: υγρά + αγγειοσυσπαστικά (εφεδρίνη/φαινυλεφρίνη/αδρεναλίνη)", "Βραδυκαρδία: ατροπίνη 0.5 mg, αδρεναλίνη αν σοβαρή", "Μαιευτική: αριστερή μετατόπιση μήτρας", "Καθησυχασμός — ο ασθενής μπορεί να ακούει αν δεν χαθεί η συνείδηση· αναλγησία/καταστολή"],
  stepsEn: ["Signs: rapid block ascent, dyspnea, bradycardia, hypotension, loss of consciousness", "ABC: support airway/ventilation — intubate", "FiO2 100%", "Hypotension: fluids + vasopressors (ephedrine/phenylephrine/adrenaline)", "Bradycardia: atropine 0.5 mg, adrenaline if severe", "Obstetric: left uterine displacement", "Reassure — patient may hear if conscious; provide analgesia/sedation"]
},
// ---------- OBSTETRIC ----------
{
  id: "afe",
  cat: "ob",
  titleEl: "Εμβολή Αμνιακού Υγρού",
  titleEn: "Amniotic Fluid Embolism",
  color: "#C9544B",
  stepsEl: ["Κλήση για βοήθεια (μαιευτική/αναισθησία/ΜΕΘ/αιμοδοσία)", "ABC: FiO2 100%, διασωλήνωση — ACLS αν ανακοπή", "Αριστερή μετατόπιση μήτρας", "Περιθανάτια καισαρική εντός 5 min αν ανακοπή μητέρας", "Καρδιαγγειακή κατάρρευση: αγγειοσυσπαστικά, ινότροπα, αποφυγή υπερφόρτωσης δεξιάς", "Μαζική αιμορραγία/DIC: προϊόντα αίματος, τρανεξαμικό, ινωδογόνο", "Σκέψη A-OK (ατροπίνη, ονδανσετρόνη, κετορολάκη), ECMO"],
  stepsEn: ["Call for help (obstetrics/anesthesia/ICU/blood bank)", "ABC: FiO2 100%, intubate — ACLS if arrest", "Left uterine displacement", "Perimortem cesarean within 5 min if maternal arrest", "Cardiovascular collapse: vasopressors, inotropes, avoid RV overload", "Massive hemorrhage/DIC: blood products, tranexamic acid, fibrinogen", "Consider A-OK (atropine, ondansetron, ketorolac), ECMO"]
},
// ---------- SYSTEMS ----------
{
  id: "or_fire",
  cat: "system",
  titleEl: "Πυρκαγιά Χειρουργείου / Αεραγωγού",
  titleEn: "OR / Airway Fire",
  color: "#C9544B",
  stepsEl: ["STOP: αφαίρεση ΕΤΤ & οθονίων, διακοπή O2/αερίων & ροής", "Κατάσβεση: ορός/νερό· πυροσβεστήρας CO2 για επίμονη φλόγα", "Αεραγωγός: αποσύνδεση κυκλώματος, αφαίρεση ΕΤΤ, αερισμός με αέρα, επαναδιασωλήνωση", "Εκτίμηση βλάβης αεραγωγού — βρογχοσκόπηση", "Φροντίδα ασθενούς: εγκαύματα, εισπνευστική βλάβη", "Τρίγωνο φωτιάς: οξειδωτικό (O2/N2O) + πηγή ανάφλεξης (διαθερμία/laser) + καύσιμο (οθόνια/ΕΤΤ)"],
  stepsEn: ["STOP: remove ETT & drapes, stop O2/gases & flow", "Extinguish: saline/water; CO2 extinguisher for persistent flame", "Airway: disconnect circuit, remove ETT, ventilate with air, reintubate", "Assess airway injury — bronchoscopy", "Patient care: burns, inhalation injury", "Fire triad: oxidizer (O2/N2O) + ignition (diathermy/laser) + fuel (drapes/ETT)"]
}, {
  id: "o2_failure",
  cat: "system",
  titleEl: "Διακοπή Παροχής Οξυγόνου",
  titleEn: "Oxygen Supply / Pipeline Failure",
  color: "#D98A38",
  stepsEl: ["Άνοιγμα εφεδρικής φιάλης O2 του μηχανήματος", "Αποσύνδεση από την κεντρική παροχή (pipeline)", "Αερισμός με αυτοδιατεινόμενο ασκό (αέρας δωματίου αν χρειαστεί)", "Διατήρηση αναισθησίας ενδοφλέβια (TIVA)", "Κλήση για βοήθεια & επιπλέον φιάλες", "Παρακολούθηση SpO2 — ελαχιστοποίηση κατανάλωσης"],
  stepsEn: ["Open machine's backup O2 cylinder", "Disconnect from central pipeline", "Ventilate with self-inflating bag (room air if needed)", "Maintain anesthesia IV (TIVA)", "Call for help & extra cylinders", "Monitor SpO2 — minimize consumption"]
}, {
  id: "power_failure",
  cat: "system",
  titleEl: "Διακοπή Ρεύματος",
  titleEn: "Power Failure",
  color: "#D98A38",
  stepsEl: ["Επιβεβαίωση αερισμού — χειροκίνητος αν χρειαστεί", "Έλεγχος εφεδρικής μπαταρίας μηχανήματος/UPS", "Διασφάλιση monitoring (μπαταρία/φορητό)", "TIVA με αντλία μπαταρίας ή χειροκίνητες δόσεις", "Πηγή φωτός (κινητό/λαρυγγοσκόπιο), κλήση για βοήθεια", "Απενεργοποίηση μη απαραίτητου εξοπλισμού"],
  stepsEn: ["Confirm ventilation — manual if required", "Check machine backup battery/UPS", "Ensure monitoring (battery/portable)", "TIVA via battery pump or manual boluses", "Light source (phone/laryngoscope), call for help", "Switch off non-essential equipment"]
}, {
  id: "delayed_emergence",
  cat: "system",
  titleEl: "Καθυστερημένη Αφύπνιση",
  titleEn: "Delayed Emergence",
  color: "#D98A38",
  stepsEl: ["Διασφάλιση οξυγόνωσης/αερισμού", "Υπολειπόμενα φάρμακα: πτητικό, οπιοειδή, μυοχάλαση (TOF), βενζοδιαζεπίνες", "Αναστροφή: ναλοξόνη, φλουμαζενίλη, σουγκαμαδέξη/νεοστιγμίνη κατά περίπτωση", "Μεταβολικά: υπογλυκαιμία, υποθερμία, Na+/ηλεκτρολύτες, υπερκαπνία", "Νευρολογική εκτίμηση — αποκλεισμός ΑΕΕ", "Αέρια αίματος, γλυκόζη, CT εγκεφάλου αν εστιακά/ανεξήγητο"],
  stepsEn: ["Ensure oxygenation/ventilation", "Residual drugs: volatile, opioids, NMB (TOF), benzodiazepines", "Reverse: naloxone, flumazenil, sugammadex/neostigmine as indicated", "Metabolic: hypoglycemia, hypothermia, Na+/electrolytes, hypercarbia", "Neuro exam — exclude stroke", "Blood gas, glucose, head CT if focal/unexplained"]
},
// ---------- PROCEDURES ----------
{
  id: "rsi",
  cat: "proc",
  titleEl: "Ταχεία Εισαγωγή (RSI)",
  titleEn: "Rapid Sequence Induction",
  color: "#1E3A5F",
  stepsEl: ["Έλεγχος: αναρρόφηση, 2 λαρυγγοσκόπια, bougie, ΕΤΤ ×2, φάρμακα", "Προοξυγόνωση 3–5 min (EtO2 >85%) ή 8 βαθιές αναπνοές", "Θέση: ramped/sniffing — προσθήκη HFNO αν διαθέσιμο", "Εισαγωγή: προποφόλη/ετομιδάτη/κεταμίνη + οπιοειδές", "Ροκουρόνιο 1–1.2 mg/kg ή σουκινυλοχολίνη 1–1.5 mg/kg", "Πίεση κρικοειδούς (αμφιλεγόμενη — άρση αν δυσχέρεια)", "Διασωλήνωση — επιβεβαίωση EtCO2", "Σχέδιο Β έτοιμο: VL, SGA, FONA kit"],
  stepsEn: ["Check: suction, 2 laryngoscopes, bougie, ETT ×2, drugs", "Preoxygenate 3–5 min (EtO2 >85%) or 8 deep breaths", "Position: ramped/sniffing — add HFNO if available", "Induction: propofol/etomidate/ketamine + opioid", "Rocuronium 1–1.2 mg/kg or succinylcholine 1–1.5 mg/kg", "Cricoid pressure (controversial — release if difficulty)", "Intubate — confirm EtCO2", "Plan B ready: VL, SGA, FONA kit"]
},
// ---------- Missing from ESA Emergency Quick Reference Guide ----------
{
  id: "newborn",
  cat: "ob",
  titleEl: "Ανάνηψη Νεογνού (Newborn Life Support)",
  titleEn: "Newborn Life Support",
  color: "#C9544B",
  stepsEl: ["Σε κάθε στάδιο ρωτήστε: χρειάζεστε βοήθεια;", "Γέννηση: στέγνωμα μωρού, αφαίρεση υγρών πετσετών & κάλυψη, εκκίνηση χρόνου", "30 s: εκτίμηση τόνου, αναπνοής & καρδιακής συχνότητας", "60 s: αν gasping ή άπνοια → άνοιγμα αεραγωγού, 5 αναπνοές διάτασης (inflation breaths)", "Επανεκτίμηση: αν δεν αυξάνεται η ΚΣ, ελέγξτε κίνηση θώρακα", "Αν ο θώρακας δεν κινείται: επανέλεγχος θέσης κεφαλής, 2-χειριστών αεραγωγός, επανάληψη inflation breaths, SpO2 monitoring", "Όταν κινείται ο θώρακας: αν ΚΣ μη ανιχνεύσιμη ή αργή (<60) → θωρακικές συμπιέσεις 3:1 (3 συμπιέσεις ανά αναπνοή)", "Επανεκτίμηση ΚΣ κάθε 30 s· αν <60 → φλεβική πρόσβαση & φάρμακα", "Αποδεκτό προαγωγικό (pre-ductal) SpO2: 2min 60%, 3min 70%, 4min 80%, 5min 85%, 10min 90%"],
  stepsEn: ["At all stages ask: do you need help?", "Birth: dry the baby, remove wet towels & cover, start the clock", "30 s: assess tone, breathing & heart rate", "60 s: if gasping or not breathing → open airway, give 5 inflation breaths", "Re-assess: if no increase in HR, look for chest movement", "If chest not moving: recheck head position, 2-person airway, repeat inflation breaths, consider SpO2 monitoring", "When chest moving: if HR undetectable or slow (<60) → chest compressions 3:1 (3 compressions per breath)", "Reassess HR every 30 s; if <60 → venous access & drugs", "Acceptable pre-ductal SpO2: 2min 60%, 3min 70%, 4min 80%, 5min 85%, 10min 90%"]
}, {
  id: "airway_pressure",
  cat: "airway",
  titleEl: "Αυξημένη Πίεση Αεραγωγού (Διαφορική)",
  titleEn: "Increased Airway Pressure (Differential)",
  color: "#D98A38",
  stepsEl: ["ΔΙΑΚΡΙΝΕΤΕ — Κύκλωμα: ρυθμίσεις αναπνευστήρα, τσάκισμα σωλήνωσης, βλάβη βαλβίδας, βλάβη O2-flush", "Αεραγωγός: λαρυγγόσπασμος (αν μη διασωληνωμένος), θέση/μέγεθος σωλήνα, δάγκωμα/τσάκισμα σωλήνα", "Ασθενής: βρογχόσπασμος, πνευμοθώρακας, πνευμοπεριτόναιο, τραχειακή παθολογία (ξένο σώμα/εκκρίσεις/όγκος), δυσκαμψία θώρακα, παχυσαρκία, κυψελιδική παθολογία (οίδημα/λοίμωξη/ARDS/θλάση/ίνωση)", "ΕΝΕΡΓΕΙΕΣ — Έλεγχος: μυοχάλαση, βάθος αναισθησίας, καπνογράφημα (βρογχόσπασμος; τσάκισμα;), σπιρομετρία (ενδοβρογχική διασωλήνωση; τσάκισμα;), κύκλωμα σωλήνωσης", "Πράξεις: ακρόαση, χειροκίνητος αερισμός, αναρρόφηση βρογχικού δέντρου, εύκαμπτη βρογχοσκόπηση, αν LMA → σκέψη ETT", "Πιο πιθανά: ανεπαρκής μυοχάλαση, θέση ETT, λαρυγγόσπασμος, ρυθμίσεις αναπνευστήρα", "Αν επιμένει: επανεξέταση αιτίων ασθενούς, κλήση βοήθειας, επανάληψη checklist μαζί"],
  stepsEn: ["DISTINGUISH — Circuit: respirator settings, kinked tubing, valve failure, O2-flush failure", "Airway: laryngospasm (if not intubated), tube position/size, blocked or kinked tube (biting)", "Patient: bronchospasm, pneumothorax, pneumoperitoneum, tracheal pathology (foreign body/secretions/tumour), chest wall rigidity, obesity, alveolar pathology (oedema/infection/ARDS/contusion/fibrosis)", "ACTIONS — Check: muscle relaxation, depth of anaesthesia, capnogram (bronchospasm? kink?), spirometry (endobronchial? kink?), tubing circuit", "Do: auscultate, manually ventilate, suction bronchial tree, flexible bronchoscopy, if LMA → consider ETT", "Most likely: insufficient relaxation, ETT position, laryngospasm, respirator settings", "If persists: review patient causes, call for assistance, repeat checklist together"]
}, {
  id: "hypocapnia",
  cat: "airway",
  titleEl: "Διαφορική: Υποκαπνία / Χαμηλό etCO₂",
  titleEn: "DDx Hypocapnia / Low etCO₂",
  color: "#1E3A5F",
  stepsEl: ["ΚΑΘΟΛΟΥ etCO₂ → ΟΧΙ αερισμός, ΟΧΙ βατός αεραγωγός!!! Οισοφαγική διασωλήνωση; Αποσύνδεση/βλάβη αναπνευστήρα; Άπνοια; Ανακοπή;", "Μειωμένη παραγωγή CO₂: υποθερμία, βαθιά αναισθησία, υποθυρεοειδισμός", "Αυξημένη αποβολή CO₂: (αυτόματος) υπεραερισμός, ακατάλληλη ρύθμιση αναπνευστήρα", "Μειωμένη μεταφορά CO₂ στο αίμα: σοβαρή υπόταση, αναφυλαξία, ανακοπή, πνευμονική εμβολή", "Μειωμένη μεταφορά CO₂ στον πνεύμονα: απόφραξη ETT, λάθος θέση αεραγωγού (ενδοβρογχική), λαρυγγόσπασμος, σοβαρός βρογχόσπασμος", "Αραίωση δείγματος: αποσύνδεση, αραίωση με αέρα δωματίου, λάθος θέση δειγματολήπτη, υψηλή ροή φρέσκου αερίου", "Πιο πιθανά: αποκλεισμός λάθος θέσης αεραγωγού (οισοφαγική), υπεραερισμός, βρογχόσπασμος, λαρυγγόσπασμος, υπόταση"],
  stepsEn: ["NO etCO₂ → NO VENTILATION, NO PATENT AIRWAY!!! Oesophageal intubation? Disconnection/respirator failure? Apnoea? Cardiac arrest?", "Diminished CO₂ production: hypothermia, deep anaesthesia, hypothyroidism", "Enhanced CO₂ excretion: (spontaneous) hyperventilation, inappropriate ventilator setting", "Reduced CO₂ transport in blood: severe hypotension, anaphylaxis, cardiac arrest, pulmonary embolus", "Reduced CO₂ transport in lung: ETT obstruction, incorrect airway placement (endobronchial), laryngospasm, severe bronchospasm", "Sampling dilution: disconnection, room-air dilution, gas sampler misplaced, high fresh gas flow", "Most likely: rule out malplaced airway (oesophageal), hyperventilation, bronchospasm, laryngospasm, hypotension"]
}, {
  id: "hypercapnia",
  cat: "airway",
  titleEl: "Διαφορική: Υπερκαπνία / Υψηλό etCO₂",
  titleEn: "DDx Hypercapnia / High etCO₂",
  color: "#1E3A5F",
  stepsEl: ["Αυξημένη παραγωγή CO₂ (εξωγενής): εμφύσηση CO₂ (λαπαροσκόπηση), χορήγηση διττανθρακικών, επανεισπνοή (βαλβίδες, soda lime, ροή φρέσκου αερίου)", "Αυξημένη παραγωγή CO₂ (ενδογενής): επώδυνο ερέθισμα, αύξηση θερμοκρασίας, επαναιμάτωση μετά tourniquet, σήψη, κακοήθης υπερθερμία, θυρεοτοξική κρίση, κακόηθες νευροληπτικό σύνδρομο", "Μειωμένη αποβολή CO₂ (πνεύμονες): υποαερισμός (αυτόματος/ρυθμίσεις), βρογχόσπασμος/άσθμα, ΧΑΠ", "Μειωμένη αποβολή CO₂ (κύκλωμα): αυξημένος νεκρός χώρος, ανεπαρκής ροή φρέσκου αερίου, δυσλειτουργία βαλβίδας, λάθος ρυθμίσεις αναπνευστήρα", "Πιο πιθανά: υποαερισμός, εξαντλημένη soda lime, ρύθμιση ροής φρέσκου αερίου"],
  stepsEn: ["Increased CO₂ production (exogenous): CO₂ insufflation (laparoscopy), bicarbonate administration, re-breathing (valves, soda lime, fresh gas flow)", "Increased CO₂ production (endogenous): painful stimulus, increased temperature, reperfusion after tourniquet, sepsis, malignant hyperthermia, thyroid storm, neuroleptic malignant syndrome", "Reduced CO₂ excretion (lungs): hypoventilation (spontaneous/settings), bronchospasm/asthma, COPD", "Reduced CO₂ excretion (circuit): increased dead space, inadequate fresh gas flow, valve malfunction, incorrect respirator settings", "Most likely: hypoventilation, exhausted soda lime, fresh gas flow setting"]
}, {
  id: "lv_shock",
  cat: "circ",
  titleEl: "Καταπληξία Αριστερής Κοιλίας (LV Shock)",
  titleEn: "Left Ventricular Shock",
  color: "#C9544B",
  stepsEl: ["Υπόταση; → Echo/TEE σε διασωληνωμένο ασθενή", "Αν ΟΧΙ υπόταση αλλά SVR >1600 ή στενή πίεση παλμού → μείωση afterload (fenoldopam, νιτροπρωσσικό, nesiritide, ACEi)", "Μείωση PEEP", "Έλεγχος CVP & SPV/PPV", "CVP <12 mmHg ή SPV/PPV >12% → αν Hct <27–32% δώστε pRBC, αλλιώς plasma expander", "CVP >22, χαμηλό SvO2/ScvO2, SPV/PPV >15% → αποκλεισμός επιπωματισμού & πνευμοθώρακα υπό τάση", "CVP 12–22 & SPV/PPV <12% → έλεγχος SVR & πίεσης παλμού", "SVR <800 ή ευρεία πίεση παλμού → βαζοπρεσσίνη/νοραδρεναλίνη/αδρεναλίνη ± δοβουταμίνη/φαινυλεφρίνη (διατήρηση SVR <800)", "SVR >1000 ή στενή πίεση παλμού → δοβουταμίνη/αδρεναλίνη/IABP/VAD"],
  stepsEn: ["Hypotensive? → Echo/TEE in intubated patient", "If NOT hypotensive but SVR >1600 or narrow pulse pressure → afterload reduction (fenoldopam, nitroprusside, nesiritide, ACEi)", "Decrease PEEP", "Check CVP & SPV/PPV", "CVP <12 mmHg or SPV/PPV >12% → if Hct <27–32% give pRBC, else plasma expander", "CVP >22, low SvO2/ScvO2, SPV/PPV >15% → rule out tamponade & tension PTX", "CVP 12–22 & SPV/PPV <12% → check SVR & pulse pressure", "SVR <800 or wide pulse pressure → vasopressin/norepinephrine/epi ± dobutamine/phenylephrine (maintain SVR <800)", "SVR >1000 or narrow pulse pressure → dobutamine/epinephrine/IABP/VAD"]
}, {
  id: "rv_shock",
  cat: "circ",
  titleEl: "Καταπληξία Δεξιάς Κοιλίας (RV Shock)",
  titleEn: "Right Ventricular Shock",
  color: "#C9544B",
  stepsEl: ["Υπόταση; → Echo/TEE σε διασωληνωμένο ασθενή", "Δώστε O2, μείωση PEEP", "Υποογκαιμία / fluid responsive (CVP <12–16); → αν Hct <27–32% δώστε pRBC, αλλιώς plasma expanders", "CVP >20, SvO2/ScvO2 <65% → αποκλεισμός επιπωματισμού & πνευμοθώρακα υπό τάση", "Γνωστή/πιθανή ↑ PVR → O2, σκέψη μιλρινόνης ± βαζοπρεσσίνης, iNO", "Μειωμένη στεφανιαία αιμάτωση → φαινυλεφρίνη/νοραδρεναλίνη/βαζοπρεσσίνη (σημ.: μπορεί να ↑ PVR)", "Μειωμένη συσταλτικότητα RV → δοβουταμίνη/μιλρινόνη/αδρεναλίνη"],
  stepsEn: ["Hypotensive? → Echo/TEE in intubated patient", "Give O2, decrease PEEP", "Hypovolemic / fluid responsive (CVP <12–16)? → if Hct <27–32% give pRBC, else plasma expanders", "CVP >20, SvO2/ScvO2 <65% → rule out tamponade & tension PTX", "Known/suspected ↑ PVR → O2, consider milrinone ± vasopressin, iNO", "Decreased coronary perfusion → phenylephrine/norepinephrine/vasopressin (note: may ↑ PVR)", "Diminished RV contractility → dobutamine/milrinone/epinephrine"]
}, {
  id: "hypertension_ddx",
  cat: "circ",
  titleEl: "Διαφορική: Υπέρταση",
  titleEn: "DDx Hypertension",
  color: "#D98A38",
  stepsEl: ["Αναισθησιολογικά αίτια: πολύ ελαφριά αναισθησία, πόνος, υποξία, υπερκαπνία, κακοήθης υπερθερμία, φάρμακα (κοκαΐνη), ύψος μορφοτροπέα (invasive monitoring)", "Χειρουργικά αίτια: tourniquet, αορτικός αποκλεισμός, καρωτιδική ενδαρτηρεκτομή, διέγερση τασεοϋποδοχέων, πνευμοπεριτόναιο", "Αίτια ασθενούς: ιδιοπαθής υπέρταση, rebound (απότομη διακοπή β-αποκλειστή), πλήρης ουροδόχος κύστη, προεκλαμψία, νεφρική νόσος, φαιοχρωμοκύττωμα, θυρεοτοξική κρίση, ↑ ΕΚΠ", "Πιο πιθανά: διασωλήνωση & αφύπνιση, ανεπαρκής αναισθησία/αναλγησία, πνευμοπεριτόναιο, φάρμακα, ιδιοπαθής υπέρταση", "Αντιμετώπιση: βάθυνση αναισθησίας/αναλγησία πρώτα· αντιυπερτασικά βλ. Φάρμακα (λαβηταλόλη, εσμολόλη, ουραπιδίλη, νικαρδιπίνη, GTN)"],
  stepsEn: ["Anaesthesia causes: too light anaesthesia, pain, hypoxia, hypercapnia, malignant hyperthermia, drugs (cocaine), transducer height (invasive monitoring)", "Surgery causes: tourniquet, aortic clamping, carotid endarterectomy, baroreceptor stimulation, pneumoperitoneum", "Patient causes: essential hypertension, rebound (sudden β-blocker stop), full bladder, pre-eclampsia, renal disease, phaeochromocytoma, thyroid storm, raised ICP", "Most likely: intubation & emergence, inadequate anaesthesia/analgesia, pneumoperitoneum, drugs, essential hypertension", "Management: deepen anaesthesia/analgesia first; antihypertensives see Meds (labetalol, esmolol, urapidil, nicardipine, GTN)"]
}];

// ============ TCI MODELS ============
// Body composition helpers

/**
 * Body Mass Index.
 * @param {number} w - Weight in kg
 * @param {number} h - Height in cm
 * @returns {number|null} BMI (kg/m²), or null if weight/height missing
 */
const bmiCalc = (w, h) => w && h ? w / (h / 100) ** 2 : null;

/**
 * James lean body mass. NOTE: can go negative at high BMI — callers must guard (see Schnider `valid`).
 * @param {number} w - Weight in kg
 * @param {number} h - Height in cm
 * @param {"M"|"F"} sex
 * @returns {number} Lean body mass in kg
 */
const lbmJames = (w, h, sex) => sex === "M" ? 1.1 * w - 128 * (w / h) ** 2 : 1.07 * w - 148 * (w / h) ** 2;

/**
 * Janmahasatian fat-free mass (used by Eleveld/Schnider-modern).
 * @param {number} w - Weight in kg
 * @param {number} h - Height in cm
 * @param {"M"|"F"} sex
 * @returns {number} Fat-free mass in kg
 */
const ffmJan = (w, h, sex) => {
  const bmi = bmiCalc(w, h);
  return sex === "M" ? 9.27e3 * w / (6.68e3 + 216 * bmi) : 9.27e3 * w / (8.78e3 + 244 * bmi);
};

/**
 * Ideal body weight (Devine formula). Also used as Predicted Body Weight (PBW)
 * for lung-protective ventilation tidal volume calculations (6–8 mL/kg PBW) —
 * same formula, different clinical use; see `pbw` alias below.
 * @param {number} h - Height in cm
 * @param {"M"|"F"} sex
 * @returns {number|null} Ideal body weight in kg, or null if height missing/invalid
 */
const ibwDevine = (h, sex) => {
  if (!h || h <= 0) return null;
  const inchesOver60 = h / 2.54 - 60;
  const base = sex === "M" ? 50 : 45.5;
  return base + 2.3 * inchesOver60;
};

/**
 * Predicted body weight for tidal volume calculation. Alias of `ibwDevine` —
 * same Devine formula, kept as a distinct name because the clinical context
 * (lung-protective ventilation) differs from IBW-based drug dosing.
 * @param {number} h - Height in cm
 * @param {"M"|"F"} sex
 * @returns {number|null} Predicted body weight in kg
 */
const pbw = (h, sex) => ibwDevine(h, sex);

/**
 * Adjusted body weight — used for dosing certain drugs (e.g. some induction
 * agents, aminoglycosides) in obese patients where actual weight overestimates
 * and IBW underestimates the effective dosing weight.
 * @param {number} w - Actual (total) body weight in kg
 * @param {number} h - Height in cm
 * @param {"M"|"F"} sex
 * @returns {number|null} Adjusted body weight in kg, or null if inputs invalid
 */
const abw = (w, h, sex) => {
  const ibw = ibwDevine(h, sex);
  if (!w || !ibw) return null;
  return ibw + 0.4 * (w - ibw);
};

/**
 * @typedef {Object} PatientCovariates
 * @property {number} w - Weight in kg
 * @property {number} [h] - Height in cm
 * @property {number} [a] - Age in years
 * @property {"M"|"F"} [s] - Sex
 */

/**
 * @typedef {Object} TCIModel
 * @property {string} id - Unique slug, e.g. "marsh"
 * @property {string} drug - Target drug name, e.g. "Propofol"
 * @property {string} name - Display name
 * @property {("w"|"h"|"a"|"s")[]} requires - Covariates needed to run this model
 * @property {string} targetType - Description of target type (Cp vs Ce)
 * @property {string} targetsEl - Greek target concentration guidance
 * @property {string} targetsEn - English target concentration guidance
 * @property {(c: PatientCovariates) => boolean} valid - Returns true if this model is safe/applicable for the given patient
 * @property {string} [warnEl] - Optional Greek warning shown even when valid
 * @property {string} [warnEn] - Optional English warning shown even when valid
 */

// requires: array of needed covariates (w=weight, h=height, a=age, s=sex)
/** @type {TCIModel[]} */
const TCI_MODELS = [{
  id: "marsh",
  drug: "Propofol",
  name: "Marsh",
  requires: ["w"],
  targetType: "Cp / Ce (plasma ή effect-site)",
  targetsEl: "Εισαγωγή 4–8 µg/mL · Συντήρηση 3–6 µg/mL · Καταστολή 1–2.5 µg/mL",
  targetsEn: "Induction 4–8 µg/mL · Maintenance 3–6 µg/mL · Sedation 1–2.5 µg/mL",
  v1k: 0.228,
  // V1 = 0.228 L/kg
  rangeEl: "Ενήλικες. Δεν χρησιμοποιεί ηλικία — αργή έναρξη ke0 (0.26/min). Υπερεκτίμηση σε παχύσαρκους/ηλικιωμένους.",
  rangeEn: "Adults. Age-independent — slow ke0 (0.26/min). Overestimates in obese/elderly.",
  valid: c => c.w >= 12
}, {
  id: "schnider",
  drug: "Propofol",
  name: "Schnider",
  requires: ["w", "h", "a", "s"],
  targetType: "Ce (effect-site, προτιμώμενο)",
  targetsEl: "Εισαγωγή Ce 3–6 µg/mL · Συντήρηση 2.5–4.5 µg/mL · Καταστολή 1–2 µg/mL",
  targetsEn: "Induction Ce 3–6 µg/mL · Maintenance 2.5–4.5 µg/mL · Sedation 1–2 µg/mL",
  v1Fixed: 4.27,
  // L (fixed small V1 → small bolus)
  rangeEl: "Effect-site targeting. Μικρό σταθερό V1 → μικρά bolus. ΟΧΙ σε νοσογόνο παχυσαρκία (αρνητικό LBM σε υψηλό BMI).",
  rangeEn: "Effect-site targeting. Small fixed V1 → small boluses. NOT for morbid obesity (LBM goes negative at high BMI).",
  valid: c => {
    const lbm = lbmJames(c.w, c.h, c.s);
    const bmi = bmiCalc(c.w, c.h);
    const bad = c.s === "M" && bmi > 42 || c.s === "F" && bmi > 35;
    return c.w >= 30 && lbm > 0 && !bad;
  },
  warnEl: "Υψηλό BMI: το μοντέλο Schnider χάνει αξιοπιστία — προτιμήστε Eleveld.",
  warnEn: "High BMI: Schnider loses reliability — prefer Eleveld."
}, {
  id: "eleveld_prop",
  drug: "Propofol",
  name: "Eleveld (general purpose)",
  requires: ["w", "h", "a", "s"],
  targetType: "Ce (effect-site)",
  targetsEl: "Εισαγωγή Ce 3–6 µg/mL · Συντήρηση 2.5–4 µg/mL · Καταστολή 1–2 µg/mL",
  targetsEn: "Induction Ce 3–6 µg/mL · Maintenance 2.5–4 µg/mL · Sedation 1–2 µg/mL",
  v1k: 0.12,
  rangeEl: "Ενιαίο μοντέλο για όλο το φάσμα: νεογνά → ηλικιωμένους, φυσιολογικό → νοσογόνο παχύσαρκο. Προτιμώμενο σύγχρονο μοντέλο.",
  rangeEn: "Single model across the spectrum: neonates → elderly, normal → morbidly obese. Preferred modern model.",
  valid: c => c.w >= 2
}, {
  id: "kataria",
  drug: "Propofol",
  name: "Kataria (παιδιατρικό)",
  requires: ["w", "a"],
  targetType: "Cp (plasma)",
  targetsEl: "Εισαγωγή 5–7 µg/mL · Συντήρηση 3–5 µg/mL",
  targetsEn: "Induction 5–7 µg/mL · Maintenance 3–5 µg/mL",
  v1k: 0.41,
  rangeEl: "Παιδιά 3–11 ετών, >15 kg. Παιδιά χρειάζονται υψηλότερους στόχους (μεγαλύτερη κάθαρση).",
  rangeEn: "Children 3–11 yr, >15 kg. Children need higher targets (greater clearance).",
  valid: c => c.a >= 1 && c.a <= 16 && c.w >= 12
}, {
  id: "paedfusor",
  drug: "Propofol",
  name: "Paedfusor (παιδιατρικό)",
  requires: ["w", "a"],
  targetType: "Cp (plasma)",
  targetsEl: "Εισαγωγή 4–6 µg/mL · Συντήρηση 2.5–4 µg/mL",
  targetsEn: "Induction 4–6 µg/mL · Maintenance 2.5–4 µg/mL",
  v1k: 0.4584,
  rangeEl: "Παιδιά 1–16 ετών, 5–61 kg. Επικυρωμένο για παιδιατρική TIVA.",
  rangeEn: "Children 1–16 yr, 5–61 kg. Validated for pediatric TIVA.",
  valid: c => c.a >= 1 && c.a <= 16 && c.w >= 5 && c.w <= 61
}, {
  id: "minto",
  drug: "Remifentanil",
  name: "Minto",
  requires: ["w", "h", "a", "s"],
  targetType: "Ce (effect-site)",
  targetsEl: "Διασωλήνωση Ce 4–8 ng/mL · Συντήρηση 2–6 ng/mL · Αυτόματη αναπνοή 1–3 ng/mL",
  targetsEn: "Intubation Ce 4–8 ng/mL · Maintenance 2–6 ng/mL · Spont. breathing 1–3 ng/mL",
  v1Fixed: 5.1,
  rangeEl: "Βασίζεται σε LBM (James). Δόση ↓ με ηλικία. ΟΧΙ αξιόπιστο σε νοσογόνο παχυσαρκία (LBM).",
  rangeEn: "LBM-based (James). Dose ↓ with age. Unreliable in morbid obesity (LBM).",
  valid: c => {
    const lbm = lbmJames(c.w, c.h, c.s);
    return c.w >= 30 && lbm > 0;
  },
  warnEl: "Νοσογόνος παχυσαρκία: το LBM (James) γίνεται αναξιόπιστο — προτιμήστε Eleveld.",
  warnEn: "Morbid obesity: James LBM unreliable — prefer Eleveld."
}, {
  id: "eleveld_remi",
  drug: "Remifentanil",
  name: "Eleveld (general purpose)",
  requires: ["w", "h", "a", "s"],
  targetType: "Ce (effect-site)",
  targetsEl: "Διασωλήνωση Ce 4–8 ng/mL · Συντήρηση 2–6 ng/mL · Αυτόματη αναπνοή 1–3 ng/mL",
  targetsEn: "Intubation Ce 4–8 ng/mL · Maintenance 2–6 ng/mL · Spont. breathing 1–3 ng/mL",
  v1k: 0.075,
  rangeEl: "Ενιαίο μοντέλο όλο το φάσμα ηλικίας/βάρους. Προτιμώμενο σε παχύσαρκους & άκρα ηλικίας.",
  rangeEn: "Single model across age/weight spectrum. Preferred in obese & extremes of age.",
  valid: c => c.w >= 5
}, {
  id: "gepts",
  drug: "Sufentanil",
  name: "Gepts",
  requires: ["w"],
  targetType: "Cp (plasma)",
  targetsEl: "Διεγχειρητικά 0.2–0.5 ng/mL · Καρδιοχειρουργική έως 1 ng/mL",
  targetsEn: "Intraop 0.2–0.5 ng/mL · Cardiac up to 1 ng/mL",
  v1k: 0.164,
  rangeEl: "Ενήλικες. Σταθεροί συντελεστές ανά kg.",
  rangeEn: "Adults. Fixed per-kg coefficients.",
  valid: c => c.w >= 20
}, {
  id: "maitre",
  drug: "Alfentanil",
  name: "Maitre",
  requires: ["w", "a", "s"],
  targetType: "Cp (plasma)",
  targetsEl: "Διεγχειρητικά 50–200 ng/mL · Αναλγησία 30–100 ng/mL",
  targetsEn: "Intraop 50–200 ng/mL · Analgesia 30–100 ng/mL",
  v1k: 0.111,
  rangeEl: "Ενήλικες. Προσαρμογή για ηλικία & φύλο.",
  rangeEn: "Adults. Adjusts for age & sex.",
  valid: c => c.w >= 20
}, {
  id: "hannivoort",
  drug: "Dexmedetomidine",
  name: "Hannivoort",
  requires: ["w"],
  targetType: "Cp (plasma)",
  targetsEl: "Καταστολή 0.4–1.2 ng/mL · Βαθύτερη 1.2–2 ng/mL (παρακολούθηση βραδυκαρδίας)",
  targetsEn: "Sedation 0.4–1.2 ng/mL · Deeper 1.2–2 ng/mL (watch bradycardia)",
  v1k: 0.0934,
  rangeEl: "Φόρτιση σε 10 min για αποφυγή υπερτασικής/βραδυκαρδικής απάντησης. ICU/περιεπεμβατική καταστολή.",
  rangeEn: "Load over 10 min to avoid hyper-/brady response. ICU/procedural sedation.",
  valid: c => c.w >= 30
}];
const TCI_DRUGS = ["Propofol", "Remifentanil", "Sufentanil", "Alfentanil", "Dexmedetomidine"];
const covLabel = {
  w: {
    el: "Βάρος",
    en: "Weight"
  },
  h: {
    el: "Ύψος",
    en: "Height"
  },
  a: {
    el: "Ηλικία",
    en: "Age"
  },
  s: {
    el: "Φύλο",
    en: "Sex"
  }
};

// ============ UI TEXT ============
const T = {
  el: {
    appName: "Efstathia’s Anesthesia Assistant",
    tabs: {
      meds: "Φάρμακα",
      tci: "TCI",
      tools: "Εργαλεία",
      peds: "Παιδιά",
      ai: "AI",
      lists: "Λίστες"
    },
    patient: "Ασθενής",
    weight: "Βάρος (kg)",
    age: "Ηλικία (έτη)",
    height: "Ύψος (cm)",
    sex: "Φύλο",
    male: "Άνδρας",
    female: "Γυναίκα",
    tciTitle: "Στοχοκατευθυνόμενη Έγχυση (TCI)",
    covariates: "Συνδιακυμαντές μοντέλου",
    targeting: "Στόχευση",
    targetsHead: "Συνιστώμενοι στόχοι",
    bolusEst: "Εκτίμηση εφόδου (πλήρωση V1)",
    needCov: "Συμπληρώστε για το μοντέλο:",
    caution: "Προσοχή",
    tciDisc: "Οι στόχοι είναι ενδεικτικοί — τιτλοποίηση στην κλινική απόκριση/βάθος αναισθησίας.",
    searchDrug: "Αναζήτηση φαρμάκου…",
    notes: "Σημειώσεις",
    ci: "Αντενδείξεις",
    maxLabel: "max",
    planTitle: "Σχέδιο Αναισθησίας με AI",
    toggleGenerate: "Σχέδιο",
    toggleChat: "Συνομιλία",
    planDesc: "Περιγράψτε το περιστατικό — το AI θα δομήσει πλήρες αναισθησιολογικό πλάνο.",
    planPlaceholder: "π.χ. Γυναίκα 67 ετών, 80 kg, λαπαροσκοπική χολοκυστεκτομή. ΑΥ, ΣΔ2, ΧΑΠ ήπια. ASA III. Hb 11.2, Cr 1.4...",
    planBtn: "Δημιουργία σχεδίου",
    planLoading: "Δημιουργία σχεδίου…",
    aiTitle: "AI Σύμβουλος Αναισθησίας",
    aiPlaceholder: "Ρωτήστε οτιδήποτε για αναισθησία…",
    aiHint: "π.χ. «Δοσολογία ρεμιφεντανίλης TCI σε ηλικιωμένο», «Διαχείριση ασθενούς με DOACs προ ραχιαίας»",
    send: "Αποστολή",
    thinking: "Σκέφτεται…",
    disclaimer: "Εργαλείο υποστήριξης για επαγγελματίες υγείας. Επαληθεύστε κάθε δόση πριν τη χορήγηση — δεν υποκαθιστά την κλινική κρίση.",
    weightNeeded: "Εισάγετε βάρος για υπολογισμό δόσεων",
    copyPlan: "Αντιγραφή",
    copied: "Αντιγράφηκε ✓",
    errAI: "Σφάλμα σύνδεσης με το AI. Δοκιμάστε ξανά."
  },
  en: {
    appName: "Efstathia’s Anesthesia Assistant",
    tabs: {
      meds: "Meds",
      tci: "TCI",
      tools: "Tools",
      peds: "Peds",
      ai: "AI",
      lists: "Lists"
    },
    patient: "Patient",
    weight: "Weight (kg)",
    age: "Age (years)",
    height: "Height (cm)",
    sex: "Sex",
    male: "Male",
    female: "Female",
    tciTitle: "Target-Controlled Infusion (TCI)",
    covariates: "Model covariates",
    targeting: "Targeting",
    targetsHead: "Recommended targets",
    bolusEst: "Loading estimate (V1 fill)",
    needCov: "Required for this model:",
    caution: "Caution",
    tciDisc: "Targets are indicative — titrate to clinical response/depth of anesthesia.",
    searchDrug: "Search drug…",
    notes: "Notes",
    ci: "Contraindications",
    maxLabel: "max",
    planTitle: "AI Anesthesia Plan",
    toggleGenerate: "Plan",
    toggleChat: "Chat",
    planDesc: "Describe the case — AI will build a complete structured anesthetic plan.",
    planPlaceholder: "e.g. 67F, 80 kg, lap cholecystectomy. HTN, T2DM, mild COPD. ASA III. Hb 11.2, Cr 1.4...",
    planBtn: "Generate plan",
    planLoading: "Generating plan…",
    aiTitle: "AI Anesthesia Consultant",
    aiPlaceholder: "Ask anything about anesthesia…",
    aiHint: "e.g. \"Remifentanil TCI dosing in the elderly\", \"Managing DOACs before spinal\"",
    send: "Send",
    thinking: "Thinking…",
    disclaimer: "Decision-support tool for healthcare professionals. Verify every dose before administration — does not replace clinical judgment.",
    weightNeeded: "Enter weight to calculate doses",
    copyPlan: "Copy",
    copied: "Copied ✓",
    errAI: "AI connection error. Please try again."
  }
};

// ============ HELPERS ============

/**
 * Formats a numeric dose with precision that scales down as the value shrinks
 * (whole numbers ≥100, 1 decimal ≥10, 2 decimals below).
 * @param {number} n
 * @returns {string}
 */
const fmt = n => {
  if (n >= 100) return Math.round(n).toString();
  if (n >= 10) return (Math.round(n * 10) / 10).toString();
  return (Math.round(n * 100) / 100).toString();
};

/**
 * Renders a dose range for display, optionally scaled to patient weight with max/min clamping applied.
 * @param {DoseRange} d
 * @param {number} w - Patient weight in kg (falsy → returns unscaled range string only)
 * @param {"el"|"en"} lang
 * @returns {string|{base: string, calc: string, capped: boolean}} Plain range string when no weight given, otherwise an object with the unscaled base range, the weight-calculated range, and whether it was capped by `max`/`minAbs`
 */
function doseText(d, w, lang) {
  if (d.fixed) return d.fixed;
  const range = d.lo === d.hi ? `${d.lo}` : `${d.lo}–${d.hi}`;
  let base = `${range} ${d.unit}`;
  if (!w) return base;
  const baseUnit = d.unit.replace(/^(mg|mcg|mL)\/kg/, "$1");
  let lo = d.lo * w,
    hi = d.hi * w;
  let capped = false;
  if (d.max) {
    if (lo > d.max) {
      lo = d.max;
      capped = true;
    }
    if (hi > d.max) {
      hi = d.max;
      capped = true;
    }
  }
  if (d.minAbs) {
    lo = Math.max(lo, d.minAbs);
    hi = Math.max(hi, d.minAbs);
  }
  const calc = lo === hi ? fmt(lo) : `${fmt(lo)}–${fmt(hi)}`;
  return {
    base,
    calc: `${calc} ${baseUnit}`,
    capped
  };
}

// ---- API key storage (safe: never crashes if storage unavailable) ----
let _memKey = "";
const KEY_STORE = "aa_gemini_key";
function getApiKey() {
  try {
    return window.localStorage.getItem(KEY_STORE) || _memKey;
  } catch (e) {
    return _memKey;
  }
}
function setApiKey(k) {
  _memKey = k || "";
  try {
    k ? window.localStorage.setItem(KEY_STORE, k) : window.localStorage.removeItem(KEY_STORE);
  } catch (e) {}
}

// ---- Generic safe storage with optional TTL (ms). Falls back to in-memory. ----
const _mem = {};
function storeSet(key, value, ttlMs) {
  const rec = JSON.stringify({
    v: value,
    exp: ttlMs ? Date.now() + ttlMs : null
  });
  _mem[key] = rec;
  try {
    window.localStorage.setItem(key, rec);
  } catch (e) {}
}
function storeGet(key) {
  let raw = null;
  try {
    raw = window.localStorage.getItem(key);
  } catch (e) {}
  if (raw == null) raw = _mem[key] || null;
  if (raw == null) return null;
  try {
    const rec = JSON.parse(raw);
    if (rec.exp && Date.now() > rec.exp) {
      storeDel(key);
      return null;
    }
    return rec.v;
  } catch (e) {
    return null;
  }
}
function storeDel(key) {
  delete _mem[key];
  try {
    window.localStorage.removeItem(key);
  } catch (e) {}
}
const PATIENT_TTL = 60 * 60 * 1000; // 1 hour — same-case convenience without stale carry-over

// ---- AI backend: Gemini with user's key; falls back to Claude endpoint (works in claude.ai preview) ----
// Model cascade: newest alias first, then stable fallbacks (Google retires models yearly —
// gemini-2.0-flash was shut down 2026-06-01, hence the alias + cascade).
const GEMINI_MODELS = ["gemini-flash-latest", "gemini-2.5-flash", "gemini-2.5-flash-lite"];
async function callGemini(messages, system, key) {
  const contents = messages.map(m => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{
      text: m.content
    }]
  }));
  let lastErr = null;
  for (const model of GEMINI_MODELS) {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{
            text: system
          }]
        },
        contents,
        generationConfig: {
          maxOutputTokens: 4096,
          temperature: 0.4,
          thinkingConfig: {
            thinkingBudget: 0
          }
        }
      })
    });
    if (res.status === 404) {
      lastErr = new Error("HTTP_404");
      continue;
    } // model retired → try next
    if (res.status === 400 || res.status === 403) throw new Error("BAD_KEY");
    if (res.status === 429) throw new Error("QUOTA");
    if (!res.ok) {
      lastErr = new Error("HTTP_" + res.status);
      continue;
    }
    const data = await res.json();
    const parts = data?.candidates?.[0]?.content?.parts || [];
    const text = parts.map(p => p.text || "").filter(Boolean).join("\n");
    if (text) return text;
    lastErr = new Error("EMPTY");
  }
  throw lastErr || new Error("EMPTY");
}
async function callClaude(messages, system) {
  const key = getApiKey();
  if (key) return callGemini(messages, system, key);
  // No key: try the Anthropic endpoint (works inside claude.ai preview only)
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system,
        messages
      })
    });
    if (!res.ok) throw new Error("HTTP_" + res.status);
    const data = await res.json();
    const out = data.content.map(i => i.type === "text" ? i.text : "").filter(Boolean).join("\n");
    if (!out) throw new Error("EMPTY");
    return out;
  } catch (e) {
    throw new Error("NO_KEY");
  }
}

// Build a concise patient-context string for the AI tabs (includes BMI when possible)
function aiPatientCtx(lang, weight, age, height, sex) {
  const w = parseFloat(weight) || 0,
    a = parseFloat(age) || 0,
    h = parseFloat(height) || 0;
  const bmi = bmiCalc(w, h);
  const el = lang === "el";
  const parts = [];
  if (w) parts.push(el ? `βάρος ${w} kg` : `weight ${w} kg`);
  if (a) parts.push(el ? `ηλικία ${a} έτη` : `age ${a} y`);
  if (h) parts.push(el ? `ύψος ${h} cm` : `height ${h} cm`);
  if (w || a || h) parts.push(el ? `φύλο ${sex === "F" ? "θήλυ" : "άρρεν"}` : `sex ${sex === "F" ? "female" : "male"}`);
  if (bmi) parts.push(`BMI ${Math.round(bmi * 10) / 10}`);
  return parts.join(", ");
}

// Strip common LaTeX artefacts the model sometimes emits ($...$, \mu, _2, \ge, etc.)
function deLatex(s) {
  return s.replace(/\$\\?text\{([^}]*)\}\$/g, "$1").replace(/\$+/g, "") // drop $ delimiters
  .replace(/\\mu\s?g/g, "µg").replace(/\\mu/g, "µ").replace(/\\ge\b/g, "≥").replace(/\\geq\b/g, "≥").replace(/\\le\b/g, "≤").replace(/\\leq\b/g, "≤").replace(/\\times\b/g, "×").replace(/\\cdot\b/g, "·").replace(/\\pm\b/g, "±").replace(/\\approx\b/g, "≈").replace(/\\rightarrow\b|\\to\b/g, "→").replace(/\\%/g, "%").replace(/([A-Za-z])_\{?(\d)\}?/g, (m, a, d) => a + "₀₁₂₃₄₅₆₇₈₉"[+d]) // O_2 → O₂
  .replace(/\^\{?(\d)\}?/g, (m, d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[+d]) // m^3 → m³
  .replace(/\\left|\\right|\\,|\\;/g, "").replace(/\\[a-zA-Z]+/g, ""); // any remaining \command → drop
}

// Minimal markdown renderer (headers, bold, italic, lists)
function Md({
  text
}) {
  // normalise: strip LaTeX; bullets written as "* " → "- "; collapse leftover emphasis runs
  const lines = deLatex(text).split("\n");
  const inline = s => {
    // split on **bold** and *italic* while keeping delimiters
    const out = [];
    let rest = s;
    let key = 0;
    const re = /(\*\*[^*]+\*\*|\*[^*\n]+\*)/;
    let m;
    while (m = rest.match(re)) {
      const idx = m.index;
      if (idx > 0) out.push(rest.slice(0, idx));
      const tok = m[0];
      if (tok.startsWith("**")) out.push(/*#__PURE__*/React.createElement("strong", {
        key: key++,
        style: {
          color: "#1C2836"
        }
      }, tok.slice(2, -2)));else out.push(/*#__PURE__*/React.createElement("em", {
        key: key++,
        style: {
          color: "#1C2836",
          fontStyle: "normal",
          fontWeight: 700
        }
      }, tok.slice(1, -1)));
      rest = rest.slice(idx + tok.length);
    }
    if (rest) out.push(rest.replace(/\*+/g, "")); // strip any stray unmatched stars
    return out;
  };
  return /*#__PURE__*/React.createElement("div", null, lines.map((ln, i) => {
    const boldify = inline;
    if (/^###?#?\s/.test(ln)) return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        fontWeight: 800,
        fontSize: 15,
        color: "#1E3A5F",
        margin: "14px 0 4px",
        letterSpacing: 0.2
      }
    }, ln.replace(/^#+\s/, "").replace(/\*+/g, ""));
    if (/^\s*[-•*]\s/.test(ln)) return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        paddingLeft: 16,
        position: "relative",
        margin: "3px 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 2,
        color: "#1E3A5F"
      }
    }, "›"), boldify(ln.replace(/^\s*[-•*]\s/, "")));
    if (/^\s*\d+\.\s/.test(ln)) return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        paddingLeft: 16,
        margin: "3px 0"
      }
    }, boldify(ln));
    if (ln.trim() === "") return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        height: 6
      }
    });
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        margin: "2px 0"
      }
    }, boldify(ln));
  }));
}

// ============ STYLES ============
const S = {
  ink: "#1C2836",
  teal: "#1E3A5F",
  tealDark: "#14253F",
  monitor: "#7C90AB",
  bg: "#F4F6F9",
  card: "#FFFFFF",
  line: "#E1E7EE",
  red: "#C9544B",
  amber: "#D98A38",
  muted: "#75808F"
};
const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 10,
  border: `1.5px solid ${S.line}`,
  fontSize: 15,
  outline: "none",
  background: "#fff",
  color: S.ink,
  boxSizing: "border-box",
  fontFamily: "inherit"
};

// ============ COMPONENTS ============
function PatientBar({
  lang,
  weight,
  setWeight,
  age,
  setAge,
  height,
  setHeight,
  sex,
  setSex
}) {
  const t = T[lang];
  const fieldStyle = {
    ...inputStyle,
    background: "#F8FAFC",
    border: `1.5px solid ${S.line}`,
    color: S.ink,
    padding: "8px 8px",
    fontSize: 14
  };
  // Age is always stored in YEARS. The unit toggle only changes what the user types/sees.
  const [ageUnit, setAgeUnit] = useState("y"); // "y" | "m"
  const ageDisplay = age === "" ? "" : ageUnit === "m" ? String(Math.round(parseFloat(age) * 12 * 100) / 100) : age;
  const onAgeChange = val => {
    if (val === "") {
      setAge("");
      return;
    }
    const num = parseFloat(val);
    if (isNaN(num)) {
      setAge(val);
      return;
    }
    setAge(ageUnit === "m" ? String(num / 12) : val);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      background: S.card,
      padding: "10px 12px",
      borderRadius: 16,
      boxShadow: "0 1px 3px rgba(80,64,48,0.06)",
      border: `1.5px solid ${S.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 26 26",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "1,15 6,15 8,8 11,21 14,11 16,15 25,15",
    fill: "none",
    stroke: S.teal,
    strokeWidth: "2",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "decimal",
    value: weight,
    onChange: e => setWeight(e.target.value),
    placeholder: t.weight,
    "aria-label": t.weight,
    style: {
      ...fieldStyle,
      flex: 1.2,
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "decimal",
    value: ageDisplay,
    onChange: e => onAgeChange(e.target.value),
    placeholder: ageUnit === "m" ? lang === "el" ? "Ηλικία (μ)" : "Age (mo)" : t.age,
    "aria-label": t.age,
    style: {
      ...fieldStyle,
      flex: 1,
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "decimal",
    value: height,
    onChange: e => setHeight(e.target.value),
    placeholder: t.height,
    "aria-label": t.height,
    style: {
      ...fieldStyle,
      flex: 1.1,
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSex(sex === "M" ? "F" : "M"),
    "aria-label": t.sex,
    style: {
      ...fieldStyle,
      flex: 0.6,
      minWidth: 42,
      padding: "4px 6px",
      cursor: "pointer",
      fontWeight: 800,
      color: S.teal,
      fontFamily: "inherit",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 18,
      lineHeight: 1
    }
  }, sex === "M" ? "♂" : "♀"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      paddingLeft: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: S.muted,
      fontWeight: 600
    }
  }, lang === "el" ? "Μονάδα ηλικίας:" : "Age unit:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "#EEF2F7",
      borderRadius: 8,
      padding: 2
    }
  }, [["y", lang === "el" ? "Έτη" : "Years"], ["m", lang === "el" ? "Μήνες" : "Months"]].map(([u, lbl]) => /*#__PURE__*/React.createElement("button", {
    key: u,
    onClick: () => setAgeUnit(u),
    style: {
      border: "none",
      borderRadius: 6,
      padding: "4px 14px",
      fontSize: 12.5,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      background: ageUnit === u ? S.teal : "transparent",
      color: ageUnit === u ? "#fff" : S.muted
    }
  }, lbl)))));
}
function MedsTab({
  lang,
  weight
}) {
  const t = T[lang];
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [open, setOpen] = useState(null);
  const w = parseFloat(weight) || 0;
  const list = DRUGS.filter(d => (cat === "all" || d.cat === cat) && d.name.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: t.searchDrug,
    style: inputStyle
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      overflowX: "auto",
      paddingBottom: 4,
      WebkitOverflowScrolling: "touch"
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => setCat(c.id),
    style: {
      padding: "6px 12px",
      borderRadius: 99,
      border: "none",
      whiteSpace: "nowrap",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit",
      background: cat === c.id ? S.teal : "#fff",
      color: cat === c.id ? "#fff" : S.muted,
      boxShadow: cat === c.id ? "none" : `inset 0 0 0 1.5px ${S.line}`
    }
  }, c[lang]))), !w && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: S.amber,
      fontWeight: 600,
      padding: "2px 4px"
    }
  }, "⚖ ", t.weightNeeded), list.map(d => {
    const isOpen = open === d.id;
    return /*#__PURE__*/React.createElement("div", {
      key: d.id,
      style: {
        background: S.card,
        borderRadius: 14,
        border: `1.5px solid ${isOpen ? S.teal : S.line}`,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? null : d.id),
      style: {
        width: "100%",
        padding: "13px 14px",
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "inherit"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 15.5,
        color: S.ink
      }
    }, d.name), /*#__PURE__*/React.createElement("span", {
      style: {
        color: S.muted,
        fontSize: 18,
        transform: isOpen ? "rotate(90deg)" : "none",
        transition: "transform .15s"
      }
    }, "›")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 14px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, d.doses.map((ds, i) => {
      const dt = doseText(ds, w, lang);
      const isStr = typeof dt === "string";
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          background: S.bg,
          borderRadius: 10,
          padding: "9px 12px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12.5,
          color: S.muted,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: 0.4
        }
      }, ds[lang]), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: 4
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14.5,
          color: S.ink
        }
      }, isStr ? dt : dt.base), !isStr && w > 0 && /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 800,
          fontSize: 16.5,
          color: dt.capped ? S.amber : S.teal,
          fontVariantNumeric: "tabular-nums"
        }
      }, "= ", dt.calc, dt.capped ? ` (${t.maxLabel})` : "")), ds.max && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: S.muted
        }
      }, t.maxLabel, ": ", ds.max, " ", ds.unit.split("/")[0]));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: S.ink,
        lineHeight: 1.45
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: S.teal
      }
    }, t.notes, ": "), lang === "el" ? d.notesEl : d.notesEn), (lang === "el" ? d.ciEl : d.ciEn) !== "—" && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: S.red,
        lineHeight: 1.45
      }
    }, /*#__PURE__*/React.createElement("strong", null, t.ci, ": "), lang === "el" ? d.ciEl : d.ciEn), w > 0 && d.doses.some(ds => typeof doseText(ds, w, lang) !== "string") && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: S.amber,
        fontWeight: 600,
        lineHeight: 1.4
      }
    }, lang === "el" ? "⚠ Υπολογισμένες τιμές στο βάρος — επαληθεύστε πριν τη χορήγηση." : "⚠ Weight-calculated values — verify before administration.")));
  }));
}
function PlanTab({
  lang,
  weight,
  age,
  height,
  sex
}) {
  const t = T[lang];
  const [input, setInput] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [copied, setCopied] = useState(false);
  const generate = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    setErr(false);
    setPlan("");
    const ctx = aiPatientCtx(lang, weight, age, height, sex);
    const sys = lang === "el" ? "Είσαι έμπειρος αναισθησιολόγος-σύμβουλος. Δημιούργησε δομημένο, πρακτικό αναισθησιολογικό πλάνο στα Ελληνικά, με επικεφαλίδες σε μορφή ## : ## Προεγχειρητική Εκτίμηση (ASA, κίνδυνοι, βελτιστοποίηση), ## Monitoring, ## Τεχνική Αναισθησίας, ## Αεραγωγός (αξιολόγηση & σχέδιο κατά DAS 2025: βιντεολαρυγγοσκόπιο 1ης γραμμής, peroxygenation, Plan A–D), ## Φάρμακα & Δόσεις (υπολόγισε στο βάρος του ασθενούς όταν δίνεται, με μονάδες mg/µg/mL), ## Διεγχειρητική Διαχείριση, ## Αναλγησία, ## Μετεγχειρητικά & PONV, ## Σημεία Προσοχής. Βάσει σύγχρονων κατευθυντηρίων (ESAIC/ASA/DAS 2025/ASRA). Αν λείπουν κρίσιμα στοιχεία, ανέφερε σύντομα τι χρειάζεται και κάνε λογικές παραδοχές. Συνοπτικά, με bullets. Είναι εργαλείο υποστήριξης απόφασης — κλείσε με σύντομη υπενθύμιση επαλήθευσης δόσεων. Απευθύνεσαι σε αναισθησιολόγο. ΜΗΝ χρησιμοποιείς LaTeX ή σύμβολα δολαρίου ($). Γράψε απλό κείμενο: O₂, CO₂, µg/kg/min, ≥, ≤, × κατευθείαν ως χαρακτήρες Unicode." : "You are an expert consultant anesthesiologist. Create a structured, practical anesthetic plan in English, with ## headings: ## Preoperative Assessment (ASA, risks, optimization), ## Monitoring, ## Anesthetic Technique, ## Airway (assessment & plan per DAS 2025: first-line videolaryngoscopy, peroxygenation, Plan A–D), ## Drugs & Doses (weight-calculated when given, with mg/µg/mL units), ## Intraoperative Management, ## Analgesia, ## Postoperative & PONV, ## Key Concerns. Based on current guidelines (ESAIC/ASA/DAS 2025/ASRA). If critical data is missing, briefly note what's needed and make reasonable assumptions. Concise, bulleted. This is a decision-support tool — end with a brief dose-verification reminder. Audience: anesthesiologist. Do NOT use LaTeX or dollar signs ($). Write plain text: O₂, CO₂, µg/kg/min, ≥, ≤, × directly as Unicode characters.";
    try {
      const out = await callClaude([{
        role: "user",
        content: `${ctx ? ctx + "\n" : ""}${input}`
      }], sys);
      setPlan(out);
    } catch (e) {
      setErr(e && (e.message === "NO_KEY" || e.message === "BAD_KEY" || e.message === "QUOTA") ? e.message : true);
    }
    setLoading(false);
  };
  const copy = () => {
    const ta = document.createElement("textarea");
    ta.value = plan;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      color: S.ink
    }
  }, t.planTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: S.muted,
      marginTop: 2
    }
  }, t.planDesc)), /*#__PURE__*/React.createElement("textarea", {
    value: input,
    onChange: e => setInput(e.target.value),
    placeholder: t.planPlaceholder,
    rows: 5,
    style: {
      ...inputStyle,
      resize: "vertical",
      lineHeight: 1.5
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: generate,
    disabled: loading || !input.trim(),
    style: {
      padding: "13px",
      borderRadius: 12,
      border: "none",
      background: loading ? S.muted : S.teal,
      color: "#fff",
      fontWeight: 700,
      fontSize: 15.5,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, loading ? t.planLoading : t.planBtn), err && /*#__PURE__*/React.createElement("div", {
    style: {
      color: S.red,
      fontSize: 14,
      fontWeight: 600
    }
  }, err === "NO_KEY" ? lang === "el" ? "Χρειάζεται Gemini API key — πρόσθεσέ το στο πεδίο πάνω. 🔑" : "A Gemini API key is needed — add it in the field above. 🔑" : err === "QUOTA" ? lang === "el" ? "Εξαντλήθηκε προσωρινά το δωρεάν όριο — δοκίμασε ξανά σε λίγα λεπτά." : "Free-tier quota temporarily exceeded — try again in a few minutes." : err === "BAD_KEY" ? lang === "el" ? "Το κλειδί δεν έγινε δεκτό — έλεγξέ το και ξαναπροσπάθησε." : "The key was rejected — check it and try again." : t.errAI), plan && /*#__PURE__*/React.createElement("div", {
    style: {
      background: S.card,
      borderRadius: 14,
      border: `1.5px solid ${S.line}`,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    style: {
      float: "right",
      padding: "5px 12px",
      borderRadius: 8,
      border: `1.5px solid ${S.line}`,
      background: "#fff",
      color: S.teal,
      fontWeight: 700,
      fontSize: 12.5,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, copied ? t.copied : t.copyPlan), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: S.ink,
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement(Md, {
    text: plan
  }))));
}
function AITab({
  lang,
  weight,
  age,
  height,
  sex
}) {
  const t = T[lang];
  const [msgs, setMsgs] = useState(() => storeGet("aa_chat") || []);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [msgs, loading]);
  useEffect(() => {
    if (msgs.length) storeSet("aa_chat", msgs.slice(-30));else storeDel("aa_chat");
  }, [msgs]);
  const clearChat = () => {
    setMsgs([]);
    storeDel("aa_chat");
  };
  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    const next = [...msgs, {
      role: "user",
      content: userMsg
    }];
    setMsgs(next);
    setInput("");
    setLoading(true);
    const ctx = aiPatientCtx(lang, weight, age, height, sex);
    const sys = lang === "el" ? `Είσαι έμπειρος αναισθησιολόγος-σύμβουλος που απαντά σε συνάδελφο αναισθησιολόγο. Απαντάς στα Ελληνικά, συνοπτικά, πρακτικά και ακριβώς, με δόσεις (υπολογισμένες στο βάρος όταν δίνεται) και αναφορά σε σύγχρονες κατευθυντήριες (ESAIC/ASA/DAS 2025/ASRA/MHAUS) όπου σχετίζεται. Αν λείπει κρίσιμη πληροφορία για ασφαλή απάντηση, ζήτησέ την σύντομα. Εργαλείο υποστήριξης απόφασης — οι δόσεις να επαληθεύονται. ΜΗΝ χρησιμοποιείς LaTeX ή σύμβολα δολαρίου ($)· γράψε απλό κείμενο με Unicode (O₂, µg, ≥).${ctx ? ` Τρέχων ασθενής: ${ctx}.` : ""}` : `You are an expert consultant anesthesiologist answering a fellow anesthesiologist. Answer in English, concise, practical and precise, with doses (weight-calculated when given) and references to current guidelines (ESAIC/ASA/DAS 2025/ASRA/MHAUS) where relevant. If critical information is missing for a safe answer, briefly ask for it. Decision-support tool — doses should be verified. Do NOT use LaTeX or dollar signs ($); write plain text with Unicode (O₂, µg, ≥).${ctx ? ` Current patient: ${ctx}.` : ""}`;
    try {
      const out = await callClaude(next.map(m => ({
        role: m.role,
        content: m.content
      })), sys);
      setMsgs([...next, {
        role: "assistant",
        content: out
      }]);
    } catch (e) {
      const msg = e && e.message === "NO_KEY" ? lang === "el" ? "Χρειάζεται Gemini API key — πρόσθεσέ το στο πεδίο 🔑 πάνω από τη συνομιλία." : "A Gemini API key is needed — add it in the 🔑 field above the chat." : e && e.message === "QUOTA" ? lang === "el" ? "Εξαντλήθηκε προσωρινά το δωρεάν όριο του Gemini — δοκίμασε ξανά σε λίγα λεπτά." : "Gemini free-tier quota temporarily exceeded — try again in a few minutes." : e && e.message === "BAD_KEY" ? lang === "el" ? "Το κλειδί δεν έγινε δεκτό — έλεγξέ το (πρέπει να αρχίζει με AIza) και ξαναπροσπάθησε." : "The key was rejected — check it (should start with AIza) and try again." : t.errAI;
      setMsgs([...next, {
        role: "assistant",
        content: msg
      }]);
    }
    setLoading(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      color: S.ink
    }
  }, t.aiTitle), msgs.length > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: clearChat,
    style: {
      border: `1.5px solid ${S.line}`,
      background: "#fff",
      color: S.muted,
      borderRadius: 8,
      padding: "4px 10px",
      fontWeight: 700,
      fontSize: 12,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, lang === "el" ? "🗑 Νέα συνομιλία" : "🗑 New chat")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: S.amber,
      background: "#FBF3E6",
      borderRadius: 10,
      padding: "8px 11px",
      lineHeight: 1.45,
      fontWeight: 600
    }
  }, lang === "el" ? "⚠ Η AI μπορεί να κάνει λάθη — επαληθεύστε κάθε δόση/πρόταση. Μην εισάγετε αναγνωρίσιμα στοιχεία ασθενών (το κείμενο αποστέλλεται στον πάροχο AI)." : "⚠ AI can make mistakes — verify every dose/suggestion. Do not enter identifiable patient data (text is sent to the AI provider)."), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      minHeight: 200
    }
  }, msgs.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: S.muted,
      fontSize: 13.5,
      background: S.card,
      borderRadius: 12,
      padding: 14,
      border: `1.5px dashed ${S.line}`,
      lineHeight: 1.5
    }
  }, t.aiHint), msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.role === "user" ? "flex-end" : "flex-start",
      maxWidth: "88%",
      padding: "10px 14px",
      borderRadius: 14,
      background: m.role === "user" ? S.teal : S.card,
      color: m.role === "user" ? "#fff" : S.ink,
      border: m.role === "user" ? "none" : `1.5px solid ${S.line}`,
      fontSize: 14.5,
      lineHeight: 1.5
    }
  }, m.role === "user" ? m.content : /*#__PURE__*/React.createElement(Md, {
    text: m.content
  }))), loading && /*#__PURE__*/React.createElement("div", {
    style: {
      color: S.muted,
      fontSize: 13.5,
      fontStyle: "italic"
    }
  }, t.thinking), /*#__PURE__*/React.createElement("div", {
    ref: endRef
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: input,
    onChange: e => setInput(e.target.value),
    onKeyDown: e => e.key === "Enter" && send(),
    placeholder: t.aiPlaceholder,
    style: {
      ...inputStyle,
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    disabled: loading || !input.trim(),
    style: {
      padding: "0 18px",
      borderRadius: 10,
      border: "none",
      background: S.teal,
      color: "#fff",
      fontWeight: 700,
      fontSize: 14.5,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, t.send)));
}
function ApiKeyBar({
  lang
}) {
  const el = lang === "el";
  const [saved, setSaved] = useState(!!getApiKey());
  const [editing, setEditing] = useState(!getApiKey());
  const [val, setVal] = useState("");
  const save = () => {
    const k = val.trim();
    if (!k) return;
    setApiKey(k);
    setVal("");
    setSaved(true);
    setEditing(false);
  };
  const clear = () => {
    setApiKey("");
    setSaved(false);
    setEditing(true);
  };
  if (!editing && saved) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: S.card,
        borderRadius: 10,
        padding: "8px 12px",
        border: `1.5px solid ${S.line}`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: S.muted,
        flex: 1
      }
    }, "🔑 Gemini API key ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#3B8C6E",
        fontWeight: 800
      }
    }, "✓")), /*#__PURE__*/React.createElement("button", {
      onClick: () => setEditing(true),
      style: {
        border: "none",
        background: "none",
        color: S.teal,
        fontWeight: 700,
        fontSize: 12.5,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, el ? "Αλλαγή" : "Change"), /*#__PURE__*/React.createElement("button", {
      onClick: clear,
      style: {
        border: "none",
        background: "none",
        color: S.red,
        fontWeight: 700,
        fontSize: 12.5,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, el ? "Διαγραφή" : "Remove"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      background: S.card,
      borderRadius: 12,
      padding: "10px 12px",
      border: `1.5px solid ${S.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: S.muted,
      lineHeight: 1.45
    }
  }, el ? "Για να λειτουργήσει ο AI σύμβουλος, χρειάζεται δωρεάν Gemini API key: " : "The AI consultant needs a free Gemini API key: ", /*#__PURE__*/React.createElement("a", {
    href: "https://aistudio.google.com/apikey",
    target: "_blank",
    rel: "noreferrer",
    style: {
      color: S.teal,
      fontWeight: 700
    }
  }, "aistudio.google.com/apikey"), el ? " → Create API key → επικόλλησέ το εδώ. Αποθηκεύεται μόνο σε αυτή τη συσκευή." : " → Create API key → paste it here. Stored on this device only."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: val,
    onChange: e => setVal(e.target.value),
    onKeyDown: e => e.key === "Enter" && save(),
    placeholder: el ? "Επικόλληση κλειδιού (AIza…)" : "Paste key (AIza…)",
    autoComplete: "off",
    style: {
      ...inputStyle,
      flex: 1,
      fontSize: 13.5,
      padding: "9px 11px"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: save,
    disabled: !val.trim(),
    style: {
      padding: "0 16px",
      borderRadius: 10,
      border: "none",
      background: val.trim() ? S.teal : S.muted,
      color: "#fff",
      fontWeight: 700,
      fontSize: 13.5,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, el ? "Αποθήκευση" : "Save"), saved && /*#__PURE__*/React.createElement("button", {
    onClick: () => setEditing(false),
    style: {
      border: "none",
      background: "none",
      color: S.muted,
      fontWeight: 700,
      fontSize: 13,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, el ? "Άκυρο" : "Cancel")));
}
function AssistantTab({
  lang,
  weight,
  age,
  height,
  sex
}) {
  const t = T[lang];
  const [mode, setMode] = useState("plan");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(ApiKeyBar, {
    lang: lang
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      background: S.bg,
      borderRadius: 12,
      padding: 4
    }
  }, [["plan", t.toggleGenerate], ["chat", t.toggleChat]].map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setMode(id),
    style: {
      flex: 1,
      padding: "9px 4px",
      borderRadius: 9,
      border: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 14,
      fontWeight: 700,
      background: mode === id ? S.card : "transparent",
      color: mode === id ? S.teal : S.muted,
      boxShadow: mode === id ? "0 1px 3px rgba(80,64,48,0.08)" : "none",
      transition: "all .15s"
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, mode === "plan" ? /*#__PURE__*/React.createElement(PlanTab, {
    lang: lang,
    weight: weight,
    age: age,
    height: height,
    sex: sex
  }) : /*#__PURE__*/React.createElement(AITab, {
    lang: lang,
    weight: weight,
    age: age,
    height: height,
    sex: sex
  })));
}
function ChecklistTab({
  lang
}) {
  const [open, setOpen] = useState(null);
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const [done, setDone] = useState({}); // { "id:idx": true }
  const t = T[lang];
  const toggleStep = (id, i) => {
    const k = `${id}:${i}`;
    setDone(d => ({
      ...d,
      [k]: !d[k]
    }));
  };
  const resetList = (id, n) => {
    setDone(d => {
      const nd = {
        ...d
      };
      for (let i = 0; i < n; i++) delete nd[`${id}:${i}`];
      return nd;
    });
  };
  const countDone = (id, n) => {
    let c = 0;
    for (let i = 0; i < n; i++) if (done[`${id}:${i}`]) c++;
    return c;
  };
  const list = CHECKLISTS.filter(c => {
    const title = (lang === "el" ? c.titleEl : c.titleEn).toLowerCase();
    return (cat === "all" || c.cat === cat) && title.includes(q.toLowerCase());
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: lang === "el" ? "Αναζήτηση κατάστασης…" : "Search emergency…",
    style: inputStyle
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      overflowX: "auto",
      paddingBottom: 4,
      WebkitOverflowScrolling: "touch"
    }
  }, CL_CATS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => setCat(c.id),
    style: {
      padding: "6px 12px",
      borderRadius: 99,
      border: "none",
      whiteSpace: "nowrap",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      fontFamily: "inherit",
      background: cat === c.id ? S.teal : "#fff",
      color: cat === c.id ? "#fff" : S.muted,
      boxShadow: cat === c.id ? "none" : `inset 0 0 0 1.5px ${S.line}`
    }
  }, c[lang]))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: S.muted,
      padding: "0 2px",
      lineHeight: 1.4
    }
  }, lang === "el" ? "Βάσει Stanford Emergency Manual, DAS 2025 (αεραγωγός), DAS/BAETS/ENT-UK (SCOOP), AHA-ACLS, ASRA LAST, MHAUS & ESAIC." : "Based on Stanford Emergency Manual, DAS 2025 (airway), DAS/BAETS/ENT-UK (SCOOP), AHA-ACLS, ASRA LAST, MHAUS & ESAIC."), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: S.muted,
      fontSize: 14,
      textAlign: "center",
      padding: 20
    }
  }, lang === "el" ? "Δεν βρέθηκε κατάσταση." : "No emergency found."), list.map(c => {
    const isOpen = open === c.id;
    const steps = lang === "el" ? c.stepsEl : c.stepsEn;
    const nDone = countDone(c.id, steps.length);
    const complete = nDone === steps.length;
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      style: {
        background: S.card,
        borderRadius: 14,
        border: `1.5px solid ${isOpen ? c.color : S.line}`,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? null : c.id),
      style: {
        width: "100%",
        padding: "14px",
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "inherit",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 99,
        background: c.color,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 15.5,
        color: S.ink,
        flex: 1
      }
    }, lang === "el" ? c.titleEl : c.titleEn), nDone > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        fontVariantNumeric: "tabular-nums",
        color: complete ? "#fff" : S.teal,
        background: complete ? S.teal : "#E4E9F0",
        borderRadius: 99,
        padding: "3px 9px"
      }
    }, nDone, "/", steps.length), /*#__PURE__*/React.createElement("span", {
      style: {
        color: S.muted,
        fontSize: 18,
        transform: isOpen ? "rotate(90deg)" : "none",
        transition: "transform .15s"
      }
    }, "›")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 14px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, steps.map((s, i) => {
      const checked = !!done[`${c.id}:${i}`];
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: () => toggleStep(c.id, i),
        style: {
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          textAlign: "left",
          background: checked ? "#E8EDF4" : S.bg,
          border: "none",
          cursor: "pointer",
          borderRadius: 10,
          padding: "10px 12px",
          fontFamily: "inherit"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 22,
          height: 22,
          borderRadius: 7,
          flexShrink: 0,
          marginTop: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: checked ? S.teal : "#fff",
          boxShadow: checked ? "none" : `inset 0 0 0 2px ${S.line}`,
          color: "#fff",
          fontSize: 14,
          fontWeight: 900
        }
      }, checked ? "✓" : ""), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14.5,
          lineHeight: 1.45,
          flex: 1,
          color: checked ? S.muted : S.ink,
          textDecoration: checked ? "line-through" : "none"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 800,
          color: checked ? S.muted : c.color,
          marginRight: 6
        }
      }, i + 1, "."), s));
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => resetList(c.id, steps.length),
      style: {
        alignSelf: "flex-end",
        marginTop: 4,
        padding: "7px 16px",
        borderRadius: 9,
        border: `1.5px solid ${S.line}`,
        background: "#fff",
        color: S.muted,
        fontWeight: 700,
        fontSize: 13,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, "↺ ", lang === "el" ? "Επαναφορά" : "Reset")));
  }));
}
function TCITab({
  lang,
  weight,
  age,
  height,
  sex
}) {
  const t = T[lang];
  const [drug, setDrug] = useState("Propofol");
  const [openModel, setOpenModel] = useState(null);
  const c = {
    w: parseFloat(weight) || 0,
    h: parseFloat(height) || 0,
    a: parseFloat(age) || 0,
    s: sex
  };
  const bmi = bmiCalc(c.w, c.h);
  const lbm = c.w && c.h ? lbmJames(c.w, c.h, c.s) : null;
  const ffm = c.w && c.h ? ffmJan(c.w, c.h, c.s) : null;
  const ibw = c.h ? ibwDevine(c.h, c.s) : null;
  const adjBW = c.w && c.h ? abw(c.w, c.h, c.s) : null;
  const models = TCI_MODELS.filter(m => m.drug === drug);

  // V1 (central compartment) for loading-bolus estimate
  const v1Of = m => m.v1Fixed != null ? m.v1Fixed : m.v1k != null && c.w ? m.v1k * c.w : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      color: S.ink
    }
  }, t.tciTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: S.muted,
      marginTop: 2
    }
  }, t.tciDisc)), (bmi || lbm) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, bmi && /*#__PURE__*/React.createElement(Chip, {
    label: "BMI",
    val: `${fmt(bmi)} kg/m²`
  }), lbm && lbm > 0 && /*#__PURE__*/React.createElement(Chip, {
    label: "LBM (James)",
    val: `${fmt(lbm)} kg`
  }), ffm && /*#__PURE__*/React.createElement(Chip, {
    label: "FFM (Jan.)",
    val: `${fmt(ffm)} kg`
  }), ibw && /*#__PURE__*/React.createElement(Chip, {
    label: "IBW (Devine)",
    val: `${fmt(ibw)} kg`
  }), adjBW && /*#__PURE__*/React.createElement(Chip, {
    label: "ABW",
    val: `${fmt(adjBW)} kg`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      overflowX: "auto",
      paddingBottom: 4,
      WebkitOverflowScrolling: "touch"
    }
  }, TCI_DRUGS.map(dr => /*#__PURE__*/React.createElement("button", {
    key: dr,
    onClick: () => {
      setDrug(dr);
      setOpenModel(null);
    },
    style: {
      padding: "7px 13px",
      borderRadius: 99,
      border: "none",
      whiteSpace: "nowrap",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      background: drug === dr ? S.teal : "#fff",
      color: drug === dr ? "#fff" : S.muted,
      boxShadow: drug === dr ? "none" : `inset 0 0 0 1.5px ${S.line}`
    }
  }, dr))), models.map(m => {
    const isOpen = openModel === m.id;
    const missing = m.requires.filter(r => !c[r] || r === "w" && c.w <= 0);
    const ready = missing.length === 0;
    const valid = ready && m.valid(c);
    const v1 = ready ? v1Of(m) : null;
    const edge = !ready ? S.line : !valid ? S.amber : S.teal;
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      style: {
        background: S.card,
        borderRadius: 14,
        border: `1.5px solid ${isOpen ? edge : S.line}`,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenModel(isOpen ? null : m.id),
      style: {
        width: "100%",
        padding: "13px 14px",
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "inherit",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 15.5,
        color: S.ink
      }
    }, m.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: S.muted
      }
    }, m.targetType)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, !ready && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: S.amber
      }
    }, "⚠"), ready && !valid && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: S.amber
      }
    }, "!"), valid && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: S.teal
      }
    }, "●"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: S.muted,
        fontSize: 18,
        transform: isOpen ? "rotate(90deg)" : "none",
        transition: "transform .15s"
      }
    }, "›"))), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 14px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, !ready && /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#EEF2F7",
        borderRadius: 10,
        padding: "9px 12px",
        fontSize: 13,
        color: S.amber,
        fontWeight: 600
      }
    }, t.needCov, " ", missing.map(r => covLabel[r][lang]).join(", ")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: S.bg,
        borderRadius: 10,
        padding: "9px 12px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: S.muted,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 0.4,
        marginBottom: 3
      }
    }, t.targetsHead), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: S.ink,
        lineHeight: 1.5
      }
    }, lang === "el" ? m.targetsEl : m.targetsEn)), ready && v1 && /*#__PURE__*/React.createElement("div", {
      style: {
        background: S.bg,
        borderRadius: 10,
        padding: "9px 12px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: S.muted,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 0.4
      }
    }, t.bolusEst), /*#__PURE__*/React.createElement(BolusRows, {
      drug: drug,
      v1: v1,
      lang: lang
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: S.muted,
        marginTop: 4
      }
    }, "V1 ≈ ", fmt(v1), " L · ", lang === "el" ? "ποσότητα = στόχος × V1 (ο αλγόριθμος TCI το αναλαμβάνει)" : "amount = target × V1 (your TCI pump handles this)")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: S.ink,
        lineHeight: 1.45
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: S.teal
      }
    }, lang === "el" ? "Πεδίο" : "Range", ": "), lang === "el" ? m.rangeEl : m.rangeEn), ready && !valid && (m.warnEl || m.warnEn) && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: S.amber,
        lineHeight: 1.45,
        fontWeight: 600
      }
    }, "⚠ ", lang === "el" ? m.warnEl || "Εκτός εύρους επικύρωσης" : m.warnEn || "Outside validation range"), ready && !valid && !(m.warnEl || m.warnEn) && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: S.amber,
        lineHeight: 1.45,
        fontWeight: 600
      }
    }, "⚠ ", lang === "el" ? "Ασθενής εκτός εύρους επικύρωσης του μοντέλου." : "Patient outside the model's validation range.")));
  }));
}
function Chip({
  label,
  val
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 10,
      padding: "6px 11px",
      boxShadow: `inset 0 0 0 1.5px ${S.line}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: S.muted,
      fontWeight: 600
    }
  }, label, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: S.ink,
      fontWeight: 800,
      fontVariantNumeric: "tabular-nums"
    }
  }, val));
}

// Per-drug representative target concentrations to illustrate the V1-fill bolus
function BolusRows({
  drug,
  v1,
  lang
}) {
  const sets = {
    Propofol: {
      unit: "µg/mL",
      massUnit: "mg",
      div: 1000,
      pts: [{
        el: "Εισαγωγή",
        en: "Induction",
        c: 4
      }, {
        el: "Συντήρηση",
        en: "Maint.",
        c: 3
      }]
    },
    Remifentanil: {
      unit: "ng/mL",
      massUnit: "µg",
      div: 1000,
      pts: [{
        el: "Διασωλήνωση",
        en: "Intubation",
        c: 6
      }, {
        el: "Συντήρηση",
        en: "Maint.",
        c: 4
      }]
    },
    Sufentanil: {
      unit: "ng/mL",
      massUnit: "µg",
      div: 1000,
      pts: [{
        el: "Διεγχειρητικά",
        en: "Intraop",
        c: 0.4
      }]
    },
    Alfentanil: {
      unit: "ng/mL",
      massUnit: "µg",
      div: 1000,
      pts: [{
        el: "Διεγχειρητικά",
        en: "Intraop",
        c: 100
      }]
    },
    Dexmedetomidine: {
      unit: "ng/mL",
      massUnit: "µg",
      div: 1000,
      pts: [{
        el: "Καταστολή",
        en: "Sedation",
        c: 0.8
      }]
    }
  };
  const s = sets[drug];
  if (!s) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      marginTop: 4
    }
  }, s.pts.map((p, i) => {
    // mass to fill V1 = Ct (in mass/mL) * V1(L)*1000 mL ; Ct given per mL in (µg or ng); convert to display mass unit
    const massPerMl = p.c; // in µg/mL (propofol) or ng/mL (opioids)
    const totalRawMass = massPerMl * v1 * 1000; // µg (propofol) or ng (opioids)
    const display = drug === "Propofol" ? totalRawMass / 1000 : totalRawMass / 1000; // mg or µg
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 13.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: S.ink
      }
    }, p[lang === "el" ? "el" : "en"], " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: S.muted
      }
    }, "(", p.c, " ", s.unit, ")")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        color: S.teal,
        fontVariantNumeric: "tabular-nums"
      }
    }, "≈ ", fmt(display), " ", s.massUnit));
  }));
}

// ============ PACU SCORES (multi-option) ============
const MULTI_SCORES = [{
  id: "aldrete",
  name: "Aldrete",
  items: [{
    el: "Κινητικότητα",
    en: "Activity",
    opts: [{
      v: 2,
      el: "Κινεί 4 άκρα",
      en: "Moves 4 limbs"
    }, {
      v: 1,
      el: "Κινεί 2 άκρα",
      en: "Moves 2 limbs"
    }, {
      v: 0,
      el: "Καμία κίνηση",
      en: "No movement"
    }]
  }, {
    el: "Αναπνοή",
    en: "Respiration",
    opts: [{
      v: 2,
      el: "Βαθιά αναπνοή/βήχας",
      en: "Deep breath/cough"
    }, {
      v: 1,
      el: "Δύσπνοια/επιπόλαιη",
      en: "Dyspnea/shallow"
    }, {
      v: 0,
      el: "Άπνοια",
      en: "Apnea"
    }]
  }, {
    el: "Κυκλοφορία (ΑΠ vs προεγχ.)",
    en: "Circulation (BP vs preop)",
    opts: [{
      v: 2,
      el: "±20%",
      en: "±20%"
    }, {
      v: 1,
      el: "±20–50%",
      en: "±20–50%"
    }, {
      v: 0,
      el: ">±50%",
      en: ">±50%"
    }]
  }, {
    el: "Συνείδηση",
    en: "Consciousness",
    opts: [{
      v: 2,
      el: "Πλήρως ξύπνιος",
      en: "Fully awake"
    }, {
      v: 1,
      el: "Αφυπνίσιμος στη φωνή",
      en: "Arousable to voice"
    }, {
      v: 0,
      el: "Δεν απαντά",
      en: "Unresponsive"
    }]
  }, {
    el: "SpO2",
    en: "SpO2",
    opts: [{
      v: 2,
      el: ">92% σε αέρα",
      en: ">92% on air"
    }, {
      v: 1,
      el: "Χρειάζεται O2 για >90%",
      en: "Needs O2 for >90%"
    }, {
      v: 0,
      el: "<90% με O2",
      en: "<90% with O2"
    }]
  }],
  interp: n => ({
    lvl: n >= 9 ? "low" : "mid",
    el: n >= 9 ? "≥9: Κριτήρια εξόδου από ανάνηψη (φάση Ι)" : "<9: Συνέχιση παρακολούθησης στην ανάνηψη",
    en: n >= 9 ? "≥9: PACU phase-I discharge criteria met" : "<9: Continue PACU monitoring"
  })
}, {
  id: "padss",
  name: "PADSS",
  items: [{
    el: "Ζωτικά σημεία (vs προεγχ.)",
    en: "Vital signs (vs preop)",
    opts: [{
      v: 2,
      el: "±20%",
      en: "±20%"
    }, {
      v: 1,
      el: "±20–40%",
      en: "±20–40%"
    }, {
      v: 0,
      el: ">±40%",
      en: ">±40%"
    }]
  }, {
    el: "Βάδιση",
    en: "Ambulation",
    opts: [{
      v: 2,
      el: "Σταθερή, χωρίς ζάλη",
      en: "Steady, no dizziness"
    }, {
      v: 1,
      el: "Με βοήθεια",
      en: "With assistance"
    }, {
      v: 0,
      el: "Αδυναμία βάδισης",
      en: "Unable"
    }]
  }, {
    el: "Ναυτία/Έμετος",
    en: "Nausea/Vomiting",
    opts: [{
      v: 2,
      el: "Ελάχιστη",
      en: "Minimal"
    }, {
      v: 1,
      el: "Μέτρια (ελέγχεται)",
      en: "Moderate (controlled)"
    }, {
      v: 0,
      el: "Σοβαρή/επίμονη",
      en: "Severe/persistent"
    }]
  }, {
    el: "Πόνος",
    en: "Pain",
    opts: [{
      v: 2,
      el: "Αποδεκτός (PO αναλγησία)",
      en: "Acceptable (PO analgesia)"
    }, {
      v: 1,
      el: "Οριακά αποδεκτός",
      en: "Marginally acceptable"
    }, {
      v: 0,
      el: "Μη αποδεκτός",
      en: "Unacceptable"
    }]
  }, {
    el: "Χειρουργική αιμορραγία",
    en: "Surgical bleeding",
    opts: [{
      v: 2,
      el: "Ελάχιστη",
      en: "Minimal"
    }, {
      v: 1,
      el: "Μέτρια",
      en: "Moderate"
    }, {
      v: 0,
      el: "Σοβαρή",
      en: "Severe"
    }]
  }],
  interp: n => ({
    lvl: n >= 9 ? "low" : "mid",
    el: n >= 9 ? "≥9: Κατάλληλος για έξοδο στο σπίτι (με συνοδό)" : "<9: Δεν πληροί κριτήρια εξόδου",
    en: n >= 9 ? "≥9: Fit for home discharge (with escort)" : "<9: Discharge criteria not met"
  })
}];

// ============ ANTICOAGULANTS & NEURAXIAL (ASRA 4th ed / ESAIC 2022) ============
const ANTICOAG = [{
  name: "Ασπιρίνη / NSAIDs",
  nameEn: "Aspirin / NSAIDs",
  stopEl: "Χωρίς περιορισμό",
  stopEn: "No restriction",
  restartEl: "Χωρίς περιορισμό",
  restartEn: "No restriction",
  noteEl: "Μονοθεραπεία — όχι σε συνδυασμό με άλλα αντιθρομβωτικά.",
  noteEn: "Monotherapy — not combined with other antithrombotics."
}, {
  name: "UFH προφυλακτική (SC ≤15.000 IU/24h)",
  nameEn: "UFH prophylactic (SC ≤15,000 IU/24h)",
  stopEl: "4–6 h",
  stopEn: "4–6 h",
  restartEl: "1 h μετά",
  restartEn: "1 h after",
  noteEl: "Έλεγχος αιμοπεταλίων αν >4 ημέρες (HIT).",
  noteEn: "Platelet count if >4 days (HIT)."
}, {
  name: "UFH θεραπευτική (IV)",
  nameEn: "UFH therapeutic (IV)",
  stopEl: "4–6 h + φυσιολογικό aPTT",
  stopEn: "4–6 h + normal aPTT",
  restartEl: "1 h μετά",
  restartEn: "1 h after",
  noteEl: "Αφαίρεση καθετήρα: 4–6 h από τελευταία δόση.",
  noteEn: "Catheter removal: 4–6 h after last dose."
}, {
  name: "LMWH προφυλακτική (π.χ. ενοξαπαρίνη 40 mg)",
  nameEn: "LMWH prophylactic (e.g. enoxaparin 40 mg)",
  stopEl: "12 h",
  stopEn: "12 h",
  restartEl: "4 h μετά (αφαίρεση καθετήρα ≥12 h από δόση)",
  restartEn: "4 h after (catheter removal ≥12 h post-dose)",
  noteEl: "ESAIC: 12 h προ παρακέντησης/αφαίρεσης.",
  noteEn: "ESAIC: 12 h before puncture/removal."
}, {
  name: "LMWH θεραπευτική (1 mg/kg ×2 ή 1.5 mg/kg ×1)",
  nameEn: "LMWH therapeutic (1 mg/kg bid or 1.5 mg/kg od)",
  stopEl: "24 h",
  stopEn: "24 h",
  restartEl: "24 h μετεγχειρητικά (≥4 h από αφαίρεση καθετήρα)",
  restartEn: "24 h postop (≥4 h after catheter removal)",
  noteEl: "Σκέψη anti-Xa σε νεφρική ανεπάρκεια/ακραία βάρη.",
  noteEn: "Consider anti-Xa in renal failure/extremes of weight."
}, {
  name: "Βαρφαρίνη / Ασενοκουμαρόλη",
  nameEn: "Warfarin / Acenocoumarol",
  stopEl: "5 ημέρες + INR ≤1.4",
  stopEn: "5 days + INR ≤1.4",
  restartEl: "Μετά την αφαίρεση καθετήρα",
  restartEn: "After catheter removal",
  noteEl: "Καθετήρας: αφαίρεση με INR <1.5.",
  noteEn: "Catheter: remove with INR <1.5."
}, {
  name: "Ριβαροξαμπάνη",
  nameEn: "Rivaroxaban",
  stopEl: "72 h",
  stopEn: "72 h",
  restartEl: "6 h μετά",
  restartEn: "6 h after",
  noteEl: "ΟΧΙ με παραμένοντα καθετήρα. Παράταση σε ΧΝΝ.",
  noteEn: "NOT with indwelling catheter. Extend in CKD."
}, {
  name: "Απιξαμπάνη",
  nameEn: "Apixaban",
  stopEl: "72 h",
  stopEn: "72 h",
  restartEl: "6 h μετά",
  restartEn: "6 h after",
  noteEl: "ΟΧΙ με παραμένοντα καθετήρα.",
  noteEn: "NOT with indwelling catheter."
}, {
  name: "Εντοξαμπάνη",
  nameEn: "Edoxaban",
  stopEl: "72 h",
  stopEn: "72 h",
  restartEl: "6 h μετά",
  restartEn: "6 h after",
  noteEl: "ΟΧΙ με παραμένοντα καθετήρα.",
  noteEn: "NOT with indwelling catheter."
}, {
  name: "Νταμπιγκατράνη",
  nameEn: "Dabigatran",
  stopEl: "72 h (CrCl ≥80) · 96 h (50–79) · 120 h (30–49)",
  stopEn: "72 h (CrCl ≥80) · 96 h (50–79) · 120 h (30–49)",
  restartEl: "6 h μετά",
  restartEn: "6 h after",
  noteEl: "Νεφρική κάθαρση — εξατομίκευση. Αντίδοτο: idarucizumab.",
  noteEn: "Renal clearance — individualize. Antidote: idarucizumab."
}, {
  name: "Φονταπαρινούξη",
  nameEn: "Fondaparinux",
  stopEl: "36–42 h",
  stopEn: "36–42 h",
  restartEl: "6–12 h μετά",
  restartEn: "6–12 h after",
  noteEl: "Αποφυγή παραμένοντος καθετήρα.",
  noteEn: "Avoid indwelling catheter."
}, {
  name: "Κλοπιδογρέλη",
  nameEn: "Clopidogrel",
  stopEl: "5–7 ημέρες",
  stopEn: "5–7 days",
  restartEl: "Άμεσα (φόρτιση ≥6 h από αφαίρεση καθετήρα)",
  restartEn: "Immediately (loading ≥6 h after catheter removal)",
  noteEl: "Συνεννόηση με καρδιολόγο επί πρόσφατου stent.",
  noteEn: "Discuss with cardiology if recent stent."
}, {
  name: "Πρασουγρέλη",
  nameEn: "Prasugrel",
  stopEl: "7–10 ημέρες",
  stopEn: "7–10 days",
  restartEl: "≥6 h από αφαίρεση καθετήρα",
  restartEn: "≥6 h after catheter removal",
  noteEl: "",
  noteEn: ""
}, {
  name: "Τικαγκρελόρη",
  nameEn: "Ticagrelor",
  stopEl: "5–7 ημέρες",
  stopEn: "5–7 days",
  restartEl: "≥6 h από αφαίρεση καθετήρα",
  restartEn: "≥6 h after catheter removal",
  noteEl: "",
  noteEn: ""
}, {
  name: "Θρομβολυτικά",
  nameEn: "Thrombolytics",
  stopEl: "48 h + φυσιολογική πήξη",
  stopEn: "48 h + normal coagulation",
  restartEl: "Αποφυγή για 10 ημέρες μετά από παρακέντηση",
  restartEn: "Avoid for 10 days after puncture",
  noteEl: "Νευραξονικός γενικά αντενδείκνυται.",
  noteEn: "Neuraxial generally contraindicated."
}];

// ============ ANTIBIOTIC PROPHYLAXIS (ASHP/SCIP) ============
const ABX = [{
  el: "Καρδιοχειρουργική / Θωρακοχειρουργική",
  en: "Cardiac / Thoracic",
  regEl: "Κεφαζολίνη 2 g IV (3 g ≥120 kg)",
  regEn: "Cefazolin 2 g IV (3 g ≥120 kg)",
  altEl: "Βανκομυκίνη 15 mg/kg ή κλινδαμυκίνη 900 mg",
  altEn: "Vancomycin 15 mg/kg or clindamycin 900 mg",
  redose: "q4h"
}, {
  el: "Ορθοπαιδική (αρθροπλαστική/κατάγματα)",
  en: "Orthopedic (arthroplasty/fractures)",
  regEl: "Κεφαζολίνη 2 g IV — προσθήκη βανκομυκίνης επί MRSA",
  regEn: "Cefazolin 2 g IV — add vancomycin if MRSA risk",
  altEl: "Βανκομυκίνη ή κλινδαμυκίνη",
  altEn: "Vancomycin or clindamycin",
  redose: "q4h"
}, {
  el: "Παχέος εντέρου / Ορθού (κολοορθική)",
  en: "Colorectal",
  regEl: "Κεφαζολίνη 2 g + Μετρονιδαζόλη 500 mg IV",
  regEn: "Cefazolin 2 g + Metronidazole 500 mg IV",
  altEl: "Κλινδαμυκίνη + γενταμικίνη/αζτρεονάμη",
  altEn: "Clindamycin + gentamicin/aztreonam",
  redose: "Κεφαζολίνη q4h"
}, {
  el: "Γενική (χολοκυστεκτομή, κήλη)",
  en: "General (cholecystectomy, hernia)",
  regEl: "Κεφαζολίνη 2 g IV",
  regEn: "Cefazolin 2 g IV",
  altEl: "Κλινδαμυκίνη ± γενταμικίνη",
  altEn: "Clindamycin ± gentamicin",
  redose: "q4h"
}, {
  el: "Καισαρική τομή",
  en: "Cesarean section",
  regEl: "Κεφαζολίνη 2 g IV προ τομής (3 g ≥120 kg)",
  regEn: "Cefazolin 2 g IV before incision (3 g ≥120 kg)",
  altEl: "Κλινδαμυκίνη + γενταμικίνη",
  altEn: "Clindamycin + gentamicin",
  redose: "q4h"
}, {
  el: "Υστερεκτομή",
  en: "Hysterectomy",
  regEl: "Κεφαζολίνη 2 g IV",
  regEn: "Cefazolin 2 g IV",
  altEl: "Κλινδαμυκίνη/μετρονιδαζόλη + γενταμικίνη",
  altEn: "Clindamycin/metronidazole + gentamicin",
  redose: "q4h"
}, {
  el: "Ουρολογική (με είσοδο στο ουροποιητικό)",
  en: "Urologic (entering urinary tract)",
  regEl: "Κεφαζολίνη 2 g IV ή σιπροφλοξασίνη 400 mg (βάσει ούρων/καλλιέργειας)",
  regEn: "Cefazolin 2 g IV or ciprofloxacin 400 mg (per urine culture)",
  altEl: "Γενταμικίνη ± κλινδαμυκίνη",
  altEn: "Gentamicin ± clindamycin",
  redose: "q4h"
}, {
  el: "Νευροχειρουργική (κρανιοτομία/σπονδυλική)",
  en: "Neurosurgery (craniotomy/spine)",
  regEl: "Κεφαζολίνη 2 g IV",
  regEn: "Cefazolin 2 g IV",
  altEl: "Βανκομυκίνη ή κλινδαμυκίνη",
  altEn: "Vancomycin or clindamycin",
  redose: "q4h"
}, {
  el: "Αγγειοχειρουργική",
  en: "Vascular",
  regEl: "Κεφαζολίνη 2 g IV",
  regEn: "Cefazolin 2 g IV",
  altEl: "Βανκομυκίνη ή κλινδαμυκίνη",
  altEn: "Vancomycin or clindamycin",
  redose: "q4h"
}, {
  el: "ΩΡΛ (clean-contaminated)",
  en: "ENT (clean-contaminated)",
  regEl: "Κεφαζολίνη 2 g + μετρονιδαζόλη ή αμπικιλλίνη-σουλμπακτάμη 3 g",
  regEn: "Cefazolin 2 g + metronidazole or ampicillin-sulbactam 3 g",
  altEl: "Κλινδαμυκίνη 900 mg",
  altEn: "Clindamycin 900 mg",
  redose: "q4h"
}];

// ============ PEDIATRIC / FLUID HELPERS ============
/**
 * @typedef {Object} PedsEstimate
 * @property {number} w - Weight in kg (uses `wIn` if provided, else APLS age-based estimate)
 * @property {boolean} est - True if weight was estimated (no `wIn` supplied)
 * @property {number} ettUncuffed - Uncuffed ETT internal diameter (mm)
 * @property {number} ettCuffed - Cuffed ETT internal diameter (mm)
 * @property {number} depth - ETT insertion depth at lips/gums (cm)
 * @property {string} lma - Recommended LMA size
 * @property {string} blade - Recommended laryngoscope blade
 * @property {number} minSBP - Minimum acceptable systolic BP (mmHg) for age
 */

/**
 * Paediatric airway/weight quick-reference calculator.
 * @param {number} ageY - Age in years (fractional for infants, e.g. 0.5 = 6 months)
 * @param {number} [wIn] - Actual measured weight in kg, if known; omit to use APLS age-based estimate
 * @returns {PedsEstimate}
 */
const pedsCalc = (ageY, wIn) => {
  const a = ageY || 0;
  const w = wIn || (a < 1 ? 4 + a * 12 * 0.5 : (a + 4) * 2); // APLS estimate
  const est = !wIn;
  const ettUncuffed = a >= 1 ? a / 4 + 4 : a * 12 < 6 ? 3.5 : 4.0;
  const ettCuffed = a >= 1 ? a / 4 + 3.5 : 3.0;
  const depth = a >= 1 ? a / 2 + 12 : ettUncuffed * 3;
  const lma = w < 5 ? "1" : w < 10 ? "1.5" : w < 20 ? "2" : w < 30 ? "2.5" : w < 50 ? "3" : w < 70 ? "4" : "5";
  const blade = a < 1 ? "Miller 0–1" : a < 3 ? "Mac/Miller 1" : a < 8 ? "Mac 2" : "Mac 2–3";
  const minSBP = 70 + 2 * a;
  return {
    w,
    est,
    ettUncuffed,
    ettCuffed,
    depth,
    lma,
    blade,
    minSBP
  };
};

/**
 * Holliday-Segar 4-2-1 maintenance fluid rate.
 * @param {number} w - Weight in kg
 * @returns {number} Maintenance fluid rate in mL/h
 */
const maint421 = w => w <= 10 ? 4 * w : w <= 20 ? 40 + 2 * (w - 10) : 60 + (w - 20);
const EBV_CATS = [{
  id: "preterm",
  el: "Πρόωρο νεογνό",
  en: "Preterm neonate",
  v: 95
}, {
  id: "neonate",
  el: "Τελειόμηνο νεογνό",
  en: "Term neonate",
  v: 88
}, {
  id: "infant",
  el: "Βρέφος (<1 έτους)",
  en: "Infant (<1 yr)",
  v: 80
}, {
  id: "child",
  el: "Παιδί",
  en: "Child",
  v: 75
}, {
  id: "adultM",
  el: "Ενήλικας ♂",
  en: "Adult ♂",
  v: 70
}, {
  id: "adultF",
  el: "Ενήλικας ♀",
  en: "Adult ♀",
  v: 65
}];
// ============ CLINICAL TOOLS DATA ============
const SCORES = [{
  id: "apfel",
  name: "Apfel (PONV)",
  items: [{
    el: "Γυναικείο φύλο",
    en: "Female sex",
    auto: p => p.s === "F"
  }, {
    el: "Μη καπνιστής/-τρια",
    en: "Non-smoker",
    auto: null
  }, {
    el: "Ιστορικό PONV ή ναυτίας ταξιδιού",
    en: "History of PONV or motion sickness",
    auto: null
  }, {
    el: "Μετεγχειρητικά οπιοειδή",
    en: "Postoperative opioids",
    auto: null
  }],
  interp: (n, lang) => {
    const risk = [10, 21, 39, 61, 79][n];
    const lvl = n <= 1 ? "low" : n === 2 ? "mid" : "high";
    return {
      lvl,
      el: `Κίνδυνος PONV ≈ ${risk}% — ${n <= 1 ? "Χαμηλός: 0–1 αντιεμετικά" : n === 2 ? "Μέτριος: 2 αντιεμετικά" : "Υψηλός: 2–3 αντιεμετικά + TIVA, αποφυγή πτητικών/N2O"}`,
      en: `PONV risk ≈ ${risk}% — ${n <= 1 ? "Low: 0–1 antiemetics" : n === 2 ? "Moderate: 2 antiemetics" : "High: 2–3 antiemetics + TIVA, avoid volatiles/N2O"}`
    };
  }
}, {
  id: "stopbang",
  name: "STOP-BANG (OSA)",
  items: [{
    el: "Ροχαλητό (δυνατό)",
    en: "Snoring (loud)",
    auto: null
  }, {
    el: "Κόπωση/υπνηλία ημέρας",
    en: "Tiredness/daytime sleepiness",
    auto: null
  }, {
    el: "Παρατηρηθείσες άπνοιες",
    en: "Observed apneas",
    auto: null
  }, {
    el: "Αρτηριακή υπέρταση",
    en: "Blood Pressure (HTN)",
    auto: null
  }, {
    el: "BMI > 35 kg/m²",
    en: "BMI > 35 kg/m²",
    auto: p => p.bmi != null && p.bmi > 35
  }, {
    el: "Ηλικία > 50",
    en: "Age > 50",
    auto: p => p.a > 50
  }, {
    el: "Περίμετρος τραχήλου > 40 cm",
    en: "Neck circumference > 40 cm",
    auto: null
  }, {
    el: "Άρρεν φύλο",
    en: "Male gender",
    auto: p => p.s === "M"
  }],
  interp: (n, lang) => {
    const lvl = n <= 2 ? "low" : n <= 4 ? "mid" : "high";
    return {
      lvl,
      el: n <= 2 ? "Χαμηλός κίνδυνος ΣΑΥ" : n <= 4 ? "Ενδιάμεσος κίνδυνος ΣΑΥ — κλινική συσχέτιση" : "Υψηλός κίνδυνος ΣΑΥ — προσοχή σε οπιοειδή/καταστολή, σκέψη CPAP & παρατεταμένης παρακολούθησης",
      en: n <= 2 ? "Low OSA risk" : n <= 4 ? "Intermediate OSA risk — clinical correlation" : "High OSA risk — caution with opioids/sedation, consider CPAP & extended monitoring"
    };
  }
}, {
  id: "rcri",
  name: "RCRI (Lee)",
  items: [{
    el: "Επέμβαση υψηλού κινδύνου (ενδοθωρακική/ενδοκοιλιακή/αγγειακή άνω βουβωνικού)",
    en: "High-risk surgery (intrathoracic/intraperitoneal/suprainguinal vascular)",
    auto: null
  }, {
    el: "Ισχαιμική καρδιοπάθεια",
    en: "Ischemic heart disease",
    auto: null
  }, {
    el: "Συμφορητική καρδιακή ανεπάρκεια",
    en: "Congestive heart failure",
    auto: null
  }, {
    el: "Αγγειακή εγκεφαλική νόσος (ΑΕΕ/ΠΙΕ)",
    en: "Cerebrovascular disease (CVA/TIA)",
    auto: null
  }, {
    el: "Ινσουλινοθεραπευόμενος ΣΔ",
    en: "Insulin-treated diabetes",
    auto: null
  }, {
    el: "Κρεατινίνη > 2 mg/dL (177 µmol/L)",
    en: "Creatinine > 2 mg/dL (177 µmol/L)",
    auto: null
  }],
  interp: (n, lang) => {
    const risk = n === 0 ? "0.4%" : n === 1 ? "0.9%" : n === 2 ? "6.6%" : "≥11%";
    const lvl = n <= 1 ? "low" : n === 2 ? "mid" : "high";
    return {
      lvl,
      el: `Κίνδυνος μειζόνων καρδιακών επιπλοκών ≈ ${risk}${n >= 2 ? " — σκέψη βιοδεικτών (BNP/τροπονίνη) & βελτιστοποίησης" : ""}`,
      en: `Major cardiac complication risk ≈ ${risk}${n >= 2 ? " — consider biomarkers (BNP/troponin) & optimization" : ""}`
    };
  }
}];

// LA max doses (conservative, per kg + absolute ceiling)
const LA_LIST = [{
  id: "lido",
  name: "Lidocaine",
  perKg: 3,
  abs: 300,
  concs: [0.5, 1, 1.5, 2]
}, {
  id: "lido_epi",
  name: "Lidocaine + Epi",
  perKg: 7,
  abs: 500,
  concs: [0.5, 1, 1.5, 2]
}, {
  id: "mepi",
  name: "Mepivacaine",
  perKg: 4.4,
  abs: 350,
  concs: [1, 1.5, 2]
}, {
  id: "prilo",
  name: "Prilocaine",
  perKg: 6,
  abs: 400,
  concs: [0.5, 1, 2]
}, {
  id: "bupi",
  name: "Bupivacaine",
  perKg: 2,
  abs: 150,
  concs: [0.25, 0.5]
}, {
  id: "levo",
  name: "Levobupivacaine",
  perKg: 2,
  abs: 150,
  concs: [0.25, 0.5]
}, {
  id: "ropi",
  name: "Ropivacaine",
  perKg: 3,
  abs: 225,
  concs: [0.2, 0.375, 0.5, 0.75, 1]
}, {
  id: "chloro",
  name: "Chloroprocaine",
  perKg: 11,
  abs: 800,
  concs: [1, 2, 3]
}];

// Context-sensitive half-time approximations (minutes infusion → minutes CSHT)
// Approximate values from PK simulations (Hughes 1992, Kapila 1995)
const CSHT_DATA = {
  Propofol: [[30, 5], [60, 10], [120, 15], [240, 20], [480, 28], [600, 32]],
  Remifentanil: [[30, 3], [600, 4]],
  Fentanyl: [[30, 15], [60, 30], [120, 75], [180, 130], [240, 200], [360, 270], [480, 300], [600, 305]],
  Alfentanil: [[30, 25], [60, 40], [90, 55], [120, 58], [240, 60], [600, 60]],
  Sufentanil: [[30, 15], [60, 20], [120, 25], [240, 30], [480, 60], [600, 80]]
};

/**
 * Context-sensitive half-time lookup, linearly interpolated between known data points.
 * @param {"Propofol"|"Remifentanil"|"Fentanyl"|"Alfentanil"|"Sufentanil"} drug - Must be a key present in CSHT_DATA
 * @param {number} mins - Infusion duration in minutes
 * @returns {number} Context-sensitive half-time in minutes
 */
const cshtAt = (drug, mins) => {
  const pts = CSHT_DATA[drug];
  if (mins <= pts[0][0]) return pts[0][1];
  for (let i = 1; i < pts.length; i++) {
    if (mins <= pts[i][0]) {
      const [x0, y0] = pts[i - 1],
        [x1, y1] = pts[i];
      return y0 + (mins - x0) / (x1 - x0) * (y1 - y0);
    }
  }
  return pts[pts.length - 1][1];
};

// ============ TOOLS TAB ============
function ScoreCard({
  sc,
  lang,
  patient
}) {
  const [checked, setChecked] = useState(() => sc.items.map(it => it.auto ? !!it.auto(patient) : false));
  const n = checked.filter(Boolean).length;
  const r = sc.interp(n, lang);
  const col = r.lvl === "low" ? S.teal : r.lvl === "mid" ? S.amber : S.red;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, sc.items.map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setChecked(c => c.map((v, j) => j === i ? !v : v)),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      textAlign: "left",
      background: checked[i] ? "#E8EDF4" : S.bg,
      border: "none",
      cursor: "pointer",
      borderRadius: 10,
      padding: "9px 12px",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked[i] ? S.teal : "#fff",
      boxShadow: checked[i] ? "none" : `inset 0 0 0 2px ${S.line}`,
      color: "#fff",
      fontSize: 12,
      fontWeight: 900
    }
  }, checked[i] ? "✓" : ""), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: S.ink,
      lineHeight: 1.4,
      flex: 1
    }
  }, it[lang]), it.auto && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 800,
      color: S.muted,
      background: "#fff",
      borderRadius: 5,
      padding: "2px 6px",
      boxShadow: `inset 0 0 0 1px ${S.line}`
    }
  }, "auto"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 10,
      padding: "10px 12px",
      boxShadow: `inset 0 0 0 1.5px ${col}`,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900,
      fontSize: 22,
      color: col,
      fontVariantNumeric: "tabular-nums"
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: S.ink,
      lineHeight: 1.4
    }
  }, lang === "el" ? r.el : r.en)));
}
function LACalc({
  lang,
  weight
}) {
  const t = T[lang];
  const [laId, setLaId] = useState("ropi");
  const [conc, setConc] = useState(0.5);
  const [vol, setVol] = useState("");
  const w = parseFloat(weight) || 0;
  const la = LA_LIST.find(l => l.id === laId);
  const concOk = la.concs.includes(conc) ? conc : la.concs[0];
  const maxMg = w ? Math.min(la.perKg * w, la.abs) : null;
  const mgPerMl = concOk * 10;
  const maxVol = maxMg ? maxMg / mgPerMl : null;
  const plannedMl = parseFloat(vol) || 0;
  const plannedMg = plannedMl * mgPerMl;
  const pct = maxMg ? plannedMg / maxMg * 100 : 0;
  const barCol = pct >= 100 ? S.red : pct >= 75 ? S.amber : S.teal;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      overflowX: "auto",
      paddingBottom: 4,
      WebkitOverflowScrolling: "touch"
    }
  }, LA_LIST.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => {
      setLaId(l.id);
      setConc(l.concs.includes(conc) ? conc : l.concs[0]);
    },
    style: {
      padding: "6px 11px",
      borderRadius: 99,
      border: "none",
      whiteSpace: "nowrap",
      fontSize: 12.5,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      background: laId === l.id ? S.teal : "#fff",
      color: laId === l.id ? "#fff" : S.muted,
      boxShadow: laId === l.id ? "none" : `inset 0 0 0 1.5px ${S.line}`
    }
  }, l.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: S.muted,
      fontWeight: 600
    }
  }, lang === "el" ? "Συγκέντρωση:" : "Concentration:"), la.concs.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setConc(c),
    style: {
      padding: "5px 10px",
      borderRadius: 8,
      border: "none",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      background: concOk === c ? S.ink : "#fff",
      color: concOk === c ? "#fff" : S.muted,
      boxShadow: concOk === c ? "none" : `inset 0 0 0 1.5px ${S.line}`
    }
  }, c, "%"))), !w ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: S.amber,
      fontWeight: 600
    }
  }, "⚖ ", t.weightNeeded) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: S.muted,
      fontWeight: 700,
      textTransform: "uppercase"
    }
  }, lang === "el" ? "Μέγ. δόση" : "Max dose"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 17,
      color: S.ink,
      fontVariantNumeric: "tabular-nums"
    }
  }, fmt(maxMg), " mg"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: S.muted
    }
  }, la.perKg, " mg/kg · max ", la.abs, " mg")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: S.muted,
      fontWeight: 700,
      textTransform: "uppercase"
    }
  }, lang === "el" ? "Μέγ. όγκος" : "Max volume"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 17,
      color: S.teal,
      fontVariantNumeric: "tabular-nums"
    }
  }, fmt(maxVol), " mL"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: S.muted
    }
  }, concOk, "% = ", mgPerMl, " mg/mL"))), /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "decimal",
    value: vol,
    onChange: e => setVol(e.target.value),
    placeholder: lang === "el" ? "Σχεδιαζόμενος όγκος (mL)…" : "Planned volume (mL)…",
    style: inputStyle
  }), plannedMl > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 10,
      padding: "10px 12px",
      boxShadow: `inset 0 0 0 1.5px ${barCol}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: S.ink
    }
  }, fmt(plannedMg), " mg"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 14,
      color: barCol,
      fontVariantNumeric: "tabular-nums"
    }
  }, fmt(pct), "% ", lang === "el" ? "του μεγίστου" : "of max")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 99,
      background: S.bg,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${Math.min(pct, 100)}%`,
      background: barCol,
      borderRadius: 99,
      transition: "width .2s"
    }
  })), pct >= 100 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13,
      color: S.red,
      fontWeight: 700
    }
  }, "⛔ ", lang === "el" ? "Υπέρβαση μέγιστης δόσης — κίνδυνος LAST (βλ. πρωτόκολλο στις Λίστες)" : "Exceeds max dose — LAST risk (see protocol in Lists)"), pct >= 75 && pct < 100 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13,
      color: S.amber,
      fontWeight: 700
    }
  }, "⚠ ", lang === "el" ? "Πλησιάζετε το όριο — προσοχή σε συνδυασμούς τοπικών/αγγειοβρίθεια σημείου" : "Approaching limit — caution with LA combinations/site vascularity")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: S.muted,
      lineHeight: 1.4
    }
  }, lang === "el" ? "Συντηρητικά όρια. Σε συνδυασμό τοπικών οι δόσεις αθροίζονται αναλογικά. Μείωση σε ηλικιωμένους, καχεξία, ηπατική/καρδιακή νόσο." : "Conservative limits. With LA combinations doses are additive proportionally. Reduce in elderly, cachexia, hepatic/cardiac disease.")));
}
function CSHTCalc({
  lang
}) {
  const [drug, setDrug] = useState("Propofol");
  const [dur, setDur] = useState(120);
  const drugs = Object.keys(CSHT_DATA);
  const val = cshtAt(drug, dur);
  const hrs = Math.floor(dur / 60),
    mins = dur % 60;

  // mini SVG chart
  const W = 280,
    H = 110,
    PAD = 8;
  const maxX = 600,
    maxY = Math.max(...CSHT_DATA[drug].map(p => p[1])) * 1.15;
  const px = x => PAD + x / maxX * (W - 2 * PAD);
  const py = y => H - PAD - y / maxY * (H - 2 * PAD);
  // dense curve sampling
  const pts = [];
  for (let m = 10; m <= 600; m += 10) pts.push(`${px(m)},${py(cshtAt(drug, m))}`);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      overflowX: "auto",
      paddingBottom: 4,
      WebkitOverflowScrolling: "touch"
    }
  }, drugs.map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => setDrug(d),
    style: {
      padding: "6px 11px",
      borderRadius: 99,
      border: "none",
      whiteSpace: "nowrap",
      fontSize: 12.5,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      background: drug === d ? S.teal : "#fff",
      color: drug === d ? "#fff" : S.muted,
      boxShadow: drug === d ? "none" : `inset 0 0 0 1.5px ${S.line}`
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: S.bg,
      borderRadius: 12,
      padding: "12px 12px 6px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: PAD,
    y1: H - PAD,
    x2: W - PAD,
    y2: H - PAD,
    stroke: S.line,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: PAD,
    y1: PAD,
    x2: PAD,
    y2: H - PAD,
    stroke: S.line,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: pts.join(" "),
    fill: "none",
    stroke: S.teal,
    strokeWidth: "2.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: px(dur),
    cy: py(val),
    r: "5",
    fill: S.ink,
    stroke: "#fff",
    strokeWidth: "2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 10,
      color: S.muted,
      padding: "2px 2px 4px"
    }
  }, /*#__PURE__*/React.createElement("span", null, "0"), /*#__PURE__*/React.createElement("span", null, lang === "el" ? "Διάρκεια έγχυσης → 10 h" : "Infusion duration → 10 h"))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "30",
    max: "600",
    step: "10",
    value: dur,
    onChange: e => setDur(parseInt(e.target.value)),
    style: {
      width: "100%",
      accentColor: S.teal
    },
    "aria-label": "duration"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: S.muted,
      fontWeight: 700,
      textTransform: "uppercase"
    }
  }, lang === "el" ? "Διάρκεια" : "Duration"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 17,
      color: S.ink,
      fontVariantNumeric: "tabular-nums"
    }
  }, hrs > 0 ? `${hrs}h ` : "", mins > 0 ? `${mins}min` : hrs > 0 ? "" : "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: S.muted,
      fontWeight: 700,
      textTransform: "uppercase"
    }
  }, "CSHT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 17,
      color: S.teal,
      fontVariantNumeric: "tabular-nums"
    }
  }, "≈ ", fmt(val), " min"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: S.muted,
      lineHeight: 1.4
    }
  }, lang === "el" ? "Χρόνος για πτώση 50% της συγκέντρωσης πλάσματος μετά τη διακοπή — κατά προσέγγιση από φαρμακοκινητικές προσομοιώσεις (Hughes 1992, Kapila 1995). Η πλήρης αφύπνιση μπορεί να απαιτεί μεγαλύτερη πτώση (decrement time)." : "Time for 50% plasma concentration decline after stopping — approximated from PK simulations (Hughes 1992, Kapila 1995). Full emergence may require a larger decrement time."));
}
function MultiScoreCard({
  sc,
  lang
}) {
  const [sel, setSel] = useState(() => sc.items.map(() => null));
  const allSet = sel.every(v => v !== null);
  const n = sel.reduce((s, v) => s + (v || 0), 0);
  const r = sc.interp(n);
  const col = !allSet ? S.muted : r.lvl === "low" ? S.teal : S.amber;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, sc.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: S.ink,
      fontWeight: 700,
      marginBottom: 6
    }
  }, it[lang]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5
    }
  }, it.opts.map((o, j) => /*#__PURE__*/React.createElement("button", {
    key: j,
    onClick: () => setSel(s => s.map((v, k) => k === i ? o.v : v)),
    style: {
      flex: 1,
      padding: "7px 4px",
      borderRadius: 8,
      border: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 11.5,
      fontWeight: 700,
      lineHeight: 1.25,
      background: sel[i] === o.v ? S.teal : "#fff",
      color: sel[i] === o.v ? "#fff" : S.muted,
      boxShadow: sel[i] === o.v ? "none" : `inset 0 0 0 1.5px ${S.line}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 14,
      fontWeight: 900
    }
  }, o.v), o[lang]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 10,
      padding: "10px 12px",
      boxShadow: `inset 0 0 0 1.5px ${col}`,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900,
      fontSize: 22,
      color: col,
      fontVariantNumeric: "tabular-nums"
    }
  }, n, "/10"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: S.ink,
      lineHeight: 1.4,
      flex: 1
    }
  }, allSet ? lang === "el" ? r.el : r.en : lang === "el" ? "Συμπληρώστε όλα τα πεδία" : "Complete all items"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSel(sc.items.map(() => null)),
    style: {
      padding: "5px 10px",
      borderRadius: 8,
      border: `1.5px solid ${S.line}`,
      background: "#fff",
      color: S.muted,
      fontWeight: 700,
      fontSize: 12,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "↺")));
}
function AnticoagList({
  lang
}) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(null);
  const list = ANTICOAG.filter(a => (lang === "el" ? a.name : a.nameEn).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: lang === "el" ? "Αναζήτηση φαρμάκου…" : "Search drug…",
    style: inputStyle
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: S.muted,
      lineHeight: 1.4
    }
  }, lang === "el" ? "Διαστήματα προ παρακέντησης/αφαίρεσης καθετήρα & επανέναρξης — ASRA 4η έκδ. / ESAIC 2022. Εξατομίκευση σε νεφρική ανεπάρκεια." : "Intervals before puncture/catheter removal & restart — ASRA 4th ed / ESAIC 2022. Individualize in renal failure."), list.map((a, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: S.bg,
        borderRadius: 10,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? null : i),
      style: {
        width: "100%",
        padding: "10px 12px",
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
        fontFamily: "inherit",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        fontWeight: 700,
        color: S.ink,
        flex: 1,
        lineHeight: 1.3
      }
    }, lang === "el" ? a.name : a.nameEn), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 800,
        color: S.teal,
        whiteSpace: "nowrap"
      }
    }, "⏸ ", lang === "el" ? a.stopEl : a.stopEn)), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 12px 10px",
        fontSize: 13,
        color: S.ink,
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: S.teal
      }
    }, lang === "el" ? "Διακοπή προ:" : "Stop before:"), " ", lang === "el" ? a.stopEl : a.stopEn), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: S.teal
      }
    }, lang === "el" ? "Επανέναρξη:" : "Restart:"), " ", lang === "el" ? a.restartEl : a.restartEn), (lang === "el" ? a.noteEl : a.noteEn) && /*#__PURE__*/React.createElement("div", {
      style: {
        color: S.muted,
        marginTop: 3
      }
    }, lang === "el" ? a.noteEl : a.noteEn)));
  }));
}

// ============ PEDIATRIC VITAL SIGNS (APLS) & FASTING (ESAIC 2022) ============
const PEDS_VITALS = [{
  id: "inf",
  elLabel: "<1 έτους",
  enLabel: "<1 year",
  loA: 0,
  hiA: 1,
  hr: "110–160",
  rr: "30–40",
  sbp: "70–90"
}, {
  id: "t1",
  elLabel: "1–2 ετών",
  enLabel: "1–2 years",
  loA: 1,
  hiA: 2,
  hr: "100–150",
  rr: "25–35",
  sbp: "80–95"
}, {
  id: "t2",
  elLabel: "2–5 ετών",
  enLabel: "2–5 years",
  loA: 2,
  hiA: 5,
  hr: "95–140",
  rr: "25–30",
  sbp: "80–100"
}, {
  id: "t3",
  elLabel: "5–12 ετών",
  enLabel: "5–12 years",
  loA: 5,
  hiA: 12,
  hr: "80–120",
  rr: "20–25",
  sbp: "90–110"
}, {
  id: "t4",
  elLabel: ">12 ετών",
  enLabel: ">12 years",
  loA: 12,
  hiA: 999,
  hr: "60–100",
  rr: "15–20",
  sbp: "100–120"
}];
const PEDS_FASTING = [{
  el: "Καθαρά υγρά",
  en: "Clear fluids",
  h: "1 h"
}, {
  el: "Μητρικό γάλα",
  en: "Breast milk",
  h: "3 h"
}, {
  el: "Γάλα φόρμουλας",
  en: "Infant formula",
  h: "4 h"
}, {
  el: "Στερεά (ελαφριά) / γάλα",
  en: "Solid (light) / milk",
  h: "6 h"
}, {
  el: "Βαρύ γεύμα",
  en: "Rich/fatty meal",
  h: "8 h"
}];
function PedsCard({
  lang,
  weight,
  age
}) {
  const a = parseFloat(age) || 0;
  const wIn = parseFloat(weight) || 0;
  const el = lang === "el";
  if (!a && !wIn) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: S.amber,
        fontWeight: 600
      }
    }, "⚖ ", el ? "Εισάγετε ηλικία (± βάρος) στην μπάρα ασθενούς" : "Enter age (± weight) in the patient bar");
  }
  if (a > 16) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: S.amber,
        fontWeight: 600,
        lineHeight: 1.5
      }
    }, "🧒 ", el ? `Ηλικία ${fmt(a)} ετών — εκτός παιδιατρικού εύρους (> 16 ετών). Χρησιμοποιήστε τα εργαλεία ενηλίκων (Φάρμακα / TCI / Εργαλεία).` : `Age ${fmt(a)} y — outside paediatric range (> 16 y). Use the adult tools (Meds / TCI / Tools).`);
  }
  const p = pedsCalc(a, wIn);
  const w = p.w;
  const vitalRow = PEDS_VITALS.find(v => a >= v.loA && a < v.hiA) || null;
  const Row = ({
    l,
    v,
    hint,
    warn
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 8,
      background: S.bg,
      borderRadius: 10,
      padding: "8px 12px",
      boxShadow: warn ? `inset 0 0 0 1.5px ${S.amber}` : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: S.ink
    }
  }, l, hint && /*#__PURE__*/React.createElement("span", {
    style: {
      color: S.muted,
      fontSize: 11.5
    }
  }, " · ", hint)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 14.5,
      color: warn ? S.amber : S.teal,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }
  }, v));
  const SectionLabel = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      color: S.teal,
      letterSpacing: 0.2,
      marginTop: 6
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: S.amber,
      fontWeight: 600,
      lineHeight: 1.4,
      background: "#FBF3E6",
      borderRadius: 8,
      padding: "7px 10px"
    }
  }, el ? "⚠ Παιδιατρικές δόσεις — υψηλός κίνδυνος λάθους. Επιβεβαιώστε βάρος & τοπικό πρωτόκολλο πριν τη χορήγηση." : "⚠ Paediatric doses — high error risk. Confirm weight & local protocol before administration."), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Βάρος & Αεραγωγός" : "Weight & Airway"), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Βάρος" : "Weight",
    v: `${fmt(w)} kg${p.est ? el ? " (εκτίμηση APLS)" : " (APLS estimate)" : ""}`
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "ΕΤΤ με cuff" : "Cuffed ETT",
    v: fmt(Math.round(p.ettCuffed * 2) / 2),
    hint: el ? "ηλικία/4 + 3.5" : "age/4 + 3.5"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "ΕΤΤ χωρίς cuff" : "Uncuffed ETT",
    v: fmt(Math.round(p.ettUncuffed * 2) / 2),
    hint: el ? "ηλικία/4 + 4" : "age/4 + 4"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Βάθος ΕΤΤ (στοματικά)" : "ETT depth (oral)",
    v: `${fmt(p.depth)} cm`,
    hint: el ? "ηλικία/2 + 12" : "age/2 + 12"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Λάμα" : "Blade",
    v: p.blade
  }), /*#__PURE__*/React.createElement(Row, {
    l: "LMA",
    v: `#${p.lma}`
  }), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Φυσιολογικά Ζωτικά Σημεία (APLS)" : "Normal Vital Signs (APLS)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, PEDS_VITALS.map(v => {
    const active = vitalRow && v.id === vitalRow.id;
    return /*#__PURE__*/React.createElement("div", {
      key: v.id,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 6,
        background: active ? "#E8EDF4" : S.bg,
        borderRadius: 10,
        padding: "7px 12px",
        boxShadow: active ? `inset 0 0 0 1.5px ${S.teal}` : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: active ? 800 : 600,
        color: S.ink,
        flex: "0 0 78px"
      }
    }, el ? v.elLabel : v.enLabel), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: S.muted,
        flex: 1,
        textAlign: "center"
      }
    }, el ? "ΚΣ" : "HR", " ", v.hr), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: S.muted,
        flex: 1,
        textAlign: "center"
      }
    }, el ? "ΑΣ" : "RR", " ", v.rr), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: S.muted,
        flex: 1,
        textAlign: "right"
      }
    }, el ? "ΣΑΠ" : "SBP", " ", v.sbp));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.4
    }
  }, el ? "ΚΣ=Καρδιακή Συχνότητα (bpm) · ΑΣ=Αναπνευστική Συχνότητα (/min) · ΣΑΠ=Συστολική Πίεση (mmHg)" : "HR=Heart Rate (bpm) · RR=Respiratory Rate (/min) · SBP=Systolic BP (mmHg)"), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ελάχιστη ΣΑΠ (5th centile)" : "Minimum SBP (5th centile)",
    v: `${fmt(p.minSBP)} mmHg`,
    hint: el ? "70 + 2×ηλικία" : "70 + 2×age"
  }), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Δόσεις Επειγόντων" : "Emergency Doses"), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Απινίδωση" : "Defibrillation",
    v: `${fmt(4 * w)} J`,
    hint: "4 J/kg"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Αδρεναλίνη (ανακοπή)" : "Adrenaline (arrest)",
    v: `${fmt(0.01 * w)} mg`,
    hint: el ? "10 µg/kg = 0.1 mL/kg 1:10.000" : "10 µg/kg = 0.1 mL/kg 1:10,000"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ατροπίνη" : "Atropine",
    v: `${fmt(Math.min(Math.max(0.02 * w, 0.1), 0.6))} mg`,
    hint: el ? "20 µg/kg · min 0.1, max 0.6 mg" : "20 µg/kg · min 0.1, max 0.6 mg"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Αδενοσίνη (1η)" : "Adenosine (1st)",
    v: `${fmt(Math.min(0.1 * w, 6))} mg`,
    hint: el ? "0.1 mg/kg · max 6 mg" : "0.1 mg/kg · max 6 mg"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Αδενοσίνη (2η)" : "Adenosine (2nd)",
    v: `${fmt(Math.min(0.2 * w, 12))} mg`,
    hint: el ? "0.2 mg/kg · max 12 mg" : "0.2 mg/kg · max 12 mg"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Αμιωδαρόνη" : "Amiodarone",
    v: `${fmt(5 * w)} mg`,
    hint: el ? "5 mg/kg (φόρτιση βραδεία)" : "5 mg/kg (slow load)"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Λιδοκαΐνη (αντιαρρυθμικό)" : "Lidocaine (antiarrhythmic)",
    v: `${fmt(w)} mg`,
    hint: "1 mg/kg IV"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Δαντρολένιο" : "Dantrolene",
    v: `${fmt(w)} mg`,
    hint: el ? "1 mg/kg q5–10min · max 10 mg/kg" : "1 mg/kg q5–10min · max 10 mg/kg"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Σουκινυλοχολίνη" : "Succinylcholine",
    v: `${fmt(1.5 * w)}–${fmt(2 * w)} mg`,
    hint: "1.5–2 mg/kg IV"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ασβεστίου χλωριούχο 10%" : "Calcium chloride 10%",
    v: `${fmt(0.2 * w)} mL`,
    hint: el ? "0.2 mL/kg IV βραδέως" : "0.2 mL/kg slow IV"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ασβεστίου γλυκονικό 10%" : "Calcium gluconate 10%",
    v: `${fmt(0.5 * w)} mL`,
    hint: el ? "0.5 mL/kg IV βραδέως" : "0.5 mL/kg slow IV"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Διττανθρακικά 8.4%" : "Bicarbonate 8.4%",
    v: `${fmt(w)} mL`,
    hint: el ? "1 mL/kg (1–2 mmol/kg σε οξέωση)" : "1 mL/kg (1–2 mmol/kg in acidosis)"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Μαννιτόλη" : "Mannitol",
    v: `${fmt(0.25 * w)}–${fmt(w)} g`,
    hint: el ? "0.25–1 g/kg σε 20–30 min" : "0.25–1 g/kg over 20–30 min"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Φουροσεμίδη" : "Furosemide",
    v: `${fmt(w)} mg`,
    hint: "1 mg/kg/dose IV"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ναλοξόνη (ανάνηψη)" : "Naloxone (resus)",
    v: `${fmt(10 * w)} µg`,
    hint: "10 µg/kg IV"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Bolus υγρών" : "Fluid bolus",
    v: `${fmt(10 * w)}–${fmt(20 * w)} mL`,
    hint: "10–20 mL/kg"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Γλυκόζη 10%" : "Glucose 10%",
    v: `${fmt(2 * w)}–${fmt(5 * w)} mL`,
    hint: "2–5 mL/kg"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Συντήρηση 4-2-1" : "Maintenance 4-2-1",
    v: `${fmt(maint421(w))} mL/h`,
    hint: el ? "βλ. Εργαλεία → Υγρά & Αίμα" : "see Tools → Fluids & Blood"
  }), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Αντιμετώπιση βρογχόσπασμου" : "Bronchospasm management"), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Σαλβουταμόλη (νεφελ.)" : "Salbutamol (neb)",
    v: a > 0 && a < 5 ? "2.5 mg" : "2.5–5 mg",
    hint: el ? a > 0 && a < 5 ? "<5 ετών" : "≥5 ετών" : a > 0 && a < 5 ? "<5 y" : "≥5 y"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Σαλβουταμόλη IV" : "Salbutamol IV",
    v: `${fmt(4 * w)} µg`,
    hint: el ? "4 µg/kg βραδέως, μετά 0.1–1 µg/kg/min" : "4 µg/kg slow, then 0.1–1 µg/kg/min"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Μεθυλπρεδνιζολόνη/Υδροκορτιζόνη" : "Methylpred/Hydrocortisone",
    v: `${fmt(w)}–${fmt(2 * w)} mg`,
    hint: "1–2 mg/kg IV"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Αμινοφυλλίνη (φόρτιση)" : "Aminophylline (load)",
    v: `${fmt(5 * w)} mg`,
    hint: el ? "5 mg/kg σε 20–30 min, μετά έγχυση" : "5 mg/kg over 20–30 min, then infusion"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.4
    }
  }, el ? "Αμινοφυλλίνη έγχυση: 1 mg/kg/h (<9 ετών), 0.8 mg/kg/h (9–16 ετών). Απειλητικός βρογχόσπασμος → αδρεναλίνη (βλ. κάτω)." : "Aminophylline infusion: 1 mg/kg/h (<9 y), 0.8 mg/kg/h (9–16 y). Life-threatening → adrenaline (see below)."), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Αναφυλαξία — Αδρεναλίνη IM (1:1000)" : "Anaphylaxis — Adrenaline IM (1:1000)"), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Δόση IM (0.01 mg/kg)" : "IM dose (0.01 mg/kg)",
    v: `${fmt(Math.min(0.01 * w, 0.5))} mg`,
    hint: el ? "max 0.5 mg · επανάληψη q5min" : "max 0.5 mg · repeat q5min",
    warn: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: S.ink,
      lineHeight: 1.5,
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Κατά ηλικία/βάρος (1:1000):", /*#__PURE__*/React.createElement("br", null), "• ≤6 ετών (>10 kg): ", /*#__PURE__*/React.createElement("strong", null, "150 µg"), " (0.15 mL)", /*#__PURE__*/React.createElement("br", null), "• 6–12 ετών (10–30 kg): ", /*#__PURE__*/React.createElement("strong", null, "300 µg"), " (0.3 mL)", /*#__PURE__*/React.createElement("br", null), "• >12 ετών (>30 kg): ", /*#__PURE__*/React.createElement("strong", null, "500 µg"), " (0.5 mL) — αν <30 kg: 300 µg", /*#__PURE__*/React.createElement("br", null), "Ανθεκτική υπόταση → έγχυση αδρεναλίνης 0.1 µg/kg/min, τιτλοποίηση.") : /*#__PURE__*/React.createElement(React.Fragment, null, "By age/weight (1:1000):", /*#__PURE__*/React.createElement("br", null), "• ≤6 y (>10 kg): ", /*#__PURE__*/React.createElement("strong", null, "150 µg"), " (0.15 mL)", /*#__PURE__*/React.createElement("br", null), "• 6–12 y (10–30 kg): ", /*#__PURE__*/React.createElement("strong", null, "300 µg"), " (0.3 mL)", /*#__PURE__*/React.createElement("br", null), "• >12 y (>30 kg): ", /*#__PURE__*/React.createElement("strong", null, "500 µg"), " (0.5 mL) — if <30 kg: 300 µg", /*#__PURE__*/React.createElement("br", null), "Refractory hypotension → adrenaline infusion 0.1 µg/kg/min, titrate.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 12.5,
      color: S.teal,
      marginBottom: 4
    }
  }, el ? "Έγχυση αδρεναλίνης (παρασκευή)" : "Adrenaline infusion (prep)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: S.ink,
      lineHeight: 1.5
    }
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "0.3 × ", fmt(w), " = ", fmt(0.3 * w), " mg"), " αδρεναλίνης σε 50 mL Dw5%. Τότε ", /*#__PURE__*/React.createElement("strong", null, "1 mL/h = 0.1 µg/kg/min"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "0.3 × ", fmt(w), " = ", fmt(0.3 * w), " mg"), " adrenaline in 50 mL D5W. Then ", /*#__PURE__*/React.createElement("strong", null, "1 mL/h = 0.1 µg/kg/min"), "."))), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Λαρυγγίτιδα — Εισπνοές αδρεναλίνης" : "Croup — Nebulised adrenaline"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: S.ink,
      lineHeight: 1.5,
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, "• ≤4 ετών: νεφελοποιητής ", /*#__PURE__*/React.createElement("strong", null, "2.5 mL αδρεναλίνης + 3 mL NaCl 0.9%"), /*#__PURE__*/React.createElement("br", null), "• >4 ετών: νεφελοποιητής ", /*#__PURE__*/React.createElement("strong", null, "5 mL αδρεναλίνης + 3 mL NaCl 0.9%")) : /*#__PURE__*/React.createElement(React.Fragment, null, "• ≤4 y: nebulise ", /*#__PURE__*/React.createElement("strong", null, "2.5 mL adrenaline + 3 mL NaCl 0.9%"), /*#__PURE__*/React.createElement("br", null), "• >4 y: nebulise ", /*#__PURE__*/React.createElement("strong", null, "5 mL adrenaline + 3 mL NaCl 0.9%"))), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Μετεγχειρητική αναλγησία (πρωτόκολλο)" : "Postop analgesia (protocol)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: S.muted,
      lineHeight: 1.45,
      marginBottom: 2
    }
  }, el ? "Πολυπαραγοντική: παρακεταμόλη + ΜΣΑΦ + τοποπεριοχική ± οπιοειδή, ανάλογα την ένταση του πόνου." : "Multimodal: paracetamol + NSAID + regional ± opioids, per pain intensity."), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Παρακεταμόλη IV" : "Paracetamol IV",
    v: w < 5 ? `${fmt(7.5 * w)} mg` : w <= 10 ? `${fmt(10 * w)} mg` : w <= 50 ? `${fmt(15 * w)} mg` : "1 g",
    hint: w < 5 ? el ? "7.5 mg/kg q4–6h · max 30 mg/kg/24h" : "7.5 mg/kg q4–6h · max 30/kg/d" : w <= 10 ? el ? "10 mg/kg q4–6h · max 40 mg/kg/24h" : "10 mg/kg q4–6h · max 40/kg/d" : w <= 50 ? el ? "15 mg/kg q4–6h · max 60 mg/kg/24h" : "15 mg/kg q4–6h · max 60/kg/d" : el ? "1 g q4–6h · max 4 g/24h" : "1 g q4–6h · max 4 g/d"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Παρακεταμόλη PO φόρτιση" : "Paracetamol PO load",
    v: `${fmt(20 * w)} mg`,
    hint: el ? "20 mg/kg, μετά 15 q4–6h (>3μ)" : "20 mg/kg, then 15 q4–6h (>3m)"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Παρακεταμόλη PR φόρτιση" : "Paracetamol PR load",
    v: `${fmt(40 * w)} mg`,
    hint: el ? "40 mg/kg, μετά 20 q6h (>3μ)" : "40 mg/kg, then 20 q6h (>3m)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.4
    }
  }, el ? "IV: βραδεία έγχυση >15 min· μεσοδιάστημα ≥4h (≥6h σε νεφρική δυσλειτουργία). Μέγιστη χορήγηση μέγιστης δόσης: 48h." : "IV: infuse >15 min; interval ≥4h (≥6h if renal impairment). Max-dose duration: 48h."), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ιβουπροφαίνη PO" : "Ibuprofen PO",
    v: `${fmt(Math.min(10 * w, 400))} mg`,
    hint: el ? "5–10 mg/kg q6–8h · max 30 mg/kg/24h (έφηβοι 1.2 g) · ≥3μ" : "5–10 mg/kg q6–8h · max 30/kg/d (adol 1.2 g) · ≥3m"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Μεφαιναμικό οξύ (Ponstan)" : "Mefenamic acid (Ponstan)",
    v: `${fmt(5 * w)}–${fmt(6 * w)} mg`,
    hint: el ? "5–6 mg/kg ×3–4/ημ PO · έως 48h" : "5–6 mg/kg 3–4×/day PO · up to 48h"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Δεξαμεθαζόνη IV" : "Dexamethasone IV",
    v: `${fmt(0.1 * w)}–${fmt(Math.min(0.2 * w, 8))} mg`,
    hint: el ? "0.1–0.2 mg/kg · max 8 mg" : "0.1–0.2 mg/kg · max 8 mg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.4
    }
  }, el ? "ΜΣΑΦ: αποφυγή σε νεφρική ανεπάρκεια, βαρύ άσθμα, καρδιακή ανεπάρκεια, έλκος." : "NSAIDs: avoid in renal failure, severe asthma, heart failure, peptic ulcer."), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ναλβουφίνη IV" : "Nalbuphine IV",
    v: `${fmt(0.2 * w)}–${fmt(0.3 * w)} mg`,
    hint: el ? "0.2–0.3 mg/kg σε 20mL N/S αργά (20min) q6h · max 1.2 mg/kg/24h" : "0.2–0.3 mg/kg slow in 20mL (20min) q6h · max 1.2/kg/d"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Μορφίνη IV/IM" : "Morphine IV/IM",
    v: `${fmt(0.05 * w)}–${fmt(0.1 * w)} mg`,
    hint: el ? "0.05–0.1 mg/kg · ΟΧΙ στον θάλαμο χωρίς monitoring" : "0.05–0.1 mg/kg · NOT on ward without monitoring"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Τραμαδόλη IV" : "Tramadol IV",
    v: `${fmt(w)}–${fmt(Math.min(2 * w, 100))} mg`,
    hint: el ? "1–2 mg/kg q4–6h · max 100/δόση, 400/24h · >12 ετών" : "1–2 mg/kg q4–6h · max 100/dose, 400/d · >12 y",
    warn: a > 0 && a < 12
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Κωδεΐνη PO" : "Codeine PO",
    v: `${fmt(0.5 * w)}–${fmt(w)} mg`,
    hint: el ? "0.5–1 mg/kg ×4–6 PO · ΠΟΤΕ IV · μόνο >12 ετών" : "0.5–1 mg/kg 4–6× PO · NEVER IV · only >12 y",
    warn: a > 0 && a < 12
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Πεθιδίνη IV/IM" : "Pethidine IV/IM",
    v: `${fmt(0.5 * w)}–${fmt(w)} mg`,
    hint: el ? "0.5–1 mg/kg ×4–6 · ΟΧΙ σε επιληψία" : "0.5–1 mg/kg 4–6× · NOT in epilepsy"
  }), a >= 5 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 12.5,
      color: S.teal,
      marginBottom: 4
    }
  }, "💉 ", el ? "Μορφίνη με PCA (>5 ετών, συνεργάσιμα)" : "Morphine PCA (>5 y, cooperative)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: S.ink,
      lineHeight: 1.5
    }
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Φόρτιση 0.05–0.1 mg/kg IV = ", /*#__PURE__*/React.createElement("strong", null, fmt(0.05 * w), "–", fmt(0.1 * w), " mg"), ".", /*#__PURE__*/React.createElement("br", null)) : /*#__PURE__*/React.createElement(React.Fragment, null, "Loading 0.05–0.1 mg/kg IV = ", /*#__PURE__*/React.createElement("strong", null, fmt(0.05 * w), "–", fmt(0.1 * w), " mg"), ".", /*#__PURE__*/React.createElement("br", null)), w <= 50 ? el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Διάλυμα (<50 kg): μορφίνη 1 mg/kg σε 50 mL (=20 µg/kg/mL). ", /*#__PURE__*/React.createElement("strong", null, "Bolus 20 µg/kg"), " (1 mL), lockout 10–15 min, ", /*#__PURE__*/React.createElement("strong", null, "max 4h: 400 µg/kg"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "Solution (<50 kg): morphine 1 mg/kg in 50 mL (=20 µg/kg/mL). ", /*#__PURE__*/React.createElement("strong", null, "Bolus 20 µg/kg"), " (1 mL), lockout 10–15 min, ", /*#__PURE__*/React.createElement("strong", null, "4h max: 400 µg/kg"), ".") : el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Διάλυμα (>50 kg): μορφίνη 50 mg σε 50 mL (=1 mg/mL). ", /*#__PURE__*/React.createElement("strong", null, "Bolus 1 mg"), ", lockout 10–15 min, ", /*#__PURE__*/React.createElement("strong", null, "max 4h: 20 mg"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "Solution (>50 kg): morphine 50 mg in 50 mL (=1 mg/mL). ", /*#__PURE__*/React.createElement("strong", null, "Bolus 1 mg"), ", lockout 10–15 min, ", /*#__PURE__*/React.createElement("strong", null, "4h max: 20 mg"), "."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 12.5,
      color: S.teal,
      marginBottom: 4
    }
  }, el ? "Ναλοξόνη (αντίδοτο)" : "Naloxone (antidote)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: S.ink,
      lineHeight: 1.5
    }
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Αναπνευστική καταστολή: ", /*#__PURE__*/React.createElement("strong", null, "4 µg/kg = ", fmt(4 * w), " µg"), " IV, επανάληψη μετά 20 min (προτιμότερη η αναπνευστική υποστήριξη).", /*#__PURE__*/React.createElement("br", null), "Κνησμός / επίσχεση ούρων: ", /*#__PURE__*/React.createElement("strong", null, "0.5 µg/kg = ", fmt(0.5 * w), " µg"), " IV q10min έως max 2 µg/kg.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Respiratory depression: ", /*#__PURE__*/React.createElement("strong", null, "4 µg/kg = ", fmt(4 * w), " µg"), " IV, repeat after 20 min (prefer respiratory support).", /*#__PURE__*/React.createElement("br", null), "Pruritus / urinary retention: ", /*#__PURE__*/React.createElement("strong", null, "0.5 µg/kg = ", fmt(0.5 * w), " µg"), " IV q10min up to max 2 µg/kg."))), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Τοπικά αναισθητικά (διήθηση/περιφ. αποκλεισμός)" : "Local anaesthetics (infiltration/PNB)"), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Βουπιβακαΐνη 0.25%" : "Bupivacaine 0.25%",
    v: `${fmt(1 * w)} mL`,
    hint: el ? "max 1 mL/kg (≈2.5 mg/kg)" : "max 1 mL/kg (≈2.5 mg/kg)"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "L-βουπιβακαΐνη 0.25%" : "L-bupivacaine 0.25%",
    v: `${fmt(1 * w)} mL`,
    hint: el ? "max 1 mL/kg (≈2.5 mg/kg)" : "max 1 mL/kg (≈2.5 mg/kg)"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ροπιβακαΐνη 0.2%" : "Ropivacaine 0.2%",
    v: `${fmt(1.5 * w)} mL`,
    hint: el ? "max 1.5 mL/kg (≈3 mg/kg) · ΟΧΙ σε πεϊκό" : "max 1.5 mL/kg (≈3 mg/kg) · NOT penile block"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.45,
      marginTop: 2
    }
  }, el ? "⚠ Κωδεΐνη/τραμαδόλη: μόνο >12 ετών & μόνο όταν ο πόνος δεν ανακουφίζεται από παρακεταμόλη/ιβουπροφαίνη· ΠΟΤΕ σε ιστορικό υπνικής άπνοιας ή αναπνευστικά προβλήματα. Επιλέξτε κατάλληλη κλίμακα αξιολόγησης πόνου βάσει ηλικίας." : "⚠ Codeine/tramadol: only >12 y & only when paracetamol/ibuprofen insufficient; NEVER with sleep apnoea or respiratory problems. Use an age-appropriate pain assessment scale."), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Νηστεία — ESAIC 2022" : "Fasting — ESAIC 2022"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, PEDS_FASTING.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      background: S.bg,
      borderRadius: 10,
      padding: "7px 12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: S.ink
    }
  }, el ? f.el : f.en), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 13.5,
      color: S.teal
    }
  }, f.h)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.4
    }
  }, el ? "Frykholm et al., Eur J Anaesthesiol 2022 (ESAIC). Ελάχιστοι χρόνοι — ενθάρρυνση καθαρών υγρών έως 1h πριν." : "Frykholm et al., Eur J Anaesthesiol 2022 (ESAIC). Minimum times — encourage clear fluids up to 1h before."));
}

// ============ FLUID LOSS RATES ============
const FLUID_LOSS = [{
  id: "min",
  el: "Ελάχιστο τραύμα",
  en: "Minimal trauma",
  v: 2,
  exEl: "λαπαροσκόπηση, επιφανειακή",
  exEn: "laparoscopy, superficial"
}, {
  id: "mod",
  el: "Μέτριο τραύμα",
  en: "Moderate trauma",
  v: 4,
  exEl: "ανοιχτή κοιλιακή",
  exEn: "open abdominal"
}, {
  id: "sev",
  el: "Μεγάλο τραύμα",
  en: "Severe trauma",
  v: 6,
  exEl: "εκτεταμένη/εντερική",
  exEn: "extensive/bowel"
}];
function FluidsCalc({
  lang,
  weight,
  age,
  sex
}) {
  const el = lang === "el";
  const w = parseFloat(weight) || 0;
  const a = parseFloat(age) || 0;
  const autoCat = a && a < 1 / 12 ? "neonate" : a < 1 ? "infant" : a < 13 ? "child" : sex === "F" ? "adultF" : "adultM";
  const [cat, setCat] = useState(autoCat);
  const [hbI, setHbI] = useState("");
  const [hbT, setHbT] = useState("");
  const [npo, setNpo] = useState(8);
  const [loss, setLoss] = useState("mod");
  if (!w) return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: S.amber,
      fontWeight: 600
    }
  }, "⚖ ", T[lang].weightNeeded);
  const maint = maint421(w);
  const deficit = maint * npo;
  const lossRate = (FLUID_LOSS.find(l => l.id === loss) || FLUID_LOSS[1]).v * w;
  const h1 = maint + deficit / 2 + lossRate;
  const h2 = maint + deficit / 4 + lossRate;
  const h3 = maint + deficit / 4 + lossRate;
  const h4 = maint + lossRate;
  const ebvK = EBV_CATS.find(c => c.id === cat) || EBV_CATS[4];
  const ebv = ebvK.v * w;
  const hi = parseFloat(hbI) || 0,
    ht = parseFloat(hbT) || 0;
  const abl = hi > 0 && ht > 0 && hi > ht ? ebv * (hi - ht) / ((hi + ht) / 2) : null;
  const Cell = ({
    label,
    val,
    sub
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: S.bg,
      borderRadius: 10,
      padding: "9px 10px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: S.muted,
      fontWeight: 700,
      textTransform: "uppercase"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 15.5,
      color: S.teal,
      fontVariantNumeric: "tabular-nums"
    }
  }, val), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted
    }
  }, sub));
  const SectionLabel = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      color: S.teal,
      letterSpacing: 0.2,
      marginTop: 4
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Συντήρηση & Έλλειμμα Νηστείας" : "Maintenance & NPO Deficit"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Cell, {
    label: el ? "Συντήρηση 4-2-1" : "Maintenance 4-2-1",
    val: `${fmt(maint)} mL/h`
  }), /*#__PURE__*/React.createElement(Cell, {
    label: el ? "Έλλειμμα νηστείας" : "NPO deficit",
    val: `${fmt(deficit)} mL`,
    sub: `${npo} h × ${fmt(maint)}`
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: S.muted,
      fontWeight: 600
    }
  }, el ? "Ώρες νηστείας" : "Fasting hours"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 14,
      color: S.ink
    }
  }, npo, " h")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "16",
    step: "1",
    value: npo,
    onChange: e => setNpo(parseInt(e.target.value)),
    style: {
      width: "100%",
      accentColor: S.teal
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: S.muted,
      fontWeight: 600,
      marginBottom: 5
    }
  }, el ? "Χειρουργικές απώλειες (3ος χώρος)" : "Surgical losses (third space)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5
    }
  }, FLUID_LOSS.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => setLoss(l.id),
    style: {
      flex: 1,
      padding: "8px 4px",
      borderRadius: 9,
      border: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 11.5,
      fontWeight: 700,
      lineHeight: 1.25,
      background: loss === l.id ? S.teal : "#fff",
      color: loss === l.id ? "#fff" : S.muted,
      boxShadow: loss === l.id ? "none" : `inset 0 0 0 1.5px ${S.line}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, l[lang]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      opacity: 0.85
    }
  }, l.v, " mL/kg/h"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: S.ink
    }
  }, el ? "Πρόγραμμα χορήγησης (mL/h)" : "Hourly plan (mL/h)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Cell, {
    label: el ? "Ώρα 1" : "Hour 1",
    val: fmt(h1),
    sub: el ? "+½ ελλείμ." : "+½ deficit"
  }), /*#__PURE__*/React.createElement(Cell, {
    label: el ? "Ώρα 2" : "Hour 2",
    val: fmt(h2),
    sub: el ? "+¼ ελλείμ." : "+¼ deficit"
  }), /*#__PURE__*/React.createElement(Cell, {
    label: el ? "Ώρα 3" : "Hour 3",
    val: fmt(h3),
    sub: el ? "+¼ ελλείμ." : "+¼ deficit"
  }), /*#__PURE__*/React.createElement(Cell, {
    label: el ? "Ώρα 4+" : "Hour 4+",
    val: fmt(h4),
    sub: el ? "συντ.+απώλ." : "maint+loss"
  })), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Όγκος Αίματος & Επιτρεπτή Απώλεια" : "Blood Volume & Allowable Loss"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Cell, {
    label: el ? "Όγκος αίματος (EBV)" : "Blood volume (EBV)",
    val: `${fmt(ebv)} mL`,
    sub: `${ebvK.v} mL/kg`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      flexWrap: "wrap"
    }
  }, EBV_CATS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => setCat(c.id),
    style: {
      padding: "5px 9px",
      borderRadius: 8,
      border: "none",
      fontSize: 11.5,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      background: cat === c.id ? S.ink : "#fff",
      color: cat === c.id ? "#fff" : S.muted,
      boxShadow: cat === c.id ? "none" : `inset 0 0 0 1.5px ${S.line}`
    }
  }, c[lang]))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: S.ink,
      marginTop: 2
    }
  }, el ? "Επιτρεπτή απώλεια αίματος (ABL)" : "Allowable blood loss (ABL)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "decimal",
    value: hbI,
    onChange: e => setHbI(e.target.value),
    placeholder: el ? "Αρχική Hb (g/dL)" : "Initial Hb (g/dL)",
    style: {
      ...inputStyle,
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "decimal",
    value: hbT,
    onChange: e => setHbT(e.target.value),
    placeholder: el ? "Στόχος Hb" : "Target Hb",
    style: {
      ...inputStyle,
      flex: 1
    }
  })), abl !== null && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 10,
      padding: "10px 12px",
      boxShadow: `inset 0 0 0 1.5px ${S.teal}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: S.ink
    }
  }, "ABL ≈ "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900,
      fontSize: 18,
      color: S.teal,
      fontVariantNumeric: "tabular-nums"
    }
  }, fmt(abl), " mL"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: S.muted,
      marginTop: 2
    }
  }, el ? "EBV × (Hb αρχ − Hb στόχος) / Hb μέση" : "EBV × (Hb init − Hb target) / Hb mean")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: S.muted,
      lineHeight: 1.45
    }
  }, el ? "Κλασική προσέγγιση (συντήρηση + έλλειμμα νηστείας + απώλειες). Αναπλήρωση αίματος επιπλέον (κρυσταλλοειδή 3:1 ή κολλοειδή/αίμα 1:1). Σε ERAS προτιμάται περιορισμένη/στοχευμένη χορήγηση — εξατομίκευση." : "Classic approach (maintenance + NPO deficit + losses). Replace blood loss separately (crystalloid 3:1 or colloid/blood 1:1). ERAS favors restrictive/goal-directed therapy — individualize."));
}
function AbxList({
  lang,
  weight
}) {
  const el = lang === "el";
  const [open, setOpen] = useState(null);
  const w = parseFloat(weight) || 0;
  const isPeds = w > 0 && w < 40;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: S.muted,
      lineHeight: 1.45,
      background: "#EEF2F7",
      borderRadius: 10,
      padding: "8px 12px"
    }
  }, el ? "Χορήγηση εντός 60 min προ τομής (βανκομυκίνη/κινολόνες: 120 min). Παιδιά: κεφαζολίνη 30 mg/kg, μετρονιδαζόλη 15 mg/kg, κλινδαμυκίνη 10 mg/kg. Επαναχορήγηση επί παράτασης ή απώλειας >1500 mL." : "Give within 60 min before incision (vancomycin/quinolones: 120 min). Peds: cefazolin 30 mg/kg, metronidazole 15 mg/kg, clindamycin 10 mg/kg. Redose if prolonged surgery or blood loss >1500 mL.", isPeds && /*#__PURE__*/React.createElement("strong", null, " ", el ? `Για ${w} kg: κεφαζολίνη ${fmt(Math.min(30 * w, 2000))} mg.` : `For ${w} kg: cefazolin ${fmt(Math.min(30 * w, 2000))} mg.`)), ABX.map((x, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: S.bg,
        borderRadius: 10,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? null : i),
      style: {
        width: "100%",
        padding: "10px 12px",
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
        fontFamily: "inherit",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        fontWeight: 700,
        color: S.ink,
        flex: 1,
        lineHeight: 1.3
      }
    }, x[lang]), /*#__PURE__*/React.createElement("span", {
      style: {
        color: S.muted,
        fontSize: 16,
        transform: isOpen ? "rotate(90deg)" : "none",
        transition: "transform .15s"
      }
    }, "›")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 12px 10px",
        fontSize: 13,
        color: S.ink,
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: S.teal
      }
    }, el ? "Σχήμα:" : "Regimen:"), " ", el ? x.regEl : x.regEn), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: S.teal
      }
    }, el ? "Αλλεργία β-λακτάμης:" : "β-lactam allergy:"), " ", el ? x.altEl : x.altEn), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: S.teal
      }
    }, el ? "Επαναχορήγηση:" : "Redose:"), " ", x.redose)));
  }));
}
// ============ VASOPRESSOR INFUSIONS ============
const VASOPRESSORS = [{
  id: "nora",
  name: "Noradrenaline",
  mode: "weight",
  unit: "µg/kg/min",
  lo: 0.01,
  hi: 1.0,
  def: 0.1,
  step: 0.01,
  concs: [{
    label: "4 mg/50 mL",
    v: 80
  }, {
    label: "8 mg/50 mL",
    v: 160
  }, {
    label: "16 mg/50 mL",
    v: 320
  }],
  rangeEl: "Συνήθες 0.05–0.5 µg/kg/min",
  rangeEn: "Usual 0.05–0.5 µg/kg/min",
  noteEl: "Πρώτης γραμμής σε κατανεμητική/σηπτική καταπληξία. Κεντρική γραμμή προτιμητέα.",
  noteEn: "First-line in distributive/septic shock. Central line preferred."
}, {
  id: "adr",
  name: "Adrenaline",
  mode: "weight",
  unit: "µg/kg/min",
  lo: 0.01,
  hi: 1.0,
  def: 0.05,
  step: 0.01,
  concs: [{
    label: "1 mg/50 mL",
    v: 20
  }, {
    label: "4 mg/50 mL",
    v: 80
  }, {
    label: "5 mg/50 mL",
    v: 100
  }, {
    label: "8 mg/50 mL",
    v: 160
  }],
  rangeEl: "Συνήθες 0.01–0.5 µg/kg/min",
  rangeEn: "Usual 0.01–0.5 µg/kg/min",
  noteEl: "Αναφυλαξία, καρδιογενής/μικτή καταπληξία, χαμηλή καρδιακή παροχή.",
  noteEn: "Anaphylaxis, cardiogenic/mixed shock, low cardiac output."
}, {
  id: "dobut",
  name: "Dobutamine",
  mode: "weight",
  unit: "µg/kg/min",
  lo: 0.5,
  hi: 20,
  def: 5,
  step: 0.5,
  refPts: [2.5, 5, 10, 15],
  concs: [{
    label: "250 mg/50 mL (5 mg/mL)",
    v: 5000
  }, {
    label: "250 mg/250 mL (1 mg/mL)",
    v: 1000
  }, {
    label: "500 mg/50 mL (10 mg/mL)",
    v: 10000
  }],
  rangeEl: "Συνήθες 2.5–10 µg/kg/min (max 20)",
  rangeEn: "Usual 2.5–10 µg/kg/min (max 20)",
  noteEl: "β1-ινότροπο + ήπια β2-αγγειοδιαστολή. Καρδιογενής καταπληξία, χαμηλή παροχή. Ταχυκαρδία/αρρυθμίες, πιθανή ↓ΑΠ. Όχι σε δυναμική απόφραξη LVOT.",
  noteEn: "β1-inotrope + mild β2-vasodilation. Cardiogenic shock, low output. Tachycardia/arrhythmias, may ↓BP. Avoid in dynamic LVOT obstruction."
}, {
  id: "vaso",
  name: "Vasopressin (Empressin)",
  mode: "fixed",
  unit: "units/min",
  lo: 0.01,
  hi: 0.04,
  def: 0.03,
  step: 0.005,
  concs: [{
    label: "20 IU/50 mL (0.4 U/mL)",
    v: 0.4
  }, {
    label: "40 IU/50 mL (0.8 U/mL)",
    v: 0.8
  }],
  rangeEl: "0.03 U/min = 1.8 U/h · εύρος 0.6–2.4 U/h",
  rangeEn: "0.03 U/min = 1.8 U/h · range 0.6–2.4 U/h",
  noteEl: "2ης γραμμής, νοραδρεναλίνη-sparing. Σταθερή δόση (όχι ανά kg). ΟΧΙ ως bolus. Empressin 40 IU/2 mL → αραίωση.",
  noteEn: "2nd-line, noradrenaline-sparing. Fixed dose (not per kg). NOT as bolus. Empressin 40 IU/2 mL → dilute."
}];
function VasopressorCalc({
  lang,
  weight
}) {
  const el = lang === "el";
  const [drugId, setDrugId] = useState("nora");
  const drug = VASOPRESSORS.find(d => d.id === drugId);
  const [conc, setConc] = useState(drug.concs[0].v);
  const [dose, setDose] = useState(drug.def);
  const w = parseFloat(weight) || 0;

  // ensure conc/dose valid when switching drug
  const concOk = drug.concs.some(c => c.v === conc) ? conc : drug.concs[0].v;
  const switchDrug = id => {
    const d = VASOPRESSORS.find(x => x.id === id);
    setDrugId(id);
    setConc(d.concs[0].v);
    setDose(d.def);
  };

  // rate mL/h
  let rate = null,
    needW = false;
  if (drug.mode === "weight") {
    if (w) rate = dose * w * 60 / concOk;else needW = true;
  } else {
    rate = dose * 60 / concOk; // units/min -> mL/h
  }
  const unitsPerH = drug.mode === "fixed" ? dose * 60 : null;

  // small reference rows at lo / mid / hi
  const refPts = drug.refPts ? drug.refPts.filter((v, i, a) => a.indexOf(v) === i && v <= drug.hi) : drug.mode === "weight" ? [drug.lo, drug.def, 0.3, 0.5].filter((v, i, a) => a.indexOf(v) === i && v <= drug.hi) : [0.01, 0.02, 0.03, 0.04];
  const rowRate = dv => drug.mode === "weight" ? w ? dv * w * 60 / concOk : null : dv * 60 / concOk;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, VASOPRESSORS.map(d => /*#__PURE__*/React.createElement("button", {
    key: d.id,
    onClick: () => switchDrug(d.id),
    style: {
      flex: "1 1 30%",
      padding: "8px 6px",
      borderRadius: 9,
      border: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 12.5,
      fontWeight: 700,
      lineHeight: 1.2,
      background: drugId === d.id ? S.teal : "#fff",
      color: drugId === d.id ? "#fff" : S.muted,
      boxShadow: drugId === d.id ? "none" : `inset 0 0 0 1.5px ${S.line}`
    }
  }, d.name))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: S.muted,
      fontWeight: 600,
      marginBottom: 5
    }
  }, el ? "Συγκέντρωση διαλύματος:" : "Solution concentration:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      flexWrap: "wrap"
    }
  }, drug.concs.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.label,
    onClick: () => setConc(c.v),
    style: {
      padding: "6px 10px",
      borderRadius: 8,
      border: "none",
      fontSize: 12.5,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      background: concOk === c.v ? S.ink : "#fff",
      color: concOk === c.v ? "#fff" : S.muted,
      boxShadow: concOk === c.v ? "none" : `inset 0 0 0 1.5px ${S.line}`
    }
  }, c.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: S.muted,
      fontWeight: 600
    }
  }, el ? "Δόση" : "Dose", " (", drug.unit, ")"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 15,
      color: S.ink,
      fontVariantNumeric: "tabular-nums"
    }
  }, dose)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: drug.lo,
    max: drug.hi,
    step: drug.step,
    value: dose,
    onChange: e => setDose(parseFloat(e.target.value)),
    style: {
      width: "100%",
      accentColor: S.teal
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: S.muted
    }
  }, el ? drug.rangeEl : drug.rangeEn)), needW ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: S.amber,
      fontWeight: 600
    }
  }, "⚖ ", T[lang].weightNeeded) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 12,
      padding: "12px 14px",
      boxShadow: `inset 0 0 0 1.5px ${S.teal}`,
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: S.ink,
      fontWeight: 600
    }
  }, el ? "Ρυθμός αντλίας" : "Pump rate"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900,
      fontSize: 24,
      color: S.teal,
      fontVariantNumeric: "tabular-nums"
    }
  }, fmt(rate)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: S.teal,
      fontWeight: 700
    }
  }, " mL/h"), unitsPerH != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: S.muted
    }
  }, " · ", fmt(unitsPerH), " U/h"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: S.muted,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 0.4,
      marginBottom: 4
    }
  }, el ? "Πίνακας αναφοράς (mL/h)" : "Reference (mL/h)"), refPts.map((dv, i) => {
    const r = rowRate(dv);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 13.5,
        padding: "2px 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: S.ink
      }
    }, dv, " ", drug.unit, drug.mode === "fixed" ? ` (${fmt(dv * 60)} U/h)` : ""), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        color: S.teal,
        fontVariantNumeric: "tabular-nums"
      }
    }, r != null ? fmt(r) + " mL/h" : "—"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: S.ink,
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: S.teal
    }
  }, el ? "Σημείωση" : "Note", ": "), el ? drug.noteEl : drug.noteEn), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: S.muted,
      lineHeight: 1.4
    }
  }, el ? "mL/h = δόση × βάρος × 60 / συγκέντρωση (για ανά-kg) ή δόση × 60 / συγκέντρωση (σταθερή). Τιτλοποίηση στη μέση αρτηριακή πίεση / κλινική απόκριση." : "mL/h = dose × weight × 60 / concentration (per-kg) or dose × 60 / concentration (fixed). Titrate to MAP / clinical response."));
}

// ============ GUIDELINES ============
const GUIDELINES = [{
  id: "ponv",
  el: "PONV — 5th Consensus (2025)",
  en: "PONV — 5th Consensus (2025)",
  secEl: [{
    h: "Εκτίμηση κινδύνου (Apfel)",
    items: ["Apfel: γυναικείο φύλο · μη καπνιστής · ιστορικό PONV/ναυτίας ταξιδιού · μετεγχειρητικά οπιοειδή", "0–4 παράγοντες → κίνδυνος ~10 / 20 / 40 / 60 / 80% (βλ. Κλίμακες → Apfel)", "Τα σκορ έχουν περιορισμούς — η νέα τάση είναι πιο liberal προφύλαξη"]
  }, {
    h: "Μείωση βασικού κινδύνου",
    items: ["TIVA με προποφόλη αντί πτητικών", "Αποφυγή/ελαχιστοποίηση N2O & πτητικών", "Opioid-sparing πολυτροπική αναλγησία · περιοχικές/νευραξονικές τεχνικές", "Επαρκής ενυδάτωση · ελαχιστοποίηση υψηλών δόσεων νεοστιγμίνης"]
  }, {
    h: "Προφύλαξη (πολυτροπική)",
    items: ["≥1 παράγοντας κινδύνου → ≥2 αντιεμετικά ΔΙΑΦΟΡΕΤΙΚΩΝ κατηγοριών", "Υψηλού κινδύνου (& υψηλού κινδύνου άνδρες) → ≥3 αντιεμετικά", "Κατηγορίες: 5-HT3 ανταγωνιστές · κορτικοστεροειδή · NK-1 ανταγωνιστές · ντοπαμινεργικά · αντιχολινεργικά/αντιισταμινικά", "Πιο μελετημένος συνδυασμός: 5-HT3 + δεξαμεθαζόνη"]
  }, {
    h: "Δόσεις & χρόνος",
    items: ["Ονδανσετρόνη 4 mg IV — στο τέλος της επέμβασης", "Δεξαμεθαζόνη 4–8 mg IV — μετά την εισαγωγή", "Δροπεριδόλη 0.625–1.25 mg IV — τέλος (προσοχή QT)", "Απρεπιτάντη 40 mg PO προεγχ. / φωσαπρεπιτάντη IV (μακράς δράσης)", "Παλονοσετρόνη 0.075 mg IV (μακράς δράσης)", "Σκοπολαμίνη patch — 2–4 h πριν ή το προηγούμενο βράδυ", "Αμισουλπρίδη 5 mg IV (προφύλαξη)"]
  }, {
    h: "Rescue (θεραπεία)",
    items: ["Αντιεμετικό από ΔΙΑΦΟΡΕΤΙΚΗ κατηγορία από την προφύλαξη", "ΜΗΝ επαναλαμβάνεις το ίδιο φάρμακο εντός 6 h (≈ placebo)", "5-HT3: 2η δόση μόνο αν >6 h από την 1η", "ΜΗΝ ξαναχορηγείς μακράς δράσης (απρεπιτάντη/φωσαπρεπιτάντη/παλονοσετρόνη) στην ανάνηψη", "Αμισουλπρίδη 10 mg IV ως rescue (αν δεν δόθηκε προφυλακτικά)"]
  }, {
    h: "Παιδιά",
    items: ["Διαχωρισμός POV (έμετος) από ναυτία · validated scores (POVOC/VPOP)", "Χωρίς παράγοντες → 1 φάρμακο · με παράγοντες → 2 (ονδανσετρόνη + δεξαμεθαζόνη)", "Ονδανσετρόνη 0.1 mg/kg (max 4 mg) · Δεξαμεθαζόνη 0.15 mg/kg (max 4 mg)"]
  }],
  secEn: [{
    h: "Risk assessment (Apfel)",
    items: ["Apfel: female sex · non-smoker · history of PONV/motion sickness · postoperative opioids", "0–4 factors → risk ~10 / 20 / 40 / 60 / 80% (see Scores → Apfel)", "Scores have limitations — the trend is toward more liberal prophylaxis"]
  }, {
    h: "Reduce baseline risk",
    items: ["Propofol TIVA instead of volatiles", "Avoid/minimize N2O & volatiles", "Opioid-sparing multimodal analgesia · regional/neuraxial techniques", "Adequate hydration · minimize high-dose neostigmine"]
  }, {
    h: "Prophylaxis (multimodal)",
    items: ["≥1 risk factor → ≥2 antiemetics of DIFFERENT classes", "High-risk (& high-risk males) → ≥3 antiemetics", "Classes: 5-HT3 antagonists · corticosteroids · NK-1 antagonists · dopamine antagonists · anticholinergics/antihistamines", "Most-studied combination: 5-HT3 + dexamethasone"]
  }, {
    h: "Doses & timing",
    items: ["Ondansetron 4 mg IV — at end of surgery", "Dexamethasone 4–8 mg IV — after induction", "Droperidol 0.625–1.25 mg IV — end (QT caution)", "Aprepitant 40 mg PO preop / fosaprepitant IV (long-acting)", "Palonosetron 0.075 mg IV (long-acting)", "Scopolamine patch — 2–4 h before or prior evening", "Amisulpride 5 mg IV (prophylaxis)"]
  }, {
    h: "Rescue (treatment)",
    items: ["Antiemetic from a DIFFERENT class than prophylaxis", "Do NOT repeat the same drug within 6 h (≈ placebo)", "5-HT3: a second dose only if >6 h since the first", "Do NOT re-dose long-acting agents (aprepitant/fosaprepitant/palonosetron) in PACU", "Amisulpride 10 mg IV as rescue (if not given as prophylaxis)"]
  }, {
    h: "Children",
    items: ["Separate POV (vomiting) from nausea · validated scores (POVOC/VPOP)", "No risk factors → 1 drug · with risk factors → 2 (ondansetron + dexamethasone)", "Ondansetron 0.1 mg/kg (max 4 mg) · Dexamethasone 0.15 mg/kg (max 4 mg)"]
  }],
  srcEl: "Gan TJ, Jin Z, Ayad S et al. 5th Consensus Guidelines, Anesth Analg 2025.",
  srcEn: "Gan TJ, Jin Z, Ayad S et al. 5th Consensus Guidelines, Anesth Analg 2025."
}];
function GuidelinesList({
  lang
}) {
  const el = lang === "el";
  const [open, setOpen] = useState("ponv");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, GUIDELINES.map(g => {
    const isOpen = open === g.id;
    const secs = el ? g.secEl : g.secEn;
    return /*#__PURE__*/React.createElement("div", {
      key: g.id,
      style: {
        background: S.bg,
        borderRadius: 12,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? null : g.id),
      style: {
        width: "100%",
        padding: "12px 14px",
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
        fontFamily: "inherit",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        fontWeight: 700,
        color: S.ink
      }
    }, el ? g.el : g.en), /*#__PURE__*/React.createElement("span", {
      style: {
        color: S.muted,
        fontSize: 17,
        transform: isOpen ? "rotate(90deg)" : "none",
        transition: "transform .15s"
      }
    }, "›")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 14px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, secs.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 13.5,
        color: S.teal,
        marginBottom: 5,
        letterSpacing: 0.2
      }
    }, s.h), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, s.items.map((it, j) => /*#__PURE__*/React.createElement("div", {
      key: j,
      style: {
        paddingLeft: 16,
        position: "relative",
        fontSize: 13.5,
        color: S.ink,
        lineHeight: 1.45
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 2,
        color: S.teal
      }
    }, "›"), it))))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: S.muted,
        fontStyle: "italic",
        paddingTop: 2
      }
    }, el ? g.srcEl : g.srcEn)));
  }));
}

// ============ VENTILATION / LUNG MECHANICS ============
/**
 * @typedef {Object} VentResult
 * @property {number} val - Computed value
 * @property {string} status - "ok" | "warn" | "danger" | "" (neutral)
 */

function VentilationCalc({
  lang,
  height,
  sex
}) {
  const el = lang === "el";
  const h = parseFloat(height) || 0;

  // Ventilator settings
  const [vt, setVt] = useState(""); // set tidal volume (mL)
  const [pplat, setPplat] = useState(""); // plateau pressure (cmH2O)
  const [ppeak, setPpeak] = useState(""); // peak pressure (cmH2O)
  const [peep, setPeep] = useState("5"); // PEEP (cmH2O)
  const [rr, setRr] = useState(""); // respiratory rate (breaths/min) — for RSBI
  // Gas exchange
  const [fio2, setFio2] = useState(""); // fraction (0.21–1.0) or %
  const [pao2, setPao2] = useState(""); // arterial O2 (mmHg)
  const [paco2, setPaco2] = useState(""); // arterial CO2 (mmHg)
  const [petco2, setPetco2] = useState(""); // end-tidal CO2 (mmHg)
  const [sao2, setSao2] = useState(""); // arterial saturation (%)
  const [hb, setHb] = useState(""); // hemoglobin (g/dL)
  const [patm, setPatm] = useState("760"); // atmospheric pressure (mmHg)

  const n = x => {
    const v = parseFloat(x);
    return isNaN(v) ? null : v;
  };
  const vtN = n(vt),
    pplatN = n(pplat),
    ppeakN = n(ppeak),
    peepN = n(peep) ?? 0;
  const rrN = n(rr);
  let fio2N = n(fio2);
  if (fio2N != null && fio2N > 1) fio2N = fio2N / 100; // accept 40 or 0.40
  const pao2N = n(pao2),
    paco2N = n(paco2),
    petco2N = n(petco2);
  const sao2N = n(sao2),
    hbN = n(hb),
    patmN = n(patm) ?? 760;

  // Predicted body weight (Devine) — protective ventilation is scaled to PBW, never actual weight
  const pbwKg = pbw(h, sex);

  // Tidal volume targets by PBW
  const vtLow = pbwKg ? 6 * pbwKg : null;
  const vtMid = pbwKg ? 7 * pbwKg : null;
  const vtHigh = pbwKg ? 8 * pbwKg : null;
  const vtPerKg = vtN && pbwKg ? vtN / pbwKg : null;

  // Driving pressure = Pplat − PEEP  (target < 15)
  const dp = pplatN != null && peepN != null ? pplatN - peepN : null;
  // Static compliance = Vt / (Pplat − PEEP)
  const cstat = vtN && dp && dp > 0 ? vtN / dp : null;
  // Airway resistance surrogate: Ppeak − Pplat (elevated → resistance problem)
  const resGrad = ppeakN != null && pplatN != null ? ppeakN - pplatN : null;

  // Rapid Shallow Breathing Index (weaning): RSBI = RR / Vt(L)  · threshold < 105 predicts extubation success
  const rsbi = rrN && vtN && vtN > 0 ? rrN / (vtN / 1000) : null;

  // P/F ratio (Berlin ARDS)
  const pf = pao2N && fio2N ? pao2N / fio2N : null;

  // Alveolar gas equation: PAO2 = FiO2×(Patm − PH2O) − PaCO2/R  (R=0.8, PH2O=47)
  const pAO2 = fio2N && paco2N ? fio2N * (patmN - 47) - paco2N / 0.8 : null;
  const aa = pAO2 != null && pao2N ? pAO2 - pao2N : null;
  // Age-expected normal A-a on room air ≈ (age/4)+4; here we just flag on FiO2 0.21
  const aaExpectedRA = 15; // rough upper-normal on room air, young adult

  // Dead space fraction (Enghoff-Bohr): Vd/Vt = (PaCO2 − PETCO2)/PaCO2
  const vdvt = paco2N && petco2N != null && paco2N > 0 ? (paco2N - petco2N) / paco2N : null;

  // Arterial O2 content: CaO2 = 1.34×Hb×SaO2 + 0.003×PaO2
  const cao2 = hbN && sao2N ? 1.34 * hbN * (sao2N / 100) + 0.003 * (pao2N || 0) : null;
  const Field = ({
    label,
    val,
    set,
    ph,
    unit
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 30%",
      minWidth: 92
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: S.muted,
      fontWeight: 700,
      marginBottom: 3
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "decimal",
    value: val,
    onChange: e => set(e.target.value),
    placeholder: ph,
    style: {
      ...inputStyle,
      padding: "8px 10px",
      fontSize: 14
    }
  }), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 10,
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: 11,
      color: S.muted,
      pointerEvents: "none"
    }
  }, unit)));
  const Out = ({
    label,
    val,
    unit,
    hint,
    status
  }) => {
    const col = status === "danger" ? S.red : status === "warn" ? S.amber : status === "ok" ? "#3B8C6E" : S.teal;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "1 1 45%",
        minWidth: 120,
        background: S.bg,
        borderRadius: 10,
        padding: "9px 12px",
        boxShadow: status ? `inset 0 0 0 1.5px ${col}` : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: S.muted,
        fontWeight: 700,
        textTransform: "uppercase"
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 17,
        color: col,
        fontVariantNumeric: "tabular-nums"
      }
    }, val == null ? "—" : `${fmt(val)}${unit ? " " + unit : ""}`), hint && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        color: S.muted,
        lineHeight: 1.35,
        marginTop: 1
      }
    }, hint));
  };
  const SectionLabel = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      color: S.teal,
      letterSpacing: 0.2,
      marginTop: 6
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Αναπνεόμενος όγκος (προστατευτικός)" : "Tidal volume (protective)"), !h ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: S.amber,
      fontWeight: 600
    }
  }, "⚖ ", el ? "Εισάγετε ύψος για υπολογισμό PBW & στόχων Vt" : "Enter height to compute PBW & Vt targets") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Out, {
    label: el ? "Προβλεπόμενο ΒΣ (PBW)" : "Predicted BW (PBW)",
    val: pbwKg,
    unit: "kg",
    hint: el ? "Devine · " + (sex === "M" ? "♂" : "♀") : "Devine · " + (sex === "M" ? "♂" : "♀")
  }), /*#__PURE__*/React.createElement(Out, {
    label: el ? "Στόχος Vt 6–8 mL/kg" : "Vt target 6–8 mL/kg",
    val: vtMid,
    unit: "mL",
    hint: `${fmt(vtLow)}–${fmt(vtHigh)} mL`,
    status: "ok"
  })), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Ρυθμίσεις αναπνευστήρα" : "Ventilator settings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Vt",
    val: vt,
    set: setVt,
    ph: "450",
    unit: "mL"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Pplat",
    val: pplat,
    set: setPplat,
    ph: "—",
    unit: "cmH₂O"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Ppeak",
    val: ppeak,
    set: setPpeak,
    ph: "—",
    unit: "cmH₂O"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "PEEP",
    val: peep,
    set: setPeep,
    ph: "5",
    unit: "cmH₂O"
  }), /*#__PURE__*/React.createElement(Field, {
    label: el ? "Αναπν. συχνότητα" : "Resp. rate",
    val: rr,
    set: setRr,
    ph: "—",
    unit: "/min"
  })), (vtPerKg || dp != null || cstat || resGrad != null || rsbi != null) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, vtPerKg != null && /*#__PURE__*/React.createElement(Out, {
    label: el ? "Vt ανά kg PBW" : "Vt per kg PBW",
    val: vtPerKg,
    unit: "mL/kg",
    hint: el ? "στόχος 6–8" : "target 6–8",
    status: vtPerKg > 8 ? "danger" : vtPerKg > 6.5 ? "warn" : "ok"
  }), dp != null && /*#__PURE__*/React.createElement(Out, {
    label: el ? "Πίεση οδήγησης (ΔP)" : "Driving pressure (ΔP)",
    val: dp,
    unit: "cmH₂O",
    hint: el ? "Pplat − PEEP · στόχος < 15" : "Pplat − PEEP · target < 15",
    status: dp >= 15 ? "danger" : dp >= 13 ? "warn" : "ok"
  }), pplatN != null && /*#__PURE__*/React.createElement(Out, {
    label: el ? "Πίεση plateau" : "Plateau pressure",
    val: pplatN,
    unit: "cmH₂O",
    hint: el ? "στόχος < 30 (ιδανικά < 28)" : "target < 30 (ideally < 28)",
    status: pplatN >= 30 ? "danger" : pplatN >= 28 ? "warn" : "ok"
  }), cstat != null && /*#__PURE__*/React.createElement(Out, {
    label: el ? "Στατική ενδοτικότητα" : "Static compliance",
    val: cstat,
    unit: "mL/cmH₂O",
    hint: el ? "Vt / ΔP · φυσιολ. 50–100" : "Vt / ΔP · normal 50–100",
    status: cstat < 30 ? "danger" : cstat < 40 ? "warn" : "ok"
  }), resGrad != null && /*#__PURE__*/React.createElement(Out, {
    label: el ? "Ppeak − Pplat" : "Ppeak − Pplat",
    val: resGrad,
    unit: "cmH₂O",
    hint: el ? "↑ → αντίσταση αεραγωγών" : "↑ → airway resistance",
    status: resGrad > 15 ? "warn" : ""
  }), rsbi != null && /*#__PURE__*/React.createElement(Out, {
    label: el ? "RSBI (απογαλακτισμός)" : "RSBI (weaning)",
    val: rsbi,
    unit: "/min/L",
    hint: el ? "RR / Vt(L) · < 105 → πιθανή επιτυχία" : "RR / Vt(L) · < 105 → likely success",
    status: rsbi >= 105 ? "danger" : rsbi >= 80 ? "warn" : "ok"
  })), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Ανταλλαγή αερίων (ABG)" : "Gas exchange (ABG)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "FiO₂",
    val: fio2,
    set: setFio2,
    ph: "0.40",
    unit: ""
  }), /*#__PURE__*/React.createElement(Field, {
    label: "PaO₂",
    val: pao2,
    set: setPao2,
    ph: "—",
    unit: "mmHg"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "PaCO₂",
    val: paco2,
    set: setPaco2,
    ph: "—",
    unit: "mmHg"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "PETCO₂",
    val: petco2,
    set: setPetco2,
    ph: "—",
    unit: "mmHg"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "SaO₂",
    val: sao2,
    set: setSao2,
    ph: "—",
    unit: "%"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Hb",
    val: hb,
    set: setHb,
    ph: "—",
    unit: "g/dL"
  })), (pf || aa != null || vdvt != null || cao2 != null) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, pf != null && /*#__PURE__*/React.createElement(Out, {
    label: el ? "Λόγος P/F" : "P/F ratio",
    val: pf,
    unit: "mmHg",
    hint: pf > 300 ? el ? "φυσιολογικό" : "normal" : pf > 200 ? el ? "ήπιο ARDS" : "mild ARDS" : pf > 100 ? el ? "μέτριο ARDS" : "moderate ARDS" : el ? "σοβαρό ARDS" : "severe ARDS",
    status: pf > 300 ? "ok" : pf > 200 ? "warn" : "danger"
  }), aa != null && /*#__PURE__*/React.createElement(Out, {
    label: el ? "Κλίση A–a" : "A–a gradient",
    val: aa,
    unit: "mmHg",
    hint: `PAO₂ ${fmt(pAO2)} · ${el ? "φυσιολ. RA ≈" : "normal RA ≈"} ${aaExpectedRA}`,
    status: fio2N && fio2N <= 0.22 ? aa > aaExpectedRA ? "warn" : "ok" : ""
  }), vdvt != null && /*#__PURE__*/React.createElement(Out, {
    label: el ? "Νεκρός χώρος Vd/Vt" : "Dead space Vd/Vt",
    val: vdvt * 100,
    unit: "%",
    hint: el ? "(PaCO₂−PETCO₂)/PaCO₂ · φυσιολ. 20–40%" : "(PaCO₂−PETCO₂)/PaCO₂ · normal 20–40%",
    status: vdvt > 0.6 ? "danger" : vdvt > 0.45 ? "warn" : "ok"
  }), cao2 != null && /*#__PURE__*/React.createElement(Out, {
    label: el ? "Περιεκτ. O₂ (CaO₂)" : "O₂ content (CaO₂)",
    val: cao2,
    unit: "mL/dL",
    hint: el ? "1.34·Hb·SaO₂ + 0.003·PaO₂ · φυσιολ. 16–20" : "1.34·Hb·SaO₂ + 0.003·PaO₂ · normal 16–20",
    status: cao2 < 12 ? "warn" : ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.45,
      marginTop: 2
    }
  }, el ? "Vt σε PBW (Devine), όχι πραγματικό βάρος. Στόχοι: ΔP < 15, Pplat < 30 cmH₂O (ARDSNet/PROVE). A–a: R=0.8, PH₂O=47, Patm ρυθμιζόμενη. Vd/Vt με Enghoff (PETCO₂ αντί μικτού φλεβικού). Επαληθεύστε κλινικά." : "Vt scaled to PBW (Devine), not actual weight. Targets: ΔP < 15, Pplat < 30 cmH₂O (ARDSNet/PROVE). A–a uses R=0.8, PH₂O=47, adjustable Patm. Vd/Vt via Enghoff (PETCO₂ surrogate). Verify clinically."));
}

// ============ CRISIS ALGORITHMS (weight-based live dosing) ============
function CrisisCard({
  lang,
  weight
}) {
  const el = lang === "el";
  const w = parseFloat(weight) || 0;
  const [crisis, setCrisis] = useState("anaphylaxis");
  const d = (v, unit, dp) => w ? `${Math.round(v * w * (dp ? 10 ** dp : 1)) / (dp ? 10 ** dp : 1)}${unit}` : "— " + (el ? "(βάρος;)" : "(weight?)");
  const crises = [{
    id: "anaphylaxis",
    el: "Αναφυλαξία",
    en: "Anaphylaxis",
    icon: "🚨",
    color: S.red
  }, {
    id: "mh",
    el: "Κακοήθης υπερθερμία",
    en: "Malignant hyperthermia",
    icon: "🌡️",
    color: S.red
  }, {
    id: "hemorrhage",
    el: "Μαζική αιμορραγία",
    en: "Massive haemorrhage",
    icon: "🩸",
    color: S.red
  }, {
    id: "last",
    el: "LAST",
    en: "LAST",
    icon: "🧴",
    color: S.amber
  }];
  const Step = ({
    n,
    title,
    children,
    danger
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: S.bg,
      borderRadius: 10,
      padding: "10px 12px",
      boxShadow: danger ? `inset 0 0 0 1.5px ${S.red}` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "baseline"
    }
  }, n != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 12,
      color: "#fff",
      background: danger ? S.red : S.teal,
      borderRadius: 6,
      padding: "1px 7px",
      flexShrink: 0
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: S.ink
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: S.muted,
      lineHeight: 1.5,
      marginTop: 4
    }
  }, children));
  const Dose = ({
    children
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: S.teal,
      fontVariantNumeric: "tabular-nums"
    }
  }, children);
  const SectionLabel = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      color: S.teal,
      letterSpacing: 0.2,
      marginTop: 6
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      flexWrap: "wrap"
    }
  }, crises.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => setCrisis(c.id),
    style: {
      flex: "1 1 40%",
      padding: "8px 4px",
      borderRadius: 9,
      border: "none",
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      background: crisis === c.id ? c.color : S.bg,
      color: crisis === c.id ? "#fff" : S.muted
    }
  }, c.icon, " ", el ? c.el : c.en))), crisis === "anaphylaxis" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Περιεγχειρητική Αναφυλαξία (AAGBI/NAP6)" : "Perioperative Anaphylaxis (AAGBI/NAP6)"), /*#__PURE__*/React.createElement(Step, {
    n: "1",
    title: el ? "Αναγνώριση & κλήση βοήθειας" : "Recognise & call for help",
    danger: true
  }, el ? "Σταμάτημα πιθανού αιτίου. 100% O₂, εξασφάλιση αεραγωγού. Ανύψωση ποδιών." : "Stop likely trigger. 100% O₂, secure airway. Elevate legs."), /*#__PURE__*/React.createElement(Step, {
    n: "2",
    title: el ? "Αδρεναλίνη IM (πρώτης γραμμής)" : "Adrenaline IM (first-line)",
    danger: true
  }, el ? "500 µg IM (0.5 mL 1:1000) στον έξω μηρό, επανάληψη ανά 5 min. " : "500 µg IM (0.5 mL 1:1000) anterolateral thigh, repeat q5min. ", el ? "Παιδιά: 10 µg/kg = " : "Child: 10 µg/kg = ", /*#__PURE__*/React.createElement(Dose, null, d(0.01, " mg", 2)), " IM"), /*#__PURE__*/React.createElement(Step, {
    n: "3",
    title: el ? "Αδρεναλίνη IV (μόνο από έμπειρο)" : "Adrenaline IV (experienced only)"
  }, el ? "Bolus 20–50 µg τιτλοποίηση· έγχυση 0.05–0.1 µg/kg/min = " : "Bolus 20–50 µg titrated; infusion 0.05–0.1 µg/kg/min = ", /*#__PURE__*/React.createElement(Dose, null, w ? `${fmt(0.05 * w)}–${fmt(0.1 * w)} µg/min` : "—")), /*#__PURE__*/React.createElement(Step, {
    n: "4",
    title: el ? "Υγρά" : "Fluids"
  }, el ? "Ταχύ bolus κρυσταλλοειδών 20 mL/kg = " : "Rapid crystalloid bolus 20 mL/kg = ", /*#__PURE__*/React.createElement(Dose, null, d(20, " mL"))), /*#__PURE__*/React.createElement(Step, {
    n: "5",
    title: el ? "Ανθεκτική (refractory)" : "Refractory"
  }, el ? "Έγχυση αδρεναλίνης/νοραδρεναλίνης· βαζοπρεσσίνη 1–2 U· γλυκαγόνη 1–2 mg IV αν σε β-αποκλειστές· σκεφτείτε sugammadex αν rocuronium." : "Adrenaline/noradrenaline infusion; vasopressin 1–2 U; glucagon 1–2 mg IV if on β-blockers; consider sugammadex if rocuronium."), /*#__PURE__*/React.createElement(Step, {
    n: "6",
    title: el ? "Δεύτερης γραμμής & έλεγχος" : "Second-line & investigations"
  }, el ? "Χλωρφαιναμίνη 10 mg + υδροκορτιζόνη 200 mg IV. Τρυπτάση: αμέσως, στη 1–2h, & >24h. Παραπομπή αλλεργιολογικού." : "Chlorphenamine 10 mg + hydrocortisone 200 mg IV. Tryptase: immediate, 1–2h, & >24h. Refer to allergy clinic.")), crisis === "mh" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Κακοήθης Υπερθερμία (AAGBI)" : "Malignant Hyperthermia (AAGBI)"), /*#__PURE__*/React.createElement(Step, {
    n: "1",
    title: el ? "Σταμάτημα εναύσματος" : "Stop trigger",
    danger: true
  }, el ? "Διακοπή πτητικών & σουκινυλοχολίνης. 100% O₂ σε υψηλή ροή, υπεραερισμός. Κλήση βοήθειας & δαντρολενίου. Μετάβαση σε TIVA." : "Stop volatiles & suxamethonium. 100% O₂ high flow, hyperventilate. Call for help & dantrolene. Switch to TIVA."), /*#__PURE__*/React.createElement(Step, {
    n: "2",
    title: el ? "Δαντρολένιο" : "Dantrolene",
    danger: true
  }, el ? "2.5 mg/kg IV bolus = " : "2.5 mg/kg IV bolus = ", /*#__PURE__*/React.createElement(Dose, null, d(2.5, " mg")), el ? ", επανάληψη ανά 5 min έως 10 mg/kg = " : ", repeat q5min up to 10 mg/kg = ", /*#__PURE__*/React.createElement(Dose, null, d(10, " mg")), ".", " ", el ? "Φιαλίδια (20 mg/60 mL): αρχικά ~" : "Vials (20 mg/60 mL): initial ~", /*#__PURE__*/React.createElement(Dose, null, w ? Math.ceil(2.5 * w / 20) : "—"), el ? " φιαλίδια." : " vials."), /*#__PURE__*/React.createElement(Step, {
    n: "3",
    title: el ? "Ψύξη" : "Cooling"
  }, el ? "Ενεργή ψύξη αν T > 38.5°C: ψυχρά υγρά IV, επιφανειακή ψύξη, πλύση κοιλοτήτων. Στόπ στους 38°C." : "Active cooling if T > 38.5°C: cold IV fluids, surface cooling, cavity lavage. Stop at 38°C."), /*#__PURE__*/React.createElement(Step, {
    n: "4",
    title: el ? "Υπερκαλιαιμία & αρρυθμίες" : "Hyperkalaemia & arrhythmias",
    danger: true
  }, el ? "Ασβέστιο 10% 10 mL· ινσουλίνη 10 U + γλυκόζη 25 g· διττανθρακικά. Αντιμετώπιση αρρυθμιών (όχι αποκλειστές διαύλων Ca)." : "Calcium 10% 10 mL; insulin 10 U + glucose 25 g; bicarbonate. Treat arrhythmias (avoid Ca-channel blockers)."), /*#__PURE__*/React.createElement(Step, {
    n: "5",
    title: el ? "Παρακολούθηση" : "Monitor"
  }, el ? "ABG, K⁺, CK, μυοσφαιρίνη, πήξη, θερμοκρασία, διούρηση (στόχος >2 mL/kg/h = " : "ABG, K⁺, CK, myoglobin, coagulation, temperature, urine output (target >2 mL/kg/h = ", /*#__PURE__*/React.createElement(Dose, null, d(2, " mL/h")), "). ", el ? "MHAUS hotline." : "MHAUS hotline.")), crisis === "hemorrhage" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Μαζική Αιμορραγία" : "Massive Haemorrhage"), /*#__PURE__*/React.createElement(Step, {
    n: "1",
    title: el ? "Ενεργοποίηση πρωτοκόλλου" : "Activate protocol",
    danger: true
  }, el ? "Κλήση βοήθειας & MHP. Έλεγχος πηγής αιμορραγίας. 2 μεγάλες φλεβικές γραμμές, θέρμανση υγρών, cell salvage." : "Call for help & MHP. Control bleeding source. 2 large-bore IV, warm fluids, cell salvage."), /*#__PURE__*/React.createElement(Step, {
    n: "2",
    title: el ? "Τρανεξαμικό (νωρίς!)" : "Tranexamic acid (early!)",
    danger: true
  }, el ? "1 g IV σε 10 min, μετά 1 g/8h. Εντός 3h από το τραύμα." : "1 g IV over 10 min, then 1 g/8h. Within 3h of injury."), /*#__PURE__*/React.createElement(Step, {
    n: "3",
    title: el ? "Μετάγγιση (ratio)" : "Transfusion (ratio)"
  }, el ? "RBC:FFP:PLT ~ 1:1:1. Ενεργοποίηση πακέτων μαζικής μετάγγισης· μη καθυστερείτε για εργαστήριο." : "RBC:FFP:PLT ~ 1:1:1. Activate massive transfusion packs; don't wait for labs."), /*#__PURE__*/React.createElement(Step, {
    n: "4",
    title: el ? "Στόχοι (viscoelastic/labs)" : "Targets (viscoelastic/labs)"
  }, el ? "Ινωδογόνο > 1.5–2 g/L (κρυοκαθίζημα/συμπύκνωμα). Αιμοπετάλια > 50 (>100 σε ΚΝΣ/πολυτραυματία). PT/APTT < 1.5×. Ca²⁺ > 1.0 mmol/L. pH & θερμοκρασία." : "Fibrinogen > 1.5–2 g/L (cryo/concentrate). Platelets > 50 (>100 if CNS/polytrauma). PT/APTT < 1.5×. Ca²⁺ > 1.0 mmol/L. pH & temperature."), /*#__PURE__*/React.createElement(Step, {
    n: "5",
    title: el ? "Αποφυγή τριάδας θανάτου" : "Avoid lethal triad",
    danger: true
  }, el ? "Υποθερμία + οξέωση + διαταραχή πήξης. Ενεργή θέρμανση, διόρθωση ασβεστίου (συχνά μετά μαζική μετάγγιση), αποφυγή αραίωσης." : "Hypothermia + acidosis + coagulopathy. Active warming, correct calcium (common after massive transfusion), avoid dilution.")), crisis === "last" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Τοξικότητα Τοπικών Αναισθητικών (ASRA)" : "Local Anaesthetic Systemic Toxicity (ASRA)"), /*#__PURE__*/React.createElement(Step, {
    n: "1",
    title: el ? "Αναγνώριση & στήριξη" : "Recognise & support",
    danger: true
  }, el ? "Σταμάτημα ένεσης. 100% O₂, αεραγωγός. Σπασμοί: βενζοδιαζεπίνες (αποφυγή προποφόλης σε μεγάλες δόσεις). Κλήση βοήθειας & lipid." : "Stop injection. 100% O₂, airway. Seizures: benzodiazepines (avoid large-dose propofol). Call for help & lipid."), /*#__PURE__*/React.createElement(Step, {
    n: "2",
    title: el ? "Lipid emulsion 20% — bolus" : "Lipid emulsion 20% — bolus",
    danger: true
  }, el ? "1.5 mL/kg σε 1 min (LBW) = " : "1.5 mL/kg over 1 min (LBW) = ", /*#__PURE__*/React.createElement(Dose, null, d(1.5, " mL")), ".", " ", el ? "Επανάληψη ×1–2 αν επιμένει η ασυστολία." : "Repeat ×1–2 if persistent asystole."), /*#__PURE__*/React.createElement(Step, {
    n: "3",
    title: el ? "Lipid — έγχυση" : "Lipid — infusion",
    danger: true
  }, el ? "15 mL/kg/h = " : "15 mL/kg/h = ", /*#__PURE__*/React.createElement(Dose, null, d(15, " mL/h")), ".", " ", el ? "Διπλασιασμός αν παραμένει υπόταση." : "Double if hypotension persists."), /*#__PURE__*/React.createElement(Step, {
    n: "4",
    title: el ? "Μέγιστη δόση lipid" : "Maximum lipid dose"
  }, el ? "≈ 12 mL/kg συνολικά = " : "≈ 12 mL/kg total = ", /*#__PURE__*/React.createElement(Dose, null, d(12, " mL"))), /*#__PURE__*/React.createElement(Step, {
    n: "5",
    title: el ? "Ανακοπή / ACLS" : "Arrest / ACLS",
    danger: true
  }, el ? "Παρατεταμένη ΚΑΡΠΑ (>1h). Μικρές δόσεις αδρεναλίνης (<1 µg/kg). Αποφυγή βαζοπρεσσίνης, αποκλειστών Ca, β-αποκλειστών, λιδοκαΐνης. Σκεφτείτε ECMO." : "Prolonged CPR (>1h). Small adrenaline doses (<1 µg/kg). Avoid vasopressin, Ca-blockers, β-blockers, lidocaine. Consider ECMO.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.45,
      marginTop: 2
    }
  }, el ? "Δόσεις υπολογισμένες στο τρέχον βάρος. Ακολουθήστε τα τοπικά πρωτόκολλα & τις επίσημες γνωσιακές κάρτες (AAGBI/ASRA). Επαληθεύστε κλινικά." : "Doses computed from current weight. Follow local protocols & official cognitive aids (AAGBI/ASRA). Verify clinically."));
}

// ============ PERIOPERATIVE MEDICINE ============
function PeriopMedCard({
  lang
}) {
  const el = lang === "el";
  const [topic, setTopic] = useState("cardiac");
  const topics = [{
    id: "cardiac",
    el: "Καρδιακά / Stent / DAPT",
    en: "Cardiac / Stent / DAPT",
    icon: "🫀"
  }, {
    id: "diabetes",
    el: "Διαβήτης / GLP-1 / SGLT2",
    en: "Diabetes / GLP-1 / SGLT2",
    icon: "🩸"
  }, {
    id: "steroid",
    el: "Στεροειδική κάλυψη",
    en: "Steroid cover",
    icon: "💊"
  }, {
    id: "bridging",
    el: "Γεφύρωση αντιπηκτικών",
    en: "Anticoagulant bridging",
    icon: "🔗"
  }];
  const Block = ({
    title,
    children,
    warn
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: S.bg,
      borderRadius: 10,
      padding: "10px 12px",
      boxShadow: warn ? `inset 0 0 0 1.5px ${S.amber}` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: S.ink,
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: S.muted,
      lineHeight: 1.5
    }
  }, children));
  const Hi = ({
    children
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: S.teal
    }
  }, children);
  const SectionLabel = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      color: S.teal,
      letterSpacing: 0.2,
      marginTop: 6
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      flexWrap: "wrap"
    }
  }, topics.map(tp => /*#__PURE__*/React.createElement("button", {
    key: tp.id,
    onClick: () => setTopic(tp.id),
    style: {
      flex: "1 1 40%",
      padding: "8px 4px",
      borderRadius: 9,
      border: "none",
      fontSize: 11.5,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      background: topic === tp.id ? S.ink : S.bg,
      color: topic === tp.id ? "#fff" : S.muted
    }
  }, tp.icon, " ", el ? tp.el : tp.en))), topic === "cardiac" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Elective χειρουργείο μετά PCI (ACC/AHA)" : "Elective surgery after PCI (ACC/AHA)"), /*#__PURE__*/React.createElement(Block, {
    title: el ? "Καθυστέρηση elective χειρουργείου" : "Delay elective surgery",
    warn: true
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Μεταλλικό stent (BMS): ", /*#__PURE__*/React.createElement(Hi, null, "≥ 30 ημέρες"), ". Φαρμακοεκλυτικό (DES): ιδανικά ", /*#__PURE__*/React.createElement(Hi, null, "≥ 6 μήνες"), " (νεότερα DES ελάχιστο ", /*#__PURE__*/React.createElement(Hi, null, "3 μήνες"), " αν ο κίνδυνος καθυστέρησης υπερτερεί). Μετά STEMI/ACS: ", /*#__PURE__*/React.createElement(Hi, null, "≥ 6 μήνες"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "Bare-metal (BMS): ", /*#__PURE__*/React.createElement(Hi, null, "≥ 30 days"), ". Drug-eluting (DES): ideally ", /*#__PURE__*/React.createElement(Hi, null, "≥ 6 months"), " (newer DES minimum ", /*#__PURE__*/React.createElement(Hi, null, "3 months"), " if delay risk outweighs). After STEMI/ACS: ", /*#__PURE__*/React.createElement(Hi, null, "≥ 6 months"), ".")), /*#__PURE__*/React.createElement(Block, {
    title: el ? "Διπλή αντιαιμοπεταλιακή (DAPT)" : "Dual antiplatelet (DAPT)"
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Συνέχιση ", /*#__PURE__*/React.createElement(Hi, null, "ασπιρίνης"), " περιεγχειρητικά όποτε είναι δυνατό. Διακοπή P2Y12: κλοπιδογρέλη ", /*#__PURE__*/React.createElement(Hi, null, "5 ημέρες"), ", τικαγρελόρη ", /*#__PURE__*/React.createElement(Hi, null, "3–5 ημέρες"), ", πρασουγρέλη ", /*#__PURE__*/React.createElement(Hi, null, "7 ημέρες"), " πριν. Επανέναρξη το συντομότερο μετεγχειρητικά.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Continue ", /*#__PURE__*/React.createElement(Hi, null, "aspirin"), " perioperatively whenever possible. Stop P2Y12: clopidogrel ", /*#__PURE__*/React.createElement(Hi, null, "5 days"), ", ticagrelor ", /*#__PURE__*/React.createElement(Hi, null, "3–5 days"), ", prasugrel ", /*#__PURE__*/React.createElement(Hi, null, "7 days"), " before. Restart ASAP postop.")), /*#__PURE__*/React.createElement(Block, {
    title: el ? "Επείγον χειρουργείο σε DAPT" : "Urgent surgery on DAPT"
  }, el ? "Πολυεπιστημονική συνεννόηση (καρδιολόγος/χειρουργός). Συνέχιση ασπιρίνης. Διαθεσιμότητα αιμοπεταλίων. Σκεφτείτε γεφύρωση με αναστρέψιμο (cangrelor/tirofiban) σε πολύ υψηλού κινδύνου stent." : "Multidisciplinary discussion (cardiology/surgery). Continue aspirin. Have platelets available. Consider bridging with reversible agent (cangrelor/tirofiban) in very-high-risk stents.")), topic === "diabetes" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Περιεγχειρητική διαχείριση διαβήτη (CPOC)" : "Perioperative diabetes (CPOC)"), /*#__PURE__*/React.createElement(Block, {
    title: el ? "GLP-1 αγωνιστές" : "GLP-1 agonists",
    warn: true
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Καθυστερημένη γαστρική κένωση → κίνδυνος εισρόφησης. Ημερήσιοι: παράλειψη ", /*#__PURE__*/React.createElement(Hi, null, "ημέρα χειρουργείου"), ". Εβδομαδιαίοι: διακοπή ", /*#__PURE__*/React.createElement(Hi, null, "1 εβδομάδα"), " πριν (ADA 2023). Αν δεν διακόπηκαν → full-stomach προφυλάξεις/RSI, US γαστρικού.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Delayed gastric emptying → aspiration risk. Daily: hold ", /*#__PURE__*/React.createElement(Hi, null, "day of surgery"), ". Weekly: stop ", /*#__PURE__*/React.createElement(Hi, null, "1 week"), " before (ADA 2023). If not held → treat as full stomach/RSI, gastric US.")), /*#__PURE__*/React.createElement(Block, {
    title: el ? "SGLT2 αναστολείς" : "SGLT2 inhibitors",
    warn: true
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Κίνδυνος ευγλυκαιμικής DKA. Διακοπή ", /*#__PURE__*/React.createElement(Hi, null, "3–4 ημέρες"), " πριν (τελευταία δόση την 4η προηγούμενη ημέρα). Έλεγχος κετονών αν αδιαθεσία.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Euglycaemic DKA risk. Stop ", /*#__PURE__*/React.createElement(Hi, null, "3–4 days"), " before (last dose on the day 4 prior). Check ketones if unwell.")), /*#__PURE__*/React.createElement(Block, {
    title: el ? "Ινσουλίνη & VRIII" : "Insulin & VRIII"
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Μακράς δράσης: 80% της δόσης. Παράλειψη ταχείας το πρωί νηστείας. VRIII (sliding scale) αν: μακρά νηστεία (>1 γεύμα), κακή ρύθμιση, εγχείρηση μεγάλη. Στόχος γλυκόζης ", /*#__PURE__*/React.createElement(Hi, null, "6–10 mmol/L"), " (108–180 mg/dL). Παρακολούθηση K⁺.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Long-acting: 80% of dose. Omit rapid-acting on fasting morning. VRIII (sliding scale) if: long fast (>1 meal), poor control, major surgery. Target glucose ", /*#__PURE__*/React.createElement(Hi, null, "6–10 mmol/L"), " (108–180 mg/dL). Monitor K⁺.")), /*#__PURE__*/React.createElement(Block, {
    title: el ? "Μετφορμίνη" : "Metformin"
  }, el ? "Συνέχιση αν eGFR σταθερή & όχι contrast· παράλειψη ημέρα εγχείρησης αν >1 δόση/ημέρα ή contrast/νεφρικός κίνδυνος." : "Continue if eGFR stable & no contrast; omit on day if >1 dose/day or contrast/renal risk.")), topic === "steroid" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Περιεγχειρητική στεροειδική κάλυψη" : "Perioperative steroid cover"), /*#__PURE__*/React.createElement(Block, {
    title: el ? "Ποιοι χρειάζονται" : "Who needs cover"
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Χρόνια λήψη ", /*#__PURE__*/React.createElement(Hi, null, "≥ 5 mg"), " πρεδνιζολόνης/ημέρα ≥ 3 εβδομάδες, ή κλινική Cushing. Λήψη < 3 εβδομάδες ή τοπικά → συνήθως όχι.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Chronic ", /*#__PURE__*/React.createElement(Hi, null, "≥ 5 mg"), " prednisolone/day for ≥ 3 weeks, or Cushingoid. < 3 weeks or topical → usually none.")), /*#__PURE__*/React.createElement(Block, {
    title: el ? "Ήπια χειρουργική" : "Minor surgery"
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Συνήθης πρωινή δόση + ", /*#__PURE__*/React.createElement(Hi, null, "υδροκορτιζόνη 25–50 mg"), " IV στην εισαγωγή. Συνέχιση συνήθους από την επόμενη.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Usual morning dose + ", /*#__PURE__*/React.createElement(Hi, null, "hydrocortisone 25–50 mg"), " IV at induction. Resume usual next day.")), /*#__PURE__*/React.createElement(Block, {
    title: el ? "Μέτρια/μεγάλη χειρουργική" : "Moderate/major surgery"
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Συνήθης δόση + ", /*#__PURE__*/React.createElement(Hi, null, "υδροκορτιζόνη 50–100 mg"), " IV στην εισαγωγή, μετά ", /*#__PURE__*/React.createElement(Hi, null, "25–50 mg/8h"), " (ή έγχυση 200 mg/24h) για 24–72h με σταδιακή μείωση.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Usual dose + ", /*#__PURE__*/React.createElement(Hi, null, "hydrocortisone 50–100 mg"), " IV at induction, then ", /*#__PURE__*/React.createElement(Hi, null, "25–50 mg/8h"), " (or 200 mg/24h infusion) for 24–72h, tapering."))), topic === "bridging" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Γεφύρωση / διακοπή αντιπηκτικών" : "Anticoagulant bridging / interruption"), /*#__PURE__*/React.createElement(Block, {
    title: el ? "Βαρφαρίνη" : "Warfarin"
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Διακοπή ", /*#__PURE__*/React.createElement(Hi, null, "5 ημέρες"), " πριν, στόχος INR < 1.5. Γεφύρωση με LMWH ", /*#__PURE__*/React.createElement(Hi, null, "μόνο σε υψηλό θρομβωτικό κίνδυνο"), " (μηχανική μιτροειδής, πρόσφατο VTE/AF με CHA₂DS₂-VASc υψηλό). Τελευταία θεραπευτική LMWH 24h πριν.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Stop ", /*#__PURE__*/React.createElement(Hi, null, "5 days"), " before, target INR < 1.5. Bridge with LMWH ", /*#__PURE__*/React.createElement(Hi, null, "only if high thrombotic risk"), " (mechanical mitral, recent VTE/high-risk AF). Last therapeutic LMWH 24h before.")), /*#__PURE__*/React.createElement(Block, {
    title: el ? "DOACs — διακοπή (όχι γεφύρωση)" : "DOACs — interruption (no bridging)",
    warn: true
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Κανονικά νεφρά, χαμηλός κίνδυνος αιμορραγίας: ", /*#__PURE__*/React.createElement(Hi, null, "≥ 24h"), ". Υψηλός κίνδυνος: ", /*#__PURE__*/React.createElement(Hi, null, "≥ 48h"), ". Δαβιγατράνη + CrCl 30–50: ", /*#__PURE__*/React.createElement(Hi, null, "≥ 48–72h"), ". Χωρίς γεφύρωση.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Normal renal, low bleed risk: ", /*#__PURE__*/React.createElement(Hi, null, "≥ 24h"), ". High bleed risk: ", /*#__PURE__*/React.createElement(Hi, null, "≥ 48h"), ". Dabigatran + CrCl 30–50: ", /*#__PURE__*/React.createElement(Hi, null, "≥ 48–72h"), ". No bridging.")), /*#__PURE__*/React.createElement(Block, {
    title: el ? "Επανέναρξη" : "Restart"
  }, el ? "Χαμηλός κίνδυνος αιμορραγίας 24h, υψηλός 48–72h μετεγχειρητικά. Θεραπευτικό LMWH όχι πριν 48–72h σε μεγάλη χειρουργική." : "Low bleed risk 24h, high 48–72h postop. Therapeutic LMWH not before 48–72h in major surgery."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted
    }
  }, el ? "Για νευραξονικό: βλ. Εργαλεία → Αντιπηκτικά & Νευραξονικός (ASRA)." : "For neuraxial: see Tools → Anticoagulants & Neuraxial (ASRA).")));
}

// ============ ADULT ACUTE POSTOP ANALGESIA (multimodal) ============
function PostopAnalgesiaCard({
  lang,
  weight
}) {
  const el = lang === "el";
  const w = parseFloat(weight) || 0;
  const SectionLabel = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      color: S.teal,
      letterSpacing: 0.2,
      marginTop: 6
    }
  }, children);
  const Row = ({
    l,
    v,
    hint,
    warn
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 8,
      background: S.bg,
      borderRadius: 10,
      padding: "8px 12px",
      boxShadow: warn ? `inset 0 0 0 1.5px ${S.amber}` : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: S.ink
    }
  }, l, hint && /*#__PURE__*/React.createElement("span", {
    style: {
      color: S.muted,
      fontSize: 11.5
    }
  }, " · ", hint)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 14.5,
      color: warn ? S.amber : S.teal,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }
  }, v));
  const Box = ({
    title,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 12.5,
      color: S.teal,
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: S.ink,
      lineHeight: 1.55
    }
  }, children));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: S.muted,
      lineHeight: 1.45
    }
  }, el ? "Πολυπαραγοντική αναλγησία ενηλίκων — κλιμάκωση κατά ένταση (NRS). Παιδιά: βλ. καρτέλα Παιδιά." : "Adult multimodal analgesia — escalate by intensity (NRS). Children: see Peds tab."), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Βάση (όλοι, εκτός αντενδείξεων)" : "Baseline (all, unless contraindicated)"), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Παρακεταμόλη IV/PO" : "Paracetamol IV/PO",
    v: "1 g q6h",
    hint: el ? "max 4 g/24h (3 g σε ηπατική/καχεξία)" : "max 4 g/d (3 g hepatic/cachexia)"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "ΜΣΑΦ (επιλογή)" : "NSAID (choose one)",
    v: el ? "βλ. Φάρμακα" : "see Meds",
    hint: el ? "παρεκοξίμπη 40 mg / κετορολάκη 15–30 mg / λορνοξικάμη 8 mg" : "parecoxib 40 / ketorolac 15–30 / lornoxicam 8 mg"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Τοποπεριοχική / διήθηση" : "Regional / infiltration",
    v: "✓",
    hint: el ? "όποτε εφικτό (βλ. Νευραξονική & Blocks)" : "whenever feasible (see Neuraxial & Blocks)"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Δεξαμεθαζόνη (διεγχ.)" : "Dexamethasone (intraop)",
    v: "4–8 mg IV",
    hint: el ? "αναλγησία + PONV" : "analgesia + PONV"
  }), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Μέτριος πόνος (NRS 4–6)" : "Moderate pain (NRS 4–6)"), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Τραμαδόλη IV/PO" : "Tramadol IV/PO",
    v: "50–100 mg q6–8h",
    hint: el ? "max 400 mg/24h · ναυτία" : "max 400 mg/d · nausea"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ναλβουφίνη IV" : "Nalbuphine IV",
    v: w ? `${fmt(0.1 * w)}–${fmt(0.2 * w)} mg` : "0.1–0.2 mg/kg",
    hint: "q4–6h"
  }), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Σοβαρός πόνος (NRS ≥ 7)" : "Severe pain (NRS ≥ 7)"), /*#__PURE__*/React.createElement(Box, {
    title: el ? "Τιτλοποίηση μορφίνης (PACU)" : "Morphine titration (PACU)"
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, w ? `${fmt(Math.max(1, 0.02 * w))}–${fmt(0.05 * w)} mg` : "1–3 mg"), " IV (0.02–0.05 mg/kg) κάθε 5 min έως NRS < 4.", /*#__PURE__*/React.createElement("br", null), "Παρακολούθηση καταστολής & αναπνοών· διακοπή αν RR < 10 ή καταστολή.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, w ? `${fmt(Math.max(1, 0.02 * w))}–${fmt(0.05 * w)} mg` : "1–3 mg"), " IV (0.02–0.05 mg/kg) q5min until NRS < 4.", /*#__PURE__*/React.createElement("br", null), "Monitor sedation & RR; stop if RR < 10 or sedated.")), /*#__PURE__*/React.createElement(Box, {
    title: el ? "PCA Μορφίνη (ενήλικες)" : "Morphine PCA (adults)"
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, "Διάλυμα 1 mg/mL. ", /*#__PURE__*/React.createElement("strong", null, "Bolus 1 mg"), ", lockout ", /*#__PURE__*/React.createElement("strong", null, "5–10 min"), ", χωρίς βασική έγχυση (εκτός opioid-tolerant). Όριο 4h κατά πρωτόκολλο.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Solution 1 mg/mL. ", /*#__PURE__*/React.createElement("strong", null, "Bolus 1 mg"), ", lockout ", /*#__PURE__*/React.createElement("strong", null, "5–10 min"), ", no background (unless opioid-tolerant). 4-h limit per protocol.")), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Οξυκωδόνη PO (αποκλιμάκωση)" : "Oxycodone PO (step-down)",
    v: "5–10 mg q4–6h",
    hint: el ? "άμεσης αποδέσμευσης" : "immediate release"
  }), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Adjuncts (υψηλές ανάγκες / opioid-sparing)" : "Adjuncts (high needs / opioid-sparing)"), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Κεταμίνη bolus" : "Ketamine bolus",
    v: w ? `${fmt(0.15 * w)}–${fmt(0.25 * w)} mg` : "0.15–0.25 mg/kg",
    hint: el ? "± έγχυση 0.1–0.2 mg/kg/h" : "± infusion 0.1–0.2 mg/kg/h"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Λιδοκαΐνη IV έγχυση" : "Lidocaine IV infusion",
    v: "1–2 mg/kg/h",
    hint: el ? "κοιλιακή/λαπαρ. · ΟΧΙ με περιοχικό" : "abdominal/lap · NOT with regional"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Μαγνήσιο" : "Magnesium",
    v: w ? `${fmt(Math.min(40 * w, 4000) / 1000)} g` : "30–50 mg/kg",
    hint: el ? "φόρτιση διεγχειρητικά" : "intraop load"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.45
    }
  }, el ? "Οπιοειδή: τακτική εκτίμηση καταστολής (π.χ. POSS) & αναπνοών· προσοχή σε OSA/ηλικιωμένους. Στόχος PROSPECT: procedure-specific πολυπαραγοντική με ελάχιστα οπιοειδή." : "Opioids: regular sedation (e.g. POSS) & RR checks; caution in OSA/elderly. PROSPECT goal: procedure-specific multimodal with minimal opioids."));
}

// ============ SOURCES & REFERENCES ============
function ReferencesCard({
  lang
}) {
  const el = lang === "el";
  const Group = ({
    title,
    items
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      color: S.teal,
      letterSpacing: 0.2,
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: 12,
      color: S.ink,
      lineHeight: 1.5,
      background: S.bg,
      borderRadius: 8,
      padding: "7px 11px"
    }
  }, it))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: S.muted,
      lineHeight: 1.5
    }
  }, el ? "Το περιεχόμενο βασίζεται στις παρακάτω κατευθυντήριες οδηγίες, πρωτόκολλα και βιβλιογραφικές πηγές. Οι δόσεις προσαρμόζονται στην κλινική πρακτική και πρέπει πάντα να επαληθεύονται με τις επίσημες πηγές." : "Content is based on the guidelines, protocols and references below. Doses are adapted to clinical practice and must always be verified against the official sources."), /*#__PURE__*/React.createElement(Group, {
    title: el ? "Πρωτόκολλα / Θεσμικά" : "Protocols / Institutional",
    items: [el ? "Πρωτόκολλα Β' Πανεπιστημιακής Αναισθησιολογικής Κλινικής, ΠΓΝ «Αττικόν» (περιεγχειρητική & παιδιατρική διαχείριση, μετεγχειρητική αναλγησία, φάρμακα επείγουσας)." : "Protocols, 2nd University Dept of Anaesthesiology, Attikon University Hospital (perioperative & paediatric management, postop analgesia, emergency drugs)."]
  }), /*#__PURE__*/React.createElement(Group, {
    title: el ? "Αεραγωγός & Αναζωογόνηση" : "Airway & Resuscitation",
    items: ["Difficult Airway Society (DAS) Guidelines — unanticipated difficult intubation; awake tracheal intubation.", el ? "Ευρωπαϊκό Συμβούλιο Αναζωογόνησης (ERC) & APLS — αλγόριθμοι/δόσεις παιδιατρικής & ενήλικης αναζωογόνησης." : "European Resuscitation Council (ERC) & APLS — paediatric & adult resuscitation algorithms/doses."]
  }), /*#__PURE__*/React.createElement(Group, {
    title: el ? "Περιοχική & Αναλγησία" : "Regional & Analgesia",
    items: ["ASRA — Local Anaesthetic Systemic Toxicity (LAST) checklist & regional/anticoagulation guidelines.", "PROSPECT (Procedure-Specific Postoperative Pain Management) recommendations.", el ? "Κατευθυντήριες PONV — Consensus Guidelines for the Management of Postoperative Nausea and Vomiting." : "PONV — Consensus Guidelines for the Management of Postoperative Nausea and Vomiting."]
  }), /*#__PURE__*/React.createElement(Group, {
    title: el ? "Αιμορραγία & Πήξη" : "Haemorrhage & Coagulation",
    items: [el ? "ESAIC — Κατευθυντήριες διαχείρισης σοβαρής περιεγχειρητικής αιμορραγίας· ερμηνεία ROTEM/TEG (viscoelastic-guided)." : "ESAIC — Management of severe perioperative bleeding; ROTEM/TEG (viscoelastic-guided) interpretation.", "European trauma guideline (management of major bleeding & coagulopathy following trauma)."]
  }), /*#__PURE__*/React.createElement(Group, {
    title: el ? "Ειδικές καταστάσεις" : "Special situations",
    items: ["AAGBI / SOBA — Peri-operative management of the obese surgical patient.", "AAGBI — Malignant Hyperthermia & Anaphylaxis (perioperative) guidelines; MHAUS resources.", "CPOC / Centre for Perioperative Care — diabetes, GLP-1 & SGLT2 perioperative guidance.", "ACC/AHA — Perioperative cardiovascular evaluation (stent/DAPT timing).", el ? "Age-adjusted MAC — Nickalls & Mapleson· meta-regression πτητικών (MAC ~6.4%/δεκαετία)." : "Age-adjusted MAC — Nickalls & Mapleson; volatile MAC meta-regression (~6.4%/decade)."]
  }), /*#__PURE__*/React.createElement(Group, {
    title: el ? "Φαρμακολογία & Γενική αναφορά" : "Pharmacology & General reference",
    items: ["British National Formulary (BNF / BNFc) — drug dosing reference.", el ? "Summary of Product Characteristics (SmPC/ΠΧΠ) των επιμέρους φαρμάκων." : "Summary of Product Characteristics (SmPC) of individual drugs.", "Standard anaesthesia texts (e.g. Miller's Anesthesia; Oxford Handbook of Anaesthesia) for reference ranges."]
  }), /*#__PURE__*/React.createElement(Group, {
    title: el ? "Ανάπτυξη" : "Development",
    items: [el ? "Αναπτύχθηκε με τη χρήση εργαλείων τεχνητής νοημοσύνης (AI) για τη δόμηση και κωδικοποίηση, με κλινική επιμέλεια, επιλογή και επαλήθευση περιεχομένου από τη Dr Efstathia Pistioli, βάσει των αναφερόμενων πηγών." : "Developed using artificial intelligence (AI) tools for structuring and coding, with clinical curation, content selection and verification by Dr Efstathia Pistioli, based on the referenced sources."]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.5,
      marginTop: 4
    }
  }, el ? "Οι κατευθυντήριες οδηγίες ενημερώνονται· ανατρέχετε πάντα στην τρέχουσα επίσημη έκδοση. Το app δεν συνδέεται με τους φορείς αυτούς και δεν αναπαράγει αυτούσιο προστατευμένο περιεχόμενο — αποτελεί περίληψη/προσαρμογή για κλινική υποστήριξη." : "Guidelines are updated periodically; always consult the current official version. This app is not affiliated with these bodies and does not reproduce copyrighted content verbatim — it is a summary/adaptation for clinical support."));
}

// ============ ROTEM / TEG INTERPRETATION ============
function ROTEMCard({
  lang,
  weight
}) {
  const el = lang === "el";
  const w = parseFloat(weight) || 0;
  const [view, setView] = useState("params");
  const tabs = [{
    id: "params",
    el: "Παράμετροι",
    en: "Parameters",
    icon: "📊"
  }, {
    id: "algo",
    el: "Αλγόριθμος",
    en: "Algorithm",
    icon: "🧭"
  }];
  const SectionLabel = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      color: S.teal,
      letterSpacing: 0.2,
      marginTop: 6
    }
  }, children);
  const Param = ({
    name,
    teg,
    meaning,
    low
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 13.5,
      color: S.ink
    }
  }, name), teg && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: S.muted
    }
  }, "TEG: ", teg)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: S.muted,
      lineHeight: 1.5,
      marginTop: 3
    }
  }, meaning), low && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: S.ink,
      lineHeight: 1.5,
      marginTop: 3
    }
  }, low));
  const Step = ({
    trigger,
    action,
    dose
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: S.bg,
      borderRadius: 10,
      padding: "10px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: S.teal
    }
  }, trigger), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: S.ink,
      lineHeight: 1.5,
      marginTop: 3
    }
  }, action, dose && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: S.teal
    }
  }, " ", dose)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5
    }
  }, tabs.map(tb => /*#__PURE__*/React.createElement("button", {
    key: tb.id,
    onClick: () => setView(tb.id),
    style: {
      flex: 1,
      padding: "8px 4px",
      borderRadius: 9,
      border: "none",
      fontSize: 12.5,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "inherit",
      background: view === tb.id ? S.ink : S.bg,
      color: view === tb.id ? "#fff" : S.muted
    }
  }, tb.icon, " ", el ? tb.el : tb.en))), view === "params" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Assays (ROTEM)" : "Assays (ROTEM)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: S.muted,
      lineHeight: 1.55,
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, el ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "EXTEM"), " — εξωγενής οδός (~PT/χειρουργική αιμορραγία). ", /*#__PURE__*/React.createElement("strong", null, "INTEM"), " — ενδογενής (~APTT/ηπαρίνη). ", /*#__PURE__*/React.createElement("strong", null, "FIBTEM"), " — συνεισφορά ινωδογόνου (αιμοπετάλια αποκλεισμένα). ", /*#__PURE__*/React.createElement("strong", null, "APTEM"), " — EXTEM + απροτινίνη → αν βελτιώνει = υπερινωδόλυση. ", /*#__PURE__*/React.createElement("strong", null, "HEPTEM"), " — INTEM + επαρινάση → σύγκριση για ηπαρίνη.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "EXTEM"), " — extrinsic pathway (~PT/surgical bleeding). ", /*#__PURE__*/React.createElement("strong", null, "INTEM"), " — intrinsic (~APTT/heparin). ", /*#__PURE__*/React.createElement("strong", null, "FIBTEM"), " — fibrinogen contribution (platelets blocked). ", /*#__PURE__*/React.createElement("strong", null, "APTEM"), " — EXTEM + aprotinin → improvement = hyperfibrinolysis. ", /*#__PURE__*/React.createElement("strong", null, "HEPTEM"), " — INTEM + heparinase → compare for heparin.")), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Παράμετροι" : "Parameters"), /*#__PURE__*/React.createElement(Param, {
    name: "CT (Clotting Time)",
    teg: "R",
    meaning: el ? "Χρόνος έως έναρξη πήξης → παράγοντες πήξης / ηπαρίνη." : "Time to clot initiation → coagulation factors / heparin.",
    low: el ? "↑ EXTEM-CT → FFP/PCC. ↑ INTEM-CT με φυσιολογικό HEPTEM → ηπαρίνη (πρωταμίνη)." : "↑ EXTEM-CT → FFP/PCC. ↑ INTEM-CT with normal HEPTEM → heparin (protamine)."
  }), /*#__PURE__*/React.createElement(Param, {
    name: "CFT (Clot Formation Time)",
    teg: "K",
    meaning: el ? "Ταχύτητα σχηματισμού θρόμβου → ινωδογόνο & αιμοπετάλια." : "Speed of clot build-up → fibrinogen & platelets.",
    low: ""
  }), /*#__PURE__*/React.createElement(Param, {
    name: "α-angle",
    teg: "α",
    meaning: el ? "Κινητική σχηματισμού θρόμβου (ινωδογόνο/αιμοπετάλια)." : "Kinetics of clot build-up (fibrinogen/platelets).",
    low: ""
  }), /*#__PURE__*/React.createElement(Param, {
    name: "A5 / A10 / MCF",
    teg: "MA",
    meaning: el ? "Δύναμη/σταθερότητα θρόμβου. Το A5/A10 δίνει πρώιμη πρόβλεψη του MCF." : "Clot strength/firmness. A5/A10 give early prediction of MCF.",
    low: el ? "↓ EXTEM-A5/MCF + ↓ FIBTEM → ινωδογόνο. ↓ EXTEM με φυσιολογικό FIBTEM → αιμοπετάλια." : "↓ EXTEM-A5/MCF + ↓ FIBTEM → fibrinogen. ↓ EXTEM with normal FIBTEM → platelets."
  }), /*#__PURE__*/React.createElement(Param, {
    name: "ML / LI30 / LI60",
    teg: "LY30",
    meaning: el ? "Λύση θρόμβου. ML > 15% (ή Li30 < 94%) → υπερινωδόλυση." : "Clot lysis. ML > 15% (or Li30 < 94%) → hyperfibrinolysis.",
    low: el ? "→ τρανεξαμικό οξύ." : "→ tranexamic acid."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.45
    }
  }, el ? "Τυπικά όρια (ROTEM): EXTEM CT 38–79s, CFT 34–159s, α 63–83°, MCF 50–72 mm, FIBTEM MCF 9–25 mm, ML <15%. Ελέγξτε τα όρια του δικού σας αναλυτή." : "Typical ranges (ROTEM): EXTEM CT 38–79s, CFT 34–159s, α 63–83°, MCF 50–72 mm, FIBTEM MCF 9–25 mm, ML <15%. Verify your analyser's reference ranges.")), view === "algo" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: S.muted,
      lineHeight: 1.45
    }
  }, el ? "Στοχευμένη διόρθωση σε ενεργό αιμορραγία. Δίπλα: θερμοκρασία >36°C, pH, iCa²⁺ >1.0, Hb." : "Targeted correction in active bleeding. Alongside: temp >36°C, pH, iCa²⁺ >1.0, Hb."), /*#__PURE__*/React.createElement(Step, {
    trigger: el ? "1. Υπερινωδόλυση (ML >15% / APTEM βελτιώνει)" : "1. Hyperfibrinolysis (ML >15% / APTEM improves)",
    action: el ? "Τρανεξαμικό οξύ" : "Tranexamic acid",
    dose: el ? "1 g (ή 15–30 mg/kg" + (w ? ` = ${fmt(15 * w)}–${fmt(30 * w)} mg` : "") + ")" : "1 g (or 15–30 mg/kg" + (w ? ` = ${fmt(15 * w)}–${fmt(30 * w)} mg` : "") + ")"
  }), /*#__PURE__*/React.createElement(Step, {
    trigger: el ? "2. Χαμηλό ινωδογόνο (FIBTEM A5 <9–10 mm)" : "2. Low fibrinogen (FIBTEM A5 <9–10 mm)",
    action: el ? "Συμπύκνωμα ινωδογόνου ή κρυοκαθίζημα" : "Fibrinogen concentrate or cryoprecipitate",
    dose: el ? w ? `~${fmt(0.06 * w)} g (25–50 mg/kg)` : "25–50 mg/kg" : w ? `~${fmt(0.06 * w)} g (25–50 mg/kg)` : "25–50 mg/kg"
  }), /*#__PURE__*/React.createElement(Step, {
    trigger: el ? "3. Καθυστέρηση έναρξης (EXTEM CT >80s, φυσιολ. FIBTEM)" : "3. Delayed initiation (EXTEM CT >80s, normal FIBTEM)",
    action: el ? "PCC ή FFP (έλλειψη παραγόντων)" : "PCC or FFP (factor deficiency)",
    dose: el ? "PCC 20–25 U/kg ή FFP 15 mL/kg" : "PCC 20–25 U/kg or FFP 15 mL/kg"
  }), /*#__PURE__*/React.createElement(Step, {
    trigger: el ? "4. Χαμηλός θρόμβος με φυσιολ. FIBTEM (EXTEM A5 ↓, FIBTEM ok)" : "4. Weak clot, normal FIBTEM (EXTEM A5 ↓, FIBTEM ok)",
    action: el ? "Αιμοπετάλια (στόχος >50, >100 σε ΚΝΣ/πολυτραυματία)" : "Platelets (target >50, >100 if CNS/polytrauma)",
    dose: "1 pool"
  }), /*#__PURE__*/React.createElement(Step, {
    trigger: el ? "5. INTEM-CT ↑ & HEPTEM φυσιολογικό" : "5. INTEM-CT ↑ & HEPTEM normal",
    action: el ? "Υπολειπόμενη ηπαρίνη → πρωταμίνη" : "Residual heparin → protamine",
    dose: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.45
    }
  }, el ? "Ακολουθεί τη λογική των ESAIC/European trauma (2023) αλγορίθμων. Συνδυάστε με το πρωτόκολλο μαζικής αιμορραγίας (Εργαλεία → Κρίσεις). Τα κατώφλια/δόσεις ποικίλλουν ανά ίδρυμα — επιβεβαιώστε τοπικά." : "Follows ESAIC/European trauma (2023) algorithm logic. Combine with massive haemorrhage protocol (Tools → Crises). Thresholds/doses vary by institution — confirm locally.")));
}

// ============ NEURAXIAL & REGIONAL (typical doses/volumes) ============
function NeuraxialCard({
  lang,
  weight
}) {
  const el = lang === "el";
  const w = parseFloat(weight) || 0;
  const SectionLabel = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      color: S.teal,
      letterSpacing: 0.2,
      marginTop: 6
    }
  }, children);
  const Row = ({
    l,
    v,
    hint
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 8,
      background: S.bg,
      borderRadius: 10,
      padding: "8px 12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: S.ink
    }
  }, l, hint && /*#__PURE__*/React.createElement("span", {
    style: {
      color: S.muted,
      fontSize: 11.5
    }
  }, " · ", hint)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 14,
      color: S.teal,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      textAlign: "right"
    }
  }, v));
  const blocks = [{
    el: "Διασκαληνικός",
    en: "Interscalene",
    v: "10–15 mL",
    hint: el ? "ώμος · φρενικό 100%" : "shoulder · phrenic 100%"
  }, {
    el: "Υπερκλείδιος",
    en: "Supraclavicular",
    v: "20–25 mL",
    hint: el ? "άνω άκρο · pneumo κίνδυνος" : "upper limb · PTX risk"
  }, {
    el: "Μασχαλιαίος",
    en: "Axillary",
    v: "20–30 mL",
    hint: el ? "αντιβράχιο/χέρι" : "forearm/hand"
  }, {
    el: "Μηριαίος",
    en: "Femoral",
    v: "15–20 mL",
    hint: el ? "μηρός/γόνατο · πτώσεις" : "thigh/knee · falls"
  }, {
    el: "Adductor canal",
    en: "Adductor canal",
    v: "10–20 mL",
    hint: el ? "γόνατο · motor-sparing" : "knee · motor-sparing"
  }, {
    el: "Ισχιακός (ιγνυακός)",
    en: "Popliteal sciatic",
    v: "20–30 mL",
    hint: el ? "κάτω κνήμη/άκρο πόδι" : "leg/foot"
  }, {
    el: "TAP",
    en: "TAP",
    v: el ? "15–20 mL/πλευρά" : "15–20 mL/side",
    hint: el ? "κοιλιακό τοίχωμα" : "abdominal wall"
  }, {
    el: "ESP",
    en: "ESP",
    v: "20–30 mL",
    hint: el ? "θωρακ./κοιλιακή αναλγησία" : "thoracic/abdominal analgesia"
  }, {
    el: "Rectus sheath",
    en: "Rectus sheath",
    v: el ? "15–20 mL/πλευρά" : "15–20 mL/side",
    hint: el ? "μέση γραμμή" : "midline"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Ραχιαία (υπέρβαρη βουπιβακαΐνη 0.5%)" : "Spinal (hyperbaric bupivacaine 0.5%)"), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Κάτω κοιλία / ΚΤ" : "Lower abdomen / CS",
    v: "10–12.5 mg",
    hint: "2–2.5 mL"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Κάτω άκρο / TURP" : "Lower limb / TURP",
    v: "10–15 mg",
    hint: "2–3 mL"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Saddle (περινεϊκό)" : "Saddle (perineal)",
    v: "5–7.5 mg",
    hint: el ? "1–1.5 mL καθιστός" : "1–1.5 mL sitting"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "+ Fentanyl" : "+ Fentanyl",
    v: "10–25 µg",
    hint: el ? "βελτιώνει ποιότητα" : "improves quality"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "+ Μορφίνη (ΚΤ/μείζων)" : "+ Morphine (CS/major)",
    v: "100–150 µg",
    hint: el ? "24h αναλγησία · monitoring" : "24h analgesia · monitoring"
  }), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Επισκληρίδιος" : "Epidural"), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Test dose" : "Test dose",
    v: "3 mL",
    hint: el ? "λιδοκαΐνη 1.5% + αδρ 1:200.000" : "lidocaine 1.5% + adr 1:200,000"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Φόρτιση (χειρουργική)" : "Loading (surgical)",
    v: "10–20 mL",
    hint: el ? "ροπι 0.5–0.75% / βουπι 0.25–0.5% · κλασματικά ανά 5 mL" : "ropi 0.5–0.75% / bupi 0.25–0.5% · 5 mL aliquots"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Έγχυση (μετεγχ.)" : "Infusion (postop)",
    v: "6–12 mL/h",
    hint: el ? "ροπι 0.2% ή βουπι 0.1–0.125% + fent 2 µg/mL" : "ropi 0.2% or bupi 0.1–0.125% + fent 2 µg/mL"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Τοκετός (έγχυση)" : "Labour (infusion)",
    v: "8–12 mL/h",
    hint: el ? "βουπι 0.0625–0.1% + fent 2 µg/mL" : "bupi 0.0625–0.1% + fent 2 µg/mL"
  }), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Συχνοί περιφερικοί αποκλεισμοί (US)" : "Common peripheral blocks (US)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: S.muted,
      marginBottom: 2
    }
  }, el ? "Τυπικά: ροπιβακαΐνη 0.375–0.5% ή βουπι/λεβοβουπι 0.25% — εντός max δόσης." : "Typical: ropivacaine 0.375–0.5% or (levo)bupivacaine 0.25% — within max dose."), blocks.map((b, i) => /*#__PURE__*/React.createElement(Row, {
    key: i,
    l: el ? b.el : b.en,
    v: b.v,
    hint: b.hint
  })), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Μέγιστες δόσεις ΤΑ" : "LA max doses", w ? ` — ${fmt(w)} kg` : ""), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ροπιβακαΐνη" : "Ropivacaine",
    v: w ? `${fmt(Math.min(3 * w, 225))} mg` : "3 mg/kg",
    hint: w ? `= ${fmt(Math.min(3 * w, 225) / 5)} mL 0.5%` : "max 225 mg"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "(Λεβο)βουπιβακαΐνη" : "(Levo)bupivacaine",
    v: w ? `${fmt(Math.min(2 * w, 150))} mg` : "2 mg/kg",
    hint: w ? `= ${fmt(Math.min(2 * w, 150) / 2.5)} mL 0.25%` : "max 150 mg"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Λιδοκαΐνη (+αδρ)" : "Lidocaine (+adr)",
    v: w ? `${fmt(Math.min(4.5 * w, 300))} / ${fmt(Math.min(7 * w, 500))} mg` : "4.5 / 7 mg/kg",
    hint: el ? "χωρίς / με αδρεναλίνη" : "plain / with adrenaline"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.45
    }
  }, el ? "Αναρρόφηση προ έγχυσης, κλασματική χορήγηση, US καθοδήγηση. Intralipid & LAST αλγόριθμος: Εργαλεία → Κρίσεις. Αντιπηκτικά & νευραξονική: Εργαλεία → ASRA. Μείωση δόσεων σε ηλικιωμένους/εγκύους/καχεκτικούς." : "Aspirate before injection, incremental dosing, US guidance. Intralipid & LAST algorithm: Tools → Crises. Anticoagulants & neuraxial: Tools → ASRA. Reduce doses in elderly/pregnant/frail."));
}

// ============ AGE-ADJUSTED MAC (Nickalls/Mapleson; meta-regression 6.47%/decade) ============
function MACCard({
  lang,
  age
}) {
  const el = lang === "el";
  const a = parseFloat(age) || 0;
  // MAC(age) = MAC40 × 10^(−0.00269 × (age − 40))  → 6.47%/decade decline
  const factor = a > 0 ? Math.pow(10, -0.00269 * (a - 40)) : 1;
  const agents = [{
    name: "Sevoflurane",
    mac40: 2.03,
    key: "sevo"
  }, {
    name: "Desflurane",
    mac40: 6.44,
    key: "des"
  }, {
    name: "Isoflurane",
    mac40: 1.16,
    key: "iso"
  }];
  const fmtPct = n => (Math.round(n * 100) / 100).toFixed(2);
  const SectionLabel = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      color: S.teal,
      letterSpacing: 0.2,
      marginTop: 6
    }
  }, children);
  const Row = ({
    l,
    v,
    hint
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 8,
      background: S.bg,
      borderRadius: 10,
      padding: "8px 12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: S.ink
    }
  }, l, hint && /*#__PURE__*/React.createElement("span", {
    style: {
      color: S.muted,
      fontSize: 11.5
    }
  }, " · ", hint)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 14.5,
      color: S.teal,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }
  }, v));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, !a ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: S.amber,
      fontWeight: 600
    }
  }, "⚖ ", el ? "Εισάγετε ηλικία στην μπάρα ασθενούς για MAC κατά ηλικία (αλλιώς εμφανίζεται MAC στα 40 έτη)." : "Enter age in the patient bar for age-adjusted MAC (otherwise MAC at age 40 shown).") : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: S.muted
    }
  }, el ? `Προσαρμογή για ηλικία ${fmt(a)} ετών (−6.47%/δεκαετία).` : `Adjusted for age ${fmt(a)} y (−6.47%/decade).`), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "1.0 MAC (χωρίς N₂O)" : "1.0 MAC (without N₂O)"), agents.map(ag => /*#__PURE__*/React.createElement(Row, {
    key: ag.key,
    l: el ? ag.name : ag.name,
    v: `${fmtPct(ag.mac40 * factor)} %`,
    hint: `MAC₄₀ ${ag.mac40}%`
  })), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Χρήσιμα κλάσματα MAC" : "Useful MAC fractions"), agents.map(ag => /*#__PURE__*/React.createElement(Row, {
    key: ag.key + "f",
    l: ag.name,
    v: `${fmtPct(0.7 * ag.mac40 * factor)} / ${fmtPct(1.3 * ag.mac40 * factor)} %`,
    hint: el ? "0.7 / 1.3 MAC" : "0.7 / 1.3 MAC"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.45,
      marginTop: 2
    }
  }, el ? "MAC-awake ≈ 0.3–0.4 MAC · MAC-BAR (απόσβεση συμπαθητικής) ≈ 1.5–2 MAC · MAC-intubation (σεβοφλ.) ≈ 1.3× ενήλικες. Το N₂O 50–67% μειώνει την απαιτούμενη συγκέντρωση πτητικού (αθροιστικό MAC). Παιδιά: MAC υψηλότερο (κορύφωση βρεφική ηλικία). Επιβεβαιώστε με end-tidal & κλινική εικόνα." : "MAC-awake ≈ 0.3–0.4 MAC · MAC-BAR (blunts sympathetic) ≈ 1.5–2 MAC · MAC-intubation (sevo) ≈ 1.3× adult. N₂O 50–67% reduces required volatile (additive MAC). Children: higher MAC (peaks in infancy). Confirm with end-tidal & clinical signs."));
}

// ============ QUICK CALCULATORS (electrolytes) ============
function QuickCalcCard({
  lang,
  weight
}) {
  const el = lang === "el";
  const w = parseFloat(weight) || 0;
  const SectionLabel = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      color: S.teal,
      letterSpacing: 0.2,
      marginTop: 6
    }
  }, children);
  const Row = ({
    l,
    v,
    hint,
    warn
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 8,
      background: S.bg,
      borderRadius: 10,
      padding: "8px 12px",
      boxShadow: warn ? `inset 0 0 0 1.5px ${S.amber}` : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: S.ink
    }
  }, l, hint && /*#__PURE__*/React.createElement("span", {
    style: {
      color: S.muted,
      fontSize: 11.5
    }
  }, " · ", hint)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 14.5,
      color: warn ? S.amber : S.teal,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }
  }, v));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: S.muted,
      lineHeight: 1.4
    }
  }, el ? "Για αναστροφή νευρομυϊκού αποκλεισμού: Φάρμακα → Αναστροφή (sugammadex / νεοστιγμίνη)." : "For neuromuscular reversal: Meds → Reversal (sugammadex / neostigmine)."), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Κάλιο (K⁺)" : "Potassium (K⁺)"), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ρυθμός (περιφερική)" : "Rate (peripheral)",
    v: el ? "≤ 10 mmol/h" : "≤ 10 mmol/h",
    hint: el ? "≤ 40 mmol/L διάλυμα" : "≤ 40 mmol/L solution"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ρυθμός (κεντρική + monitor)" : "Rate (central + monitor)",
    v: el ? "≤ 20 mmol/h" : "≤ 20 mmol/h",
    warn: true,
    hint: el ? "ΗΚΓ παρακολούθηση" : "ECG monitoring"
  }), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Μαγνήσιο (Mg²⁺)" : "Magnesium (Mg²⁺)"), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Υπομαγνησιαιμία" : "Hypomagnesaemia",
    v: "2 g (8 mmol)",
    hint: el ? "σε 15–30 min" : "over 15–30 min"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Torsades / σοβαρή" : "Torsades / severe",
    v: "2 g",
    hint: el ? "IV bolus, μετά έγχυση" : "IV bolus, then infusion",
    warn: true
  }), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Ασβέστιο (Ca²⁺)" : "Calcium (Ca²⁺)"), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ασβεστίου γλυκονικό 10%" : "Calcium gluconate 10%",
    v: "10 mL",
    hint: el ? "= 2.3 mmol · σε 10 min" : "= 2.3 mmol · over 10 min"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ασβεστίου χλωριούχο 10%" : "Calcium chloride 10%",
    v: "10 mL",
    hint: el ? "= 6.8 mmol · κεντρικά προτιμ." : "= 6.8 mmol · prefer central"
  }), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Νάτριο (Na⁺) — ΠΡΟΣΟΧΗ" : "Sodium (Na⁺) — CAUTION"), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Μέγιστη διόρθωση/24h" : "Max correction/24h",
    v: el ? "≤ 8–10 mmol/L" : "≤ 8–10 mmol/L",
    warn: true,
    hint: el ? "κίνδυνος ODS/κεντρ. απομυελίνωσης" : "ODS/osmotic demyelination risk"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Συμπτωματική υπονατριαιμία" : "Symptomatic hyponatraemia",
    v: el ? "NaCl 3% 150 mL" : "3% NaCl 150 mL",
    hint: el ? "σε 10 min, ×2–3, στόχος +4–6 mmol/L" : "over 10 min, ×2–3, aim +4–6 mmol/L"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.4
    }
  }, el ? "Ρυθμοί ασφαλείας — προσαρμογή στο κλινικό πλαίσιο & εργαστήριο. Νάτριο: υπερβολικά ταχεία διόρθωση = κίνδυνος μόνιμης νευρολογικής βλάβης." : "Safety rates — adjust to clinical context & labs. Sodium: over-rapid correction risks permanent neurological injury."));
}

// ============ BARIATRIC / OBESITY (AAGBI 2015 + SOBA 2022) ============
function BariatricCard({
  lang,
  weight,
  height,
  sex
}) {
  const el = lang === "el";
  const w = parseFloat(weight) || 0; // TBW
  const h = parseFloat(height) || 0;

  // SOBA specifies IBW via Broca; ABW = IBW + 40% excess
  const ibwBroca = h ? sex === "M" ? h - 100 : h - 105 : null;
  const abwKg = w && ibwBroca ? ibwBroca + 0.4 * (w - ibwBroca) : null;
  const lbm = w && h ? lbmJames(w, h, sex) : null;
  const bmi = bmiCalc(w, h);
  const bmiClass = bmi == null ? null : bmi < 30 ? el ? "< 30" : "< 30" : bmi < 35 ? "Class I (30–35)" : bmi < 40 ? "Class II (35–40)" : bmi < 50 ? "Class III (40–50)" : el ? "Υπερ-παχυσαρκία (≥ 50)" : "Super-obese (≥ 50)";
  const Row = ({
    l,
    v,
    hint,
    warn
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 8,
      background: S.bg,
      borderRadius: 10,
      padding: "8px 12px",
      boxShadow: warn ? `inset 0 0 0 1.5px ${S.amber}` : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: S.ink
    }
  }, l, hint && /*#__PURE__*/React.createElement("span", {
    style: {
      color: S.muted,
      fontSize: 11.5
    }
  }, " · ", hint)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 14.5,
      color: warn ? S.amber : S.teal,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }
  }, v));
  const SectionLabel = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      color: S.teal,
      letterSpacing: 0.2,
      marginTop: 6
    }
  }, children);
  // Which weight scalar for each drug class (SOBA 2022 single sheet)
  const scalars = [{
    grp: "LBW",
    color: "#3B8C6E",
    elLabel: "Άλιπο (LBW)",
    enLabel: "Lean (LBW)",
    drugsEl: "Προποφόλη (εισαγωγή), θειοπεντάλη, φαιντανύλη, μορφίνη, αλφεντανίλη, μη-αποπολωτικά NMBDs, παρακεταμόλη, τοπικά αναισθητικά",
    drugsEn: "Propofol (induction), thiopentone, fentanyl, morphine, alfentanil, non-depolarising NMBDs, paracetamol, local anaesthetics"
  }, {
    grp: "ABW",
    color: "#1E3A5F",
    elLabel: "Προσαρμοσμένο (ABW)",
    enLabel: "Adjusted (ABW)",
    drugsEl: "Προποφόλη (έγχυση/TIVA), νεοστιγμίνη, sugammadex, αντιβιοτικά",
    drugsEn: "Propofol (infusion/TIVA), neostigmine, sugammadex, antibiotics"
  }, {
    grp: "TBW",
    color: "#C9544B",
    elLabel: "Ολικό (TBW)",
    enLabel: "Total (TBW)",
    drugsEl: "Σουκινυλοχολίνη· LMWH (τιτλοποίηση σε anti-Xa)",
    drugsEn: "Suxamethonium; LMWH (titrate to anti-Xa)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Βάρη δοσολογίας" : "Dosing weights"), !h ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: S.amber,
      fontWeight: 600
    }
  }, "⚖ ", el ? "Εισάγετε ύψος & βάρος στην μπάρα ασθενούς για υπολογισμό" : "Enter height & weight in the patient bar to compute") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ολικό βάρος (TBW)" : "Total body weight (TBW)",
    v: `${fmt(w)} kg`
  }), /*#__PURE__*/React.createElement(Row, {
    l: "BMI",
    v: bmi ? `${fmt(bmi)} kg/m²` : "—",
    hint: bmiClass || undefined,
    warn: bmi && bmi >= 40
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Ιδανικό (IBW, Broca)" : "Ideal (IBW, Broca)",
    v: ibwBroca ? `${fmt(ibwBroca)} kg` : "—",
    hint: sex === "M" ? el ? "ύψος − 100" : "height − 100" : el ? "ύψος − 105" : "height − 105"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Προσαρμοσμένο (ABW)" : "Adjusted (ABW)",
    v: abwKg ? `${fmt(abwKg)} kg` : "—",
    hint: el ? "IBW + 40% πλεονάσματος" : "IBW + 40% excess"
  }), /*#__PURE__*/React.createElement(Row, {
    l: el ? "Άλιπο (LBM, James)" : "Lean (LBM, James)",
    v: lbm && lbm > 0 ? `${fmt(lbm)} kg` : "—"
  })), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Ποιο βάρος ανά φάρμακο (SOBA 2022)" : "Which weight per drug (SOBA 2022)"), scalars.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.grp,
    style: {
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 12,
      color: "#fff",
      background: s.color,
      borderRadius: 6,
      padding: "2px 7px"
    }
  }, s.grp), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 12.5,
      color: S.ink
    }
  }, el ? s.elLabel : s.enLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: S.muted,
      lineHeight: 1.4
    }
  }, el ? s.drugsEl : s.drugsEn))), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Εκτίμηση κινδύνου" : "Risk stratification"), /*#__PURE__*/React.createElement(Row, {
    l: "STOP-BANG",
    v: el ? "≥ 5 σημαντικό" : "≥ 5 significant",
    hint: el ? "διαταραχή ύπνου/OSA — βλ. Κλίμακες" : "sleep-disordered breathing/OSA — see Scores"
  }), /*#__PURE__*/React.createElement(Row, {
    l: "OS-MRS",
    v: el ? "θνητότητα" : "mortality",
    hint: el ? "Obesity Surgery Mortality Risk Score" : "Obesity Surgery Mortality Risk Score"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: S.muted,
      lineHeight: 1.45
    }
  }, el ? "Κίνδυνο φέρουν κυρίως η κεντρική παχυσαρκία & το μεταβολικό σύνδρομο, όχι η μεμονωμένη ακραία παχυσαρκία. Σοβαρή OSA σε 10–20% με BMI > 35, συχνά αδιάγνωστη." : "Risk is driven by central obesity & metabolic syndrome, not isolated extreme obesity. Severe OSA in 10–20% with BMI > 35, often undiagnosed."), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Αεραγωγός & Εισαγωγή" : "Airway & Induction"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: S.ink,
      lineHeight: 1.5,
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, el ? "Θέση ramped/25° κεφαλή-πάνω. Προοξυγόνωση με CPAP/PEEP· HFNO ως apnoeic oxygenation (όχι υποκατάστατο). Ταχεία αποκορεσμός — στιβαρή στρατηγική αεραγωγού & σχέδιο εφεδρείας. Ποσοτική νευρομυϊκή παρακολούθηση πάντα. Πλήρης αναστροφή & αφύπνιση/κεφαλή-πάνω πριν την αποσωλήνωση. Depth-of-anaesthesia monitoring με TIVA+NMBDs." : "Ramped/25° head-up. Preoxygenate with CPAP/PEEP; HFNO as apnoeic oxygenation (not a substitute). Rapid desaturation — robust airway strategy & backup plan. Quantitative NMB monitoring always. Full reversal & awake/head-up before extubation. Depth-of-anaesthesia monitoring with TIVA+NMBDs."), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Θρομβοπροφύλαξη (VTE)" : "VTE prophylaxis"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: S.ink,
      lineHeight: 1.5,
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, el ? "Φαρμακευτική με LMWH σε βάρος-ζώνες (π.χ. ενοξαπαρίνη 40 mg ημερησίως στα 50–100 kg, έως 60 mg ×2 πάνω από 150 kg), τιτλοποίηση σε anti-Xa. Μηχανική προφύλαξη + πρώιμη κινητοποίηση. Προσοχή σε ραβδομυόλυση (πόνος γλουτών, ↑CK)." : "Pharmacological LMWH by weight bands (e.g. enoxaparin 40 mg od at 50–100 kg, up to 60 mg bd above 150 kg), titrate to anti-Xa. Mechanical prophylaxis + early mobilisation. Watch for rhabdomyolysis (buttock pain, ↑CK)."), /*#__PURE__*/React.createElement(SectionLabel, null, el ? "Μετεγχειρητικά" : "Postoperative"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: S.ink,
      lineHeight: 1.5,
      background: S.bg,
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, el ? "Ανάνηψη 45° καθιστή, O₂ έως κινητοποίηση, επανέναρξη οικείου CPAP, αποφυγή IM οδού, προσεκτική χρήση PCA. Αν χρειάζονται μακράς δράσης οπιοειδή & ο ασθενής δεν είναι σε CPAP προεγχειρητικά → φροντίδα επιπέδου 2. Gastric band: τραχειοσωλήνας πάντα (κίνδυνος εισρόφησης)· αιφνίδια δυσφαγία/πόνος = ολίσθηση band." : "45° sitting recovery, O₂ until mobile, reinstate home CPAP, avoid IM route, cautious PCA. If long-acting opioids needed & not on CPAP pre-op → level-2 care. Gastric band: tracheal tube in all (aspiration risk); sudden dysphagia/pain = band slippage until proven otherwise."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: S.muted,
      lineHeight: 1.45,
      marginTop: 2
    }
  }, el ? "AAGBI/SOBA 2015 (parent) + SOBA UK 2022 single sheet. IBW κατά Broca όπως στο SOBA sheet (διαφέρει από Devine αλλού στην εφαρμογή). Επαληθεύστε τοπικά πρωτόκολλα." : "AAGBI/SOBA 2015 (parent) + SOBA UK 2022 single sheet. IBW via Broca as on the SOBA sheet (differs from Devine used elsewhere in the app). Verify local protocols."));
}
function ToolsTab({
  lang,
  weight,
  age,
  height,
  sex
}) {
  const [open, setOpen] = useState("scores");
  const patient = {
    w: parseFloat(weight) || 0,
    a: parseFloat(age) || 0,
    s: sex,
    bmi: bmiCalc(parseFloat(weight) || 0, parseFloat(height) || 0)
  };
  const sections = [{
    id: "scores",
    el: "Κλίμακες κινδύνου",
    en: "Risk scores",
    icon: "📊"
  }, {
    id: "crisis",
    el: "Κρίσεις — Αλγόριθμοι",
    en: "Crises — Algorithms",
    icon: "🚨"
  }, {
    id: "periop",
    el: "Περιεγχειρητική ιατρική",
    en: "Perioperative medicine",
    icon: "🫀"
  }, {
    id: "quickcalc",
    el: "Γρήγοροι υπολογιστές",
    en: "Quick calculators",
    icon: "🧮"
  }, {
    id: "mac",
    el: "MAC πτητικών (κατά ηλικία)",
    en: "Volatile MAC (age-adjusted)",
    icon: "💨"
  }, {
    id: "postop",
    el: "Οξεία μετεγχειρητική αναλγησία",
    en: "Acute postop analgesia",
    icon: "💉"
  }, {
    id: "neuraxial",
    el: "Νευραξονική & Περιοχική",
    en: "Neuraxial & Regional",
    icon: "🎯"
  }, {
    id: "rotem",
    el: "ROTEM / TEG (ερμηνεία)",
    en: "ROTEM / TEG (interpretation)",
    icon: "🩸"
  }, {
    id: "guidelines",
    el: "Κατευθυντήριες",
    en: "Guidelines",
    icon: "📖"
  }, {
    id: "vent",
    el: "Αερισμός & Μηχανική πνεύμονα",
    en: "Ventilation & Lung mechanics",
    icon: "🫁"
  }, {
    id: "bariatric",
    el: "Βαριατρικός / Παχύσαρκος ασθενής",
    en: "Bariatric / Obese patient",
    icon: "⚖️"
  }, {
    id: "vaso",
    el: "Έγχυση αγγειοσυσπαστικών",
    en: "Vasopressor infusions",
    icon: "💉"
  }, {
    id: "anticoag",
    el: "Αντιπηκτικά & Νευραξονικός",
    en: "Anticoagulants & Neuraxial",
    icon: "🩸"
  }, {
    id: "fluids",
    el: "Υγρά & Αίμα (περιεγχειρητικά)",
    en: "Fluids & Blood (periop)",
    icon: "💧"
  }, {
    id: "abx",
    el: "Αντιβιοτική προφύλαξη",
    en: "Antibiotic prophylaxis",
    icon: "🧫"
  }, {
    id: "la",
    el: "Όρια τοπικών αναισθητικών",
    en: "Local anesthetic limits",
    icon: "🧴"
  }, {
    id: "csht",
    el: "Context-Sensitive Half-Time",
    en: "Context-Sensitive Half-Time",
    icon: "⏱"
  }, {
    id: "refs",
    el: "Πηγές & Βιβλιογραφία",
    en: "Sources & References",
    icon: "📚"
  }];
  const [scoreOpen, setScoreOpen] = useState("apfel");
  const allScores = [...SCORES, ...MULTI_SCORES];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, sections.map(sec => {
    const isOpen = open === sec.id;
    return /*#__PURE__*/React.createElement("div", {
      key: sec.id,
      style: {
        background: S.card,
        borderRadius: 14,
        border: `1.5px solid ${isOpen ? S.teal : S.line}`,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? null : sec.id),
      style: {
        width: "100%",
        padding: "14px",
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "inherit",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 17
      }
    }, sec.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 15.5,
        color: S.ink,
        flex: 1
      }
    }, sec[lang]), /*#__PURE__*/React.createElement("span", {
      style: {
        color: S.muted,
        fontSize: 18,
        transform: isOpen ? "rotate(90deg)" : "none",
        transition: "transform .15s"
      }
    }, "›")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 14px 14px"
      }
    }, sec.id === "scores" && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 5,
        flexWrap: "wrap"
      }
    }, allScores.map(sc => /*#__PURE__*/React.createElement("button", {
      key: sc.id,
      onClick: () => setScoreOpen(sc.id),
      style: {
        flex: "1 1 28%",
        padding: "7px 4px",
        borderRadius: 9,
        border: "none",
        fontSize: 11.5,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "inherit",
        background: scoreOpen === sc.id ? S.ink : S.bg,
        color: scoreOpen === sc.id ? "#fff" : S.muted
      }
    }, sc.name))), SCORES.filter(sc => sc.id === scoreOpen).map(sc => /*#__PURE__*/React.createElement(ScoreCard, {
      key: `${sc.id}-${weight}-${age}-${sex}-${height}`,
      sc: sc,
      lang: lang,
      patient: patient
    })), MULTI_SCORES.filter(sc => sc.id === scoreOpen).map(sc => /*#__PURE__*/React.createElement(MultiScoreCard, {
      key: sc.id,
      sc: sc,
      lang: lang
    }))), sec.id === "guidelines" && /*#__PURE__*/React.createElement(GuidelinesList, {
      lang: lang
    }), sec.id === "crisis" && /*#__PURE__*/React.createElement(CrisisCard, {
      lang: lang,
      weight: weight
    }), sec.id === "periop" && /*#__PURE__*/React.createElement(PeriopMedCard, {
      lang: lang
    }), sec.id === "quickcalc" && /*#__PURE__*/React.createElement(QuickCalcCard, {
      lang: lang,
      weight: weight
    }), sec.id === "mac" && /*#__PURE__*/React.createElement(MACCard, {
      lang: lang,
      age: age
    }), sec.id === "postop" && /*#__PURE__*/React.createElement(PostopAnalgesiaCard, {
      lang: lang,
      weight: weight
    }), sec.id === "neuraxial" && /*#__PURE__*/React.createElement(NeuraxialCard, {
      lang: lang,
      weight: weight
    }), sec.id === "rotem" && /*#__PURE__*/React.createElement(ROTEMCard, {
      lang: lang,
      weight: weight
    }), sec.id === "refs" && /*#__PURE__*/React.createElement(ReferencesCard, {
      lang: lang
    }), sec.id === "vent" && /*#__PURE__*/React.createElement(VentilationCalc, {
      lang: lang,
      height: height,
      sex: sex
    }), sec.id === "bariatric" && /*#__PURE__*/React.createElement(BariatricCard, {
      lang: lang,
      weight: weight,
      height: height,
      sex: sex
    }), sec.id === "vaso" && /*#__PURE__*/React.createElement(VasopressorCalc, {
      lang: lang,
      weight: weight
    }), sec.id === "anticoag" && /*#__PURE__*/React.createElement(AnticoagList, {
      lang: lang
    }), sec.id === "fluids" && /*#__PURE__*/React.createElement(FluidsCalc, {
      lang: lang,
      weight: weight,
      age: age,
      sex: sex
    }), sec.id === "abx" && /*#__PURE__*/React.createElement(AbxList, {
      lang: lang,
      weight: weight
    }), sec.id === "la" && /*#__PURE__*/React.createElement(LACalc, {
      lang: lang,
      weight: weight
    }), sec.id === "csht" && /*#__PURE__*/React.createElement(CSHTCalc, {
      lang: lang
    })));
  }));
}

// ============ MAIN APP ============
function AnesthesiaAssistant() {
  useEffect(() => {
    if (document.getElementById("commissioner-font")) return;
    const l = document.createElement("link");
    l.id = "commissioner-font";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Commissioner:wght@400;600;700;800&display=swap&subset=greek,latin";
    document.head.appendChild(l);
  }, []);
  const [lang, setLang] = useState(() => storeGet("aa_lang") || "el");
  const [tab, setTab] = useState("meds");
  const [accepted, setAccepted] = useState(() => storeGet("aa_disclaimer_ok") === true);
  // Patient data persists for 1h (same-case convenience), then clears automatically
  const [weight, setWeight] = useState(() => (storeGet("aa_patient") || {}).w || "");
  const [age, setAge] = useState(() => (storeGet("aa_patient") || {}).a || "");
  const [height, setHeight] = useState(() => (storeGet("aa_patient") || {}).h || "");
  const [sex, setSex] = useState(() => (storeGet("aa_patient") || {}).s || "M");
  useEffect(() => {
    if (weight || age || height) {
      storeSet("aa_patient", {
        w: weight,
        a: age,
        h: height,
        s: sex
      }, PATIENT_TTL);
    } else {
      storeDel("aa_patient");
    }
  }, [weight, age, height, sex]);
  useEffect(() => {
    storeSet("aa_lang", lang);
  }, [lang]);
  const t = T[lang];
  const tabs = [{
    id: "meds",
    icon: "💊"
  }, {
    id: "tci",
    icon: "📉"
  }, {
    id: "tools",
    icon: "🧮"
  }, {
    id: "peds",
    icon: "🧒"
  }, {
    id: "ai",
    icon: "🧠"
  }, {
    id: "lists",
    icon: "🚨"
  }];

  // First-run disclaimer gate
  if (!accepted) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Commissioner', 'Segoe UI', system-ui, -apple-system, sans-serif",
        background: S.bg,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 20px",
        maxWidth: 560,
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: LOGO_DATA,
      alt: "",
      style: {
        width: 84,
        height: 84,
        borderRadius: 20,
        marginBottom: 16
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 900,
        fontSize: 20,
        color: S.ink,
        textAlign: "center",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: S.teal,
        fontStyle: "italic"
      }
    }, "Efstathia's"), " Anesthesia Assistant"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: S.card,
        borderRadius: 16,
        padding: "18px 18px",
        border: `1.5px solid ${S.line}`,
        marginTop: 16,
        boxShadow: "0 2px 10px rgba(20,37,63,.06)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 15,
        color: S.red,
        marginBottom: 8
      }
    }, lang === "el" ? "⚠ Σημαντική προειδοποίηση" : "⚠ Important notice"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: S.ink,
        lineHeight: 1.6
      }
    }, lang === "el" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Το εργαλείο αυτό προορίζεται ", /*#__PURE__*/React.createElement("strong", null, "αποκλειστικά για εξειδικευμένους επαγγελματίες υγείας"), " ως βοήθημα υποστήριξης απόφασης και εκπαίδευσης.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "Δεν υποκαθιστά την κλινική κρίση."), " Όλες οι δόσεις, οι υπολογισμοί και οι προτάσεις πρέπει να ", /*#__PURE__*/React.createElement("strong", null, "επαληθεύονται ανεξάρτητα"), " με έγκυρες πηγές και τα τοπικά πρωτόκολλα πριν από κάθε εφαρμογή σε ασθενή.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Ο δημιουργός δεν φέρει ευθύνη για οποιαδήποτε βλάβη προκύψει από τη χρήση του. Η ευθύνη κάθε κλινικής απόφασης παραμένει στον θεράποντα ιατρό.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: S.muted,
        fontSize: 12
      }
    }, "Μην εισάγετε αναγνωρίσιμα στοιχεία ασθενών (ονόματα, ΑΜΚΑ) — ειδικά στο AI.")) : /*#__PURE__*/React.createElement(React.Fragment, null, "This tool is intended ", /*#__PURE__*/React.createElement("strong", null, "solely for qualified healthcare professionals"), " as a decision-support and educational aid.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "It does not replace clinical judgement."), " All doses, calculations and suggestions must be ", /*#__PURE__*/React.createElement("strong", null, "independently verified"), " against authoritative sources and local protocols before any application to a patient.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "The author accepts no liability for any harm arising from its use. Responsibility for every clinical decision remains with the treating clinician.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: S.muted,
        fontSize: 12
      }
    }, "Do not enter identifiable patient data (names, IDs) — especially in the AI."))), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setAccepted(true);
        storeSet("aa_disclaimer_ok", true);
      },
      style: {
        width: "100%",
        marginTop: 16,
        padding: "13px",
        borderRadius: 12,
        border: "none",
        background: S.teal,
        color: "#fff",
        fontWeight: 800,
        fontSize: 15,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, lang === "el" ? "Κατανοώ & Αποδέχομαι" : "I understand & accept"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setLang(lang === "el" ? "en" : "el"),
      style: {
        width: "100%",
        marginTop: 8,
        padding: "8px",
        borderRadius: 10,
        border: "none",
        background: "transparent",
        color: S.muted,
        fontWeight: 700,
        fontSize: 13,
        cursor: "pointer",
        fontFamily: "inherit"
      }
    }, lang === "el" ? "English" : "Ελληνικά")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Commissioner', 'Segoe UI', system-ui, -apple-system, sans-serif",
      background: S.bg,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      maxWidth: 560,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px 10px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO_DATA,
    alt: "",
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      flexShrink: 0,
      boxShadow: "0 1px 4px rgba(20,37,63,.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 16.5,
      color: S.ink,
      letterSpacing: -0.3,
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: S.teal,
      fontStyle: "italic"
    }
  }, "Efstathia’s"), " Anesthesia Assistant")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLang(lang === "el" ? "en" : "el"),
    style: {
      padding: "5px 12px",
      borderRadius: 99,
      border: `1.5px solid ${S.line}`,
      background: "#fff",
      fontWeight: 700,
      fontSize: 13,
      color: S.teal,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, lang === "el" ? "EN" : "ΕΛ")), /*#__PURE__*/React.createElement(PatientBar, {
    lang: lang,
    weight: weight,
    setWeight: setWeight,
    age: age,
    setAge: setAge,
    height: height,
    setHeight: setHeight,
    sex: sex,
    setSex: setSex
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "4px 16px 16px",
      overflowY: "auto"
    }
  }, tab === "meds" && /*#__PURE__*/React.createElement(MedsTab, {
    lang: lang,
    weight: weight
  }), tab === "tci" && /*#__PURE__*/React.createElement(TCITab, {
    lang: lang,
    weight: weight,
    age: age,
    height: height,
    sex: sex
  }), tab === "tools" && /*#__PURE__*/React.createElement(ToolsTab, {
    lang: lang,
    weight: weight,
    age: age,
    height: height,
    sex: sex
  }), tab === "peds" && /*#__PURE__*/React.createElement(PedsCard, {
    lang: lang,
    weight: weight,
    age: age
  }), tab === "ai" && /*#__PURE__*/React.createElement(AssistantTab, {
    lang: lang,
    weight: weight,
    age: age,
    height: height,
    sex: sex
  }), tab === "lists" && /*#__PURE__*/React.createElement(ChecklistTab, {
    lang: lang
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 8px",
      fontSize: 11,
      color: S.muted,
      lineHeight: 1.4,
      textAlign: "center"
    }
  }, t.disclaimer), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 8px",
      fontSize: 10,
      color: S.muted,
      lineHeight: 1.5,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, lang === "el" ? "Δημιουργία: Dr Efstathia Pistioli" : "Created by Dr Efstathia Pistioli"), /*#__PURE__*/React.createElement("br", null), "© ", new Date().getFullYear(), " Dr Efstathia Pistioli. ", lang === "el" ? "Με επιφύλαξη παντός δικαιώματος." : "All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderTop: `1.5px solid ${S.line}`,
      background: "#fff",
      position: "sticky",
      bottom: 0
    }
  }, tabs.map(tb => /*#__PURE__*/React.createElement("button", {
    key: tb.id,
    onClick: () => setTab(tb.id),
    style: {
      flex: 1,
      padding: "8px 1px 10px",
      border: "none",
      background: "none",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
      fontFamily: "inherit",
      minWidth: 0,
      borderTop: tab === tb.id ? `2.5px solid ${S.teal}` : "2.5px solid transparent"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, tb.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: tab === tb.id ? S.teal : S.muted,
      whiteSpace: "nowrap"
    }
  }, t.tabs[tb.id])))));
}