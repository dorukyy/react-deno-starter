# React + Vite + Deno Starter

## 📖 Description
This is a starter package for building a modern React frontend application using Deno as the runtime and package manager. The frontend is developed with React and state management is handled by Redux. The app is styled with Bootstrap and Sass, and served by Deno for seamless development and deployment.

## 🚀 Features
- **Deno** as a secure and efficient runtime environment.
- **React** for building interactive user interfaces.
- **Redux** for predictable and centralized state management.
- **Vite** for fast builds and development server.
- **Bootstrap** for responsive design.
- **Sass** for advanced styling capabilities.
- Modular and scalable file structure.

---

## 🛠 Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install Deno**  
   Follow the [official guide](https://deno.land/manual/getting_started/installation) to install Deno on your system.

3. **Install Node.js**  
   Ensure you have Node.js installed. If not, download it from [Node.js official site](https://nodejs.org/).

4. **Install dependencies**  
   Run the following commands:
   ```bash
   deno task dev # Starts the development server
   ```

---

## 🧑‍💻 Development Workflow

- **Start Development Server**:  
  ```bash
  deno task dev
  ```

- **Run Linter**:  
  ```bash
  deno lint
  ```

- **Build for Production**:  
  ```bash
  deno task build
  ```

---

## 📂 File Structure

```
node_modules/      # Node.js dependencies
public/            # Static assets (e.g., images, fonts)
src/               # Source code
  components/      # Reusable React components
  hooks/           # Custom React hooks
  pages/           # Page components
  services/        # API calls and other services
  styles/          # Sass and CSS files
  tests/           # Unit and integration tests
  App.tsx          # Main App component
  Main.tsx         # Entry point for React
  Router.tsx       # Application routing logic
.gitignore         # Ignored files and folders
README.md          # Project documentation
deno.json          # Deno configuration
eslint.config.js   # ESLint configuration
index.html         # HTML entry point
package.json       # Node.js package file
tsconfig.app.json  # TypeScript configuration for app
tsconfig.json      # Base TypeScript configuration
tsconfig.node.json # TypeScript configuration for Node.js
vite.config.ts     # Vite configuration
```

---

## 📚 Tech Stack

| **Technology** | **Purpose**                             |
|-----------------|-----------------------------------------|
| Deno            | Runtime and package manager            |
| React           | Building the user interface            |
| Redux           | State management                       |
| Bootstrap       | UI components and responsive design    |
| Sass            | Advanced styling with CSS preprocessor |
| Vite            | Development server and build tool      |

---

## Bootstrap and Sass
This project uses Bootstrap for responsive design and Sass for advanced styling capabilities. You can customize the Bootstrap theme by modifying the `src/styles/*.scss` files.
- `main.scss:` Main Sass file that imports Bootstrap and other styles.
- `variables.scss:` Custom variables for Bootstrap theme.

## 🤝 Contribution
Contributions are welcome! Feel free to submit a pull request or open an issue.  
Please ensure your changes follow the existing code style and are properly tested.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
