import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from "./App";
import "./global.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
