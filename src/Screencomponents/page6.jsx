import React from "react";
import page6img1 from "../Image/team-1.jpg"
import page6img2 from "../Image/team-2.jpg"
import page6img3 from "../Image/team-3.jpg"
import page6img4 from "../Image/team-4.jpg"
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { PiInstagramLogoThin } from "react-icons/pi";

function Page6(){
    const page6data1=[
        {
            img:`${page6img1}`,
            facebook:<FiFacebook/>,
            twitter:<CiTwitter/>,
            insta:<PiInstagramLogoThin/>,
            name:"Ladies",
            designation:"Designation",
        },
        {
            img:`${page6img2}`,
            facebook:<FiFacebook/>,
            twitter:<CiTwitter/>,
            insta:<PiInstagramLogoThin/>,
            name:"Shiffan Khan",
            designation:"Designation",
        },
        {
            img:`${page6img3}`,
            facebook:<FiFacebook/>,
            twitter:<CiTwitter/>,
            insta:<PiInstagramLogoThin/>,
            name:"Ladies",
            designation:"Designation",
        },
        {
            img:`${page6img4}`,
            facebook:<FiFacebook/>,
            twitter:<CiTwitter/>,
            insta:<PiInstagramLogoThin/>,
            name:"Arman Khan",
            designation:"Designation",
        },
    ]
    return(
        <>
        <div className="page6">
            <div className="text">
                <h1>Property Agents</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
        <div className="page6-card">
        {
                page6data1.map((data)=>{
                    return(
                        <>                        
                        <div className="team">
                            <img src={data.img} alt="client" />
                            <div className="icon">
                                <li>{data.facebook}</li>
                                <li>{data.twitter}</li>
                                <li>{data.insta}</li>
                            </div>
                            <h3>{data.name}</h3>
                            <p>{data.designation}</p>
                        </div>
                        </>
                    )
                })
            }
            </div>
        </div>
        </>
    )
}
export{Page6}