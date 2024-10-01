import servicesImg from '../src/assets/servicesImage.webp';
import '../src/services.css';

export default function Services() {
    return (
        <div className="servicesContainer">
            <h1>Services Offered</h1>
            
            <ul className="servicesList">
                <li>Web Application Development</li>
                <li>Mobile Application Development</li>
                <li>Custom Software Development</li>
                <li>Quality Assurance</li>
                <li>Assistance</li>
                <li>Systems Integration</li>
            </ul>
            <img src={servicesImg} className="servicesImgs" alt="Services offered" />
        </div>
    );
}
    