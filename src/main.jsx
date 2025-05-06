import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';    // ← must match the file you created under src/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App/></React.StrictMode>
);