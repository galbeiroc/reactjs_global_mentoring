import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import './styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
