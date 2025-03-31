import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './Footer.css'; // Footer-specific styles
import '@fortawesome/fontawesome-free/css/all.min.css'; // For FontAwesome icons

// Import Bootstrap (CSS and JavaScript)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import Card from './Card.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <Card />
            </div>
            <Footer />
        </>
    );
}

export default App;

