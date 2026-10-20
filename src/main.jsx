import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import EngineeringPage from './Engineering.jsx';
import ICTPage from './ICT.jsx';
import './styles.css';
import './engineering.css';
import './ict.css';
import './contact.css';

const path = window.location.pathname.replace(/\/$/, '');
const Page = path === '/engineering' ? EngineeringPage : path === '/ict-solutions' ? ICTPage : App;
createRoot(document.getElementById('root')).render(<React.StrictMode><Page /></React.StrictMode>);
