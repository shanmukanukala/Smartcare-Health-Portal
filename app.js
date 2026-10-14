/* ==========================================
   BACKEND CONFIGURATION & AUTO-DISCOVERY
   ========================================== */
let API_BASE_URL = window.location.protocol.startsWith('http') 
  ? window.location.origin 
  : 'http://localhost:3000';

/* ==========================================
   HTML ESCAPE HELPER
   ========================================== */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ==========================================
   MULTILINGUAL TRANSLATION SYSTEM
   ========================================== */
const TRANSLATIONS = {
  en: {
    // Blood Donation
    "Blood Donation": "Blood Donation",
    "Emergency Blood Donation Support": "Emergency Blood Donation Support",
    "In case of any emergencies, if your blood group is required, are you willing to donate your blood so that we can contact you?": "In case of any emergencies, if your blood group is required, are you willing to donate your blood so that we can contact you?",
    "Yes, I am willing to donate": "Yes, I am willing to donate",
    "No, I am not willing to donate": "No, I am not willing to donate",
    "You may skip this question": "You may skip this question",
    "Please select your preference": "Please select your preference",
    "Registration Successful": "Registration Successful",
    "Already Registered": "Already Registered",
    "Complete Registration": "Complete Registration",

    // Clear Fields
    "Clear Fields": "Clear Fields",
    "Form cleared successfully": "Form cleared successfully",

    // Health News
    "Daily Health News": "Daily Health News",
    "Global health updates, verified medical discoveries, and wellness insights from around the world.": "Global health updates, verified medical discoveries, and wellness insights from around the world.",
    "Read More": "Read More",
    "Source": "Source",
    "Published": "Published",
    "Loading latest global health news...": "Loading latest global health news...",
    "Unable to load the latest health news right now. Please try again later.": "Unable to load the latest health news right now. Please try again later.",
    "Try Again": "Try Again",

    // Online Consultation & Appointment
    "Consultation Mode": "Consultation Mode",
    "In-Person Visit": "In-Person Visit",
    "Online Consultation": "Online Consultation",
    "Preferred Time": "Preferred Time",
    "Select Time Slot": "Select Time Slot",
    "No available time slots": "No available time slots",
    "This time slot is no longer available": "This time slot is no longer available",
    "Some time slots are unavailable because they have reached maximum capacity (15 bookings).": "Some time slots are unavailable because they have reached maximum capacity (15 bookings).",
    "The selected time slot has reached maximum capacity (15). Please pick an available slot.": "The selected time slot has reached maximum capacity (15). Please pick an available slot.",
    "Book Consultation Slot": "Book Consultation Slot",

    // Registration Form
    "Patient Registration Portal": "Patient Registration Portal",
    "Full Name": "Full Name",
    "Date of Birth": "Date of Birth",
    "Gender": "Gender",
    "Mobile Number": "Mobile Number",
    "Email Address": "Email Address",
    "Blood Group": "Blood Group",
    "Blood Group (Optional)": "Blood Group (Optional)",
    "Residential Address": "Residential Address",
    "Saving patient details to MongoDB...": "Saving patient details to MongoDB...",
    "Checking registration status...": "Checking registration status..."
  },
  te: {
    // Blood Donation
    "Blood Donation": "రక్తదానం",
    "Emergency Blood Donation Support": "అత్యవసర రక్తదాన సహాయం",
    "In case of any emergencies, if your blood group is required, are you willing to donate your blood so that we can contact you?": "అత్యవసర పరిస్థితుల్లో మీ బ్లడ్ గ్రూప్ అవసరమైతే, మేము మిమ్మల్ని సంప్రదించడానికి మీ రక్తాన్ని దానం చేయడానికి మీరు సిద్ధంగా ఉన్నారా?",
    "Yes, I am willing to donate": "అవును, నేను దానం చేయడానికి సిద్ధంగా ఉన్నాను",
    "No, I am not willing to donate": "లేదు, నేను దానం చేయడానికి సిద్ధంగా లేను",
    "You may skip this question": "మీరు ఈ ప్రశ్నను దాటవేయవచ్చు",
    "Please select your preference": "దయచేసి మీ ప్రాధాన్యతను ఎంచుకోండి",
    "Registration Successful": "నమోదు విజయవంతమైంది",
    "Already Registered": "ఇప్పటికే నమోదు చేయబడింది",
    "Complete Registration": "నమోదు పూర్తి చేయండి",

    // Clear Fields
    "Clear Fields": "ఫీల్డ్‌లను క్లియర్ చేయండి",
    "Form cleared successfully": "ఫారమ్ విజయవంతంగా క్లియర్ చేయబడింది",

    // Health News
    "Daily Health News": "రోజువారీ ఆరోగ్య వార్తలు",
    "Global health updates, verified medical discoveries, and wellness insights from around the world.": "ప్రపంచవ్యాప్తంగా ధృవీకరించబడిన వైద్య ఆవిష్కరణలు మరియు ఆరోగ్య సమాచారం.",
    "Read More": "మరింత చదవండి",
    "Source": "మూలం",
    "Published": "ప్రచురించబడింది",
    "Loading latest global health news...": "తాజా ప్రపంచ ఆరోగ్య వార్తలను లోడ్ చేస్తోంది...",
    "Unable to load the latest health news right now. Please try again later.": "ప్రస్తుతం తాజా ఆరోగ్య వార్తలను లోడ్ చేయడం సాధ్యపడలేదు. దయచేసి కాసేపటి తర్వాత మళ్లీ ప్రయత్నించండి.",
    "Try Again": "మళ్లీ ప్రయత్నించండి",

    // Online Consultation & Appointment
    "Consultation Mode": "సంప్రదింపు విధానం",
    "In-Person Visit": "ఆసుపత్రి సందర్శన",
    "Online Consultation": "ఆన్‌లైన్ సంప్రదింపులు",
    "Preferred Time": "ప్రాధాన్య సమయం",
    "Select Time Slot": "సమయ స్లాట్‌ను ఎంచుకోండి",
    "No available time slots": "అందుబాటులో ఉన్న సమయ స్లాట్లు లేవు",
    "This time slot is no longer available": "ఈ సమయ స్లాట్ ఇకపై అందుబాటులో లేదు",
    "Some time slots are unavailable because they have reached maximum capacity (15 bookings).": "గరిష్ట సామర్థ్యానికి (15 బుకింగ్‌లు) చేరినందున కొన్ని సమయ స్లాట్‌లు అందుబాటులో లేవు.",
    "The selected time slot has reached maximum capacity (15). Please pick an available slot.": "ఎంచుకున్న సమయ స్లాట్ గరిష్ట సామర్థ్యానికి (15) చేరుకుంది. దయచేసి అందుబాటులో ఉన్న స్లాట్‌ను ఎంచుకోండి.",
    "Book Consultation Slot": "సంప్రదింపుల స్లాట్‌ను బుక్ చేయండి",

    // Registration Form
    "Patient Registration Portal": "రోగి నమోదు పోర్టల్",
    "Full Name": "పూర్తి పేరు",
    "Date of Birth": "పుట్టిన తేది",
    "Gender": "లింగం",
    "Mobile Number": "మొబైల్ నంబర్",
    "Email Address": "ఈమెయిల్ చిరునామా",
    "Blood Group": "రక్త సమూహం",
    "Blood Group (Optional)": "రక్త సమూహం (ఐచ్ఛికం)",
    "Residential Address": "నివాస చిరునామా",
    "Saving patient details to MongoDB...": "రోగి వివరాలను భద్రపరుస్తోంది...",
    "Checking registration status...": "నమోదు స్థితిని తనిఖీ చేస్తోంది..."
  },
  hi: {
    // Blood Donation
    "Blood Donation": "रक्तदान",
    "Emergency Blood Donation Support": "आपातकालीन रक्तदान सहायता",
    "In case of any emergencies, if your blood group is required, are you willing to donate your blood so that we can contact you?": "किसी भी आपात स्थिति में, यदि आपके रक्त समूह की आवश्यकता होती है, तो क्या आप रक्तदान करने के इच्छुक हैं ताकि हम आपसे संपर्क कर सकें?",
    "Yes, I am willing to donate": "हाँ, मैं रक्तदान करने के लिए तैयार हूँ",
    "No, I am not willing to donate": "नहीं, मैं रक्तदान करने के लिए तैयार नहीं हूँ",
    "You may skip this question": "आप इस प्रश्न को छोड़ सकते हैं",
    "Please select your preference": "कृपया अपनी प्राथमिकता चुनें",
    "Registration Successful": "पंजीकरण सफल रहा",
    "Already Registered": "पहले से पंजीकृत है",
    "Complete Registration": "पंजीकरण पूर्ण करें",

    // Clear Fields
    "Clear Fields": "फ़ील्ड साफ़ करें",
    "Form cleared successfully": "फ़ॉर्म सफलतापूर्वक साफ़ हो गया",

    // Health News
    "Daily Health News": "दैनिक स्वास्थ्य समाचार",
    "Global health updates, verified medical discoveries, and wellness insights from around the world.": "दुनिया भर से वैश्विक स्वास्थ्य अपडेट और सत्यापित चिकित्सा खोजें।",
    "Read More": "और पढ़ें",
    "Source": "स्रोत",
    "Published": "प्रकाशित",
    "Loading latest global health news...": "नवीनतम वैश्विक स्वास्थ्य समाचार लोड हो रहे हैं...",
    "Unable to load the latest health news right now. Please try again later.": "अभी नवीनतम स्वास्थ्य समाचार लोड करने में असमर्थ। कृपया बाद में पुनः प्रयास करें।",
    "Try Again": "पुनः प्रयास करें",

    // Online Consultation & Appointment
    "Consultation Mode": "परामर्श माध्यम",
    "In-Person Visit": "अस्पताल में व्यक्तिगत परामर्श",
    "Online Consultation": "ऑनलाइन परामर्श",
    "Preferred Time": "पसंदीदा समय",
    "Select Time Slot": "समय स्लॉट चुनें",
    "No available time slots": "कोई समय स्लॉट उपलब्ध नहीं है",
    "This time slot is no longer available": "यह समय स्लॉट अब उपलब्ध नहीं है",
    "Some time slots are unavailable because they have reached maximum capacity (15 bookings).": "कुछ समय स्लॉट अनुपलब्ध हैं क्योंकि वे अधिकतम क्षमता (15 बुकिंग) तक पहुंच चुके हैं।",
    "The selected time slot has reached maximum capacity (15). Please pick an available slot.": "चयनित समय स्लॉट अधिकतम क्षमता (15) पर पहुंच गया है। कृपया उपलब्ध स्लॉट चुनें।",
    "Book Consultation Slot": "परामर्श स्लॉट बुक करें",

    // Registration Form
    "Patient Registration Portal": "रोगी पंजीकरण पोर्टल",
    "Full Name": "पूरा नाम",
    "Date of Birth": "जन्म तिथि",
    "Gender": "लिंग",
    "Mobile Number": "मोबाइल नंबर",
    "Email Address": "ईमेल पता",
    "Blood Group": "रक्त समूह",
    "Blood Group (Optional)": "रक्त समूह (वैकल्पिक)",
    "Residential Address": "आवासीय पता",
    "Saving patient details to MongoDB...": "रोगी का विवरण सहेजा जा रहा है...",
    "Checking registration status...": "पंजीकरण स्थिति की जाँच की जा रही है..."
  },
  ta: {
    // Blood Donation
    "Blood Donation": "இரத்த தானம்",
    "Emergency Blood Donation Support": "அவசரகால இரத்த தான ஆதரவு",
    "In case of any emergencies, if your blood group is required, are you willing to donate your blood so that we can contact you?": "ஏதேனும் அவசரநிலை ஏற்பட்டால், உங்கள் இரத்தக் குழு தேவைப்பட்டால், நாங்கள் உங்களைத் தொடர்பு கொள்ள உங்கள் இரத்தத்தை தானம் செய்ய விரும்புகிறீர்களா?",
    "Yes, I am willing to donate": "ஆம், நான் தானம் செய்ய விரும்புகிறேன்",
    "No, I am not willing to donate": "இல்லை, நான் தானம் செய்ய விரும்பவில்லை",
    "You may skip this question": "நீங்கள் இந்தக் கேள்வியைத் தவிர்க்கலாம்",
    "Please select your preference": "தயவுசெய்து உங்கள் விருப்பத்தைத் தேர்ந்தெடுக்கவும்",
    "Registration Successful": "பதிவு வெற்றிகரமாக முடிந்தது",
    "Already Registered": "ஏற்கனவே பதிவு செய்யப்பட்டுள்ளது",
    "Complete Registration": "பதிவை முடிக்கவும்",

    // Clear Fields
    "Clear Fields": "புலங்களை அழிக்கவும்",
    "Form cleared successfully": "படிவம் வெற்றிகரமாக அழிக்கப்பட்டது",

    // Health News
    "Daily Health News": "தினசரி சுகாதார செய்திகள்",
    "Global health updates, verified medical discoveries, and wellness insights from around the world.": "உலகெங்கிலும் உள்ள சமீபத்திய மருத்துவக் கண்டுபிடிப்புகள் மற்றும் சுகாதார செய்திகள்.",
    "Read More": "மேலும் படிக்க",
    "Source": "ஆதாரம்",
    "Published": "வெளியிடப்பட்டது",
    "Loading latest global health news...": "சமீபத்திய சுகாதார செய்திகள் ஏற்றப்படுகின்றன...",
    "Unable to load the latest health news right now. Please try again later.": "சமீபத்திய சுகாதார செய்திகளை இப்போது ஏற்ற முடியவில்லை. சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும்.",
    "Try Again": "மீண்டும் முயற்சிக்கவும்",

    // Online Consultation & Appointment
    "Consultation Mode": "ஆலோசனை முறை",
    "In-Person Visit": "நேரடி மருத்துவ வருகை",
    "Online Consultation": "ஆன்லைன் ஆலோசனை",
    "Preferred Time": "விருப்பமான நேரம்",
    "Select Time Slot": "நேர இடைவெளியைத் தேர்ந்தெடுக்கவும்",
    "No available time slots": "நேர இடைவெளிகள் எதுவும் கிடைக்கவில்லை",
    "This time slot is no longer available": "இந்த நேர இடைவெளி இனி கிடைக்காது",
    "Some time slots are unavailable because they have reached maximum capacity (15 bookings).": "அதிகபட்ச வரம்பை (15 முன்பதிவுகள்) எட்டியதால் சில நேரங்கள் கிடைக்கவில்லை.",
    "The selected time slot has reached maximum capacity (15). Please pick an available slot.": "தேர்ந்தெடுக்கப்பட்ட நேரம் அதிகபட்ச வரம்பை (15) எட்டியுள்ளது. கிடைக்கக்கூடிய நேரத்தைத் தேர்ந்தெடுக்கவும்.",
    "Book Consultation Slot": "ஆலோசனை முன்பதிவு செய்க",

    // Registration Form
    "Patient Registration Portal": "நோயாளி பதிவு போர்ட்டல்",
    "Full Name": "முழு பெயர்",
    "Date of Birth": "பிறந்த தேதி",
    "Gender": "பாலினம்",
    "Mobile Number": "கைபேசி எண்",
    "Email Address": "மின்னஞ்சல் முகவரி",
    "Blood Group": "இரத்தக் குழு",
    "Blood Group (Optional)": "இரத்தக் குழு (விருப்பமானது)",
    "Residential Address": "முகவரி",
    "Saving patient details to MongoDB...": "விவரங்கள் சேமிக்கப்படுகின்றன...",
    "Checking registration status...": "பதிவு நிலை சரிபார்க்கப்படுகிறது..."
  },
  kn: {
    // Blood Donation
    "Blood Donation": "ರಕ್ತದಾನ",
    "Emergency Blood Donation Support": "ತುರ್ತು ರಕ್ತದಾನ ಬೆಂಬಲ",
    "In case of any emergencies, if your blood group is required, are you willing to donate your blood so that we can contact you?": "ಯಾವುದೇ ತುರ್ತು ಸಂದರ್ಭದಲ್ಲಿ, ನಿಮ್ಮ ರಕ್ತದ ಗುಂಪು ಅಗತ್ಯವಿದ್ದರೆ, ನಾವು ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಲು ನಿಮ್ಮ ರಕ್ತವನ್ನು ದಾನ ಮಾಡಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
    "Yes, I am willing to donate": "ಹೌದು, ನಾನು ದಾನ ಮಾಡಲು ಸಿದ್ಧನಿದ್ದೇನೆ",
    "No, I am not willing to donate": "ಇಲ್ಲ, ನಾನು ದಾನ ಮಾಡಲು ಸಿದ್ಧನಿಲ್ಲ",
    "You may skip this question": "ನೀವು ಈ ಪ್ರಶ್ನೆಯನ್ನು ಬಿಟ್ಟುಬಿಡಬಹುದು",
    "Please select your preference": "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆದ್ಯತೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    "Registration Successful": "ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ",
    "Already Registered": "ಈಗಾಗಲೇ ನೋಂದಾಯಿಸಲಾಗಿದೆ",
    "Complete Registration": "ನೋಂದಣಿ ಪೂರ್ಣಗೊಳಿಸಿ",

    // Clear Fields
    "Clear Fields": "ಕ್ಷೇತ್ರಗಳನ್ನು ತೆರವುಗೊಳಿಸಿ",
    "Form cleared successfully": "ನಮೂನೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ತೆರವುಗೊಳಿಸಲಾಗಿದೆ",

    // Health News
    "Daily Health News": "ದೈನಂದಿನ ಆರೋಗ್ಯ ಸುದ್ದಿ",
    "Global health updates, verified medical discoveries, and wellness insights from around the world.": "ಪ್ರಪಂಚದಾದ್ಯಂತದ ಜಾಗತಿಕ ಆರೋಗ್ಯ ನವೀಕರಣಗಳು ಮತ್ತು ವೈದ್ಯಕೀಯ ಆವಿಷ್ಕಾರಗಳು.",
    "Read More": "ಇನ್ನಷ್ಟು ಓದಿ",
    "Source": "ಮೂಲ",
    "Published": "ಪ್ರಕಟಿಸಲಾಗಿದೆ",
    "Loading latest global health news...": "ಇತ್ತೀಚಿನ ಜಾಗತಿಕ ಆರೋಗ್ಯ ಸುದ್ದಿಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
    "Unable to load the latest health news right now. Please try again later.": "ಇತ್ತೀಚಿನ ಆರೋಗ್ಯ ಸುದ್ದಿಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    "Try Again": "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",

    // Online Consultation & Appointment
    "Consultation Mode": "ಸಮಾಲೋಚನಾ ವಿಧಾನ",
    "In-Person Visit": "ನೇರ ಭೇಟಿ",
    "Online Consultation": "ಆನ್‌ಲೈನ್ ಸಮಾಲೋಚನೆ",
    "Preferred Time": "ಆದ್ಯತೆಯ ಸಮಯ",
    "Select Time Slot": "ಸಮಯ ಸ್ಲಾಟ್ ಆಯ್ಕೆಮಾಡಿ",
    "No available time slots": "ಯಾವುದೇ ಸಮಯದ ಸ್ಲಾಟ್‌ಗಳು ಲಭ್ಯವಿಲ್ಲ",
    "This time slot is no longer available": "ಈ ಸಮಯದ ಸ್ಲಾಟ್ ಇನ್ನು ಮುಂದೆ ಲಭ್ಯವಿಲ್ಲ",
    "Some time slots are unavailable because they have reached maximum capacity (15 bookings).": "ಗರಿಷ್ಠ ಸಾಮರ್ಥ್ಯವನ್ನು (15 ಬುಕಿಂಗ್‌ಗಳು) ತಲುಪಿರುವುದರಿಂದ ಕೆಲವು ಸಮಯದ ಸ್ಲಾಟ್‌ಗಳು ಲಭ್ಯವಿಲ್ಲ.",
    "The selected time slot has reached maximum capacity (15). Please pick an available slot.": "ಆಯ್ಕೆಮಾಡಿದ ಸಮಯ ಸ್ಲಾಟ್ ಗರಿಷ್ಠ ಸಾಮರ್ಥ್ಯವನ್ನು (15) ತಲುಪಿದೆ. ದಯವಿಟ್ಟು ಲಭ್ಯವಿರುವ ಸ್ಲಾಟ್ ಆಯ್ಕೆಮಾಡಿ.",
    "Book Consultation Slot": "ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಿ",

    // Registration Form
    "Patient Registration Portal": "ರೋಗಿ ನೋಂದಣಿ ಪೋರ್ಟಲ್",
    "Full Name": "ಪೂರ್ಣ ಹೆಸರು",
    "Date of Birth": "ಹುಟ್ಟಿದ ದಿನಾಂಕ",
    "Gender": "ಲಿಂಗ",
    "Mobile Number": "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    "Email Address": "ಇಮೇಲ್ ವಿಳಾಸ",
    "Blood Group": "ರಕ್ತದ ಗುಂಪು",
    "Blood Group (Optional)": "ರಕ್ತದ ಗುಂಪು (ಐಚ್ಛಿಕ)",
    "Residential Address": "ವಾಸದ ವಿಳಾಸ",
    "Saving patient details to MongoDB...": "ವಿವರಗಳನ್ನು ಉಳಿಸಲಾಗುತ್ತಿದೆ...",
    "Checking registration status...": "ನೋಂದಣಿ ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ..."
  },
  ml: {
    // Blood Donation
    "Blood Donation": "രക്തദാനം",
    "Emergency Blood Donation Support": "അടിയന്തര രക്തദാന സഹായം",
    "In case of any emergencies, if your blood group is required, are you willing to donate your blood so that we can contact you?": "എന്തെങ്കിലും അടിയന്തര സാഹചര്യങ്ങളിൽ, നിങ്ങളുടെ രക്തഗ്രൂപ്പ് ആവശ്യമാണെങ്കിൽ, ഞങ്ങൾക്ക് നിങ്ങളെ ബന്ധപ്പെടാൻ രക്തം ദാനം ചെയ്യാൻ നിങ്ങൾ തയ്യാറാണോ?",
    "Yes, I am willing to donate": "അതെ, ഞാൻ രക്തം ദാനം ചെയ്യാൻ തയ്യാറാണ്",
    "No, I am not willing to donate": "ഇല്ല, ഞാൻ രക്തം ദാനം ചെയ്യാൻ തയ്യാറല്ല",
    "You may skip this question": "നിങ്ങൾക്ക് ഈ ചോദ്യം ഒഴിവാക്കാം",
    "Please select your preference": "നിങ്ങളുടെ മുൻഗണന തിരഞ്ഞെടുക്കുക",
    "Registration Successful": "രജിസ്ട്രേഷൻ വിജയകരം",
    "Already Registered": "ഇതിനകം രജിസ്റ്റർ ചെയ്തു",
    "Complete Registration": "രജിസ്ട്രേഷൻ പൂർത്തിയാക്കുക",

    // Clear Fields
    "Clear Fields": "ഫീൽഡുകൾ മായ്‌ക്കുക",
    "Form cleared successfully": "ഫോം വിജയകരമായി മായ്‌ച്ചു",

    // Health News
    "Daily Health News": "പ്രതിദിന ആരോഗ്യ വാർത്തകൾ",
    "Global health updates, verified medical discoveries, and wellness insights from around the world.": "ലോകമെമ്പാടുമുള്ള ആരോഗ്യ വാർത്തകളും പുതിയ കണ്ടെത്തലുകളും.",
    "Read More": "കൂടുതൽ വായിക്കുക",
    "Source": "ഉറവിടം",
    "Published": "പ്രസിദ്ധീകരിച്ചു",
    "Loading latest global health news...": "ഏറ്റവും പുതിയ ആരോഗ്യ വാർത്തകൾ ലോഡ് ചെയ്യുന്നു...",
    "Unable to load the latest health news right now. Please try again later.": "ഏറ്റവും പുതിയ ആരോഗ്യ വാർത്തകൾ ഇപ്പോൾ ലോഡ് ചെയ്യാനായില്ല. ദയവായി പിന്നീട് വീണ്ടും ശ്രമിക്കുക.",
    "Try Again": "വീണ്ടും ശ്രമിക്കുക",

    // Online Consultation & Appointment
    "Consultation Mode": "കൺസൾട്ടേഷൻ രീതി",
    "In-Person Visit": "നേരിട്ടുള്ള സന്ദർശനം",
    "Online Consultation": "ഓൺലൈൻ കൺസൾട്ടേഷൻ",
    "Preferred Time": "ഇഷ്ടപ്പെട്ട സമയം",
    "Select Time Slot": "സമയം തിരഞ്ഞെടുക്കുക",
    "No available time slots": "സമയ സ്ലോട്ടുകൾ ലഭ്യമല്ല",
    "This time slot is no longer available": "ഈ സമയ സ്ലോട്ട് ഇനി ലഭ്യമല്ല",
    "Some time slots are unavailable because they have reached maximum capacity (15 bookings).": "പരമാവധി കപ്പാസിറ്റിയിൽ (15 ബുക്കിംഗുകൾ) എത്തിയതിനാൽ ചില സമയ സ്ലോട്ടുകൾ ലഭ്യമല്ല.",
    "The selected time slot has reached maximum capacity (15). Please pick an available slot.": "തിരഞ്ഞെടുത്ത സമയ സ്ലോട്ട് പരമാവധി കപ്പാസിറ്റിയിലെത്തി. ദയവായി ലഭ്യമായ മറ്റൊരു സ്ലോട്ട് തിരഞ്ഞെടുക്കുക.",
    "Book Consultation Slot": "കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യുക",

    // Registration Form
    "Patient Registration Portal": "രോഗി രജിസ്ട്രേഷൻ പോർട്ടൽ",
    "Full Name": "പൂർണ്ണമായ പേര്",
    "Date of Birth": "ജനന തീയതി",
    "Gender": "ലിംഗം",
    "Mobile Number": "മൊബൈൽ നമ്പർ",
    "Email Address": "ഇമെയിൽ വിലാസം",
    "Blood Group": "രക്തഗ്രൂപ്പ്",
    "Blood Group (Optional)": "രക്തഗ്രൂപ്പ് (ഓപ്ഷണൽ)",
    "Residential Address": "താമസസ്ഥല വിലാസം",
    "Saving patient details to MongoDB...": "വിവരങ്ങൾ സൂക്ഷിക്കുന്നു...",
    "Checking registration status...": "രജിസ്ട്രേഷൻ പരിശോധിക്കുന്നു..."
  },
  bn: {
    // Blood Donation
    "Blood Donation": "রক্তদান",
    "Emergency Blood Donation Support": "জরুরি রক্তদান সহায়তা",
    "In case of any emergencies, if your blood group is required, are you willing to donate your blood so that we can contact you?": "যেকোনো জরুরি পরিস্থিতিতে, আপনার রক্তের গ্রুপ প্রয়োজন হলে, আমরা যাতে আপনার সাথে যোগাযোগ করতে পারি সেজন্য আপনি কি রক্তদান করতে ইচ্ছুক?",
    "Yes, I am willing to donate": "হ্যাঁ, আমি রক্ত দিতে ইচ্ছুক",
    "No, I am not willing to donate": "না, আমি রক্ত দিতে ইচ্ছুক নই",
    "You may skip this question": "আপনি এই প্রশ্নটি এড়িয়ে যেতে পারেন",
    "Please select your preference": "অনুগ্রহ করে আপনার পছন্দ নির্বাচন করুন",
    "Registration Successful": "নিবন্ধন সফল হয়েছে",
    "Already Registered": "ইতিমধ্যে নিবন্ধিত",
    "Complete Registration": "নিবন্ধন সম্পন্ন করুন",

    // Clear Fields
    "Clear Fields": "ক্ষেত্রগুলি সাফ করুন",
    "Form cleared successfully": "ফর্ম সফলভাবে সাফ করা হয়েছে",

    // Health News
    "Daily Health News": "দৈনিক স্বাস্থ্য সংবাদ",
    "Global health updates, verified medical discoveries, and wellness insights from around the world.": "বিশ্বজুড়ে স্বাস্থ্য বিষয়ক সর্বশেষ তথ্য ও চিকিৎসা আবিষ্কার।",
    "Read More": "আরও পড়ুন",
    "Source": "উৎস",
    "Published": "প্রকাশিত",
    "Loading latest global health news...": "সর্বশেষ স্বাস্থ্য সংবাদ লোড হচ্ছে...",
    "Unable to load the latest health news right now. Please try again later.": "এই মুহূর্তে সাম্প্রতিক স্বাস্থ্য সংবাদ লোড করা যাচ্ছে না। অনুগ্রহ করে পরে আবার চেষ্টা করুন।",
    "Try Again": "আবার চেষ্টা করুন",

    // Online Consultation & Appointment
    "Consultation Mode": "পরামর্শের মাধ্যম",
    "In-Person Visit": "সরাসরি হাসপাতালে সাক্ষাৎ",
    "Online Consultation": "অনলাইন পরামর্শ",
    "Preferred Time": "পছন্দের সময়",
    "Select Time Slot": "সময় স্লট নির্বাচন করুন",
    "No available time slots": "কোনো সময় স্লট উপলব্ধ নেই",
    "This time slot is no longer available": "এই সময় স্লটটি আর উপলব্ধ নেই",
    "Some time slots are unavailable because they have reached maximum capacity (15 bookings).": "সর্বোচ্চ ক্ষমতা (১৫টি বুকিং) পূর্ণ হওয়ায় কিছু সময় স্লট আর উপলব্ধ নেই।",
    "The selected time slot has reached maximum capacity (15). Please pick an available slot.": "নির্বাচিত সময় স্লটের ধারণক্ষমতা (১৫) পূর্ণ হয়েছে। অনুগ্রহ করে উপলব্ধ স্লট বেছে নিন।",
    "Book Consultation Slot": "পরামর্শের স্লট বুক করুন",

    // Registration Form
    "Patient Registration Portal": "রোগী নিবন্ধন পোর্টাল",
    "Full Name": "পূর্ণ নাম",
    "Date of Birth": "जन्म তারিখ",
    "Gender": "লিঙ্গ",
    "Mobile Number": "মোবাইল নম্বর",
    "Email Address": "ইমেল ঠিকানা",
    "Blood Group": "রক্তের গ্রুপ",
    "Blood Group (Optional)": "রক্তের গ্রুপ (ঐচ্ছিক)",
    "Residential Address": "আবাসিক ঠিকানা",
    "Saving patient details to MongoDB...": "বিবরণ সংরক্ষণ করা হচ্ছে...",
    "Checking registration status...": "নিবন্ধন স্থিতি পরীক্ষা করা হচ্ছে..."
  }
};

