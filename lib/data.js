// ─── NAV ────────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Product' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/help', label: 'Help' },
  { href: '/contact', label: 'Contact' },
];

export const LEGAL_LINKS = [
  { href: '/policies?tab=privacy', label: '🔒 Privacy Policy' },
  { href: '/policies?tab=security', label: '🛡️ Security Policy' },
  { href: '/policies?tab=sla', label: '⚡ SLA & Uptime' },
  { href: '/policies?tab=dpa', label: '📋 Data Processing Agreement' },
  { href: '/terms', label: '📄 Terms of Service' },
];

// ─── HOME ───────────────────────────────────────────────────────────────────
export const CAPABILITIES = [
  { icon: '🎙️', tag: 'AI', title: 'AI-Powered Documentation', desc: 'Doctor speaks. System structures. Case sheet completes itself in 7 Indian languages.' },
  { icon: '👤', tag: 'Records', title: 'Complete Patient Intelligence', desc: 'One profile. Every visit. Every prescription. Every payment. Complete history instantly.' },
  { icon: '📊', tag: 'Analytics', title: 'Real-Time Business Intelligence', desc: 'Know your revenue, utilisation, retention, and profitability the moment it happens.' },
  { icon: '🏥', tag: 'Specialty', title: 'Specialty-Specific Design', desc: 'Built for dental. Expanding to 6 more specialties. Not generic software.' },
];

export const WHY_ALPHATIC = [
  { title: "The AI Isn't Bolted On", desc: 'Most platforms add AI as a feature. Alphatic built AI into the foundation. Every consultation becomes structured clinical data automatically.' },
  { title: 'Built for Real-World Complexity', desc: "Indian clinics are messy. Walk-ins happen. Payments come in instalments. Staff work split shifts. Alphatic works for reality, not theory." },
  { title: 'You Actually Own Your Data', desc: 'Not locked in. Not held hostage. Export everything anytime. Your data is yours — complete, in standard formats.' },
  { title: 'Already Live', desc: "We're deployed to 50+ live clinics right now. Not a promise. Not a roadmap. Real clinics, real patients, real outcomes." },
];

export const BEFORE_AFTER = [
  { metric: 'Doctor Documentation Time', before: '2–3 hours/day', after: '15–30 min/day', impact: 'More patient time, less admin' },
  { metric: 'Revenue Visibility', before: 'Month-end accounting', after: 'Real-time dashboard', impact: 'Better decision-making' },
  { metric: 'Patient Recall Rate', before: '60% (manual)', after: '85%+ (automated)', impact: 'Retention improves' },
  { metric: 'Billing Errors', before: 'Regular', after: 'Near-zero', impact: 'Revenue protection' },
  { metric: 'Procedure Cancellations', before: 'Due to missing supplies', after: 'Prevented', impact: 'Revenue protection' },
  { metric: 'Chair Utilisation', before: 'Unknown', after: 'Visible + optimisable', impact: 'Revenue per hour increases' },
  { metric: 'Collection Rate', before: '75%', after: '88%+', impact: 'Cash flow improves' },
  { metric: 'Commission Disputes', before: 'Common', after: 'Eliminated', impact: 'Team trust improves' },
];

export const DAY_TIMELINE = [
  { time: 'Morning', label: 'Clinic Opens', text: "Dashboard shows today's schedule, patients arriving, inventory alerts, outstanding dues — all at a glance." },
  { time: 'Mid-morning', label: 'Patient Arrives', text: 'Doctor consults while system records. Clinical data structures automatically. Case sheet complete before patient leaves.' },
  { time: 'Lunch', label: 'Manager Checks Dashboard', text: 'Revenue today: ₹68K. Collections: ₹61K. Chair utilisation: 87%. Two patients flagged for follow-up.' },
  { time: 'Afternoon', label: 'Payment & Follow-up', text: 'Patient pays. Invoice already generated. Payment recorded. Follow-up reminder scheduled automatically.' },
  { time: 'EOD', label: 'Tomorrow Ready', text: "Tomorrow's schedule loaded. This week's trends visible. Nothing is forgotten." },
];

export const TESTIMONIALS = [
  { quote: 'Alphatic cut our documentation time by 70%. Doctors actually have time to see more patients.', name: 'Practice Manager', role: 'Multi-location Dental Group', init: 'PM' },
  { quote: 'For the first time, we have real-time visibility into clinic profitability.', name: 'Hospital Administrator', role: 'Multi-specialty Group', init: 'HA' },
  { quote: 'Data that was impossible to get is now automatic.', name: 'Clinic Owner', role: 'Single Practice', init: 'CO' },
];

