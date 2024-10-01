import project1 from '../src/assets/proj1.jpg';
import project2 from '../src/assets/proj2.png';
import project3 from '../src/assets/proj4.jpeg';
import '../src/project.css';

export default function Project() {
    return (
        <div className="projectContainer">
            <h1>My Projects</h1>
            <p>I work hard to make sure my projects are perfect, and to help businesses meet their goals.</p>
            <div className="projectItem">
                <img src={project1} className="projectImgs" alt="Database project" />
                <p>This project revolved around developing a database for an analytics company.</p>
            </div>
            <div className="projectItem">
                <img src={project2} className="projectImgs" alt="Website project" />
                <p>For this project, a website was designed.</p>
            </div>
            <div className="projectItem">
                <img src={project3} className="projectImgs" alt="Mobile application project" />
                <p>A mobile application was designed for this project.</p>
            </div>
        </div>
    );
}