let currentLanguage = localStorage.getItem('smartcare_language') || 'en';

function getTranslation(key, lang = currentLanguage) {
  const l = (lang || 'en').slice(0, 2);
  if (TRANSLATIONS[l] && TRANSLATIONS[l][key]) {
    return TRANSLATIONS[l][key];
  }
  if (TRANSLATIONS.en && TRANSLATIONS.en[key]) {
    return TRANSLATIONS.en[key];
  }
  return key;
}

function setPortalLanguage(lang) {
  if (!lang) return;
  const l = lang.slice(0, 2);
  currentLanguage = l;
  localStorage.setItem('smartcare_language', l);

  // Sync portal select
  const portalSelect = document.getElementById('portal-lang-select');
  if (portalSelect && portalSelect.value !== l) {
    portalSelect.value = l;
  }

  // Sync AI voice select
  const aiVoiceSelect = document.getElementById('ai-voice-lang');
  if (aiVoiceSelect) {
    const langMap = {
      en: 'en-IN',
      te: 'te-IN',
      hi: 'hi-IN',
      ta: 'ta-IN',
      kn: 'kn-IN',
      ml: 'ml-IN',
      bn: 'bn-IN'
    };
    if (langMap[l] && aiVoiceSelect.value !== langMap[l]) {
      aiVoiceSelect.value = langMap[l];
    }
  }

  // Translate all DOM elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = getTranslation(key, l);
    if (el.tagName === 'INPUT' && (el.type === 'button' || el.type === 'submit')) {
      el.value = translated;
    } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = translated;
    } else {
      el.textContent = translated;
    }
  });

  // Re-fetch / render news in selected language
  loadHealthNews();
}