// ─── SPECS ──────────────────────────────────────────────────────────────────
export const SPECS = {
  dental: {
    icon: '🦷', label: 'Dental', status: 'Live Now', isLive: true,
    tagline: 'The complete operating system for dental clinics — every module live and running in 50+ practices today.',
    features: [
      { icon: '🎙️', t: 'AI Voice Documentation', d: 'Doctor speaks — system structures. Case sheets auto-complete in 7 Indian languages. Documentation time drops from 2+ hours to 20 minutes per day.' },
      { icon: '📅', t: 'Smart Scheduling', d: 'Chair assignment, walk-in handling, multi-doctor calendars, no-show prediction, and peak-hour utilisation analytics — all in one view.' },
      { icon: '💳', t: 'Integrated Billing', d: 'Auto-generated invoices linked to treatment completion. Instalment tracking, outstanding dues aging, insurance/TPA integration, real-time collection dashboard.' },
      { icon: '📦', t: 'Inventory Management', d: 'Real-time stock tracking with automatic deduction when a procedure completes. Reorder alerts trigger 2 weeks before shortage. Zero supply-related cancellations.' },
      { icon: '👥', t: 'Staff & Commission Management', d: 'Role-based access control at page and module level. Doctor performance metrics. Automatic commission calculation per procedure.' },
      { icon: '📊', t: 'Real-Time Analytics', d: 'Revenue by doctor, procedure, and time-of-day. Patient retention and NPS trends. Treatment completion rates. P&L summary — all live.' },
    ],
    modules: [
      { icon: '👤', tag: 'Core', title: 'Patient Management', desc: 'One profile per patient — complete visit, treatment, financial history. Allergy alerts, X-rays, consent forms, and communication logs in a single view.', feats: ['Complete visit & treatment history', 'Financial history & outstanding balance', 'Allergy alerts & medical flags', 'X-rays, scans & consent forms'] },
      { icon: '🎙️', tag: 'AI', title: 'AI Clinical Documentation', desc: 'Doctor speaks during consultation. AI structures the conversation into a complete case sheet. Doctor validates in 2–3 minutes.', feats: ['7 Indian languages supported', 'Auto-fill chief complaint, diagnosis, Rx', 'Doctor maintains full clinical authority', 'High-confidence auto-fill with review flags'] },
      { icon: '📅', tag: 'Scheduling', title: 'Smart Scheduling', desc: 'Week and list view, doctor-specific calendars, chair assignment, walk-in handling, emergency overrides.', feats: ['Walk-in appointment support', 'No-show prediction algorithms', 'Chair & doctor utilisation metrics', 'Procedure density analysis'] },
      { icon: '🦷', tag: 'Clinical', title: 'Treatment Planning', desc: 'Multi-step treatment planning with templates for all dental categories. Treatment status tracked from proposed → approved → in progress → completed.', feats: ['9 dental categories pre-configured', 'Package bundling support', 'Material requirements linked per treatment', 'Follow-up automation'] },
      { icon: '💳', tag: 'Finance', title: 'Billing & Revenue', desc: 'Auto-generated invoices linked to treatment completion. Partial payments, advances, discounts, taxes, insurance and TPA integration.', feats: ['Multi-procedure invoices', 'Instalment & advance payment tracking', 'Outstanding dues aging dashboard', 'Revenue by doctor & procedure type'] },
      { icon: '📦', tag: 'Operations', title: 'Inventory Management', desc: 'Real-time stock. Auto deduction when a procedure completes. Reorder alerts, purchase orders, expiry monitoring.', feats: ['Auto-deduction on procedure completion', 'Reorder thresholds & alerts', 'Supplier & expiry tracking', 'Stock audit & physical count'] },
      { icon: '👥', tag: 'Staff', title: 'Staff Management', desc: 'Granular role-based permissions, shift scheduling, attendance, performance metrics per doctor, and automatic commission calculation.', feats: ['Page & module-level access control', 'Doctor performance metrics', 'Automatic commission calculation', 'Leave management'] },
      { icon: '📊', tag: 'Analytics', title: 'Real-Time Analytics', desc: 'Revenue, appointment, patient, treatment, financial, and inventory analytics — all in real time.', feats: ['Revenue by doctor, procedure, time-of-day', 'Patient retention & NPS trends', 'Treatment completion & abandonment rates', 'Profit & loss summary'] },
      { icon: '💬', tag: 'Engagement', title: 'Patient Engagement', desc: 'Appointment reminders, follow-up check-ins, recall alerts, WhatsApp/SMS/email integration.', feats: ['6-month / 1-year recall reminders', 'Customisable message templates', 'Digital prescriptions & receipts', 'Communication history log'] },
    ],
  },
  obgyn: {
    icon: '🤱', label: 'OBGYN', status: 'Mid-2026', isLive: false,
    tagline: 'Purpose-built for obstetrics and gynaecology practices — from antenatal care to post-natal follow-up.',
    features: [
      { icon: '🤰', t: 'Antenatal Care Tracking', d: 'Gestational age, fundal height, fetal movements, and risk flags — automatically updated at each visit with week-specific normal ranges.' },
      { icon: '💊', t: 'Pregnancy-Safe Prescriptions', d: 'Medication database with trimester-specific FDA safety categories. Alerts for unsafe drugs. Iron, folate, and calcium protocol templates.' },
      { icon: '🔬', t: 'Lab & Imaging Integration', d: 'CBC, anomaly scans, NT scan, TIFFA, GCT, GTT — all mapped and integrated. Results auto-link to the patient timeline.' },
      { icon: '📋', t: 'High-Risk Pregnancy Protocols', d: 'PIH, GDM, placenta previa, multiple gestation — structured protocols with automatic escalation alerts.' },
      { icon: '🩺', t: 'Gynaecology Module', d: 'Menstrual tracking, PCOS, fertility management, colposcopy, LEEP — all in one integrated specialty record.' },
      { icon: '📊', t: 'Outcome Tracking', d: 'Delivery type, birth weight, APGAR scores, post-natal visits — complete outcome data for clinical audit and insurance.' },
    ],
    modules: [
      { icon: '🤰', tag: 'Obstetrics', title: 'Antenatal Care Module', desc: 'Complete gestational tracking from LMP to delivery.', feats: ['EDD auto-calculation from LMP/scan', 'Trimester-wise visit protocol templates', 'Fetal growth chart visualisation', 'Risk stratification: low/high risk flags'] },
      { icon: '🔬', tag: 'Diagnostics', title: 'Lab & Imaging Integration', desc: 'All OBGYN-specific investigations mapped and integrated.', feats: ['NT scan, anomaly scan, growth scan', 'GCT/GTT glucose tracking with graph', 'CBC trends across trimesters', 'Thyroid, blood group, infections panel'] },
      { icon: '💊', tag: 'Prescriptions', title: 'Pregnancy-Safe Prescriptions', desc: 'Medication database with trimester-specific safety categories.', feats: ['Trimester safety category warnings', 'Iron, folate, calcium protocol templates', 'Drug interaction checker', 'Post-natal medication protocols'] },
      { icon: '🏥', tag: 'Delivery', title: 'Delivery & Neonatal Records', desc: 'Delivery summary capturing mode, complications, APGAR, birth weight, and neonatal findings.', feats: ['Normal/instrumental/LSCS templates', 'APGAR score calculator', 'Cord blood & placenta details', 'Neonatal assessment at birth'] },
      { icon: '🩺', tag: 'Gynaecology', title: 'Gynaecology Module', desc: 'Comprehensive gynaecology management — menstrual disorders, fertility, and procedures.', feats: ['Menstrual cycle tracking & dysmenorrhea', 'PCOS/PCOD protocol templates', 'Colposcopy & LEEP procedure notes', 'Hysteroscopy & laparoscopy records'] },
      { icon: '📊', tag: 'Analytics', title: 'OBGYN Analytics', desc: 'Outcome analytics specific to obstetric and gynaecology practice.', feats: ['LSCS vs normal delivery ratio', 'Complication & adverse outcome logging', 'Recall: pap smear, mammogram due lists', 'Fertility treatment outcome tracking'] },
    ],
  },
  cardiology: {
    icon: '❤️', label: 'Cardiology', status: 'Mid-2026', isLive: false,
    tagline: 'Built specifically for how cardiologists work — from ECG interpretation to intervention tracking and chronic disease management.',
    features: [
      { icon: '💓', t: 'ECG Integration & AI Analysis', d: 'ECG upload and auto-analysis — AI flags ST changes, arrhythmias, and axis deviations. Linked to patient timeline with previous ECG comparison.' },
      { icon: '🩺', t: 'Cardiac Risk Stratification', d: 'Framingham, GRACE, TIMI, and CHADS-VASc scores calculated automatically at every consultation.' },
      { icon: '💊', t: 'Evidence-Based Drug Protocols', d: 'ACEI, ARB, beta-blocker, statin — dose optimisation with renal adjustment, drug interaction checking, and target achievement tracking.' },
      { icon: '🏥', t: 'Intervention Tracking', d: 'Cath, PTCA, stenting, pacemaker, CABG — complete procedure records with auto-generated post-op follow-up protocols.' },
      { icon: '📊', t: 'Echo Reporting Templates', d: 'LV function, valvular disease, wall motion abnormalities — structured echo reporting with LVEF calculation.' },
      { icon: '🔬', t: 'Biomarker Trending', d: 'Troponin, BNP, D-Dimer — graphical trending across admissions. Abnormal values flagged automatically.' },
    ],
    modules: [
      { icon: '❤️', tag: 'Cardiac', title: 'Cardiac Risk Assessment', desc: 'Automated risk stratification using validated scores at every consultation.', feats: ['Framingham 10-year CVD risk', 'GRACE score for ACS risk', 'CHADS-VASc for AF stroke risk', 'TIMI score for NSTEMI'] },
      { icon: '📈', tag: 'ECG', title: 'ECG Management', desc: 'Structured ECG reporting with AI-assisted interpretation.', feats: ['ECG upload & structured reporting', 'AI ST-change and arrhythmia alerts', 'Comparison with previous ECGs', 'Rhythm strip annotation'] },
      { icon: '🩺', tag: 'Echo', title: 'Echocardiography Reports', desc: 'Structured echo reporting templates for all standard views.', feats: ['M-mode, 2D, Doppler templates', 'LVEF calculation (Biplane, Teicholz)', 'Valvular disease severity grading', 'Wall motion abnormality maps'] },
      { icon: '🏥', tag: 'Interventions', title: 'Intervention Tracking', desc: 'Pre and post-intervention records for all cardiac procedures.', feats: ['Coronary angiography templates', 'PTCA/stenting procedure notes', 'Pacemaker implant & follow-up', 'CABG post-op management'] },
      { icon: '💊', tag: 'Protocols', title: 'Cardiac Drug Protocols', desc: 'Evidence-based prescription templates for ACS, CHF, AF, and hypertension.', feats: ['ACS dual antiplatelet templates', 'Heart failure GDMT tracking', 'AF anticoagulation management', 'Hypertension step therapy'] },
      { icon: '📊', tag: 'Analytics', title: 'Cardiology Outcomes', desc: 'Practice analytics specific to cardiology.', feats: ['30-day readmission tracking', 'Procedure volume & complication rates', 'Medication adherence monitoring', 'Lipid panel & BP target achievement'] },
    ],
  },
  nephrology: {
    icon: '🫀', label: 'Nephrology', status: 'Late-2026', isLive: false,
    tagline: 'Purpose-built for dialysis centres, transplant programmes, and outpatient kidney clinics.',
    features: [
      { icon: '📊', t: 'CKD Staging & eGFR Tracking', d: 'Automated CKD staging using KDIGO criteria. Serial eGFR tracking with progression analysis and referral decision support.' },
      { icon: '💉', t: 'Dialysis Session Management', d: 'HD adequacy (Kt/V, URR), access care log, complications, dry weight management — full session records.' },
      { icon: '🔬', t: 'Renal Lab Panel Trending', d: 'Creatinine, BUN, electrolytes, PTH, phosphorus — graphical trends across visits with KDIGO target ranges.' },
      { icon: '💊', t: 'Renal Dose Adjustment Alerts', d: 'Automatic medication safety flags for GFR-based dosing. Nephrotoxic drug contraindication alerts.' },
      { icon: '🏥', t: 'Transplant Patient Tracking', d: 'Immunosuppression protocols, tacrolimus levels, rejection episodes, protocol biopsies — complete transplant records.' },
      { icon: '📋', t: 'Dietary & Fluid Management', d: 'Protein, potassium, phosphorus, fluid restriction tracking. Dietary advice templates by CKD stage.' },
    ],
    modules: [
      { icon: '📊', tag: 'CKD', title: 'CKD Staging & Progression', desc: 'Automated CKD staging using KDIGO criteria.', feats: ['Auto eGFR calculation (CKD-EPI, MDRD)', 'CKD stage 1–5 classification', 'Progression rate (eGFR slope)', 'Referral decision support'] },
      { icon: '💉', tag: 'Dialysis', title: 'Dialysis Session Management', desc: 'Complete HD and PD session management.', feats: ['Pre/intra/post-HD vitals', 'Kt/V and URR adequacy calculation', 'AV fistula/graft access log', 'Dry weight & fluid management'] },
      { icon: '🔬', tag: 'Labs', title: 'Renal Lab Trending', desc: 'All nephrology-relevant labs displayed as trend graphs.', feats: ['Creatinine, BUN, electrolyte trends', 'PTH, phosphorus, Vitamin D', 'Hemoglobin & ESA response', 'Mineral bone disease panel'] },
      { icon: '🏥', tag: 'Transplant', title: 'Transplant Management', desc: 'Complete transplant record from waitlisting through post-transplant follow-up.', feats: ['Immunosuppression protocol tracking', 'Tacrolimus/cyclosporine level log', 'Rejection episode documentation', 'Protocol biopsy & histology'] },
      { icon: '💊', tag: 'Medications', title: 'Renal Drug Management', desc: 'Auto dose adjustment recommendations based on current eGFR.', feats: ['eGFR-based dose adjustment alerts', 'Nephrotoxic drug flags', 'ESA dosing protocol guidance', 'Phosphate binder management'] },
      { icon: '📋', tag: 'Dietary', title: 'Dietary & Fluid Management', desc: 'Dietary restriction management specific to CKD and dialysis patients.', feats: ['Fluid intake/output daily log', 'Dietary advice by CKD stage', 'Potassium, phosphorus alerts', 'Nutritional assessment tools'] },
    ],
  },
  orthopedics: {
    icon: '🦴', label: 'Orthopedics', status: 'Mid-2026', isLive: false,
    tagline: 'Designed for orthopaedic clinics, surgery centres, and hospital orthopaedic departments.',
    features: [
      { icon: '🦴', t: 'Surgical Case Tracking', d: 'Pre-op assessment, intra-op findings, implant details, and post-op protocols — complete end-to-end surgical record.' },
      { icon: '🏃', t: 'Physiotherapy Integration', d: 'PT referral with specific instructions, session tracking, rehabilitation milestones, and return-to-activity clearance.' },
      { icon: '🖼️', t: 'Imaging Management', d: 'X-ray, MRI, CT scan with structured reporting templates. Angle measurements, leg length discrepancy, implant position evaluation.' },
      { icon: '🔩', t: 'Implant Management', d: 'Implant catalog, lot number and UDI tracking, revision management, and cost documentation for insurance claims.' },
      { icon: '📋', t: 'Outcome Scoring', d: 'KOOS, HOOS, DASH, Oxford Knee/Hip, VAS pain — validated scores administered at defined intervals.' },
      { icon: '💳', t: 'Insurance Pre-Authorisation', d: 'Pre-auth request documentation, implant cost breakdown, TPA management, and claim status tracking.' },
    ],
    modules: [
      { icon: '🦴', tag: 'Surgery', title: 'Surgical Case Management', desc: 'End-to-end surgical case records from pre-op through post-op rehabilitation.', feats: ['Pre-op fitness assessment templates', 'Surgical checklist & consent forms', 'Intra-op findings & implant documentation', 'Post-op protocol & wound care'] },
      { icon: '🖼️', tag: 'Imaging', title: 'Imaging & Reporting', desc: 'Structured orthopaedic imaging report templates for all modalities.', feats: ['X-ray measurement tools (angles, leg length)', 'MRI ligament & meniscus reporting', 'CT bone & implant assessment', 'Post-op implant position evaluation'] },
      { icon: '🔩', tag: 'Implants', title: 'Implant Management', desc: 'Complete implant tracking from catalog to revision.', feats: ['Implant catalog by manufacturer', 'Lot number & UDI tracking', 'Implant cost for insurance', 'Revision & recall management'] },
      { icon: '📊', tag: 'Outcomes', title: 'Functional Outcome Scores', desc: 'Validated orthopaedic outcome scoring at defined intervals.', feats: ['KOOS, HOOS knee & hip scores', 'DASH upper limb disability score', 'Oxford Knee Score & Hip Score', 'VAS pain & functional status'] },
      { icon: '🏃', tag: 'Rehab', title: 'Physiotherapy Integration', desc: 'PT referral, session tracking, and rehabilitation protocol management.', feats: ['PT referral with specific instructions', 'Session attendance & progress notes', 'Rehabilitation milestones tracking', 'Return-to-activity clearance'] },
      { icon: '💳', tag: 'Insurance', title: 'Insurance & Pre-Authorisation', desc: 'Insurance workflow management including pre-authorisation for implants and procedures.', feats: ['Pre-auth request documentation', 'Implant cost breakdown for claims', 'TPA & insurance management', 'Claim status tracking'] },
    ],
  },
  dermatology: {
    icon: '🧴', label: 'Dermatology', status: 'Late-2026', isLive: false,
    tagline: 'Built for dermatology clinics, cosmetic practices, and dermatology departments in hospitals.',
    features: [
      { icon: '📸', t: 'Before/After Image Management', d: 'Standardised clinical photography with body location mapping and before/after comparison views for treatment documentation.' },
      { icon: '🔬', t: 'Dermatology Diagnosis Templates', d: 'Morphology descriptors, ICD-11 coded diagnoses, differential diagnosis prompts — specialty-specific clinical documentation.' },
      { icon: '💉', t: 'Procedure Tracking', d: 'Laser (fluence, pulse, spot size), chemical peels, PRP, botox, fillers — session records with outcome notes and comparison images.' },
      { icon: '💊', t: 'Medication Safety Alerts', d: 'Isotretinoin monitoring protocol, photo-sensitivity alerts, topical steroid potency classification, methotrexate monitoring.' },
      { icon: '🧪', t: 'Patch Test Documentation', d: 'European baseline patch test series, Day 2/Day 4 reading templates, contact allergy database with avoidance advice.' },
      { icon: '📊', t: 'Cosmetic vs Therapeutic Billing', d: 'Revenue separation, procedure volume and outcome tracking, package utilisation and conversion rate analytics.' },
    ],
    modules: [
      { icon: '📸', tag: 'Imaging', title: 'Dermatological Image Management', desc: 'Standardised clinical photography with body location mapping.', feats: ['Body surface location mapping', 'Before/after split-view comparison', 'Dermoscopy image integration', 'Standardised lighting reminders'] },
      { icon: '🔬', tag: 'Diagnosis', title: 'Dermatology Diagnosis Module', desc: 'Specialty-specific diagnosis templates with morphology descriptors.', feats: ['Primary lesion descriptor templates', 'ICD-11 coded dermatology diagnoses', 'Differential diagnosis prompts', 'Skin biopsy & histology linking'] },
      { icon: '💉', tag: 'Procedures', title: 'Cosmetic & Therapeutic Procedures', desc: 'Procedure module separating therapeutic from cosmetic dermatology.', feats: ['Laser procedure logs (type, fluence, pulse)', 'Chemical peel depth & agent records', 'Botox/filler injection face chart', 'PRP session tracking & outcome notes'] },
      { icon: '💊', tag: 'Medications', title: 'Dermatological Medication Management', desc: 'Medication module with photo-sensitivity alerts and isotretinoin monitoring.', feats: ['Isotretinoin monitoring protocol', 'Topical steroid potency classification', 'Photo-sensitivity drug alerts', 'Methotrexate & immunosuppressant monitoring'] },
      { icon: '🧪', tag: 'Testing', title: 'Patch Test & Allergy Documentation', desc: 'Standardised patch test documentation with allergen databases.', feats: ['European baseline patch test series', 'Day 2 & Day 4 reading templates', 'Contact allergy database', 'Photopatch test protocol'] },
      { icon: '📊', tag: 'Analytics', title: 'Dermatology Practice Analytics', desc: 'Outcome analytics, revenue separation, and procedure volume tracking.', feats: ['Cosmetic vs. therapeutic revenue split', 'Procedure volume & outcome tracking', 'Package utilisation & conversion rates', 'Before/after outcome scoring'] },
    ],
  },
  gp: {
    icon: '🩺', label: 'General Practice', status: 'Late-2026', isLive: false,
    tagline: 'For primary care clinics, family medicine practices, and rural health centres across India.',
    features: [
      { icon: '👥', t: 'Family Health Records', d: 'Family-linked patient records with hereditary condition flags. Track health patterns across family members from a single dashboard.' },
      { icon: '💉', t: 'Vaccination Tracking', d: 'National immunisation schedule with automated due date alerts for patients and caregivers.' },
      { icon: '🔬', t: 'Lab Order Management', d: 'Common panel ordering templates. Results integrated and trended across visits. Abnormal results flagged automatically.' },
      { icon: '💊', t: 'Prescription Refill Management', d: 'Chronic medication refill workflow with adherence tracking. Reduces no-shows for routine refills with remote renewal options.' },
      { icon: '📋', t: 'Preventive Care Protocols', d: 'Population health due lists by age, sex, and risk factors. Cancer screening, cardiovascular risk, and diabetes screening reminders.' },
      { icon: '🏥', t: 'Referral Management', d: 'Structured specialist referral with auto-generated clinical summary. Track referral status and specialist response.' },
    ],
    modules: [
      { icon: '👥', tag: 'Family', title: 'Family Health Records', desc: 'Family-linked patient records — track health patterns across family members.', feats: ['Family unit linking', 'Hereditary condition flags', 'Family health history summary', 'Household contact infection tracking'] },
      { icon: '💉', tag: 'Vaccines', title: 'Vaccination Management', desc: 'Complete vaccination record management following national immunisation schedule.', feats: ['National immunisation schedule', 'Due date alert generation', 'Vaccine lot number recording', 'Travel vaccination management'] },
      { icon: '📋', tag: 'Preventive', title: 'Preventive Care Protocols', desc: 'Population health management tools — preventive care due lists by age, sex, and risk.', feats: ['Cervical cancer screening due list', 'Colorectal cancer screening reminders', 'Diabetes & hypertension screening', 'Annual health check-up templates'] },
      { icon: '🔬', tag: 'Labs', title: 'Lab Order Management', desc: 'Common panel ordering templates. Results integrated and trended.', feats: ['Common panel one-click ordering', 'Abnormal result alerting', 'Lab trend graphs across visits', 'Lab cost & turnaround tracking'] },
      { icon: '💊', tag: 'Prescriptions', title: 'Prescription Refill Management', desc: 'Chronic medication refill workflow with adherence tracking.', feats: ['Repeat prescription templates', 'Medication adherence tracking', 'Pharmacy integration', 'Controlled substance protocols'] },
      { icon: '🏥', tag: 'Referrals', title: 'Referral Management', desc: 'Structured specialist referral with auto-generated clinical summary.', feats: ['Clinical summary auto-generation', 'Specialist referral tracking', 'Referral response integration', 'Emergency referral letter templates'] },
    ],
  },
};

