import project1 from './proj1.jpg';
import project2 from './proj2.png';
import project3 from './proj4.jpeg';
import '../src/project.css'
export default function Project() {
        return (
          <>
            <h1>My Projects</h1>
            <p>I work hard to make sure my projects are perfect, and to help businesses meet their goals.</p>
            <img src={project1} className="projectImgs" alt="logo" />
            <p>This project revolved around developing a database for an analytics company</p>
            <img src={project2} className="projectImgs" alt="logo" />
            <p>For this project, a website was designed.</p>
            <img src={project3} className="projectImgs" alt="logo" />
            <p>A mobile application was designed for this project</p>

          </>
        );
      }
    