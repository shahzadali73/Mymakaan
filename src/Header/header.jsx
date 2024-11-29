import React from "react";
import himg from "../Image/icon-deal.png"
import { Link } from "react-router-dom";
import { Menunavbar } from "../Screencomponents/menunavbar";

function Header(){
   const headerdata1 = [
        {
            id:1,
            hlogo:`${himg}`,
            hname:"Makaan",
            path:"/"
        }
    ]
    const headerdata2 = [
        {
            id:1,
            name:"HOME",
            path:"/"
        },
        {
            id:2,
            name:"ABOUT",
            path:"/about"
        },
        {
            id:3,
            name:"CONTACT",
            path:"/contact"
        },
    ]
    return(
        <>
        <div className="header">
            <div className="headerlogo">
                {
                    headerdata1.map((data)=>{
                        return(
                            <>
                            <div key={data.id} className="navlogo">
                                <Link to={data.path}><img src={data.hlogo} alt="Logo" /></Link>
                            <h1><Link to={data.path}>{data.hname}</Link></h1>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="header-menu">
                <div className="menu">
                {
                    headerdata2.map((data)=>{
                        return(
                            <>
                            <li key={data.id}><Link to={data.path}>{data.name}</Link></li>                          
                            </>
                        )
                    })
                } 
                    </div>   
                    <div className="selectbar">
                    <Menunavbar/>
                        </div>  
                    <div className="headerbutton">
                <Link to="/"><button>Add Property</button></Link>
            </div>         
            </div>           
        </div>
        </>
    )
}
export{Header}