import about from './aboutme.png';
export default function Home() {
        return<>
     
     
     <section id= "intro">
     <div className="introContent">
     <p className="introPara"> Hello, my name is Aaron Sampson.Welcome to my site. I am a first year software engineering student, with experience in many coding languages.<br/>
      Here you will find find information about myself, my education, my projects, and my contact information. </p>
      <Link><button className="btn"><img src={about} alt="About me" width="100px" height="100px"/></button></Link>
        </div>
    </section>

    </>
    }
    