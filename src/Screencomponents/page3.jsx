import React from "react";
import aboutimg from "../Image/about.jpg"
import { TfiHandPointRight } from "react-icons/tfi";

function Page3(){
  const page3data1=[
        {
            img:`${aboutimg}`
        }
    ]
    const page3data2=[
        {
            name:"#1 Place To Find The Perfect Property",
            detail:"Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet"
        }
    ]
    const page3data3=[
        {
            logo:<TfiHandPointRight/>,
            mdetail:"Tempor erat elitr rebum at clita"
        },
        {
            logo:<TfiHandPointRight/>,
            mdetail:"Aliqu diam amet diam et eos"
        },
        {
            logo:<TfiHandPointRight/>,
            mdetail:"Clita duo justo magna dolore erat amet"
        },
    ]
    return(
        <>
        <div className="page3">
            <div className="first">
            {
                page3data1.map((data)=>{
                    return(
                        <>
                        <div className="image">
                        <img src={data.img} alt="House" />
                        </div>
                        </>
                    )
                })
            }
            </div>
            <div className="second">
                {
                    page3data2.map((data)=>{
                        return(
                            <>
                            <h1>{data.name}</h1>
                            <p>{data.detail}</p>
                            </>
                        )
                    })
                }
                {
                    page3data3.map((data)=>{
                        return(
                            <>
                            <div className="text">
                            <li>{data.logo}</li>
                            <h6>{data.mdetail}</h6>
                            </div>
                            </>
                        )
                    })
                }
                <div className="bu">
                    <button>Read More</button>
                </div>
            </div>
        </div>
        </>
    )
}
export{Page3}