export const SPEC_KEYS = Object.keys(SPECS);

// ─── PRICING ────────────────────────────────────────────────────────────────
export const PLANS = [
  {
    name: 'Starter', price: '₹15,000', per: '/month', highlight: false,
    desc: 'Single clinic, limited AI credits. Everything a solo practice needs.',
    features: ['Single clinic, single location', 'Up to 5 users', 'Core modules (patient, scheduling, billing, analytics)', '100 AI documentation credits/month', 'Email support (24–48h response)'],
  },
  {
    name: 'Growth', price: '₹35,000', per: '/month', highlight: true, badge: 'Most Popular',
    desc: 'Multi-doctor clinic support with advanced features and priority support.',
    features: ['Multi-doctor clinic', 'Up to 20 users', 'All modules incl. inventory, advanced analytics, staff management', '500 AI documentation credits/month', 'Phone support + priority email (12h response)'],
  },
  {
    name: 'Enterprise', price: 'Custom', per: '', highlight: false, badge: 'Multi-location',
    desc: 'Multi-location DSO support with unlimited everything.',
    features: ['Multi-location DSO support', 'Unlimited users & locations', 'Unlimited AI documentation', 'Dedicated account manager', 'White-label options available'],
  },
];

export const FAQS = [
  { q: 'Is this really free for 30 days?', a: 'Yes. No credit card. No tricks. Full access. After 30 days, we\'ll show you pricing based on your usage.' },
  { q: 'How long is onboarding?', a: 'Single clinic: 2–3 weeks. Multi-location DSO: 4–8 weeks. Our team handles data migration and staff training — you don\'t do the heavy lifting.' },
  { q: 'Can I import my existing patient data?', a: 'Yes. We can migrate your patient data from your previous system. Standard onboarding includes this.' },
  { q: 'How does AI documentation handle regional languages?', a: 'Natively. If your patient speaks Tamil and you speak English, the system captures both accurately and maps to standardised medical English.' },
  { q: 'What if I stop using Alphatic?', a: 'Your data is yours. Complete export available in standard formats anytime. No lock-in.' },
  { q: 'How is patient data secured?', a: 'Military-grade encryption. HIPAA-compliant. SOC 2 certified. Full audit logs. Data stored in India unless you choose otherwise.' },
];

