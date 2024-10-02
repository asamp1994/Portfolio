// 
// File Name: contact.jsx
// Student's Name: Aaron Sampson
// Student ID: 301396788
// Date: 2024-10-01
//

import '../src/contact.css' //Importing css styles

//Contact component definition and export
export default function Contact() {

    //Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        window.location.href = '/'; 
    };

    return (
        <>
            <h1>Contact</h1> {/* Heading */}
            <form id="ffp" onSubmit={handleSubmit}> {/* Form for input */}

                {/* First name input field */}
               <label htmlFor="myFName"> *First Name: </label>
               <input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
               
               {/* Last name input field */}
               <label htmlFor="myLName"> *Last Name: </label>
               <input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
               
               {/* Email input field */}
               <label htmlFor="myEmail"> *Email: </label>
               <input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
               
               {/* Submit button */}
               <input type="submit" className="submit" value="Submit" /> <br />
            </form> <br />

            {/* Contact information */}
            <p><i>Phone: <strong>888.888.8888 </strong></i></p>
            <p>instagram:www.abc.facebook.com</p>
            <p>email:abc@gmail.com</p>
        </>
    );
}