import React from "react";
import cimg from "../Image/pexels-photo-269874.jpeg"

function Cpage4(){
    return(
        <>
        <div className="cpage4">
            <div className="cimg">
                <img src={cimg} alt="Map" />
            </div>
            <div className="ctext">
                <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.<span><button>Download Now</button></span></p>
                <input className="name" type="Name" placeholder="Your Name"/><input className="email" type="Email" placeholder="Your Email"/>
                <br/>
                <input className="sub" type="text" placeholder="Subject"/>
                <br/>
                <input className="sms" type="text" placeholder="Message"/>
                <br/>
                <button className="bu">Send Message</button>
            </div>
        </div>
        </>
    )
}
export{Cpage4}