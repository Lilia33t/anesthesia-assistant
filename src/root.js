function ToolsTab({ lang, weight, age, height, sex }) {
  const [open, setOpen] = useState("scores");
  const patient = {
    w: parseFloat(weight) || 0,
    a: parseFloat(age) || 0,
    s: sex,
    bmi: bmiCalc(parseFloat(weight) || 0, parseFloat(height) || 0)
  };
  const sections = [
    // Emergencies & scores
    { id: "crisis", group: "emergency", el: "\u039A\u03C1\u03AF\u03C3\u03B5\u03B9\u03C2 \u2014 \u0391\u03BB\u03B3\u03CC\u03C1\u03B9\u03B8\u03BC\u03BF\u03B9", en: "Crises \u2014 Algorithms", icon: "\u{1F6A8}" },
    { id: "scores", group: "emergency", el: "\u039A\u03BB\u03AF\u03BC\u03B1\u03BA\u03B5\u03C2 \u03BA\u03B9\u03BD\u03B4\u03CD\u03BD\u03BF\u03C5", en: "Risk scores", icon: "\u{1F4CA}" },
    { id: "rotem", group: "emergency", el: "ROTEM / TEG (\u03B5\u03C1\u03BC\u03B7\u03BD\u03B5\u03AF\u03B1)", en: "ROTEM / TEG (interpretation)", icon: "\u{1FA78}" },
    // Subspecialties
    { id: "cardiac", group: "subspecialty", el: "\u039A\u03B1\u03C1\u03B4\u03B9\u03BF\u03C7\u03B5\u03B9\u03C1\u03BF\u03C5\u03C1\u03B3\u03B9\u03BA\u03AE \u03B1\u03BD\u03B1\u03B9\u03C3\u03B8\u03B7\u03C3\u03AF\u03B1", en: "Cardiac anaesthesia", icon: "\u2764\uFE0F" },
    { id: "obstetric", group: "subspecialty", el: "\u039C\u03B1\u03B9\u03B5\u03C5\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03B1\u03B9\u03C3\u03B8\u03B7\u03C3\u03AF\u03B1", en: "Obstetric anaesthesia", icon: "\u{1F930}" },
    { id: "thoracic", group: "subspecialty", el: "\u0398\u03C9\u03C1\u03B1\u03BA\u03BF\u03C7\u03B5\u03B9\u03C1\u03BF\u03C5\u03C1\u03B3\u03B9\u03BA\u03AE \u03B1\u03BD\u03B1\u03B9\u03C3\u03B8\u03B7\u03C3\u03AF\u03B1", en: "Thoracic anaesthesia", icon: "\u{1FAC1}" },
    { id: "neuro", group: "subspecialty", el: "\u039D\u03B5\u03C5\u03C1\u03BF\u03B1\u03BD\u03B1\u03B9\u03C3\u03B8\u03B7\u03C3\u03AF\u03B1", en: "Neuroanaesthesia", icon: "\u{1F9E0}" },
    { id: "vascular", group: "subspecialty", el: "\u0391\u03B3\u03B3\u03B5\u03B9\u03BF\u03C7\u03B5\u03B9\u03C1\u03BF\u03C5\u03C1\u03B3\u03B9\u03BA\u03AE \u03B1\u03BD\u03B1\u03B9\u03C3\u03B8\u03B7\u03C3\u03AF\u03B1", en: "Vascular anaesthesia", icon: "\u{1FAC0}" },
    { id: "bariatric", group: "subspecialty", el: "\u0392\u03B1\u03C1\u03B9\u03B1\u03C4\u03C1\u03B9\u03BA\u03CC\u03C2 / \u03A0\u03B1\u03C7\u03CD\u03C3\u03B1\u03C1\u03BA\u03BF\u03C2 \u03B1\u03C3\u03B8\u03B5\u03BD\u03AE\u03C2", en: "Bariatric / Obese patient", icon: "\u2696\uFE0F" },
    // Analgesia & regional
    { id: "postop", group: "analgesia", el: "\u039F\u03BE\u03B5\u03AF\u03B1 \u03BC\u03B5\u03C4\u03B5\u03B3\u03C7\u03B5\u03B9\u03C1\u03B7\u03C4\u03B9\u03BA\u03AE \u03B1\u03BD\u03B1\u03BB\u03B3\u03B7\u03C3\u03AF\u03B1", en: "Acute postop analgesia", icon: "\u{1F489}" },
    { id: "neuraxial", group: "analgesia", el: "\u039D\u03B5\u03C5\u03C1\u03B1\u03BE\u03BF\u03BD\u03B9\u03BA\u03AE & \u03A0\u03B5\u03C1\u03B9\u03BF\u03C7\u03B9\u03BA\u03AE", en: "Neuraxial & Regional", icon: "\u{1F3AF}" },
    { id: "la", group: "analgesia", el: "\u038C\u03C1\u03B9\u03B1 \u03C4\u03BF\u03C0\u03B9\u03BA\u03CE\u03BD \u03B1\u03BD\u03B1\u03B9\u03C3\u03B8\u03B7\u03C4\u03B9\u03BA\u03CE\u03BD", en: "Local anesthetic limits", icon: "\u{1F9F4}" },
    { id: "anticoag", group: "analgesia", el: "\u0391\u03BD\u03C4\u03B9\u03C0\u03B7\u03BA\u03C4\u03B9\u03BA\u03AC & \u039D\u03B5\u03C5\u03C1\u03B1\u03BE\u03BF\u03BD\u03B9\u03BA\u03CC\u03C2", en: "Anticoagulants & Neuraxial", icon: "\u{1FA78}" },
    // Calculators & pharmacology
    { id: "tci", group: "calc", el: "TCI / \u03A3\u03C4\u03BF\u03C7\u03B5\u03C5\u03BC\u03AD\u03BD\u03B7 \u03AD\u03B3\u03C7\u03C5\u03C3\u03B7", en: "TCI / Target-controlled", icon: "\u{1F4C9}" },
    { id: "quickcalc", group: "calc", el: "\u0393\u03C1\u03AE\u03B3\u03BF\u03C1\u03BF\u03B9 \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03AD\u03C2", en: "Quick calculators", icon: "\u{1F9EE}" },
    { id: "mac", group: "calc", el: "MAC \u03C0\u03C4\u03B7\u03C4\u03B9\u03BA\u03CE\u03BD (\u03BA\u03B1\u03C4\u03AC \u03B7\u03BB\u03B9\u03BA\u03AF\u03B1)", en: "Volatile MAC (age-adjusted)", icon: "\u{1F4A8}" },
    { id: "vaso", group: "calc", el: "\u0388\u03B3\u03C7\u03C5\u03C3\u03B7 \u03B1\u03B3\u03B3\u03B5\u03B9\u03BF\u03C3\u03C5\u03C3\u03C0\u03B1\u03C3\u03C4\u03B9\u03BA\u03CE\u03BD", en: "Vasopressor infusions", icon: "\u{1F489}" },
    { id: "vent", group: "calc", el: "\u0391\u03B5\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 & \u039C\u03B7\u03C7\u03B1\u03BD\u03B9\u03BA\u03AE \u03C0\u03BD\u03B5\u03CD\u03BC\u03BF\u03BD\u03B1", en: "Ventilation & Lung mechanics", icon: "\u{1FAC1}" },
    { id: "tof", group: "calc", el: "TOF / \u039D\u03B5\u03C5\u03C1\u03BF\u03BC\u03C5\u03CA\u03BA\u03CC\u03C2 \u03B1\u03C0\u03BF\u03BA\u03BB\u03B5\u03B9\u03C3\u03BC\u03CC\u03C2", en: "TOF / Neuromuscular block", icon: "\u26A1" },
    { id: "opioid", group: "calc", el: "\u039C\u03B5\u03C4\u03B1\u03C4\u03C1\u03BF\u03C0\u03AE \u03BF\u03C0\u03B9\u03BF\u03B5\u03B9\u03B4\u03CE\u03BD", en: "Opioid conversion", icon: "\u{1F48A}" },
    { id: "fluids", group: "calc", el: "\u03A5\u03B3\u03C1\u03AC & \u0391\u03AF\u03BC\u03B1 (\u03C0\u03B5\u03C1\u03B9\u03B5\u03B3\u03C7\u03B5\u03B9\u03C1\u03B7\u03C4\u03B9\u03BA\u03AC)", en: "Fluids & Blood (periop)", icon: "\u{1F4A7}" },
    { id: "csht", group: "calc", el: "Context-Sensitive Half-Time", en: "Context-Sensitive Half-Time", icon: "\u23F1" },
    // Perioperative & reference
    { id: "periop", group: "reference", el: "\u03A0\u03B5\u03C1\u03B9\u03B5\u03B3\u03C7\u03B5\u03B9\u03C1\u03B7\u03C4\u03B9\u03BA\u03AE \u03B9\u03B1\u03C4\u03C1\u03B9\u03BA\u03AE", en: "Perioperative medicine", icon: "\u{1FAC0}" },
    { id: "abx", group: "reference", el: "\u0391\u03BD\u03C4\u03B9\u03B2\u03B9\u03BF\u03C4\u03B9\u03BA\u03AE \u03C0\u03C1\u03BF\u03C6\u03CD\u03BB\u03B1\u03BE\u03B7", en: "Antibiotic prophylaxis", icon: "\u{1F9EB}" },
    { id: "guidelines", group: "reference", el: "\u039A\u03B1\u03C4\u03B5\u03C5\u03B8\u03C5\u03BD\u03C4\u03AE\u03C1\u03B9\u03B5\u03C2", en: "Guidelines", icon: "\u{1F4D6}" },
    { id: "refs", group: "reference", el: "\u03A0\u03B7\u03B3\u03AD\u03C2 & \u0392\u03B9\u03B2\u03BB\u03B9\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B1", en: "Sources & References", icon: "\u{1F4DA}" }
  ];
  const GROUPS = [
    { id: "emergency", el: "\u0395\u03C0\u03B5\u03AF\u03B3\u03BF\u03BD\u03C4\u03B1 & \u039A\u03BB\u03AF\u03BC\u03B1\u03BA\u03B5\u03C2", en: "Emergencies & Scores" },
    { id: "subspecialty", el: "\u03A5\u03C0\u03BF\u03B5\u03B9\u03B4\u03B9\u03BA\u03CC\u03C4\u03B7\u03C4\u03B5\u03C2", en: "Subspecialties" },
    { id: "analgesia", el: "\u0391\u03BD\u03B1\u03BB\u03B3\u03B7\u03C3\u03AF\u03B1 & \u03A0\u03B5\u03C1\u03B9\u03BF\u03C7\u03B9\u03BA\u03AE", en: "Analgesia & Regional" },
    { id: "calc", el: "\u03A5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03AD\u03C2 & \u03A6\u03B1\u03C1\u03BC\u03B1\u03BA\u03BF\u03BB\u03BF\u03B3\u03AF\u03B1", en: "Calculators & Pharmacology" },
    { id: "reference", el: "\u03A0\u03B5\u03C1\u03B9\u03B5\u03B3\u03C7\u03B5\u03B9\u03C1\u03B7\u03C4\u03B9\u03BA\u03AC & \u03A0\u03B7\u03B3\u03AD\u03C2", en: "Perioperative & Reference" }
  ];
  const [scoreOpen, setScoreOpen] = useState("apfel");
  const allScores = [...SCORES, ...MULTI_SCORES];
  const [q, setQ] = useState("");
  const [favs, setFavs] = useState(() => storeGet("aa_tool_favs") || []);
  const toggleFav = (id, e) => {
    e.stopPropagation();
    const next = favs.includes(id) ? favs.filter((f) => f !== id) : [...favs, id];
    setFavs(next);
    storeSet("aa_tool_favs", next);
  };
  const query = q.trim().toLowerCase();
  const matches = (sec) => !query || sec.el.toLowerCase().includes(query) || sec.en.toLowerCase().includes(query);
  const favSections = sections.filter((s) => favs.includes(s.id));
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      value: q,
      onChange: (e) => setQ(e.target.value),
      placeholder: lang === "el" ? "\u{1F50D} \u0391\u03BD\u03B1\u03B6\u03AE\u03C4\u03B7\u03C3\u03B7 \u03B5\u03C1\u03B3\u03B1\u03BB\u03B5\u03AF\u03BF\u03C5\u2026" : "\u{1F50D} Search tools\u2026",
      style: { ...inputStyle, fontSize: 14.5, padding: "11px 36px 11px 13px" }
    }
  ), q && /* @__PURE__ */ React.createElement("button", { onClick: () => setQ(""), style: { position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", border: "none", background: "none", color: S.muted, fontWeight: 600, fontSize: 18, cursor: "pointer", fontFamily: "inherit" } }, "\xD7")), !query && favSections.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 800, fontSize: 12, color: S.muted, letterSpacing: 0.6, textTransform: "uppercase", padding: "4px 4px 0" } }, "\u2B50 ", lang === "el" ? "\u0391\u03B3\u03B1\u03C0\u03B7\u03BC\u03AD\u03BD\u03B1" : "Favourites"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } }, favSections.map((sec) => /* @__PURE__ */ React.createElement("button", { key: "fav-" + sec.id, onClick: () => setOpen(sec.id), style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 12px",
    borderRadius: 10,
    border: `1.5px solid ${open === sec.id ? S.teal : S.line}`,
    background: S.card,
    fontSize: 13,
    fontWeight: 700,
    color: S.ink,
    cursor: "pointer",
    fontFamily: "inherit"
  } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 15 } }, sec.icon), sec[lang])))), GROUPS.map((grp) => {
    const groupSecs = sections.filter((s) => s.group === grp.id && matches(s));
    if (groupSecs.length === 0) return null;
    return /* @__PURE__ */ React.createElement("div", { key: grp.id, style: { display: "flex", flexDirection: "column", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 800, fontSize: 12, color: S.muted, letterSpacing: 0.6, textTransform: "uppercase", padding: "4px 4px 0" } }, grp[lang]), groupSecs.map((sec) => {
      const isOpen = open === sec.id;
      const isFav = favs.includes(sec.id);
      return /* @__PURE__ */ React.createElement("div", { key: sec.id, style: { background: S.card, borderRadius: 14, border: `1.5px solid ${isOpen ? S.teal : S.line}`, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setOpen(isOpen ? null : sec.id), style: {
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
      } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 17 } }, sec.icon), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 700, fontSize: 15.5, color: S.ink, flex: 1 } }, sec[lang]), /* @__PURE__ */ React.createElement("span", { onClick: (e) => toggleFav(sec.id, e), style: { fontSize: 17, cursor: "pointer", color: isFav ? S.amber : S.line } }, "\u2605"), /* @__PURE__ */ React.createElement("span", { style: { color: S.muted, fontWeight: 600, fontSize: 18, transform: isOpen ? "rotate(90deg)" : "none", transition: "transform .15s" } }, "\u203A")), isOpen && /* @__PURE__ */ React.createElement("div", { style: { padding: "0 14px 14px" } }, sec.id === "scores" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5, flexWrap: "wrap" } }, allScores.map((sc) => /* @__PURE__ */ React.createElement("button", { key: sc.id, onClick: () => setScoreOpen(sc.id), style: {
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
      } }, sc.name))), SCORES.filter((sc) => sc.id === scoreOpen).map((sc) => /* @__PURE__ */ React.createElement(ScoreCard, { key: `${sc.id}-${weight}-${age}-${sex}-${height}`, sc, lang, patient })), MULTI_SCORES.filter((sc) => sc.id === scoreOpen).map((sc) => /* @__PURE__ */ React.createElement(MultiScoreCard, { key: sc.id, sc, lang }))), sec.id === "guidelines" && /* @__PURE__ */ React.createElement(GuidelinesList, { lang }), sec.id === "crisis" && /* @__PURE__ */ React.createElement(CrisisCard, { lang, weight }), sec.id === "periop" && /* @__PURE__ */ React.createElement(PeriopMedCard, { lang }), sec.id === "quickcalc" && /* @__PURE__ */ React.createElement(QuickCalcCard, { lang, weight }), sec.id === "mac" && /* @__PURE__ */ React.createElement(MACCard, { lang, age }), sec.id === "postop" && /* @__PURE__ */ React.createElement(PostopAnalgesiaCard, { lang, weight }), sec.id === "neuraxial" && /* @__PURE__ */ React.createElement(NeuraxialCard, { lang, weight }), sec.id === "rotem" && /* @__PURE__ */ React.createElement(ROTEMCard, { lang, weight }), sec.id === "cardiac" && /* @__PURE__ */ React.createElement(CardiacCard, { lang, weight }), sec.id === "obstetric" && /* @__PURE__ */ React.createElement(ObstetricCard, { lang, weight }), sec.id === "thoracic" && /* @__PURE__ */ React.createElement(ThoracicCard, { lang, weight }), sec.id === "refs" && /* @__PURE__ */ React.createElement(ReferencesCard, { lang }), sec.id === "vent" && /* @__PURE__ */ React.createElement(VentilationCalc, { lang, height, sex }), sec.id === "tof" && /* @__PURE__ */ React.createElement(TOFCard, { lang, weight }), sec.id === "opioid" && /* @__PURE__ */ React.createElement(OpioidConvertCard, { lang }), sec.id === "bariatric" && /* @__PURE__ */ React.createElement(BariatricCard, { lang, weight, height, sex }), sec.id === "vaso" && /* @__PURE__ */ React.createElement(VasopressorCalc, { lang, weight }), sec.id === "anticoag" && /* @__PURE__ */ React.createElement(AnticoagList, { lang }), sec.id === "fluids" && /* @__PURE__ */ React.createElement(FluidsCalc, { lang, weight, age, sex }), sec.id === "abx" && /* @__PURE__ */ React.createElement(AbxList, { lang, weight }), sec.id === "la" && /* @__PURE__ */ React.createElement(LACalc, { lang, weight }), sec.id === "csht" && /* @__PURE__ */ React.createElement(CSHTCalc, { lang }), sec.id === "neuro" && /* @__PURE__ */ React.createElement(NeuroCard, { lang, weight }), sec.id === "vascular" && /* @__PURE__ */ React.createElement(VascularCard, { lang, weight }), sec.id === "tci" && /* @__PURE__ */ React.createElement(TCITab, { lang, weight, age, height, sex })));
    }));
  }));
}
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
  const [weight, setWeight] = useState(() => (storeGet("aa_patient") || {}).w || "");
  const [age, setAge] = useState(() => (storeGet("aa_patient") || {}).a || "");
  const [height, setHeight] = useState(() => (storeGet("aa_patient") || {}).h || "");
  const [sex, setSex] = useState(() => (storeGet("aa_patient") || {}).s || "M");
  useEffect(() => {
    if (weight || age || height) {
      storeSet("aa_patient", { w: weight, a: age, h: height, s: sex }, PATIENT_TTL);
    } else {
      storeDel("aa_patient");
    }
  }, [weight, age, height, sex]);
  useEffect(() => {
    storeSet("aa_lang", lang);
  }, [lang]);
  const t = T[lang];
  const tabs = [
    { id: "meds", icon: "\u{1F48A}" },
    { id: "tools", icon: "\u{1F9EE}" },
    { id: "peds", icon: "\u{1F9D2}" },
    { id: "lists", icon: "\u{1F6A8}" }
  ];
  if (!accepted) {
    return /* @__PURE__ */ React.createElement("div", { style: {
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
    } }, /* @__PURE__ */ React.createElement("img", { src: LOGO_DATA, alt: "", style: { width: 84, height: 84, borderRadius: 20, marginBottom: 16 } }), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 900, fontSize: 20, color: S.ink, textAlign: "center", marginBottom: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { color: S.teal, fontStyle: "italic" } }, "Efstathia's"), " Anesthesia Assistant"), /* @__PURE__ */ React.createElement("div", { style: { background: S.card, borderRadius: 16, padding: "18px 18px", border: `1.5px solid ${S.line}`, marginTop: 16, boxShadow: "0 2px 10px rgba(20,37,63,.06)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 800, fontSize: 15, color: S.red, marginBottom: 8 } }, lang === "el" ? "\u26A0 \u03A3\u03B7\u03BC\u03B1\u03BD\u03C4\u03B9\u03BA\u03AE \u03C0\u03C1\u03BF\u03B5\u03B9\u03B4\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7" : "\u26A0 Important notice"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13.5, color: S.ink, lineHeight: 1.6 } }, lang === "el" ? /* @__PURE__ */ React.createElement(React.Fragment, null, "\u03A4\u03BF \u03B5\u03C1\u03B3\u03B1\u03BB\u03B5\u03AF\u03BF \u03B1\u03C5\u03C4\u03CC \u03C0\u03C1\u03BF\u03BF\u03C1\u03AF\u03B6\u03B5\u03C4\u03B1\u03B9 ", /* @__PURE__ */ React.createElement("strong", null, "\u03B1\u03C0\u03BF\u03BA\u03BB\u03B5\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC \u03B3\u03B9\u03B1 \u03B5\u03BE\u03B5\u03B9\u03B4\u03B9\u03BA\u03B5\u03C5\u03BC\u03AD\u03BD\u03BF\u03C5\u03C2 \u03B5\u03C0\u03B1\u03B3\u03B3\u03B5\u03BB\u03BC\u03B1\u03C4\u03AF\u03B5\u03C2 \u03C5\u03B3\u03B5\u03AF\u03B1\u03C2"), " \u03C9\u03C2 \u03B2\u03BF\u03AE\u03B8\u03B7\u03BC\u03B1 \u03C5\u03C0\u03BF\u03C3\u03C4\u03AE\u03C1\u03B9\u03BE\u03B7\u03C2 \u03B1\u03C0\u03CC\u03C6\u03B1\u03C3\u03B7\u03C2 \u03BA\u03B1\u03B9 \u03B5\u03BA\u03C0\u03B1\u03AF\u03B4\u03B5\u03C5\u03C3\u03B7\u03C2.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "\u0394\u03B5\u03BD \u03C5\u03C0\u03BF\u03BA\u03B1\u03B8\u03B9\u03C3\u03C4\u03AC \u03C4\u03B7\u03BD \u03BA\u03BB\u03B9\u03BD\u03B9\u03BA\u03AE \u03BA\u03C1\u03AF\u03C3\u03B7."), " \u038C\u03BB\u03B5\u03C2 \u03BF\u03B9 \u03B4\u03CC\u03C3\u03B5\u03B9\u03C2, \u03BF\u03B9 \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03BF\u03AF \u03BA\u03B1\u03B9 \u03BF\u03B9 \u03C0\u03C1\u03BF\u03C4\u03AC\u03C3\u03B5\u03B9\u03C2 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 ", /* @__PURE__ */ React.createElement("strong", null, "\u03B5\u03C0\u03B1\u03BB\u03B7\u03B8\u03B5\u03CD\u03BF\u03BD\u03C4\u03B1\u03B9 \u03B1\u03BD\u03B5\u03BE\u03AC\u03C1\u03C4\u03B7\u03C4\u03B1"), " \u03BC\u03B5 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B5\u03C2 \u03C0\u03B7\u03B3\u03AD\u03C2 \u03BA\u03B1\u03B9 \u03C4\u03B1 \u03C4\u03BF\u03C0\u03B9\u03BA\u03AC \u03C0\u03C1\u03C9\u03C4\u03CC\u03BA\u03BF\u03BB\u03BB\u03B1 \u03C0\u03C1\u03B9\u03BD \u03B1\u03C0\u03CC \u03BA\u03AC\u03B8\u03B5 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE \u03C3\u03B5 \u03B1\u03C3\u03B8\u03B5\u03BD\u03AE.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "\u039F \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03CC\u03C2 \u03B4\u03B5\u03BD \u03C6\u03AD\u03C1\u03B5\u03B9 \u03B5\u03C5\u03B8\u03CD\u03BD\u03B7 \u03B3\u03B9\u03B1 \u03BF\u03C0\u03BF\u03B9\u03B1\u03B4\u03AE\u03C0\u03BF\u03C4\u03B5 \u03B2\u03BB\u03AC\u03B2\u03B7 \u03C0\u03C1\u03BF\u03BA\u03CD\u03C8\u03B5\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B7 \u03C7\u03C1\u03AE\u03C3\u03B7 \u03C4\u03BF\u03C5. \u0397 \u03B5\u03C5\u03B8\u03CD\u03BD\u03B7 \u03BA\u03AC\u03B8\u03B5 \u03BA\u03BB\u03B9\u03BD\u03B9\u03BA\u03AE\u03C2 \u03B1\u03C0\u03CC\u03C6\u03B1\u03C3\u03B7\u03C2 \u03C0\u03B1\u03C1\u03B1\u03BC\u03AD\u03BD\u03B5\u03B9 \u03C3\u03C4\u03BF\u03BD \u03B8\u03B5\u03C1\u03AC\u03C0\u03BF\u03BD\u03C4\u03B1 \u03B9\u03B1\u03C4\u03C1\u03CC.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: S.muted, fontWeight: 600, fontSize: 12 } }, "\u039C\u03B7\u03BD \u03B5\u03B9\u03C3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03AF\u03C3\u03B9\u03BC\u03B1 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1 \u03B1\u03C3\u03B8\u03B5\u03BD\u03CE\u03BD (\u03BF\u03BD\u03CC\u03BC\u03B1\u03C4\u03B1, \u0391\u039C\u039A\u0391).")) : /* @__PURE__ */ React.createElement(React.Fragment, null, "This tool is intended ", /* @__PURE__ */ React.createElement("strong", null, "solely for qualified healthcare professionals"), " as a decision-support and educational aid.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "It does not replace clinical judgement."), " All doses, calculations and suggestions must be ", /* @__PURE__ */ React.createElement("strong", null, "independently verified"), " against authoritative sources and local protocols before any application to a patient.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "The author accepts no liability for any harm arising from its use. Responsibility for every clinical decision remains with the treating clinician.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: S.muted, fontWeight: 600, fontSize: 12 } }, "Do not enter identifiable patient data (names, IDs)."))), /* @__PURE__ */ React.createElement(
      "button",
      {
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
      },
      lang === "el" ? "\u039A\u03B1\u03C4\u03B1\u03BD\u03BF\u03CE & \u0391\u03C0\u03BF\u03B4\u03AD\u03C7\u03BF\u03BC\u03B1\u03B9" : "I understand & accept"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
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
      },
      lang === "el" ? "English" : "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
    )));
  }
  return /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "'Commissioner', 'Segoe UI', system-ui, -apple-system, sans-serif",
    background: S.bg,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    maxWidth: 560,
    margin: "0 auto"
  } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 16px 10px", display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 9 } }, /* @__PURE__ */ React.createElement("img", { src: LOGO_DATA, alt: "", style: { width: 30, height: 30, borderRadius: 8, flexShrink: 0, boxShadow: "0 1px 4px rgba(20,37,63,.15)" } }), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 900, fontSize: 16.5, color: S.ink, letterSpacing: -0.3, lineHeight: 1.2 } }, /* @__PURE__ */ React.createElement("span", { style: { color: S.teal, fontStyle: "italic" } }, "Efstathia\u2019s"), " Anesthesia Assistant")), /* @__PURE__ */ React.createElement("button", { onClick: () => setLang(lang === "el" ? "en" : "el"), style: {
    padding: "5px 12px",
    borderRadius: 99,
    border: `1.5px solid ${S.line}`,
    background: "#fff",
    fontWeight: 700,
    fontSize: 13,
    color: S.teal,
    cursor: "pointer",
    fontFamily: "inherit"
  } }, lang === "el" ? "EN" : "\u0395\u039B")), /* @__PURE__ */ React.createElement(PatientBar, { lang, weight, setWeight, age, setAge, height, setHeight, sex, setSex })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, padding: "4px 16px 16px", overflowY: "auto" } }, tab === "meds" && /* @__PURE__ */ React.createElement(MedsTab, { lang, weight }), tab === "tools" && /* @__PURE__ */ React.createElement(ToolsTab, { lang, weight, age, height, sex }), tab === "peds" && /* @__PURE__ */ React.createElement(PedsCard, { lang, weight, age }), tab === "lists" && /* @__PURE__ */ React.createElement(ChecklistTab, { lang })), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 16px 8px", fontSize: 11, color: S.muted, fontWeight: 600, lineHeight: 1.4, textAlign: "center" } }, t.disclaimer), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 16px 8px", fontSize: 10, color: S.muted, fontWeight: 600, lineHeight: 1.5, textAlign: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 700 } }, lang === "el" ? "\u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1: Dr Efstathia Pistioli" : "Created by Dr Efstathia Pistioli"), /* @__PURE__ */ React.createElement("br", null), "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " Dr Efstathia Pistioli. ", lang === "el" ? "\u039C\u03B5 \u03B5\u03C0\u03B9\u03C6\u03CD\u03BB\u03B1\u03BE\u03B7 \u03C0\u03B1\u03BD\u03C4\u03CC\u03C2 \u03B4\u03B9\u03BA\u03B1\u03B9\u03CE\u03BC\u03B1\u03C4\u03BF\u03C2." : "All rights reserved."), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    borderTop: `1.5px solid ${S.line}`,
    background: "#fff",
    position: "sticky",
    bottom: 0
  } }, tabs.map((tb) => /* @__PURE__ */ React.createElement("button", { key: tb.id, onClick: () => setTab(tb.id), style: {
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
  } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, tb.icon), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, fontWeight: 700, color: tab === tb.id ? S.teal : S.muted, whiteSpace: "nowrap" } }, t.tabs[tb.id])))));
}