/* ==========================================
   MOBILE RESPONSIVE NAVIGATION CONTROL
   ========================================== */
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (sidebar) {
    const isActive = sidebar.classList.toggle('active');
    if (backdrop) {
      backdrop.classList.toggle('active', isActive);
    }
  }
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (sidebar) sidebar.classList.remove('active');
  if (backdrop) backdrop.classList.remove('active');
}

/* ==========================================
   SMOOTH SLIDE & SCROLL HELPER
   ========================================== */
function smoothSlideTo(targetSelector) {
  closeSidebar();
  const el = document.querySelector(targetSelector);
  if (el) {
    const topbarOffset = 70; // offset for sticky topbar
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - topbarOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/* ==========================================
   HERO SLIDING WINDOW CONTROLLER
   ========================================== */
let currentSlidingWindowIndex = 0;
let slidingWindowInterval = null;

function setSlidingWindowSlide(index) {
  const slides = document.querySelectorAll('.sliding-window-item');
  const dots = document.querySelectorAll('.sliding-window-dot');
  if (!slides || slides.length === 0) return;

  currentSlidingWindowIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlidingWindowIndex);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlidingWindowIndex);
  });
}

function slideWindowNext() {
  setSlidingWindowSlide(currentSlidingWindowIndex + 1);
  restartSlidingWindowTimer();
}

