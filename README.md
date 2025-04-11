OnChain
OnChain is a web-based dashboard designed for a fictional decentralized application (DApp). It enables users to view and interact with mock blockchain data, emphasizing seamless frontend-backend integration using modern frameworks and best coding practices.

🚀 Features
Real-Time Transaction Display: View a list of mock blockchain transactions with details like title, description, amount, currency, and date.

Responsive Design: Built with Tailwind CSS and DaisyUI for a clean and responsive user interface.

Modern Stack: Utilizes React with Vite for fast development and hot module replacement.

Mock Data Integration: Easily integrates mock data to simulate real blockchain interactions.

🛠️ Tech Stack
Frontend: React, Vite

Styling: Tailwind CSS, DaisyUI

State Management: React Hooks (useState, useEffect)

Utilities: ESLint for code linting

📦 Installation
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/Islam-Shamim/OnChain.git
cd OnChain
Install Dependencies: Ensure you have Node.js installed. Then run:

bash
Copy
Edit
npm install
Start the Development Server:

bash
Copy
Edit
npm run dev
The application will be available at http://localhost:5173/.

📁 Project Structure
arduino
Copy
Edit
OnChain/
├── public/
├── src/
│   ├── components/
│   │   └── TransactionItem.jsx
│   ├── data/
│   │   └── transactions.js
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
components/: Contains reusable React components.

data/: Holds mock transaction data.

App.jsx: Main application component.

main.jsx: Entry point of the React application.
