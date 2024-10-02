// 
// File Name: about.jsx
// Student's Name: Aaron Sampson
// Student ID: 301396788
// Date: 2024-10-01
//
import myPhoto from '../src/assets/myPhoto.jpg'; // Import profile photo
import myResume from '../src/assets/MyResume.pdf'; // Import resume pdf
import '../src/about.css'; // Import css styles

// About component
export default function About() {
    return (
        <div className="aboutContainer"> {/* Container for about section */}
            <h1>
                About Me: <span className="aboutText">Aaron Sampson</span>
            </h1>
            <img src={myPhoto} className="myImgs" alt="Aaron Sampson" /> {/* Source for Image */}
            <p>
                My name is Aaron Sampson. I am a second-year Software Engineering student at Centennial College.<br />
                My areas of expertise are C# and Java. After graduating, I would like to pursue a career as a programmer.
                Find a link to my resume below.
            </p>
            <a href={myResume} target="_blank" rel="noopener noreferrer">{/* Link to resume */}
                <button className="workBtn">My Resume</button>
            </a>
        </div>
    );
}



