import React from "react";
import icon1 from "../Image/icon-apartment.png"
import icon2 from "../Image/icon-villa.png"
import icon3 from "../Image/icon-house.png"
import icon4 from "../Image/icon-housing.png"
import icon5 from "../Image/icon-building.png"
import icon6 from "../Image/icon-neighborhood.png"
import icon7 from "../Image/icon-condominium.png"
import icon8 from "../Image/icon-luxury.png"

function Page2(){
    const page2data1=[
        {
            name:"Property Types",
            detail:"Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo."
        }     
    ]
    const page2data2=[
        {
            img:`${icon1}`,
            name:"Appartment",
            detail:"123 properties"
        },
        {
            img:`${icon2}`,
            name:"Villa",
            detail:"123 properties"
        },
        {
            img:`${icon3}`,
            name:"Home",
            detail:"123 properties"
        },
        {
            img:`${icon4}`,
            name:"Office",
            detail:"123 properties"
        },
        {
            img:`${icon5}`,
            name:"Building",
            detail:"123 properties"
        },
        {
            img:`${icon6}`,
            name:"Townhouse",
            detail:"123 properties"
        },
        {
            img:`${icon7}`,
            name:"Shop",
            detail:"123 properties"
        },
        {
            img:`${icon8}`,
            name:"Garage",
            detail:"123 properties"
        },
    ]
    return(
        <>
        <div className="page2">
            {
                page2data1.map((data)=>{
                    return(
                        <>
                        <div className="page2-text">
                            <h1>{data.name}</h1>
                            <p>{data.detail}</p>
                        </div>
                        </>
                    )
                })
            }
            <div className="page2-container">
                {
                    page2data2.map((data)=>{
                        return(
                            <>
                            <div className="card-container">
                                <div className="card-content">
                                    <img src={data.img} alt="House,Vila" />
                                    <h5>{data.name}</h5>
                                    <p>{data.detail}</p>
                                </div>
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
export{Page2}