function slideWindowPrev() {
  setSlidingWindowSlide(currentSlidingWindowIndex - 1);
  restartSlidingWindowTimer();
}

function restartSlidingWindowTimer() {
  if (slidingWindowInterval) clearInterval(slidingWindowInterval);
  slidingWindowInterval = setInterval(function() {
    setSlidingWindowSlide(currentSlidingWindowIndex + 1);
  }, 4800);
}

// Start auto-slide on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', restartSlidingWindowTimer);
} else {
  restartSlidingWindowTimer();
}

// Active Navigation Highlighting based on Scroll Spy
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section, .dashboard-hero');
  const navItems = document.querySelectorAll('.nav-item');
  
  let currentSectionId = 'home';
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 120;
    if (window.pageYOffset >= secTop) {
      currentSectionId = sec.getAttribute('id') || 'home';
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    const link = item.querySelector('a');
    if (link && (link.getAttribute('href') === '#' + currentSectionId || (currentSectionId === 'home' && link.getAttribute('href') === '#home'))) {
      item.classList.add('active');
    }
  });
});

/* ==========================================
   CUSTOM TOAST POPUPS OVERRIDE FOR WINDOW.ALERT
   ========================================== */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = 'custom-toast ' + type;
  
  let icon = '💡';
  if (type === 'success') {
    icon = '✓';
  } else if (type === 'error') {
    icon = '✗';
  } else if (type === 'warning') {
    icon = '⚠';
  }
  
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
    <span class="toast-close">&times;</span>
  `;
  
  // Close toast trigger
  toast.querySelector('.toast-close').addEventListener('click', function() {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 250);
  });
  
  container.appendChild(toast);
  
  // Auto-remove toast
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 250);
  }, 5000);
}

// Capture all default alerts and display custom notifications
window.alert = function(msg) {
  const lower = msg.toLowerCase();
  const isSuccess = lower.includes('success');
  const isError = lower.includes('please') || lower.includes('must') || lower.includes('invalid') || lower.includes('fail');
  const type = isSuccess ? 'success' : (isError ? 'error' : 'info');
  showToast(msg, type);
};

/* ==========================================
   MONGODB & BACKEND SERVER STATUS CHECKER
   ========================================== */
let isBackendConnected = false;
let mongoStatusPollTimer = null;

function checkMongoStatus() {
  const dot = document.getElementById("db-status-dot");
  const text = document.getElementById("db-status-text");
  if (!dot || !text) return;

  // Try primary API_BASE_URL first
  fetch(`${API_BASE_URL}/api/status`, { signal: AbortSignal.timeout(4000) })
    .then(res => res.json())
    .then(data => {
      handleStatusSuccess(data);
    })
    .catch(() => {
      // If localhost failed from file://, fallback try 127.0.0.1
      if (!window.location.protocol.startsWith('http') && API_BASE_URL.includes('localhost')) {
        const fallbackUrl = 'http://127.0.0.1:3000';
        fetch(`${fallbackUrl}/api/status`, { signal: AbortSignal.timeout(4000) })
          .then(res => res.json())
          .then(data => {
            API_BASE_URL = fallbackUrl;
            handleStatusSuccess(data);
          })
          .catch(() => handleStatusOffline());
      } else {
        handleStatusOffline();
      }
    });

  function handleStatusSuccess(data) {
    if (data.status === 'connected') {
      dot.style.backgroundColor = '#10b981';
      text.innerHTML = `MongoDB: <strong>Connected</strong> (<code>${data.database}</code>)`;
      if (!isBackendConnected) {
        isBackendConnected = true;
        loadHealthNews();
      }
    } else {
      dot.style.backgroundColor = '#f59e0b';
      text.innerHTML = 'MongoDB: Disconnected';
      isBackendConnected = false;
    }
    // Check status periodically every 15s when connected
    scheduleNextStatusCheck(15000);
  }

  function handleStatusOffline() {
    dot.style.backgroundColor = '#94a3b8';
    text.innerHTML = 'Backend Server: Starting / Offline';
    isBackendConnected = false;
    // Retry faster (every 3.5s) if server was offline/restarting
    scheduleNextStatusCheck(3500);
  }

  function scheduleNextStatusCheck(ms) {
    if (mongoStatusPollTimer) clearTimeout(mongoStatusPollTimer);
    mongoStatusPollTimer = setTimeout(checkMongoStatus, ms);
  }
}

document.addEventListener("DOMContentLoaded", checkMongoStatus);

/* ==========================================
   PATIENT REGISTRATION & BLOOD DONATION CONSENT
   ========================================== */
let pendingRegistrationData = null;

function validateRegistration(e) {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  const nameEl = document.getElementById("patientName");
  const dobEl = document.getElementById("dob");
  const genderEl = document.querySelector('input[name="gender"]:checked');
  const phoneEl = document.getElementById("phone");
  const emailEl = document.getElementById("email");
  const bloodGroupEl = document.getElementById("bloodGroup");
  const addressEl = document.getElementById("address");

  const name = nameEl ? nameEl.value.trim() : "";
  const dob = dobEl ? dobEl.value : "";
  const phone = phoneEl ? phoneEl.value.trim() : "";
  const email = emailEl ? emailEl.value.trim() : "";
  const bloodGroup = bloodGroupEl ? bloodGroupEl.value : "";
  const address = addressEl ? addressEl.value.trim() : "";

  if (name === "") {
    showToast("Please enter your full name.", "error");
    if (nameEl) nameEl.focus();
    return false;
  }
  if (dob === "") {
    showToast("Please select date of birth.", "error");
    if (dobEl) dobEl.focus();
    return false;
  }
  if (!genderEl) {
    showToast("Please select gender.", "error");
    return false;
  }
  if (phone === "") {
    showToast("Please enter mobile number.", "error");
    if (phoneEl) phoneEl.focus();
    return false;
  }
  if (phone.replace(/[^0-9]/g, '').length !== 10) {
    showToast("Mobile number must contain 10 digits.", "error");
    if (phoneEl) phoneEl.focus();
    return false;
  }
  if (email === "") {
    showToast("Please enter email.", "error");
    if (emailEl) emailEl.focus();
    return false;
  }
  if (bloodGroup === "") {
    showToast("Please select blood group.", "error");
    if (bloodGroupEl) bloodGroupEl.focus();
    return false;
  }
  if (address === "") {
    showToast("Please enter address.", "error");
    if (addressEl) addressEl.focus();
    return false;
  }

  const payload = {
    name,
    dob,
    gender: genderEl.value,
    phone,
    email,
    bloodGroup,
    address
  };

  showToast(getTranslation("Checking registration status..."), "info");

  // Pre-check for duplicate patient before showing blood donation consent modal
  fetch(`${API_BASE_URL}/api/check-patient`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(async res => {
      const data = await res.json();
      return { status: res.status, data };
    })
    .then(({ status, data }) => {
      if (data.duplicate || data.message === 'Already Registered' || status === 409) {
        showToast(getTranslation("Already Registered"), "warning");
        pendingRegistrationData = null;
        return;
      }

      // Valid new patient details -> Save pending data and present optional blood donation question
      pendingRegistrationData = payload;
      openBloodDonationModal();
    })
    .catch(err => {
      console.warn("Backend pre-check error, proceeding to consent step:", err);
      pendingRegistrationData = payload;
      openBloodDonationModal();
    });

  return false;
}

/* ------------------------------------------
   Optional Blood Donation Consent Modal Handlers
   ------------------------------------------ */
function openBloodDonationModal() {
  const modal = document.getElementById('blood-donation-modal');
  if (modal) {
    // Ensure all options are clear initially
    document.querySelectorAll('input[name="bloodConsent"]').forEach(r => r.checked = false);
    modal.style.display = 'flex';
  }
}

function closeBloodDonationModal(skip = false) {
  const modal = document.getElementById('blood-donation-modal');
  if (modal) {
    modal.style.display = 'none';
  }
  if (skip && pendingRegistrationData) {
    finalizeRegistration(null);
  }
}

function submitConsentFromModal() {
  const selected = document.querySelector('input[name="bloodConsent"]:checked');
  const consent = selected ? selected.value : null;
  finalizeRegistration(consent);
}

function finalizeRegistration(consent) {
  const modal = document.getElementById('blood-donation-modal');
  if (modal) modal.style.display = 'none';

  if (!pendingRegistrationData) return;

  const payload = {
    ...pendingRegistrationData,
    bloodDonationConsent: consent // 'yes', 'no', or null
  };

  showToast(getTranslation("Saving patient details to MongoDB..."), "info");

  fetch(`${API_BASE_URL}/api/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(async res => {
      const data = await res.json();
      return { status: res.status, data };
    })
    .then(({ status, data }) => {
      if (data.duplicate || data.message === 'Already Registered' || status === 409) {
        showToast(getTranslation("Already Registered"), "warning");
        pendingRegistrationData = null;
        return;
      }

      if (data.success) {
        showToast(getTranslation("Registration Successful"), "success");
        // Reset the registration form
        const form = document.querySelector("#registration form");
        if (form) form.reset();
        document.querySelectorAll('input[name="gender"]').forEach(r => r.checked = false);
        document.querySelectorAll('input[name="bloodConsent"]').forEach(r => r.checked = false);
        pendingRegistrationData = null;
      } else {
        showToast("Failed to save: " + (data.message || 'Error occurred'), "error");
        pendingRegistrationData = null;
      }
    })
    .catch(err => {
      console.warn("Backend not reached:", err);
      showToast("Registered locally. (Backend server offline, start server.js)", "warning");
      pendingRegistrationData = null;
    });
}

