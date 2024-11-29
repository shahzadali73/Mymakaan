import React from "react";
import { Link } from "react-router-dom";
import aboutimg from "../Image/header.jpg"

function Page(){
    const pagedata=[
        {
            name:"HOME",
            path:"/"
        },
        {
            name:"PAGES",
            path:"/about"
        }
    ]
    return(
        <>
        <div className="page">
            <div className="page-first">
            <div className="text">
                <h1>Contact Us</h1>
            </div>
                <div className="li">
                {
                    pagedata.map((data)=>{
                        return(
                            <>
                            <li><Link to={data.path}>{data.name}</Link></li>
                            </>
                        )
                    })
                }
                <li>Contact</li>
                </div>
            </div>
            <div className="page-second">
                <img src={aboutimg} alt="Villa" />
            </div>
        </div>
        </>
    )
}
export{Page}