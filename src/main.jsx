import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';
import { AudioProvider } from './Contexts/AudioContext.jsx'; // Adjust the path as necessary

ReactDOM.render(
  <React.StrictMode>
    <AudioProvider>
      <App />
    </AudioProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