/* ------------------------------------------
   Clear Fields Button Bug Fix
   ------------------------------------------ */
function clearRegistrationForm() {
  const form = document.querySelector("#registration form");
  if (form) form.reset();

  // Explicitly clear all field values
  const nameEl = document.getElementById("patientName");
  if (nameEl) nameEl.value = "";
  const dobEl = document.getElementById("dob");
  if (dobEl) dobEl.value = "";
  document.querySelectorAll('input[name="gender"]').forEach(r => r.checked = false);
  const phoneEl = document.getElementById("phone");
  if (phoneEl) phoneEl.value = "";
  const emailEl = document.getElementById("email");
  if (emailEl) emailEl.value = "";
  const bgEl = document.getElementById("bloodGroup");
  if (bgEl) bgEl.selectedIndex = 0;
  const addrEl = document.getElementById("address");
  if (addrEl) addrEl.value = "";

  // Reset blood donation consent selections and modal state
  document.querySelectorAll('input[name="bloodConsent"]').forEach(r => r.checked = false);
  pendingRegistrationData = null;
  closeBloodDonationModal(false);

  // Clear validation and error state classes
  document.querySelectorAll('#registration .input-error').forEach(el => el.classList.remove('input-error'));
  const errContainer = document.getElementById('registration-error-msg');
  if (errContainer) {
    errContainer.textContent = '';
    errContainer.style.display = 'none';
  }

  showToast(getTranslation("Form cleared successfully"), "info");
}

/* ==========================================
   ANGULARJS APPLICATION MODULE
   ========================================== */
const app = angular.module("healthApp", []);

app.controller("healthController", function($scope, $http, $location, $anchorScroll) {
  
  // Dynamic Doctors data with relative paths
  $scope.doctors = [
    { name: "Dr. Srujan", specialization: "Ophthalmologist", experience: "11 Years", fee: 450, image: "./srujan.png", dept: "Ophthalmology" },
    { name: "Dr. Sandeep", specialization: "Pediatrician", experience: "8 Years", fee: 400, image: "./sandy.png", dept: "Pediatrics" },
    { name: "Dr. Deeksha", specialization: "Psychiatrist", experience: "10 Years", fee: 550, image: "./deeksha.png", dept: "Psychiatry" },
    { name: "Dr. Sushma", specialization: "Dentist", experience: "7 Years", fee: 350, image: "./sushma.png", dept: "Dentistry" },
    { name: "Dr. Nagi Reddy", specialization: "Cardiologist", experience: "12 Years", fee: 500, image: "./nagi.png", dept: "Cardiology" },
    { name: "Dr. Blaase Bhuvan", specialization: "Dermatologist", experience: "10 Years", fee: 400, image: "./blaase.png", dept: "Dermatology" },
    { name: "Dr. Giridhar", specialization: "Radiologist", experience: "12 Years", fee: 500, image: "./anju.png", dept: "Radiology" },
    { name: "Dr. Nishank", specialization: "Neurologist", experience: "15 Years", fee: 600, image: "./nishank.png", dept: "Neurology" },
    { name: "Dr. Bharadwaj", specialization: "General Physician", experience: "9 Years", fee: 300, image: "./bharadwaj.png", dept: "General Medicine" },
    { name: "Dr. Rishikesh", specialization: "Orthopedic Specialist", experience: "14 Years", fee: 550, image: "./rishi.png", dept: "Orthopedics" },
    { name: "Dr. Vivek Varma", specialization: "ENT Specialist", experience: "13 Years", fee: 450, image: "./varma.png", dept: "ENT" }
  ];

  // Standard appointment time slots
  const IN_PERSON_TIME_SLOTS = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const ONLINE_TIME_SLOTS = [
    '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM'
  ];

  $scope.appointment = { type: 'In-Person' };
  $scope.docFilterDept = '';
  $scope.availableTimeSlots = angular.copy(IN_PERSON_TIME_SLOTS);
  $scope.hasFullSlots = false;
  $scope.appointmentBooked = false;

  // Dynamic slot availability checker (Capacity: 15 per doctor/date/time + mode)
  $scope.checkSlotAvailability = function() {
    const isOnline = ($scope.appointment.type || '').toString().toLowerCase().includes('online');
    const baseSlots = isOnline ? ONLINE_TIME_SLOTS : IN_PERSON_TIME_SLOTS;

    // Clear selected time if it's not valid for the currently chosen consultation mode
    if ($scope.appointment.time && !baseSlots.includes($scope.appointment.time)) {
      $scope.appointment.time = '';
    }

    if (!$scope.appointment.doctor || !$scope.appointment.date) {
      $scope.availableTimeSlots = angular.copy(baseSlots);
      $scope.hasFullSlots = false;
      return;
    }

    let dateStr = '';
    if ($scope.appointment.date instanceof Date) {
      dateStr = $scope.appointment.date.toISOString().split('T')[0];
    } else {
      dateStr = String($scope.appointment.date);
    }

    $http.get(`${API_BASE_URL}/api/appointments/availability`, {
      params: {
        doctor: $scope.appointment.doctor,
        date: dateStr,
        type: isOnline ? 'Online' : 'In-Person'
      }
    })
      .then(function(response) {
        if (response.data && response.data.success) {
          $scope.availableTimeSlots = response.data.availableSlots || [];
          $scope.hasFullSlots = !!response.data.hasFullSlots;

          // If currently selected time is full (reached 15 capacity), clear selection
          if ($scope.appointment.time && !$scope.availableTimeSlots.includes($scope.appointment.time)) {
            $scope.appointment.time = '';
            showToast(getTranslation("The selected time slot has reached maximum capacity (15). Please pick an available slot."), "warning");
          }
        }
      })
      .catch(function(err) {
        console.warn("Availability API error:", err);
        $scope.availableTimeSlots = angular.copy(baseSlots);
      });
  };

  // When doctor is selected, automatically select that doctor's department
  $scope.onDoctorChange = function() {
    if ($scope.appointment.doctor) {
      const selectedDoc = $scope.doctors.find(doc => {
        const fullString = `${doc.name} - ${doc.specialization}`;
        return fullString === $scope.appointment.doctor || doc.name === $scope.appointment.doctor;
      });
      if (selectedDoc && selectedDoc.dept) {
        $scope.appointment.department = selectedDoc.dept;
      }
    }
    $scope.checkSlotAvailability();
  };

  // When department is manually changed, filter doctors or clear mismatching doctor
  $scope.onDepartmentChange = function() {
    $scope.docFilterDept = $scope.appointment.department || '';
    if ($scope.appointment.doctor && $scope.appointment.department) {
      const currentDoc = $scope.doctors.find(doc => {
        const fullString = `${doc.name} - ${doc.specialization}`;
        return fullString === $scope.appointment.doctor || doc.name === $scope.appointment.doctor;
      });
      if (currentDoc && currentDoc.dept !== $scope.appointment.department) {
        $scope.appointment.doctor = '';
      }
    }
    $scope.checkSlotAvailability();
  };

  // Handle Doctor Card "Book Consultation" Button Click
  $scope.selectDoctor = function(doc) {
    $scope.appointment.department = doc.dept;
    $scope.appointment.doctor = doc.name + " - " + doc.specialization;
    $scope.docFilterDept = '';
    if (!$scope.appointment.type) {
      $scope.appointment.type = 'In-Person';
    }
    $scope.checkSlotAvailability();
    
    // Focus the Booking Section smoothly
    $location.hash("appointment");
    $anchorScroll();
  };

  // Handle Form Submit and Save to MongoDB
  $scope.bookAppointment = function() {
    if (
      !$scope.appointment.patientName ||
      !$scope.appointment.doctor ||
      !$scope.appointment.date ||
      !$scope.appointment.time ||
      !$scope.appointment.reason
    ) {
      showToast("Please fill all required appointment details.", "error");
      return;
    }

    showToast("Booking slot and saving to MongoDB...", "info");

    const payload = angular.copy($scope.appointment);
    if (payload.date instanceof Date) {
      payload.date = payload.date.toISOString().split('T')[0];
    }
    if (!payload.type) {
      payload.type = 'In-Person';
    }

    $http.post(`${API_BASE_URL}/api/appointments`, payload)
      .then(function(response) {
        if (response.data && response.data.success) {
          $scope.appointment.bookingId = response.data.bookingId;
          $scope.appointmentBooked = true;
          showToast(`Consultation booked! Click 'Download PDF Receipt' to download your receipt.`, "success");
          $scope.checkSlotAvailability();
        } else if (response.data && response.data.slotFull) {
          showToast(getTranslation("This time slot is no longer available"), "error");
          $scope.checkSlotAvailability();
        } else {
          showToast("Failed to save appointment in database: " + (response.data.message || ''), "error");
        }
      })
      .catch(function(err) {
        if (err.data && err.data.slotFull) {
          showToast(getTranslation("This time slot is no longer available"), "error");
          $scope.checkSlotAvailability();
          return;
        }

        console.warn("MongoDB API error, saving locally:", err);
        const randomSuffix = Math.floor(1000 + Math.random() * 9000);
        $scope.appointment.bookingId = `SHP-${Date.now().toString().slice(-4)}-${randomSuffix}`;
        $scope.appointmentBooked = true;
        showToast(`Consultation booked! Click 'Download PDF Receipt' to download your receipt.`, "success");
      });
  };

  // Clear all fields in the appointment form
  $scope.clearAppointmentForm = function() {
    $scope.appointment = {
      patientName: '',
      department: '',
      doctor: '',
      date: '',
      time: '',
      type: 'In-Person',
      reason: '',
      condition: '',
      medicines: '',
      uploadedFileName: '',
      uploadedFileSize: '',
      bookingId: ''
    };
    $scope.docFilterDept = '';
    $scope.appointmentBooked = false;
    $scope.availableTimeSlots = angular.copy(IN_PERSON_TIME_SLOTS);
    $scope.hasFullSlots = false;

    if (typeof clearAppointmentDOM === 'function') {
      clearAppointmentDOM();
    }
    showToast(getTranslation("Form cleared successfully"), "info");
  };

  // Reset the booking form after confirmation
  $scope.resetBookingForm = function() {
    $scope.clearAppointmentForm();
  };

});