// ─── BLOG ───────────────────────────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    slug: 'emr-ehr-clinic-os',
    cat: 'Education',
    title: 'EMR vs EHR vs Clinic OS: What\'s the actual difference?',
    excerpt: 'Most Indian clinics use the terms interchangeably. They\'re not the same thing — and the distinction matters for which software you should be buying.',
    date: 'Feb 28, 2026', readTime: '6 min read',
    content: `An Electronic Medical Record (EMR) is a digital paper chart — medical history within one practice. It replaced paper, but didn't change the workflow.\n\nAn Electronic Health Record (EHR) extends the EMR by enabling records to travel with the patient across providers, labs, pharmacies. In theory.\n\nA Clinic OS isn't about records alone — it's about operations. Revenue. Staff. Inventory. Analytics. This is the category Alphatic is defining in India.`,
  },
  {
    slug: 'ai-documentation-saves-time',
    cat: 'AI',
    title: 'How AI documentation saves doctors 40 minutes a day',
    excerpt: 'The math is simple. A doctor seeing 30 patients a day, spending 2–3 minutes per note, loses 60–90 minutes to documentation. AI cuts that to 15.',
    date: 'Feb 20, 2026', readTime: '4 min read',
    content: `Every minute spent on documentation is a minute not spent on the patient. AI voice-to-structure documentation doesn't just save time — it changes the quality of the clinical record.`,
  },
  {
    slug: 'india-healthcare-it-gap',
    cat: 'Industry',
    title: 'India\'s Healthcare IT Gap: Why 85% of clinics still run on paper',
    excerpt: 'Despite being a technology powerhouse, India\'s clinic-level healthcare infrastructure is stuck in 1995. Here\'s why — and what\'s changing.',
    date: 'Feb 14, 2026', readTime: '8 min read',
    content: `1.5 million registered clinics. Fewer than 15% using modern software. The gap exists for three reasons: cost, complexity, and lack of India-specific design.`,
  },
  {
    slug: 'dental-chair-utilisation',
    cat: 'Dental',
    title: 'Chair utilisation: The metric most dental clinics ignore',
    excerpt: 'Revenue per chair per hour is the single most important metric for a dental practice. Most clinics don\'t track it. Here\'s why that\'s costing them money.',
    date: 'Feb 7, 2026', readTime: '5 min read',
    content: `A dental chair sitting idle for 2 hours a day costs ₹2,400–₹4,800 in lost revenue (at ₹1,200–₹2,400 per procedure-hour). Multiplied across a 6-chair practice, that's ₹85,000–₹1,70,000 per month in preventable revenue loss.`,
  },
];

