import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
} from "react-router-dom";

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);

/*
ReactDOMClient.hydrateRoot(document.getElementById("root"), 
<React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
  );
*/
