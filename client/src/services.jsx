import servicesImg from './servicesImage.webp';
export default function Services() {
    return (
        <>
            <h1>Services Offered</h1>
            <img src={servicesImg} className="servicesImgs" alt="logo" />
            
            <ul>
                <li>Web Application Development</li>
                <li>Mobile Application Development</li>
                <li>Custom Software Development</li>
                <li>Quality Assurance</li>
                <li>Assistance</li>
                <li>Systems Integration</li>
            </ul>
        </>
    );
}
    