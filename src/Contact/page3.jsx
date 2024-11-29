import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5"

function Cpage3(){
    const cpage3data=[
        {
            icon:<CiLocationOn/>,
            iconN:"123 Street, New York, USA"
        },
        {
            icon:<IoCallOutline/>,
            iconN:"+919982236403"
        },
        {
            icon:<CiMail/>,
            iconN:"fkhan12345609@gmail.com"
        },
    ]
    return(
        <>
        <div className="cpage3">
            {
                cpage3data.map((data)=>{
                    return(
                        <>
                        <div className="ccard">
                            <li>{data.icon}</li>
                            <h4>{data.iconN}</h4>
                        </div>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export{Cpage3}