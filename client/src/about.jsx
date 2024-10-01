import myPhoto from '../src/assets/myPhoto.jpg';
import myResume from '../src/assets/MyResume.pdf';
import '../src/about.css';

export default function About() {
    return (
        <div className="aboutContainer">
            <h1>About Me: <span className="aboutText">Aaron Sampson</span></h1>
            <img src={myPhoto} className="myImgs" alt="Aaron Sampson" />
            <p>
                My name is Aaron Sampson. I am a second-year Software Engineering student at Centennial College.<br />
                My areas of expertise are C# and Java. After graduating, I would like to pursue a career as a programmer.
                Find a link to my resume below
            </p>
            <a href={myResume} target="_blank" rel="noopener noreferrer">
                <button className="workBtn">My Resume</button>
            </a>
        </div>
    );
}


