# My Portfolio

This is my personal portfolio, a **React** application hosted statically on GitHub Pages. The project showcases my work, skills, and contact information. It is deployed from the `gh-pages` branch and updated using the scripts provided below.

## Live Demo

You can view the live site here:
https://michael-albright.github.io/My-Portfolio/

---

## Features

- Built using React for dynamic and responsive design.
- Hosted on GitHub Pages for seamless static deployment.
- Organized codebase to allow for easy updates and scaling.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or above recommended)
- **npm** (comes with Node.js) or **yarn**
- **Git**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/michael-albright/My-Portfolio.git
   cd My_Portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Run the app locally:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   The application will be available at `http://localhost:3000/`.

---

## Deployment

The portfolio is hosted using **GitHub Pages** and deployed from the `gh-pages` branch. Follow these steps to update the static site:

### Deployment Steps

1. **Switch to the `develop` branch**:

   ```bash
   git checkout develop
   ```

2. **Make and commit changes**:

   Update your code, then commit your changes:

   ```bash
   git add .
   git commit -m "Update portfolio content"
   ```

3. **Build the project**:

   Generate the static files:

   ```bash
   npm run build
   ```

   or

   ```bash
   yarn build
   ```

   This will create an optimized production build in the `build/` directory.

4. **Deploy to `gh-pages`**:

   Use the `gh-pages` package to push the `build/` directory to the `gh-pages` branch:

   ```bash
   npm run deploy
   ```

   or

   ```bash
   yarn deploy
   ```

   The deployment script automatically pushes the contents of the `build/` folder to the `gh-pages` branch.

### Deployment Scripts

Add the following scripts to your `package.json` if not already present:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Ensure the `gh-pages` package is installed:

```bash
npm install --save-dev gh-pages
```

---

## Folder Structure

```
My_Portfolio/
├── public/           # Static assets
├── src/              # React components, styles, and utilities
├── build/            # Generated static files for deployment
├── package.json      # Project configuration and dependencies
└── README.md         # Documentation
```

---

## Contributing

If you’d like to contribute or suggest improvements, feel free to submit a pull request or open an issue on GitHub.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For any inquiries or feedback, feel free to contact me via https://www.linkedin.com/in/michaelsalbright/ or msalbrig@gmail.com.