// ─── CONTACT ────────────────────────────────────────────────────────────────
export const CONTACT_TABS = [
  { label: 'Try Alphatic', id: 'trial' },
  { label: 'Partner With Us', id: 'partner' },
  { label: 'Investors', id: 'invest' },
  { label: 'Press & Media', id: 'press' },
  { label: 'Support', id: 'support' },
];

export const PARTNER_TYPES = [
  { icon: '🔌', title: 'Technology Integrations', desc: 'Build healthcare software, lab systems, imaging platforms, or telemedicine tools? We integrate via API.', cta: 'Tell Us About Your Integration' },
  { icon: '🤝', title: 'Channel Partners & Resellers', desc: 'Serve clinics as a consultant or healthcare IT company? Resell Alphatic with competitive margins.', cta: 'Become a Channel Partner' },
  { icon: '🏷️', title: 'White-Label & Enterprise', desc: 'Offer clinic management software under your own brand. Your branding. We handle the infrastructure.', cta: 'Discuss White-Label Options' },
  { icon: '🔬', title: 'Data & Research', desc: 'At scale, structured medical data from thousands of clinics. Treatment outcomes, population health, clinical AI training.', cta: 'Discuss Data Partnership' },
];

export const TRUST_SIGNALS = [
  { icon: '🛡️', title: 'SOC 2 Type II', sub: 'Certified annually' },
  { icon: '🏥', title: 'HIPAA Compliant', sub: 'BAA available' },
  { icon: '🔐', title: 'AES-256 Encrypted', sub: 'At rest & in transit' },
  { icon: '📋', title: 'GDPR Ready', sub: 'Full compliance' },
  { icon: '⚡', title: '99.5% Uptime SLA', sub: '99.9% for Enterprise' },
  { icon: '🇮🇳', title: 'Data Stays in India', sub: 'Unless you choose otherwise' },
];

