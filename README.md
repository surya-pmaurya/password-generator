# Password Generator

Welcome to the **Password Generator** project! This is a responsive React application that allows users to quickly generate secure, customizable passwords.

## 🎯 Purpose of the Project

The purpose of this project is to build a handy utility tool while demonstrating core React concepts. It heavily utilizes React Hooks to manage application logic:
- **`useState`**: To manage the state of password length, number inclusion, and special character inclusion.
- **`useCallback`**: To memoize the password generation and copy-to-clipboard functions, optimizing performance.
- **`useEffect`**: To automatically regenerate the password whenever the user changes their preferences.
- **`useRef`**: To directly interact with the DOM element for selecting the password text before copying it to the clipboard.

## 🚀 Tech Stack

### Frontend
- **Framework:** React.js powered by Vite for a fast and optimized development experience.
- **Styling:** Tailwind CSS for a modern, dark-themed, and responsive user interface.
- **State Management:** React Hooks.

---

## ⚙️ Installation & Setup Process

Follow these step-by-step instructions to get the project running on your local machine.

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (Node Package Manager)

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd password-generator
```

### 2. Install Dependencies
Open your terminal inside the project directory and run:
```bash
npm install
```

### 3. Start the Development Server
Run the following command to start Vite's local development server:
```bash
npm run dev
```

### 4. Open the Application
Once the server is running, open your browser and navigate to `http://localhost:5173` (or the specific port provided in your terminal) to start generating passwords!
