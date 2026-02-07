# 🎨 Dileep Nandavarapu - Creative Portfolio

A modern, interactive, and fully responsive portfolio website built with React. Featuring smooth animations, dark/light theme support, and a stunning user experience showcasing projects, skills, and professional background.

## ✨ Features

- **🎭 Smooth Animations**: Powered by Framer Motion for elegant transitions and interactive elements
- **🌓 Dark/Light Theme**: Toggle between dark and light themes for comfortable browsing
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Performance Optimized**: Built with React 19 and modern web standards
- **📧 Contact Form**: Integrated with EmailJS for reliable email delivery
- **🎨 Styled Components**: Dynamic styling with Styled Components for scalable CSS
- **3D Effects**: Three.js integration for immersive visual elements
- **🎯 Page Transitions**: Smooth page transitions between different sections
- **📊 Project Showcase**: Display of featured projects with live links and GitHub repositories

## 📋 Sections

### 1. **Home** (`/`)

- Hero section with greeting and introduction
- Call-to-action buttons for navigation
- Social media links (GitHub, LinkedIn, Instagram)
- Profile image with animated glow effect
- Responsive navigation bar

### 2. **About** (`/about`)

- Detailed personal introduction with profile image
- **Education Section**: Display of educational milestones
  - B.Tech in Electronics and Communication Engineering (Bharath Institute)
  - Science Intermediate (Sri Pratibha Junior College)
  - Secondary School Certificate (Sri Chaitanya High School)
- **Skills Section**: Showcase of technical skills with icons
  - Frontend: HTML5, CSS3, JavaScript, React
  - Backend: Node.js, Python, Express.js
  - Databases: SQL, MongoDB
  - Tools: Git, VS Code, WordPress, Bootstrap
- **Resume Download**: Direct download of resume from assets

### 3. **Projects** (`/projects`)

Shows a grid of featured projects with the following details:

#### TrackNest

- Personal finance tracker for managing income and expenses
- Tech Stack: HTML5, CSS3, JavaScript
- [Live Demo](https://track-nest-nine.vercel.app/) | [GitHub](https://github.com/Dileep-025/TrackNest)

#### Task Manager

- Lightweight task management web app with local persistence
- Tech Stack: HTML5, CSS3, JavaScript
- [Live Demo](https://task-manager-nine-murex.vercel.app/) | [GitHub](https://github.com/Dileep-025/Task-Manager)

#### Weather App

- Real-time weather application with API integration
- Tech Stack: HTML5, CSS3, JavaScript, REST API
- [Live Demo](https://weather-app-woad-eight-93.vercel.app/) | [GitHub](https://github.com/Dileep-025/Weather-App)

### 4. **Resume** (`/resume`)

- Embedded resume viewer (PDF)
- Download button for direct resume download
- Professional resume from assets

### 5. **Contact** (`/contact`)

- Contact information display (email, phone, location)
- Contact form with EmailJS integration
- Social media links
- Location-based information

## 🛠️ Technologies & Dependencies

### Core Framework

- **React** (19.2.0) - UI library
- **React-DOM** (19.2.0) - DOM rendering

### Animation & Motion

- **Framer Motion** (12.23.22) - Advanced animations and transitions
- **Three.js** (0.180.0) - 3D graphics

### Styling

- **Styled Components** (6.1.19) - CSS-in-JS styling
- **React Icons** (5.5.0) - Icon library

### Backend & Communication

- **EmailJS** (4.4.1) - Email service integration

### Utilities

- **Lucide React** (0.545.0) - Icon components

### Development & Testing

- **React Scripts** (5.0.1) - Build scripts
- **Testing Library** - React, DOM, and User Event testing

## 📦 Project Structure

```
src/
├── assets/              # Images and static files
│   ├── home.jpeg       # Hero section image
│   ├── about.jpeg      # About section image
│   ├── resume.pdf      # Resume file
│   └── *.png           # Project images
├── components/
│   ├── Home/           # Hero section and welcome
│   ├── About/          # About page components
│   │   ├── Intro.jsx
│   │   ├── EducationalMilestones.jsx
│   │   ├── Experience.jsx
│   │   └── SkillProgress.jsx
│   ├── Projects/       # Project showcase components
│   ├── Resume/         # Resume viewer component
│   ├── Contact/        # Contact form and info
│   ├── Layout/         # Navigation, Footer, 3D Background
│   └── Common/         # Reusable components (Card, Loading)
├── pages/              # Page-level components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Resume.jsx
│   └── Contact.jsx
├── styles/
│   ├── GlobalStyles.js # Global styles
│   ├── theme.js        # Theme configuration
│   └── animations.js   # Animation definitions
├── data/
│   ├── personal.js     # Personal information
│   ├── educationalMilestones.js
│   └── projects.js     # Project data
├── hooks/
│   ├── useCursorPosition.js
│   └── usePageTransition.js
├── utils/
│   └── helpers.js
├── App.jsx
└── index.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Dileep-025/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed for EmailJS)
   - Create a `.env` file in the root directory
   - Add your EmailJS credentials

### Running the Application

**Development Mode:**

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser.

**Build for Production:**

```bash
npm run build
```

Builds the app for production in the `build` folder.

**Run Tests:**

```bash
npm test
```

Launches the test runner in interactive watch mode.

## 📸 Key Features in Detail

### Dynamic Theme Switching

- Easy toggle between dark and light themes
- Theme preference persisted across sessions
- Smooth color transitions

### Smooth Page Transitions

- Framer Motion powered page animations
- Loading transitions between sections
- Staggered animations for list items

### Responsive Design

- Mobile-first approach
- Breakpoints optimized for all devices
- Touch-friendly interface

### Interactive Elements

- Hover effects on project cards
- Social media icon animations
- CTA button interactions
- Skill tag animations

### Image Optimization

- Local asset imports from `/src/assets`
- Profile images for Home and About sections
- Project preview images

## 🎯 Key Components

### Motion Components

- `Hero` - Landing page with hero section
- `Intro` - About page introduction with profile
- `EducationalMilestones` - Timeline of education
- `SkillProgress` - Skill display component
- `ProjectCard` - Individual project card
- `ContactForm` - Email contact form

### Layout Components

- `Navigation` - Top navigation bar with theme toggle
- `Footer` - Footer with quick links and social media
- `Background3D` - 3D background visualization

### Utility Components

- `GlassCard` - Glass-morphism card component
- `LoadingTransition` - Page loading animation

## 👤 Personal Information

**Name:** Dileep Nandavarapu  
**Title:** Frontend Developer & Creative Designer  
**Email:** dileepnandavarapu25@gmail.com  
**Phone:** +91 8096348239  
**Location:** Kanigiri, Andhra Pradesh, India

**Social Media:**

- [GitHub](https://github.com/Dileep-025)
- [LinkedIn](https://www.linkedin.com/in/dileep-nandavarapu)
- [Instagram](https://www.instagram.com/dileep.nandavarapu)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests for any improvements.

## 📝 Notes

- Resume file (`resume.pdf`) is stored in `/src/assets/`
- Profile images are imported from `/src/assets/` for optimization
- Theme preferences are stored in local storage
- Contact form uses EmailJS for email delivery

## 🙏 Acknowledgments

- **Framer Motion** - For smooth animations
- **Styled Components** - For dynamic styling
- **EmailJS** - For email service
- **React Icons** - For beautiful icons
- **Three.js** - For 3D effects

---

**Built with ❤️ by Dileep Nandavarapu**
