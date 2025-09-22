# CareerGuide Frontend

A modern **web application frontend** for CareerGuide — an interactive platform designed to help students explore career options, courses, colleges, government exams, and personalized opportunities. Built with **React**, **Tailwind CSS**, and responsive design principles for both desktop and mobile users.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Screenshots](#screenshots)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Project Overview

CareerGuide Frontend allows users to:

- Explore career opportunities, courses, colleges, and government exams.
- Build and download professional resumes.
- Track extracurricular interests.
- Set up personal profiles with live previews.
- Experience a fully responsive design optimized for mobile, tablet, and desktop views.

---

## Features

1. **Responsive Dashboard**
   - Mobile-first design.
   - Interactive cards for colleges, courses, exams, and counselling.
   - Bottom navigation bar for mobile devices.
   
2. **Profile Setup**
   - Upload and preview profile image.
   - Enter personal details including career interests and bio.
   - Reset or save profile with live sidebar preview.

3. **Resume Builder**
   - Generate professional resumes in PDF format.
   - Multiple resume styles.
   - Input validation with character limits.
   
4. **Opportunities Section**
   - Explore internships, research programs, scholarships, and startup accelerators.
   - “Apply Now” button with simulated loading and confirmation.

5. **Extracurriculars Search**
   - Search and explore other interests like hobbies and clubs.
   - User-friendly interface with teal-gray color palette.

6. **Navbar & Sidebar**
   - Mobile-responsive collapsible sidebar.
   - Logo and profile display integrated into the sidebar.
   - Quick access to all sections.

---

## Tech Stack

- **Frontend:** React.js  
- **Styling:** Tailwind CSS  
- **Icons:** React Icons, Lucide React  
- **Routing:** React Router DOM  
- **State Management:** useState, useEffect, useRef  
- **Responsive Design:** Mobile-first layout with media queries

---

## Installation

1. **Clone the repository:**

bash
git clone https://github.com/yourusername/careerguide-frontend.git
cd careerguide-frontend
Install dependencies:

npm install


Start the development server:

npm start


The app will run on http://localhost:3000

Usage

Navigate through the Dashboard to explore all sections.

Use the Profile Setup to enter personal details.

Use the Resume Builder to generate a PDF resume.

Explore Opportunities and click Apply Now to simulate applications.

Test on both desktop and mobile devices for the best experience.

Project Structure
src/
├── components/
│   ├── Dashboard.jsx
│   ├── Opportunities.jsx
│   ├── Navbar.jsx
│   ├── ExtraCurriculars.jsx
│   ├── ResumeBuilder.jsx
│   └── ProfileSetup.jsx
├── App.jsx
├── index.js
└── assets/
    └── logo.png

Screenshots

Dashboard:


Profile Setup:


Resume Builder:


Opportunities:


(Replace with your actual screenshots in assets/ folder)

Contributing

Fork the repository.

Create a new branch (git checkout -b feature/YourFeature).

Make changes and commit (git commit -m "Add feature").

Push to the branch (git push origin feature/YourFeature).

Open a Pull Request.

License

This project is licensed under the MIT License.
