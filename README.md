node version - v18.17.0

start --> npm run dev
## Finance-API

A secure and modular backend API built with **Node.js**, **Express.js**, and **Passport.js**, designed to manage financial operations, user hierarchy, ROI calculations, and PDF generation.

## 🚀 Features

- ✅ **User Authentication**: Secure login system using Passport.js.
- 👥 **User & Sub-User Roles**: Main users can add sub-users (e.g., agents) to manage investment portfolios.
- 💵 **Account Transactions**: Record, retrieve, and manage user-specific financial transactions.
- 📄 **PDF Generation**: Automatically generate investment summary PDFs.
- 📊 **ROI Calculation**: Calculates Return on Investment at a fixed 12% rate based on investment amount and duration.
- 🗓️ **Investment Expiry Tracking**: Tracks and displays remaining days until investment plans expire.
- 🧱 **Modular MVC Architecture**: Organized using Model-View-Controller principles for scalability and maintainability.
- 🌐 **RESTful API Design**: Clean and consistent endpoints for integration with any frontend or third-party service.

## 🧠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **Passport.js**
- **PDFKit (or html-pdf)**
- **Moment.js** (for date handling)
- **Nodemon**, **Postman** (for development & testing)

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/UrmitRaiyani/Finance-API.git
cd Finance-API
```

2. Install dependencies: npm install
3.Start the development server: npm run dev 

📄 Project Use Case
This API is ideal for financial platforms where users need to track investments, assign agents, generate summaries, and monitor returns. Built during a Node.js internship to demonstrate real-world backend development, API design, and security practices.
