// 
// File Name: Home.jsx
// Student's Name: Aaron Sampson
// Student ID: 301396788
// Date: 2024-10-01
//
import { Link } from 'react-router-dom'; //Import router
import aboutme from '../src/assets/aboutme.png'; //Import image for button
import '../src/home.css'; //Import css styles

//Home component
export default function Home() {
    return (
       
            <div className="introContent">
                <h1>Home</h1>
                <h2>Intro</h2>
                <p className="introPara">
                    Hello, my name is <span className="introText">Aaron Sampson</span> and welcome to my site. Here you will find information about myself, my education, my projects, and my contact information.
                </p>
                
                <h2>Mission Statement</h2>
                <p className="missionPara">
                    It is my mission to provide the best services to all employers. My expertise in many different
                    programming languages, along with my desire to do my best, will allow me to give the best results.
                </p>
                
                <Link to="/about">
        <button className="btn">
            <img src={aboutme} alt="About me" width="100" height="100" />
        </button>
    </Link>
            </div>
        
        
    );
}

