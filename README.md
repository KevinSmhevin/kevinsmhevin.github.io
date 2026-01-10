# Kevin Paras - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my projects and experience as a Software Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by modern portfolio sites
- **Responsive**: Fully responsive design that works on all devices
- **Modular Components**: Well-organized React components for easy maintenance
- **Smooth Scrolling**: Smooth section navigation with active section highlighting
- **Project Showcase**: Beautiful project cards displaying my work with technologies used
- **Skills Section**: Interactive skills display with progress bars
- **Contact Section**: Easy ways to get in touch via email and social links

## 📋 Migration from Jekyll

This portfolio has been migrated from Jekyll to a modern Vite + React setup. The old Jekyll files are still present in the repository but are no longer used. The new React app is the active codebase.

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Modern CSS with CSS variables and reusable classes
- **JavaScript (ES6+)** - Modern JavaScript features

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/KevinSmhevin/kevinsmhevin.github.io.git
cd kevinsmhevin.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview production build:

```bash
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero/landing section
│   │   ├── About.jsx       # About me section
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Projects.jsx    # Projects section
│   │   ├── ProjectCard.jsx # Individual project card
│   │   └── Contact.jsx      # Contact section
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── assets/                 # Static assets (images, etc.)
├── public/                 # Public assets
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies
```

## 🎨 CSS Architecture

The project uses a modular CSS approach with:

- **CSS Variables**: Centralized color and design tokens in `index.css`
- **Reusable Classes**: Common utility classes (`.btn`, `.section-title`, etc.)
- **Component-Specific Styles**: Each component has its own CSS file
- **BEM-like Naming**: Consistent class naming convention
- **Responsive Design**: Mobile-first approach with media queries

## 🚢 Deployment

This site is configured for GitHub Pages. To deploy:

1. Build the project:

```bash
npm run build
```

2. The `dist` folder contains the production build
3. Configure GitHub Pages to serve from the `dist` folder or use a GitHub Action

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kevin Paras**

- Website: [kevinparas.me](https://kevinparas.me)
- GitHub: [@KevinSmhevin](https://github.com/KevinSmhevin)

---

## Built with ❤️ using React and Vite