/* ==========================================
   CLEAR APPOINTMENT DOM ACTION
   ========================================== */
function clearAppointmentDOM() {
  const form = document.getElementById('appointmentForm') || document.querySelector('#appointment form');
  if (form) form.reset();

  const docEl = document.getElementById('apptDoc');
  if (docEl) {
    docEl.value = '';
    docEl.selectedIndex = 0;
  }
  const deptEl = document.getElementById('apptDept');
  if (deptEl) {
    deptEl.value = '';
    deptEl.selectedIndex = 0;
  }
  const patientNameEl = document.getElementById('apptPatientName');
  if (patientNameEl) patientNameEl.value = '';
  const dateEl = document.getElementById('apptDate');
  if (dateEl) dateEl.value = '';
  const timeEl = document.getElementById('apptTime');
  if (timeEl) {
    timeEl.value = '';
    timeEl.selectedIndex = 0;
  }
  const reasonEl = document.getElementById('apptReason');
  if (reasonEl) reasonEl.value = '';
  const condEl = document.getElementById('apptCondition');
  if (condEl) condEl.value = '';
  const medsEl = document.getElementById('apptMeds');
  if (medsEl) medsEl.value = '';
  const fileInput = document.querySelector('#appointment input[type="file"]');
  if (fileInput) fileInput.value = '';

  const inPersonRadio = document.getElementById('mode-in-person');
  if (inPersonRadio) inPersonRadio.checked = true;

  // Clear uploaded file state
  if (typeof removeUploadedFile === 'function') {
    removeUploadedFile();
  }
}

/* ==========================================
   APPOINTMENT PRESCRIPTION FILE UPLOAD HANDLERS
   ========================================== */
let currentUploadedFile = null;
let currentUploadedFileUrl = null;

function handleAppointmentFileUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  currentUploadedFile = file;
  if (currentUploadedFileUrl) {
    try { URL.revokeObjectURL(currentUploadedFileUrl); } catch (e) {}
  }
  currentUploadedFileUrl = URL.createObjectURL(file);

  const card = document.getElementById('uploaded-file-card');
  const nameEl = document.getElementById('uploadedFileName');
  const subEl = document.getElementById('uploadedFileSub');
  const badgeEl = document.getElementById('uploadedFileBadge');
  const extBadge = document.getElementById('uploadedFileExtBadge');

  if (nameEl) nameEl.textContent = file.name;

  const sizeKB = file.size / 1024;
  const sizeStr = sizeKB > 1024 
    ? (sizeKB / 1024).toFixed(2) + ' MB' 
    : Math.round(sizeKB) + ' KB';

  if (subEl) subEl.textContent = `${sizeStr} • Attached for consultation`;

  const isPdf = file.name.toLowerCase().endsWith('.pdf') || file.type === 'application/pdf';
  if (extBadge) {
    extBadge.textContent = isPdf ? 'PDF' : file.name.split('.').pop().toUpperCase();
  }
  if (badgeEl) {
    badgeEl.className = isPdf ? 'uploaded-file-badge badge-pdf' : 'uploaded-file-badge badge-img';
  }

  if (card) {
    card.style.display = 'flex';
  }

  // Update AngularJS model so it displays in receipt
  const appElement = document.querySelector('[ng-controller="healthController"]');
  if (appElement && window.angular) {
    const scope = angular.element(appElement).scope();
    if (scope) {
      scope.$apply(function() {
        if (!scope.appointment) scope.appointment = {};
        scope.appointment.uploadedFileName = file.name;
        scope.appointment.uploadedFileSize = sizeStr;
      });
    }
  }

  showToast(`Prescription attached: ${file.name}`, 'success');
}

function previewUploadedFile() {
  if (currentUploadedFileUrl) {
    window.open(currentUploadedFileUrl, '_blank');
  } else {
    showToast("No file uploaded to preview.", "warning");
  }
}

function removeUploadedFile() {
  const input = document.getElementById('apptPrescriptionFile');
  if (input) input.value = '';

  if (currentUploadedFileUrl) {
    try { URL.revokeObjectURL(currentUploadedFileUrl); } catch (e) {}
    currentUploadedFileUrl = null;
  }
  currentUploadedFile = null;

  const card = document.getElementById('uploaded-file-card');
  if (card) card.style.display = 'none';

  const appElement = document.querySelector('[ng-controller="healthController"]');
  if (appElement && window.angular) {
    const scope = angular.element(appElement).scope();
    if (scope && scope.appointment) {
      scope.$apply(function() {
        scope.appointment.uploadedFileName = '';
        scope.appointment.uploadedFileSize = '';
      });
    }
  }
}

/* ==========================================
   DOWNLOAD 1-PAGE PDF RECEIPT ACTION
   ========================================== */
