import '../src/contact.css'
export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        window.location.href = '/'; 
    };
    return (
    <>
    <p>Contact</p>
    <form id="ffp" onSubmit={handleSubmit}>
       
                
               <label htmlFor="myFName"> *First Name: </label>
               <input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
               
               <label htmlFor="myLName"> *Last Name: </label>
               <input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
               
               
               <label htmlFor="myEmail"> *Email: </label>
               <input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
               
               <input type="submit" className="submit" value="Submit" /> <br />
                   
       
       </form> <br></br>
         <p><i>Phone: <strong>888.888.8888 </strong></i></p>
<p>instagram:www.abc.facebook.com</p>
<p>email:abc@gmail.com</p>
    </>
    );
    }