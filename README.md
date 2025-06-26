# Edusity - A Learning Management Platform

## Overview

**Edusity** is a front-end learning management system (LMS) platform built using **React**, **JavaScript (ES6)**, **HTML5**, and **CSS3**. The platform is designed to offer an intuitive and seamless experience for both students and educators, focusing on clean design and responsive performance.

## Demo

[Live Demo](#) (https://edusity-inky-theta.vercel.app/)


## Features

- **Single Page Application (SPA)** built with React.
- **Responsive design** for all devices (desktop, tablet, mobile).
- **Reusable components** for modular development.
- **Stylish and modern UI** with customized buttons, fonts, and layouts.
- **Efficient state management** using React hooks.
- **Google Fonts** integration for better typography.
- **Media queries** to ensure mobile responsiveness.

## Tech Stack

- **Frontend:**
  - React.js (JSX, Hooks)
  - JavaScript (ES6+)
  - HTML5 & CSS3
  - React Router (for navigation)
  - Google Fonts (Montserrat, Outfit, Roboto)

## Project Structure
```bash
/Edusity
├── /App.jsx # Main app component
├── /main.jsx # Main entry point for React DOM rendering
├── /index.css # Global CSS styles │
├───src
│  ├───assets  (Contains all thessests used in Project)
│  │   └───img
│  └───component (Future structure for reusable components)
├── package.json # Project dependencies and scripts
└── README.md # Project documentation
   
```


## File Details

### App.jsx

This file contains the main component that represents the structure of the application. React hooks such as `useState`, `useEffect`, etc., are used for managing component state and side effects. The components are organized in a modular fashion to ensure reusability and scalability.

### main.jsx

The `main.jsx` file serves as the entry point of the application, rendering the `App` component into the root element of the HTML structure using `ReactDOM.createRoot()`.

### index.css

The global CSS file customizes the basic look and feel of the app, using the "Outfit" font family. The CSS includes a mobile-first design approach using media queries to ensure responsiveness across various screen sizes.

#### CSS Highlights:

- **Reset Styles:** Applied to all elements to remove margin, padding, and box-sizing.
- **Container Styles:** For page layout with flexible padding.
- **Button Styling:** Custom button classes such as `.btn` and `.dark-btn` for different themes.
- **Responsive Design:** Media queries for adapting the layout on smaller screen sizes.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or above)
- Any modern browser (Google Chrome, Firefox, etc.)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ShivomTiwari27/Edusity.git
    cd Edusity
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open the app in your browser at `http://localhost:3000`.

## Special Thanks

A special thanks to **Great Stack** for the inspiration behind this project.  
Check out his YouTube channel for more awesome content: [Great Stack YouTube](https://www.youtube.com/@GreatStackDev).

## Contributing

Contributions are welcome!  
Feel free to fork the repository, submit a pull request, or open issues for any bugs or feature requests.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/YourFeature`).
3. Commit your Changes (`git commit -m 'Add some feature'`).
4. Push to the Branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## Author

**Shivom Tiwari**  

For any inquiries or feedback, feel free to contact me at:  
[shivomtiwari27@gmail.com](mailto:shivomtiwari27@gmail.com)