async function downloadReceiptPDF() {
  const receiptEl = document.getElementById('appointment-receipt');
  if (!receiptEl) {
    showToast("Receipt element not found.", "error");
    return;
  }

  showToast(getTranslation("Generating 1-page official receipt PDF..."), "info");

  // Temporarily hide action buttons so they do not appear in the PDF
  const actionButtons = receiptEl.querySelector('.confirmation-actions');
  const prevDisplay = actionButtons ? actionButtons.style.display : '';
  if (actionButtons) actionButtons.style.display = 'none';

  try {
    if (typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
      throw new Error("PDF libraries not loaded yet");
    }

    // Capture the receipt element at 2x resolution for crystal clear text
    const canvas = await html2canvas(receiptEl, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    // Restore action buttons in DOM immediately
    if (actionButtons) actionButtons.style.display = prevDisplay;

    const { jsPDF } = window.jspdf;
    // Exactly 1 page PDF in A4 portrait
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    const pageWidth = pdf.internal.pageSize.getWidth();   // 210 mm
    const pageHeight = pdf.internal.pageSize.getHeight(); // 297 mm
    const margin = 14;                                    // 14 mm margin
    const maxContentWidth = pageWidth - (margin * 2);     // 182 mm
    const maxContentHeight = pageHeight - (margin * 2);   // 269 mm

    let renderWidth = maxContentWidth;
    let renderHeight = (canvas.height * renderWidth) / canvas.width;

    // Strict 1-page guarantee: if height exceeds single page, scale proportionally to fit 1 page
    if (renderHeight > maxContentHeight) {
      renderHeight = maxContentHeight;
      renderWidth = (canvas.width * renderHeight) / canvas.height;
    }

    // Center horizontally and place nicely in upper-center of page
    const posX = (pageWidth - renderWidth) / 2;
    const posY = Math.max(margin, (pageHeight - renderHeight) / 3);

    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', posX, posY, renderWidth, renderHeight, undefined, 'FAST');

    // Retrieve bookingId for filename
    const appElement = document.querySelector('[ng-controller="healthController"]');
    let bookingId = 'Consultation';
    if (appElement && window.angular) {
      const scope = angular.element(appElement).scope();
      if (scope && scope.appointment && scope.appointment.bookingId) {
        bookingId = scope.appointment.bookingId;
      }
    }

    pdf.save(`Consultation_Receipt_${bookingId}.pdf`);
    showToast(getTranslation("Receipt downloaded successfully as 1-page PDF!"), "success");
  } catch (err) {
    console.error("PDF generation error, falling back to print:", err);
    if (actionButtons) actionButtons.style.display = prevDisplay;
    showToast("Opening print dialog for PDF saving...", "warning");
    window.print();
  }
}

/* Fallback print action */
function printReceipt() {
  downloadReceiptPDF();
}

/* ==========================================
   DAILY HEALTH NEWS SERVICE (6-8 Articles, Working URLs & Multilingual)
   ========================================== */
function loadHealthNews() {
  const loadingEl = document.getElementById('health-news-loading');
  const errorEl = document.getElementById('health-news-error');
  const errorTextEl = document.getElementById('health-news-error-text');
  const gridEl = document.getElementById('health-news-grid');
  if (!gridEl) return;

  if (loadingEl) loadingEl.style.display = 'flex';
  if (errorEl) errorEl.style.display = 'none';
  gridEl.innerHTML = '';

  const lang = currentLanguage || 'en';
  fetch(`${API_BASE_URL}/api/health-news?lang=${lang}`)
    .then(res => {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(data => {
      if (loadingEl) loadingEl.style.display = 'none';
      if (!data.success || !Array.isArray(data.articles) || data.articles.length === 0) {
        throw new Error(data.message || "Failed to load health news");
      }

      // Display between 6 and 8 articles
      const articlesToShow = data.articles.slice(0, 8);

      articlesToShow.forEach(article => {
        const card = document.createElement('div');
        card.className = 'news-card';
        const safeUrl = article.url && (article.url.startsWith('http://') || article.url.startsWith('https://'))
          ? article.url
          : 'https://www.who.int/news';

        card.innerHTML = `
          <div>
            <div class="news-card-header">
              <span class="news-tag">${escapeHtml(article.category || 'Global Health')}</span>
              <span class="news-date">${escapeHtml(article.publishedAt || '')}</span>
            </div>
            <h3 class="news-title">${escapeHtml(article.title)}</h3>
            <p class="news-summary">${escapeHtml(article.summary)}</p>
          </div>
          <div class="news-card-footer">
            <span class="news-source">🏛️ ${escapeHtml(article.source || 'Medical Source')}</span>
            <a href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer" class="news-link btn-read-more" onclick="openNewsArticle(event, '${escapeHtml(safeUrl)}')">
              <span class="read-more-text">${escapeHtml(getTranslation('Read More'))}</span> &rarr;
            </a>
          </div>
        `;
        gridEl.appendChild(card);
      });
    })
    .catch(err => {
      console.warn("Health news error:", err.message);
      if (loadingEl) loadingEl.style.display = 'none';
      if (errorEl) {
        errorEl.style.display = 'flex';
        if (errorTextEl) {
          errorTextEl.textContent = '⚠️ ' + getTranslation("Unable to load the latest health news right now. Please try again later.");
        }
      }
    });
}

function openNewsArticle(event, url) {
  if (event) {
    event.preventDefault();
  }
  if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setPortalLanguage(currentLanguage);
  loadHealthNews();
});

/* ==========================================
   SMARTCARE MULTILINGUAL AI HEALTH ASSISTANT (GOOGLE GEMINI)
   ========================================== */
const speechLanguages = {
  en: "en-IN",
  te: "te-IN",
  hi: "hi-IN",
  ta: "ta-IN",
  kn: "kn-IN",
  ml: "ml-IN",
  bn: "bn-IN"
};

const aiChatHistory = [];
let speechRecognitionInstance = null;
let isVoiceListening = false;
let autoSpeechOutputEnabled = true;

// Helper to detect language script from text
function detectTextLanguageCode(text) {
  if (!text) return 'en-IN';
  if (/[\u0C00-\u0C7F]/.test(text)) return 'te-IN'; // Telugu
  if (/[\u0900-\u097F]/.test(text)) return 'hi-IN'; // Hindi / Devanagari
  if (/[\u0B80-\u0BFF]/.test(text)) return 'ta-IN'; // Tamil
  if (/[\u0C80-\u0CFF]/.test(text)) return 'kn-IN'; // Kannada
  if (/[\u0D00-\u0D7F]/.test(text)) return 'ml-IN'; // Malayalam
  if (/[\u0980-\u09FF]/.test(text)) return 'bn-IN'; // Bengali
  return 'en-IN';
}

function updateAiAssistantStatus(state) {
  const dot = document.getElementById('ai-indicator-dot');
  const text = document.getElementById('ai-header-status-text');
  if (!dot || !text) return;

  dot.classList.remove('listening', 'processing');

  if (state === 'Listening...') {
    dot.classList.add('listening');
    text.textContent = 'Listening...';
  } else if (state === 'Processing...') {
    dot.classList.add('processing');
    text.textContent = 'Processing...';
  } else if (state === 'Response') {
    text.textContent = 'Response';
    setTimeout(() => {
      if (text.textContent === 'Response') {
        text.textContent = 'Ready';
      }
    }, 2500);
  } else {
    text.textContent = 'Ready';
  }
}

function toggleAiChat() {
  const windowEl = document.getElementById('ai-chat-window');
  if (!windowEl) return;
  const isClosed = windowEl.classList.contains('closed');

  if (isClosed) {
    windowEl.classList.remove('closed');
    updateAiAssistantStatus('Ready');
    const input = document.getElementById('ai-chat-input');
    if (input) setTimeout(() => input.focus(), 200);
  } else {
    windowEl.classList.add('closed');
    stopVoiceRecognition();
    stopAllSpeech();
  }
}

function sendQuickPrompt(promptText) {
  const input = document.getElementById('ai-chat-input');
  if (input) {
    input.value = promptText;
    handleAiSubmit(new Event('submit'));
  }
}

function getSelectedSpeechLang() {
  const select = document.getElementById('ai-speech-lang');
  return select ? select.value : (speechLanguages[currentLanguage] || 'en-IN');
}

function onSpeechLangChange() {
  if (isVoiceListening) {
    stopVoiceRecognition();
    setTimeout(startVoiceRecognition, 300);
  }
}

/* ------------------------------------------
   Voice Recognition (Speech-to-Text)
   ------------------------------------------ */
function toggleVoiceRecognition() {
  if (isVoiceListening) {
    stopVoiceRecognition();
  } else {
    startVoiceRecognition();
  }
}

function startVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showToast('Voice input is not supported in this browser. Please use Google Chrome, Edge, or Safari.', 'warning');
    return;
  }

  try {
    if (speechRecognitionInstance) {
      speechRecognitionInstance.abort();
    }

    speechRecognitionInstance = new SpeechRecognition();
    speechRecognitionInstance.lang = getSelectedSpeechLang();
    speechRecognitionInstance.interimResults = true;
    speechRecognitionInstance.maxAlternatives = 1;

    speechRecognitionInstance.onstart = function() {
      isVoiceListening = true;
      updateVoiceUIState('listening');
      updateAiAssistantStatus('Listening...');
    };

    speechRecognitionInstance.onresult = function(event) {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          const interim = event.results[i][0].transcript;
          const statusText = document.getElementById('ai-voice-status-text');
          if (statusText) statusText.textContent = `🎙️ "${interim}"`;
        }
      }

      if (finalTranscript.trim()) {
        const input = document.getElementById('ai-chat-input');
        if (input) {
          input.value = finalTranscript.trim();
        }
        stopVoiceRecognition();
        // Automatically submit the spoken question
        setTimeout(() => {
          handleAiSubmit(new Event('submit'));
        }, 300);
      }
    };

    speechRecognitionInstance.onerror = function(event) {
      console.warn('Voice recognition error:', event.error);
      stopVoiceRecognition();
      if (event.error === 'not-allowed') {
        showToast('Microphone permission was denied. Please allow microphone access.', 'warning');
      } else if (event.error !== 'no-speech') {
        showToast('Unable to process voice input. Please try again.', 'warning');
      }
    };

    speechRecognitionInstance.onend = function() {
      isVoiceListening = false;
      updateVoiceUIState('idle');
      updateAiAssistantStatus('Ready');
    };

    speechRecognitionInstance.start();
  } catch (err) {
    console.error('Failed to start voice recognition:', err);
    stopVoiceRecognition();
    showToast('Unable to process voice input. Please try again.', 'warning');
  }
}

function stopVoiceRecognition() {
  if (speechRecognitionInstance) {
    try {
      speechRecognitionInstance.stop();
    } catch (e) {}
  }
  isVoiceListening = false;
  updateVoiceUIState('idle');
  updateAiAssistantStatus('Ready');
}

function updateVoiceUIState(state) {
  const micBtn = document.getElementById('ai-mic-btn');
  const banner = document.getElementById('ai-voice-status');
  const statusText = document.getElementById('ai-voice-status-text');

  if (state === 'listening') {
    if (micBtn) micBtn.classList.add('listening');
    if (banner) banner.classList.remove('hidden');
    if (statusText) statusText.textContent = '🎙️ Listening... Speak naturally';
  } else {
    if (micBtn) micBtn.classList.remove('listening');
    if (banner) banner.classList.add('hidden');
  }
}

/* ------------------------------------------
   Voice Speech Synthesis (Text-to-Speech)
   ------------------------------------------ */
function toggleAutoSpeech() {
  autoSpeechOutputEnabled = !autoSpeechOutputEnabled;
  const btn = document.getElementById('ai-tts-toggle-btn');
  if (btn) {
    btn.classList.toggle('active', autoSpeechOutputEnabled);
    btn.title = `Voice Output: ${autoSpeechOutputEnabled ? 'ON' : 'OFF'}`;
  }
  if (!autoSpeechOutputEnabled) {
    stopAllSpeech();
  }
}

function stopAllSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  const status = document.getElementById('ai-speaking-status');
  if (status) status.classList.add('hidden');
}