// Catches render/runtime errors anywhere in the tree below it so a bug in one
// tab (e.g. a bad calculator input) can't blank the whole app. Shows a
// friendly bilingual message with a reset button instead of a white screen.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("AnesthesiaAssistant crashed:", error, info);
  }
  handleReset() {
    this.setState({ hasError: false, error: null });
  }
  handleReload() {
    window.location.reload();
  }
  render() {
    if (!this.state.hasError) return this.props.children;
    const lang = storeGet("aa_lang") || "el";
    const el = lang === "el";
    return /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: "'Commissioner', 'Segoe UI', system-ui, -apple-system, sans-serif",
      background: S.bg,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px 20px",
      textAlign: "center",
      maxWidth: 560,
      margin: "0 auto",
      boxSizing: "border-box"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 40, marginBottom: 10 } }, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 800, fontSize: 17, color: S.ink, marginBottom: 8 } }, el ? "\u039A\u03AC\u03C4\u03B9 \u03C0\u03AE\u03B3\u03B5 \u03C3\u03C4\u03C1\u03B1\u03B2\u03AC" : "Something went wrong"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13.5, color: S.muted, fontWeight: 600, lineHeight: 1.6, marginBottom: 18 } }, el ? "\u03A0\u03B1\u03C1\u03BF\u03C5\u03C3\u03B9\u03AC\u03C3\u03C4\u03B7\u03BA\u03B5 \u03C3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03C3\u03B5 \u03B1\u03C5\u03C4\u03AE \u03C4\u03B7\u03BD \u03BF\u03B8\u03CC\u03BD\u03B7. \u03A4\u03B1 \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03B1\u03C3\u03B8\u03B5\u03BD\u03BF\u03CD\u03C2 \u03BA\u03B1\u03B9 \u03BF\u03B9 \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2 \u03C3\u03B1\u03C2 \u03B4\u03B5\u03BD \u03C7\u03AC\u03B8\u03B7\u03BA\u03B1\u03BD." : "This screen ran into an error. Your patient data and settings were not lost."), this.state.error && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: S.muted, fontWeight: 600, background: "#fff", border: `1px solid ${S.line}`, borderRadius: 10, padding: "8px 10px", marginBottom: 16, maxWidth: "100%", overflowWrap: "break-word", fontFamily: "monospace" } }, String(this.state.error && this.state.error.message || this.state.error)), /* @__PURE__ */ React.createElement("button", { onClick: () => this.handleReset(), style: { width: "100%", padding: "13px", borderRadius: 12, border: "none", background: S.teal, color: "#fff", fontWeight: 800, fontSize: 15, cursor: "pointer", fontFamily: "inherit", marginBottom: 8 } }, el ? "\u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03BE\u03B1\u03BD\u03AC" : "Try again"), /* @__PURE__ */ React.createElement("button", { onClick: () => this.handleReload(), style: { width: "100%", padding: "11px", borderRadius: 12, border: `1.5px solid ${S.line}`, background: "#fff", color: S.ink, fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: "inherit" } }, el ? "\u03A0\u03BB\u03AE\u03C1\u03B7\u03C2 \u03B1\u03BD\u03B1\u03BD\u03AD\u03C9\u03C3\u03B7 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE\u03C2" : "Reload the app"));
  }
}
