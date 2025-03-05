# 🌙🚀 Studying React – Theme & Counter Manager

A React project that implements a **theme switcher** and a **global counter** using **Context API**.  
The theme preference persists in `localStorage`, and the counter updates globally across components.

## 🎯 Objectives

### 🚀 Challenge: Theme Manager with Context API

Create a **light/dark mode** switching system using **React** and **Context API**.

#### 📌 Requirements

✔️ Create a `ThemeContext` to store the current theme and provide a function to toggle it.  
✔️ Use the context across multiple components in the application.  
✔️ Implement a button to switch between **light** and **dark** mode.  
✔️ Persist the selected theme in `localStorage` to maintain preferences after page reloads.  
✔️ Style themes using **Tailwind CSS**.

### 🚀 Challenge: Global Counter with Context API

Create a **global counter** using **React** and **Context API**, allowing multiple components to access and modify its value.

#### 📌 Requirements

✔️ Create a `CounterContext` to store the counter value and provide functions to increment and decrement it.  
✔️ Create two components:  
&nbsp;&nbsp;&nbsp;&nbsp;📌 One to **display** the counter value.  
&nbsp;&nbsp;&nbsp;&nbsp;📌 Another with **buttons** to increment and decrement the counter.  
✔️ Ensure **real-time updates** across all components.

## 🔧 Technologies Used

- ⚛ **React** – Component-based UI library.
- 🌍 **Context API** – State management without prop drilling.
- 🎨 **Tailwind CSS** – Utility-first CSS framework for styling.
- 💾 **localStorage** – Data persistence for theme preferences.
- 🟦 **TypeScript** – Strongly typed JavaScript for improved development experience.
- ⚡ **Vite** – Fast build tool for modern web applications.
- ✅ **ESLint & Husky** – Code quality and pre-commit hooks.

## 📂 Project Structure

```
Studying_React/
├─ .husky/                 # Pre-commit hooks for linting and formatting
├─ public/                 # Static assets
├─ src/
│  ├─ app/
│  │  ├─ hooks/            # Custom hooks (useTheme, useCount)
│  │  └─ utils/            # Utility functions (cn.ts)
│  ├─ context/
│  │  ├─ counterContext/   # Counter state management
│  │  ├─ themeContext/     # Theme state management and persistence
│  ├─ views/
│  │  ├─ components/
│  │  │  ├─ counter/       # Counter UI components
│  │  │  ├─ themeSwitch/   # Theme toggle UI component
│  │  └─ pages/
│  │     └─ home/          # Home page component
│  ├─ App.tsx              # Root component
│  ├─ main.tsx             # Entry point
├─ tailwind.config.ts      # Tailwind CSS configuration
├─ vite.config.ts          # Vite configuration
├─ tsconfig.json           # TypeScript configuration
├─ eslint.config.js        # ESLint configuration
├─ README.md               # Project documentation
```

## 🛠 Installation & Usage

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/Studying_React.git
cd Studying_React
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run the Project

```sh
npm run dev
```

🚀 Open [http://localhost:5173](http://localhost:5173) to see it in action!

## 🚀 Features

- **Theme Switcher**: Toggle between **light** and **dark** mode.
- **Context API**: Centralized state management for both theme and counter.
- **Persisted Theme**: Saves user preference using `localStorage`.
- **Global Counter**: Accessible and modifiable from multiple components.
- **Styled with Tailwind CSS** for a clean and modern UI.

## 🛠 How It Works

- The `ThemeContext` manages the current theme and stores it in `localStorage`.
- The `CounterContext` provides functions to increment and decrement the counter.
- Components like `ThemeSwitch` and `CounterControls` interact with these contexts to update UI dynamically.

## 📜 License

This project is licensed under the **MIT License**.

💡 _Contributions and feedback are welcome!_ 🎉