// ─── ABOUT ──────────────────────────────────────────────────────────────────
export const VISION_POINTS = [
  { title: 'Every Doctor Deserves Their Time Back', desc: 'Documentation shouldn\'t take 2 hours a day. Speech-to-structured data should be automatic. Doctors should spend 100% of their time on patients.' },
  { title: 'Every Clinic Owner Should Have Real-Time Intelligence', desc: 'You shouldn\'t wait until month-end to know if you\'re profitable. Revenue, collections, utilisation — all visible in real-time.' },
  { title: 'Healthcare Data Should Be Structured at the Source', desc: 'Every consultation should generate structured, standardised, AI-ready clinical data. Not digitisation of paper — actual structured data generation.' },
  { title: 'Specialty-Specific Software Should Be the Default', desc: 'A cardiologist\'s workflow has nothing in common with a dentist\'s. Generic software helps nobody.' },
  { title: 'Clinics Should Own Their Data', desc: "Not locked in. Not held hostage. Data exportable anytime. Healthcare is too important to put your patients' data in a vendor's vault." },
  { title: 'Modern Healthcare Deserves Modern Infrastructure', desc: 'One system. Every function. Complete integration. Built for the real world.' },
];

export const PRINCIPLES = [
  { icon: '🎯', title: 'Honesty Over Hype', desc: "We won't oversell. We won't lie about numbers. When something isn't ready, we say so." },
  { icon: '🏥', title: 'Healthcare Providers Come First', desc: 'Every decision: does this help clinics operate better? Does this help doctors spend more time with patients?' },
  { icon: '🔒', title: 'Data Privacy is Non-Negotiable', desc: 'Patient data is sacred. Encrypted. Backed up. Compliant. Auditable. You own it.' },
  { icon: '⚡', title: 'Simplicity Wins', desc: 'We build 50 features that matter, not 500. Simple interface. Clear workflow. Low cognitive load.' },
  { icon: '🔬', title: 'Specialty-First Design', desc: "We don't adapt dental software for cardiology. We build cardiology-specific software." },
  { icon: '📊', title: 'Data is the Strategy', desc: 'At scale, structured clinical data becomes the most valuable asset in healthcare.' },
];

export const ROADMAP = [
  { phase: 'Now', title: 'Dental', desc: 'Complete modern OS for dental clinics — live in 50+ practices.' },
  { phase: 'Year 2', title: 'Multi-Specialty', desc: 'OBGYN, Cardiology, Nephrology, Orthopedics, Dermatology, GP all live.' },
  { phase: 'Year 3–5', title: 'Every Specialty', desc: 'Every major medical specialty has Alphatic.' },
  { phase: 'Year 5+', title: 'Healthcare Intelligence', desc: 'Structured data from thousands of clinics becomes healthcare infrastructure.' },
];
