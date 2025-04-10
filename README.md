# 💱 Currency Converter App

A full-stack currency converter app using Node.js (Express) for backend and React for frontend. Fetches real-time exchange rates from CurrencyFreaks API.

---

## 📁 Folder Structure

Currency-converter-app/
├── backend/
│   ├── middleware/
│   │   └── validateInput.js
│   ├── routes/
│   │   └── convert.js
│   ├── node_modules/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── ConverterForm.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
└── README.md

---

## 🔧 Backend Setup

1. Open terminal and go to the backend folder:  
   `cd backend`

2. Install dependencies:  
   `npm install express axios cors dotenv`

3. Create a `.env` file inside the backend folder and add your CurrencyFreaks API key:  
   `API_KEY=2c59ccd4ae854737a3fef91db9907f60` 

4. Start the server:  
   `node index.js`

   The backend will run on http://localhost:3000

---

## 🌐 Frontend Setup

1. Open another terminal and go to the frontend folder:  
   `cd frontend`

2. Install frontend dependencies:  
   `npm install axios react-select`

3. Start the React development server:  
   `npm start`

   The frontend will run on http://localhost:3001 or whichever port is available

---

## ✅ Features

- Convert currency using real-time rates from CurrencyFreaks  
- Select source and target currencies from dropdown  
- Displays converted amount and exchange rate  
- Tracks conversion history  
- Graceful error handling for invalid input and API issues

---

## 🧪 Sample API Request

**POST** http://localhost:3000/convert

**Body:**
```json
{
  "source": "USD",
  "target": "INR",
  "amount": 10
}

![image](https://github.com/user-attachments/assets/765c99e7-d227-4815-8731-e85a84df39bd)



