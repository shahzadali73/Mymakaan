import React from "react";
import cimg from "../Image/call-to-action.jpg"
import { IoCallOutline, IoCalendarOutline } from "react-icons/io5";

function Page5(){
    const page5data1=[
        {
            img:`${cimg}`
        }
    ]
    const page5data2=[
        {
            name:"Contact With Our Certified Agent",
            detail:"Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo."
        }
    ]
    return(
        <>
        <div className="page5">
            <div className="page5-content">
            <div className="first">
            {
                page5data1.map((data)=>{
                    return(
                        <>
                        <div className="image">
                        <img src={data.img} alt="client" />
                        </div>
                        </>
                    )
                })
            }
            </div>
            <div className="second-ca">
                {
                    page5data2.map((data)=>{
                        return(
                            <>
                            <h1>{data.name}</h1>
                            <p>{data.detail}</p>
                            </>
                        )
                    })
                }
                <div className="bu">
                    <div className="bf">
                    <button><span><IoCallOutline/></span>Make A Call</button>
                    </div>
                    <div className="bs">                       
                    <button><span><IoCalendarOutline/></span>Get Appoinment</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export{Page5}