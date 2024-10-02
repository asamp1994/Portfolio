// 
// File Name: services.jsx
// Student's Name: Aaron Sampson
// Student ID: 301396788
// Date: 2024-10-01
//

import servicesImg from '../src/assets/servicesImage.webp'; //Import image
import '../src/services.css'; //Import styles

//Services component and export
export default function Services() { 
    return (
        <div className="servicesContainer"> {/* Container*/}
            <h1>Services Offered</h1>
            
            {/* Unordered list*/}
            <ul className="servicesList">
                <li>Web Application Development</li>
                <li>Mobile Application Development</li>
                <li>Custom Software Development</li>
                <li>Quality Assurance</li>
                <li>Assistance</li>
                <li>Systems Integration</li>
            </ul>

            {/* Image*/}
            <img src={servicesImg} className="servicesImgs" alt="Services offered" />
        </div>
    );
}
    