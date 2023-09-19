import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();

// import React from "react";
// import ReactDOM from 'react-dom';
// import { createRoot } from "react-dom/client";
// import App from "./App";

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(<App tab='home' />);


// import { createRoot } from "react-dom/client";
// import Hello from "./Hello";

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<Hello />);
