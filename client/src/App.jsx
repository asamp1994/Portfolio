// 
// File Name: app.jsx
// Student's Name: Aaron Sampson
// Student ID: 301396788
// Date: 2024-10-01
//

import React from 'react'; //Import React Library
import { BrowserRouter as Router } from 'react-router-dom'; //Import router
import MainRouter from '../MainRouter'; //Import routing component

//Main Application component
const App = () => {
  return (
    <Router>

    <MainRouter />

    </Router>
 );
};

export default App; //Export app component

