import React from "react";
import { Link } from "react-router-dom";

function Page1(){
    const page1data=[
        {
            id:1,
            name:"Find A Perfect Home To Live With Your Family",
            detail:"Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
            button:"Get Started",
            path:"/"
        },       
    ]
    return(
        <>
        <div className="page1">
            {
                page1data.map((data)=>{
                    return(
                        <>
                        <div key={data.id} className="text">                          
                        <h1>{data.name}</h1>
                        <p>{data.detail}</p>
                        <Link to={data.path}><button>Get Started</button></Link>
                        </div>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export{Page1}