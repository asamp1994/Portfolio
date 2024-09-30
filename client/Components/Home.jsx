
import { Link } from 'react-router-dom';
import aboutme from './aboutme.png';

export default function Home() {
    return (
        <>
            <section id="intro">
                <div className="introContent">
                    <p className="introPara">
                        Hello, my name is Aaron Sampson. Welcome to my site. I am a first-year software engineering student, with experience in many coding languages.<br />
                        Here you will find information about myself, my education, my projects, and my contact information.
                    </p>
                    <Link to="/about"> {/* Specify the path for navigation */}
                        <button className="btn">
                            <img src={aboutme} alt="About me" width="100px" height="100px" />
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
}
