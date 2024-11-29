import React from "react";
import page4img1 from "../Image/property-1.jpg"
import page4img2 from "../Image/property-2.jpg"
import page4img3 from "../Image/property-3.jpg"
import page4img4 from "../Image/property-4.jpg"
import page4img5 from "../Image/property-5.jpg"
import page4img6 from "../Image/property-6.jpg"
import { BsCurrencyDollar } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { RiHotelBedLine } from "react-icons/ri";
import { PiBathtubThin } from "react-icons/pi";

function Page4(){
    const page4data1=[
        {
            button:"Featured"
        },
        {
            button:"For Sell"
        },
        {
            button:"For Rent"
        }
    ]
    const page4data2=[
        {
            type:"For Sell",
            img:`${page4img1}`,
            app:"Appartment",
            ripiyai:<BsCurrencyDollar/>,
            ripiya:"12,345",
            name:"Golden Urben House For Sell",
            locationi:<CiLocationOn/>,
            address:"123 Street,New York,USA",
            sizei:<TfiRulerAlt2/>,
            size:"1000 Sqft",
            bedi:<RiHotelBedLine/>,
            bed:"3 Bed",
            bathi:<PiBathtubThin/>,
            baht:"2 Bath"
        },
        {
            type:"For Rent",
            img:`${page4img2}`,
            app:"Villa",
            ripiyai:<BsCurrencyDollar/>,
            ripiya:"12,345",
            name:"Golden Urben House For Sell",
            locationi:<CiLocationOn/>,
            address:"123 Street,New York,USA",
            sizei:<TfiRulerAlt2/>,
            size:"1000 Sqft",
            bedi:<RiHotelBedLine/>,
            bed:"3 Bed",
            bathi:<PiBathtubThin/>,
            baht:"2 Bath"
        },
        {
            type:"For Sell",
            img:`${page4img3}`,
            app:"Office",
            ripiyai:<BsCurrencyDollar/>,
            ripiya:"12,345",
            name:"Golden Urben House For Sell",
            locationi:<CiLocationOn/>,
            address:"123 Street,New York,USA",
            sizei:<TfiRulerAlt2/>,
            size:"1000 Sqft",
            bedi:<RiHotelBedLine/>,
            bed:"3 Bed",
            bathi:<PiBathtubThin/>,
            baht:"2 Bath"
        },
        {
            type:"For Rent",
            img:`${page4img4}`,
            app:"Building",
            ripiyai:<BsCurrencyDollar/>,
            ripiya:"12,345",
            name:"Golden Urben House For Sell",
            locationi:<CiLocationOn/>,
            address:"123 Street,New York,USA",
            sizei:<TfiRulerAlt2/>,
            size:"1000 Sqft",
            bedi:<RiHotelBedLine/>,
            bed:"3 Bed",
            bathi:<PiBathtubThin/>,
            baht:"2 Bath"
        },
        {
            type:"For Sell",
            img:`${page4img5}`,
            app:"Home",
            ripiyai:<BsCurrencyDollar/>,
            ripiya:"12,345",
            name:"Golden Urben House For Sell",
            locationi:<CiLocationOn/>,
            address:"123 Street,New York,USA",
            sizei:<TfiRulerAlt2/>,
            size:"1000 Sqft",
            bedi:<RiHotelBedLine/>,
            bed:"3 Bed",
            bathi:<PiBathtubThin/>,
            baht:"2 Bath"
        },
        {
            type:"For Rent",
            img:`${page4img6}`,
            app:"Shop",
            ripiyai:<BsCurrencyDollar/>,
            ripiya:"12,345",
            name:"Golden Urben House For Sell",
            locationi:<CiLocationOn/>,
            address:"123 Street,New York,USA",
            sizei:<TfiRulerAlt2/>,
            size:"1000 Sqft",
            bedi:<RiHotelBedLine/>,
            bed:"3 Bed",
            bathi:<PiBathtubThin/>,
            baht:"2 Bath"
        },
    ]
    return(
        <>
        <div className="page4">
            <div className="text">
            <div className="first">
                <h1>Property Listing</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
            </div>
            <div className="second-bu">
                {
                    page4data1.map((data)=>{
                        return(
                            <>
                            <button>{data.button}</button>
                            </>
                        )
                    })
                }
            </div>
            </div>
            <div className="page4-card">
                {
                    page4data2.map((data)=>{
                        return(
                            <>
                            <div className="card">
                            <h3>{data.type}</h3>
                            <img src={data.img} alt="icon's" />
                            <h4>{data.app}</h4>
                            <div className="flex">
                            <li>{data.ripiyai}</li>
                            <h5>{data.ripiya}</h5>
                            </div>
                            <h2>{data.name}</h2>
                            <div className="flex">
                            <li>{data.locationi}</li>
                            <p>{data.address}</p>
                            </div>
                            <div className="icon">
                                <div className="style">
                                <li>{data.sizei}</li>
                            <h6>{data.size}</h6>
                                </div>
                                <div className="style">
                                <li>{data.bedi}</li>
                            <h6>{data.bed}</h6>
                                </div>
                                <div className="style">
                                <li>{data.bathi}</li>
                            <h6>{data.baht}</h6>
                                </div>
                            </div>
                            </div>
                            </>
                        )
                    })
                }
                <div className="bu">
                    <button>Browse More Property</button>
                </div>
            </div>
        </div>
        </>
    )
}
export{Page4}