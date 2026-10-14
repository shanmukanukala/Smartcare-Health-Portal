# Smart Healthcare Portal - MongoDB Integration

This project is a healthcare web portal connected to a local **MongoDB** database.

## Architecture

* **Frontend:**
  * `smart_healthcare.html` - Semantic HTML UI with patient registration, doctor catalog, and appointment scheduler.
  * `style.css` - Design system, responsive layouts, and animations.
  * `app.js` - Client-side validation, toast notifications, AngularJS controllers, and MongoDB REST API client.
* **Backend:**
  * `server.js` - Express server providing REST API endpoints and serving the frontend.
  * `models/Patient.js` - Mongoose model for patient registrations (Collection: `patients`).
  * `models/Appointment.js` - Mongoose model for booked appointments (Collection: `appointments`).

## Prerequisites

* **Node.js** (v18+)
* **MongoDB Server** (Running locally on `mongodb://127.0.0.1:27017`)

## Running the Application

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Database & Collections

* **Database Name:** `smart_healthcare`
* **Collections:**
  * `patients`: Stores registered patient records (Full Name, DOB, Gender, Phone, Email, Blood Group, Address, Timestamp).
  * `appointments`: Stores scheduled appointments (Booking ID, Patient Name, Department, Doctor, Date, Time, Mode, Reason, Medical History, Status).

## REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/status` | Verifies live MongoDB connection state |
| `POST` | `/api/register` | Saves new patient registration to MongoDB |
| `GET` | `/api/patients` | Retrieves all registered patients from MongoDB |
| `POST` | `/api/appointments` | Saves new appointment booking to MongoDB |
| `GET` | `/api/appointments` | Retrieves all booked appointments from MongoDB |
| `GET` | `/api/ai/config` | Checks if Google API Key is configured on the server |
| `POST` | `/api/ai/chat` | AI Medical Assistant powered by Google Gemini API |

## Google Gemini AI Assistant Configuration

The portal features an integrated **AI Healthcare Assistant** to triage symptoms and guide patients to the appropriate department and doctor.

To enable the assistant, configure your **Google Gemini API Key**:
1. Get a free API key at [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Either:
   * **Option A (.env file):** Add your key in `.env`:
     ```env
     GOOGLE_API_KEY=AIzaSy...
     ```
   * **Option B (In-Browser UI):** Click the **⚙️ settings icon** in the AI Assistant chat header on the webpage and paste your key.