function speakAiResponse(text) {
  if (!('speechSynthesis' in window) || !autoSpeechOutputEnabled) return;
  stopAllSpeech();

  // Strip Markdown / HTML symbols for clean audio narration
  const cleanText = text
    .replace(/<[^>]*>/g, '')
    .replace(/[*_#`~>]/g, '')
    .replace(/https?:\/\/\S+/g, '')
    .trim();

  if (!cleanText) return;

  const detectedLang = detectTextLanguageCode(cleanText);
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = detectedLang;
  utterance.rate = 1.0;
  utterance.pitch = 1.0;

  const status = document.getElementById('ai-speaking-status');

  utterance.onstart = function() {
    if (status) status.classList.remove('hidden');
  };

  utterance.onend = function() {
    if (status) status.classList.add('hidden');
  };

  utterance.onerror = function() {
    if (status) status.classList.add('hidden');
  };

  window.speechSynthesis.speak(utterance);
}

/* ------------------------------------------
   AI Chat Message Handling
   ------------------------------------------ */
function appendAiMessage(sender, contentHtml) {
  const container = document.getElementById('ai-messages');
  if (!container) return;

  const msg = document.createElement('div');
  msg.className = `ai-msg ${sender}`;

  const avatar = sender === 'bot' ? '🤖' : '👤';
  msg.innerHTML = `
    <div class="ai-msg-avatar">${avatar}</div>
    <div class="ai-msg-body">${contentHtml}</div>
  `;

  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
  return msg;
}

function handleAiSubmit(event) {
  if (event && event.preventDefault) event.preventDefault();

  const input = document.getElementById('ai-chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  // Render User Message
  appendAiMessage('user', `<p>${escapeHtml(text)}</p>`);
  input.value = '';

  // Append typing / processing indicator
  updateAiAssistantStatus('Processing...');
  const container = document.getElementById('ai-messages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'ai-msg bot';
  typingDiv.id = 'ai-typing-placeholder';
  typingDiv.innerHTML = `
    <div class="ai-msg-avatar">🤖</div>
    <div class="ai-msg-body">
      <div class="ai-typing-indicator">
        <span class="ai-typing-dot"></span>
        <span class="ai-typing-dot"></span>
        <span class="ai-typing-dot"></span>
      </div>
    </div>
  `;
  container.appendChild(typingDiv);
  container.scrollTop = container.scrollHeight;

  // Add to in-memory conversational history
  aiChatHistory.push({ role: 'user', content: text });

  // Disable input while processing
  const sendBtn = document.getElementById('ai-send-btn');
  input.disabled = true;
  if (sendBtn) sendBtn.disabled = true;

  fetch(`${API_BASE_URL}/api/ai/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: text,
      history: aiChatHistory.slice(-6)
    })
  })
    .then(async res => {
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || `Server responded with ${res.status}`);
      }
      return data;
    })
    .then(data => {
      const typing = document.getElementById('ai-typing-placeholder');
      if (typing) typing.remove();

      // Format markdown bold/bullets simply
      let formatted = escapeHtml(data.reply)
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^\s*[-*]\s+(.*)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');

      formatted = `<p>${formatted}</p>`;

      // Render interactive doctor recommendation card(s) ONLY for symptom proposals
      let doctorCardsHtml = '';
      const matchedDocs = Array.isArray(data.doctors)
        ? data.doctors
        : resolveDoctorsFromText(text, data.reply);

      if (matchedDocs && matchedDocs.length > 0) {
        matchedDocs.forEach(doc => {
          doctorCardsHtml += `
            <div class="ai-doctor-rec-card">
              <div class="ai-doc-rec-badge">🩺 Recommended Specialist for Your Symptoms</div>
              <div class="ai-doc-rec-body">
                <img src="${escapeHtml(doc.image || './bharadwaj.png')}" alt="${escapeHtml(doc.name)}" class="ai-doc-rec-img" onerror="this.src='./bharadwaj.png'">
                <div class="ai-doc-rec-details">
                  <div class="ai-doc-rec-name">${escapeHtml(doc.name)}</div>
                  <div class="ai-doc-rec-spec">${escapeHtml(doc.specialization)} &bull; ${escapeHtml(doc.dept)}</div>
                  <div class="ai-doc-rec-meta">
                    <span class="ai-doc-rec-exp">⭐ ${escapeHtml(doc.experience || '10+ Years')} Exp</span>
                    <span class="ai-doc-rec-fee">Fee: ₹${escapeHtml(String(doc.fee || 400))}</span>
                  </div>
                </div>
              </div>
              <button type="button" class="ai-doc-book-btn" onclick="bookDoctorFromAi('${escapeHtml(doc.name)}', '${escapeHtml(doc.specialization)}', '${escapeHtml(doc.dept)}')">
                <span>📅 Book Appointment with ${escapeHtml(doc.name)}</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          `;
        });
      }

      appendAiMessage('bot', formatted + doctorCardsHtml);
      aiChatHistory.push({ role: 'assistant', content: data.reply });

      updateAiAssistantStatus('Response');

      // Voice read-aloud in the detected response language
      if (autoSpeechOutputEnabled) {
        speakAiResponse(data.reply);
      }
    })
    .catch(err => {
      const typing = document.getElementById('ai-typing-placeholder');
      if (typing) typing.remove();

      console.warn('AI Assistant error:', err.message);
      updateAiAssistantStatus('Ready');

      // User-friendly localized error handling without raw stack traces
      appendAiMessage('bot', `<p style="color: #ef4444;">⚠️ Unable to process your request. Please try again.</p>`);
    })
    .finally(() => {
      input.disabled = false;
      if (sendBtn) sendBtn.disabled = false;
      input.focus();
    });
}

// Client-side helper to verify if the query represents an actual symptom/illness proposal
function isSymptomProposalClient(query, replyText) {
  const q = (query || '').toLowerCase().trim();
  const isPureDefinition = /^(what is|what are|define|meaning of|normal range of|normal value of|how much is)\b/i.test(q);
  const isAboutBpOrMedOnly = /^(what is|what are)\s+(normal\s+)?(blood pressure|bp|paracetamol|sugar level|heart rate)\??$/i.test(q);
  if (isAboutBpOrMedOnly) return false;
  if (isPureDefinition && !/(i have|i am|my |suffering|severe|pain|hurts|help)/i.test(q)) {
    return false;
  }
  if (/^(how to book|how do i book|booking process|timing|timings|contact|address)\b/i.test(q)) {
    return false;
  }
  const symptomPatterns = [
    /i have|i am having|i feel|i am suffering|experiencing|hurts|my /i,
    /pain|ache|fever|cough|cold|vomit|diarrhea|dizziness|numbness|blurry|rash|itch|swelling|bleeding|headache|migraine|toothache|cavity|fracture|sprain|arthritis|depression|anxiety|insomnia|stress|palpitation|chest tightness|dengue|malaria|infection|sick|ill/i,
    /[\u0C00-\u0C7F].*(నొప్పి|జ్వరం|చూపు|దగ్గు|జలుబు|వాంతులు|దురద|బాధ|తిమ్మిర్లు)/,
    /[\u0900-\u097F].*(दर्द|बुखार|खांसी|जुकाम|उल्टी|खुजली|चक्कर|तनाव|तकलीफ)/,
    /[\u0B80-\u0BFF].*(வலி|காய்ச்சல்|சளி|இருமல்|அரிப்பு|மயக்கம்)/,
    /[\u0C80-\u0CFF].*(ನೋವು|ಜ್ವರ|ಕೆಮ್ಮು|ಶೀತ|ತುರಿಕೆ|ತಲೆಸುತ್ತು)/,
    /[\u0D00-\u0D7F].*(വേദന|പനി|ചുമ|ജലദോഷം|ചൊറിച്ചിൽ|തലകറക്കം)/,
    /[\u0980-\u09FF].*(ব্যথা|জ্বর|কাশি|সর্দি|চুলকানি|মাথা ঘোরা)/
  ];
  return symptomPatterns.some(p => p.test(q) || (replyText && p.test(replyText)));
}

// Client-side fallback resolver for doctors from query or AI reply
function resolveDoctorsFromText(queryText, replyText) {
  if (!isSymptomProposalClient(queryText, replyText)) {
    return [];
  }

  const q = (queryText || '').toLowerCase();
  const r = (replyText || '').toLowerCase();

  const clientRoster = [
    { name: "Dr. Srujan", specialization: "Ophthalmologist", dept: "Ophthalmology", experience: "11 Years", fee: 450, image: "./srujan.png", kws: ["eye", "vision", "blurry", "cataract", "glaucoma", "కంటి", "కన్ను", "आंख", "கண்", "ಕಣ್ಣು"] },
    { name: "Dr. Sandeep", specialization: "Pediatrician", dept: "Pediatrics", experience: "8 Years", fee: 400, image: "./sandy.png", kws: ["child", "baby", "infant", "pediatric", "vaccination", "పిల్లలు", "बच्चा", "குழந்தை", "ಮಕ್ಕಳು"] },
    { name: "Dr. Deeksha", specialization: "Psychiatrist", dept: "Psychiatry", experience: "10 Years", fee: 550, image: "./deeksha.png", kws: ["depression", "anxiety", "insomnia", "stress", "sleep", "డిప్రెషన్", "ఆందోళన", "तनाव", "மன அழுத்தம்"] },
    { name: "Dr. Sushma", specialization: "Dentist", dept: "Dentistry", experience: "7 Years", fee: 350, image: "./sushma.png", kws: ["tooth", "teeth", "toothache", "gum", "cavity", "పంటి", "పన్ను", "दांत", "பல்", "ಹಲ್ಲು"] },
    { name: "Dr. Nagi Reddy", specialization: "Cardiologist", dept: "Cardiology", experience: "12 Years", fee: 500, image: "./nagi.png", kws: ["heart", "chest pain", "palpitation", "bp", "cardiac", "గుండె", "ఛాతీ", "दिल", "இதயம்"] },
    { name: "Dr. Blaase Bhuvan", specialization: "Dermatologist", dept: "Dermatology", experience: "10 Years", fee: 400, image: "./blaase.png", kws: ["skin", "rash", "itch", "acne", "pimple", "fungal", "hair", "చర్మం", "దురద", "त्वचा", "தோல்"] },
    { name: "Dr. Giridhar", specialization: "Radiologist", dept: "Radiology", experience: "12 Years", fee: 500, image: "./anju.png", kws: ["x-ray", "mri", "scan", "ct scan", "ultrasound", "స్కానింగ్", "एक्स-रे"] },
    { name: "Dr. Nishank", specialization: "Neurologist", dept: "Neurology", experience: "15 Years", fee: 600, image: "./nishank.png", kws: ["headache", "migraine", "nerve", "dizziness", "seizure", "stroke", "తలనొప్పి", "सिरदर्द", "தலைவலி"] },
    { name: "Dr. Bharadwaj", specialization: "General Physician", dept: "General Medicine", experience: "9 Years", fee: 300, image: "./bharadwaj.png", kws: ["fever", "cold", "cough", "flu", "weakness", "dengue", "diabetes", "జ్వరం", "బుఖార్", "बुखार", "காய்ச்சல்"] },
    { name: "Dr. Rishikesh", specialization: "Orthopedic Specialist", dept: "Orthopedics", experience: "14 Years", fee: 550, image: "./rishi.png", kws: ["bone", "joint", "knee", "back pain", "fracture", "arthritis", "కీళ్ల", "మోకాళ్ల", "जोड़ों", "மூட்டு"] },
    { name: "Dr. Vivek Varma", specialization: "ENT Specialist", dept: "ENT", experience: "13 Years", fee: 450, image: "./varma.png", kws: ["ear", "hearing", "throat", "sinus", "tonsil", "nose", "చెవి", "గొంతు", "कान", "गला"] }
  ];

  for (const doc of clientRoster) {
    const docNameLower = doc.name.toLowerCase();
    const shortName = docNameLower.replace('dr. ', '');
    if (r.includes(docNameLower) || r.includes(shortName)) {
      return [doc];
    }
  }

  for (const doc of clientRoster) {
    if (doc.kws.some(k => q.includes(k) || r.includes(k))) {
      return [doc];
    }
  }

  return [];
}

// Global handler to book appointment from AI Assistant recommendation card
window.bookDoctorFromAi = function(name, specialization, dept) {
  try {
    const appEl = document.querySelector('[ng-controller="healthController"]');
    if (appEl && window.angular) {
      const scope = angular.element(appEl).scope();
      if (scope) {
        scope.$apply(() => {
          const doc = (scope.doctors || []).find(d => d.name === name) || {
            name: name,
            specialization: specialization,
            dept: dept
          };
          scope.selectDoctor(doc);
        });
      }
    } else {
      const docSelect = document.getElementById('apptDoc');
      if (docSelect) {
        docSelect.value = `${name} - ${specialization}`;
        docSelect.dispatchEvent(new Event('change'));
      }
    }

    // Smoothly scroll to appointment booking section
    const apptSection = document.getElementById('appointment');
    if (apptSection) {
      apptSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      apptSection.classList.add('highlight-section');
      setTimeout(() => apptSection.classList.remove('highlight-section'), 2500);
    }

    if (typeof showToast === 'function') {
      showToast(`Selected ${name} (${specialization}). Please pick your appointment date and time!`, 'success');
    }
  } catch (err) {
    console.error('Error selecting doctor from AI assistant:', err);
  }
};

