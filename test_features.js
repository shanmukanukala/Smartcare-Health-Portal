const http = require('http');

async function post(path, body) {
  const data = JSON.stringify(body);
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    }, res => {
      let resBody = '';
      res.on('data', chunk => resBody += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(resBody) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: resBody });
        }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function get(path) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path,
      method: 'GET'
    }, res => {
      let resBody = '';
      res.on('data', chunk => resBody += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(resBody) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: resBody });
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

async function runTests() {
  console.log('====================================================');
  console.log('🏥 STARTING COMPREHENSIVE AUTOMATED VERIFICATION SUITE');
  console.log('====================================================');

  const ts = Date.now();

  // ==========================================
  // 1. PATIENT REGISTRATION & BLOOD DONATION CONSENT
  // ==========================================
  console.log('\n--- 1. PATIENT REGISTRATION & BLOOD DONATION CONSENT ---');

  // Case 1: Pre-check new patient
  const patientA = {
    name: 'Suresh Raina ' + ts,
    dob: '1990-11-27',
    gender: 'Male',
    phone: '9848012345',
    email: `suresh.${ts}@example.com`,
    bloodGroup: 'B+',
    address: 'Banjara Hills, Road No 12, Hyderabad'
  };

  console.log('[Test 1.1] Pre-check new patient via /api/check-patient...');
  const check1 = await post('/api/check-patient', patientA);
  console.log('  Response:', check1.status, check1.data);
  if (!check1.data.success || check1.data.duplicate) {
    throw new Error('Test 1.1 failed: New patient was wrongly flagged as duplicate in pre-check');
  }

  console.log('[Test 1.1b] Verify blood group is mandatory (Must return 400 if missing)...');
  const checkNoBg = await post('/api/check-patient', { ...patientA, bloodGroup: '' });
  if (checkNoBg.status !== 400) {
    throw new Error('Test 1.1b failed: Missing bloodGroup did not return 400 in check-patient');
  }
  const regNoBg = await post('/api/register', { ...patientA, bloodGroup: '' });
  if (regNoBg.status !== 400) {
    throw new Error('Test 1.1b failed: Missing bloodGroup did not return 400 in register');
  }

  // Case 2: Register with "yes" consent
  console.log('[Test 1.2] Register Patient A with bloodDonationConsent: "yes"...');
  const reg1 = await post('/api/register', { ...patientA, bloodDonationConsent: 'yes' });
  console.log('  Response:', reg1.status, reg1.data.success, 'Consent:', reg1.data.patient?.bloodDonationConsent);
  if (!reg1.data.success || reg1.data.patient?.bloodDonationConsent !== 'yes') {
    throw new Error('Test 1.2 failed: bloodDonationConsent "yes" was not saved properly');
  }

  // Case 3: Pre-check duplicate patient
  console.log('[Test 1.3] Pre-check same Patient A via /api/check-patient (Must detect duplicate)...');
  const checkDup = await post('/api/check-patient', patientA);
  console.log('  Response:', checkDup.status, 'Duplicate:', checkDup.data.duplicate, 'Message:', checkDup.data.message);
  if (checkDup.status !== 409 || !checkDup.data.duplicate || checkDup.data.message !== 'Already Registered') {
    throw new Error('Test 1.3 failed: Existing patient not detected as duplicate in pre-check');
  }

  // Case 4: Duplicate attempt with DIFFERENT consent choice ("no")
  // Consent choice must NOT bypass duplicate detection!
  console.log('[Test 1.4] Attempt registering Patient A with DIFFERENT consent: "no" (Must reject duplicate)...');
  const regDup = await post('/api/register', { ...patientA, bloodDonationConsent: 'no' });
  console.log('  Response:', regDup.status, 'Duplicate:', regDup.data.duplicate, 'Message:', regDup.data.message);
  if (regDup.status !== 409 || !regDup.data.duplicate || regDup.data.message !== 'Already Registered') {
    throw new Error('Test 1.4 failed: Consent choice incorrectly bypassed duplicate detection!');
  }

  // Case 5: Register Patient B with "no" consent
  console.log('[Test 1.5] Register Patient B with bloodDonationConsent: "no"...');
  const patientB = {
    name: 'Anjali Sharma ' + ts,
    dob: '1995-04-12',
    gender: 'Female',
    phone: '9848098765',
    email: `anjali.${ts}@example.com`,
    bloodGroup: 'O-',
    address: 'Jubilee Hills, Hyderabad'
  };
  const reg2 = await post('/api/register', { ...patientB, bloodDonationConsent: 'no' });
  console.log('  Response:', reg2.status, reg2.data.success, 'Consent:', reg2.data.patient?.bloodDonationConsent);
  if (!reg2.data.success || reg2.data.patient?.bloodDonationConsent !== 'no') {
    throw new Error('Test 1.5 failed: bloodDonationConsent "no" was not saved properly');
  }

  // Case 6: Register Patient C skipping consent (null / omitted)
  console.log('[Test 1.6] Register Patient C with skipped consent (null / omitted)...');
  const patientC = {
    name: 'Vikram Seth ' + ts,
    dob: '1988-09-03',
    gender: 'Male',
    phone: '9848055555',
    email: `vikram.${ts}@example.com`,
    bloodGroup: 'A+',
    address: 'Gachibowli, Hyderabad'
  };
  const reg3 = await post('/api/register', patientC);
  console.log('  Response:', reg3.status, reg3.data.success, 'Consent:', reg3.data.patient?.bloodDonationConsent);
  if (!reg3.data.success || reg3.data.patient?.bloodDonationConsent !== null) {
    throw new Error('Test 1.6 failed: skipped bloodDonationConsent was not null');
  }

  console.log(' ALL REGISTRATION & BLOOD DONATION CONSENT TESTS PASSED!');

  // ==========================================
  // 2. ONLINE CONSULTATION TIMINGS (6 PM - 10 PM)
  // ==========================================
  console.log('\n--- 2. ONLINE CONSULTATION TIMINGS (6:00 PM - 10:00 PM) ---');

  const testDoctor = 'Dr. Nishank - Neurologist';
  const testDate = '2026-11-25';

  console.log('[Test 2.1] Fetching slots for Online Consultation (type=Online)...');
  const onlineAvail = await get(`/api/appointments/availability?doctor=${encodeURIComponent(testDoctor)}&date=${testDate}&type=Online`);
  const onlineSlots = onlineAvail.data.availableSlots;
  console.log('  Online slots returned:', onlineSlots);

  const expectedOnlineSlots = ['06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM'];
  if (!Array.isArray(onlineSlots) || onlineSlots.length !== 5) {
    throw new Error(`Test 2.1 failed: Expected exactly 5 online slots, got ${onlineSlots.length}`);
  }
  for (const slot of expectedOnlineSlots) {
    if (!onlineSlots.includes(slot)) {
      throw new Error(`Test 2.1 failed: Expected slot ${slot} missing from online slots`);
    }
  }
  // Verify daytime slots are NOT present in Online mode
  const daytimeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];
  for (const slot of daytimeSlots) {
    if (onlineSlots.includes(slot)) {
      throw new Error(`Test 2.1 failed: Daytime slot ${slot} leaked into Online consultation!`);
    }
  }

  console.log('[Test 2.2] Fetching slots for In-Person Consultation (type=In-Person)...');
  const inPersonAvail = await get(`/api/appointments/availability?doctor=${encodeURIComponent(testDoctor)}&date=${testDate}&type=In-Person`);
  const inPersonSlots = inPersonAvail.data.availableSlots;
  console.log('  In-Person slots returned:', inPersonSlots);

  if (!Array.isArray(inPersonSlots) || inPersonSlots.length !== 8) {
    throw new Error(`Test 2.2 failed: Expected 8 in-person daytime slots, got ${inPersonSlots.length}`);
  }
  // Verify online slots are NOT present in In-Person mode
  for (const slot of expectedOnlineSlots) {
    if (inPersonSlots.includes(slot)) {
      throw new Error(`Test 2.2 failed: Online slot ${slot} leaked into In-Person consultation!`);
    }
  }

  console.log('[Test 2.3] Booking online slot with invalid daytime timing (Must reject)...');
  const invalidBook = await post('/api/appointments', {
    patientName: 'Test Invalid Slot',
    department: 'Neurology',
    doctor: testDoctor,
    date: testDate,
    time: '10:00 AM', // daytime slot for Online consultation
    type: 'Online',
    reason: 'Testing validation'
  });
  console.log('  Response:', invalidBook.status, invalidBook.data);
  if (invalidBook.status !== 400 || invalidBook.data.success) {
    throw new Error('Test 2.3 failed: Server accepted an invalid daytime timing for Online consultation!');
  }

  console.log('ALL ONLINE CONSULTATION TIMING TESTS PASSED!');

  // ==========================================
  // 3. APPOINTMENT 15-BOOKING CAPACITY LIMIT
  // ==========================================
  console.log('\n--- 3. 15-BOOKING CAPACITY LIMIT PER SLOT ---');

  const testOnlineSlot = '08:00 PM';
  const onlineTestDate = '2026-12-' + String((ts % 25) + 1).padStart(2, '0');

  console.log(`[Test 3.1] Booking 15 appointments for ${testDoctor} on ${onlineTestDate} at ${testOnlineSlot}...`);
  for (let i = 1; i <= 15; i++) {
    const bookRes = await post('/api/appointments', {
      patientName: `Online Patient ${i}`,
      department: 'Neurology',
      doctor: testDoctor,
      date: onlineTestDate,
      time: testOnlineSlot,
      type: 'Online',
      reason: 'Routine Consultation'
    });
    if (!bookRes.data.success) {
      throw new Error(`Test 3.1 failed: Booking ${i} failed prematurely: ${JSON.stringify(bookRes.data)}`);
    }
  }
  console.log('  15 bookings successfully created.');

  console.log('[Test 3.2] Checking slot availability after reaching 15 capacity (Must be hidden)...');
  const capCheck = await get(`/api/appointments/availability?doctor=${encodeURIComponent(testDoctor)}&date=${onlineTestDate}&type=Online`);
  console.log('  Available slots:', capCheck.data.availableSlots);
  console.log('  Full slots:', capCheck.data.fullSlots);

  if (capCheck.data.availableSlots.includes(testOnlineSlot)) {
    throw new Error(`Test 3.2 failed: Slot ${testOnlineSlot} was NOT removed from available slots!`);
  }
  if (!capCheck.data.fullSlots.includes(testOnlineSlot)) {
    throw new Error(`Test 3.2 failed: Slot ${testOnlineSlot} not listed in fullSlots!`);
  }

  console.log('[Test 3.3] Attempting 16th booking for full slot (Must be rejected with 400 & slotFull: true)...');
  const book16 = await post('/api/appointments', {
    patientName: 'Online Patient 16 (Over Limit)',
    department: 'Neurology',
    doctor: testDoctor,
    date: onlineTestDate,
    time: testOnlineSlot,
    type: 'Online',
    reason: 'Should be rejected'
  });
  console.log('  Response:', book16.status, book16.data);
  if (book16.status !== 400 || book16.data.success || !book16.data.slotFull) {
    throw new Error('Test 3.3 failed: 16th booking was not properly rejected as slotFull!');
  }
  if (book16.data.message !== 'This time slot is no longer available.') {
    throw new Error(`Test 3.3 failed: Message mismatch: ${book16.data.message}`);
  }

  console.log(' ALL CAPACITY LIMIT TESTS PASSED!');

  // ==========================================
  // 4. DAILY HEALTH NEWS & MULTILINGUAL ARTICLES
  // ==========================================
  console.log('\n--- 4. DAILY HEALTH NEWS & MULTILINGUAL LOCALIZATION ---');

  console.log('[Test 4.1] Fetching health news in English (lang=en)...');
  const newsEn = await get('/api/health-news?lang=en');
  console.log('  Articles count:', newsEn.data.articles?.length);
  if (!newsEn.data.success || !Array.isArray(newsEn.data.articles)) {
    throw new Error('Test 4.1 failed: News endpoint returned failure');
  }
  if (newsEn.data.articles.length < 6 || newsEn.data.articles.length > 8) {
    throw new Error(`Test 4.1 failed: Expected 6-8 articles, got ${newsEn.data.articles.length}`);
  }

  // Verify article structure and valid external URLs
  newsEn.data.articles.forEach((art, idx) => {
    console.log(`  [Article ${idx + 1}] ${art.title.slice(0, 50)}... | Source: ${art.source} | URL: ${art.url}`);
    if (!art.title || !art.summary || !art.source || !art.publishedAt || !art.url) {
      throw new Error(`Test 4.1 failed: Article ${idx + 1} is missing required fields`);
    }
    if (!art.url.startsWith('http://') && !art.url.startsWith('https://')) {
      throw new Error(`Test 4.1 failed: Article ${idx + 1} has invalid URL: ${art.url}`);
    }
  });

  // Verify multilingual news for Telugu, Hindi, Tamil, Kannada, Malayalam, Bengali
  const languages = ['te', 'hi', 'ta', 'kn', 'ml', 'bn'];
  for (const lang of languages) {
    console.log(`[Test 4.2] Fetching health news for language: ${lang}...`);
    const newsLang = await get(`/api/health-news?lang=${lang}`);
    if (!newsLang.data.success || newsLang.data.articles?.length < 6) {
      throw new Error(`Test 4.2 failed for lang=${lang}`);
    }
    const firstArt = newsLang.data.articles[0];
    console.log(`  [${lang}] Headline: ${firstArt.title.slice(0, 45)}...`);
    // Ensure URL is NOT translated
    if (!firstArt.url.startsWith('http')) {
      throw new Error(`Test 4.2 failed: URL was corrupted or translated for lang=${lang}`);
    }
  }

  console.log(' ALL DAILY HEALTH NEWS TESTS PASSED!');

  console.log('\n====================================================');
  console.log('🎉 ALL AUTOMATED VERIFICATION SUITE TESTS PASSED 100%!');
  console.log('====================================================');
}

runTests().catch(err => {
  console.error('\n TEST SUITE ENCOUNTERED AN ERROR:', err);
  process.exit(1);
});
