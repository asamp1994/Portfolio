// 
// File Name: MainRouter.jsx
// Student's Name: Aaron Sampson
// Student ID: 301396788
// Date: 2024-10-01
//

import React from 'react' //Import react library
import { Route, Routes } from 'react-router-dom' //Import routing components
import Home from './Components/Home' //Import Home component
import About from './src/about' //Import About component
import Contact from './src/contact' //Import Contact component
import Services from './src/services' //Import Services component
import Project from './src/project' //Import Project component
import Layout from './Components/Layout' //Import Layout component

 const MainRouter = () => {
    return (<div>
    <Layout/>
    <Routes>
        {/* Define routes */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/contact" element={<Contact />} />

    </Routes>
    </div>
    )
}
export default MainRouter //Export MainRouter component


