// 
// File Name: main.jsx
// Student's Name: Aaron Sampson
// Student ID: 301396788
// Date: 2024-10-01
//

import { StrictMode } from 'react' //Import strict mode
import { createRoot } from 'react-dom/client' //Import create root for rendering
import App from './App.jsx' //Import App component
import './index.css' //Import styles

// Render application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
