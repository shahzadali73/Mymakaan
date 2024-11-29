import React from "react";
import { Header } from "../Header/header";
import { Page1 } from "../Screencomponents/page1";
import { Detail } from "../Screencomponents/detailpage";
import UncontrolledExample from "../Screencomponents/craousel";
import { Page2 } from "../Screencomponents/page2";
import { Page3 } from "../Screencomponents/page3";
import { Page4 } from "../Screencomponents/page4";
import { Page5 } from "../Screencomponents/page5";
import { Page6 } from "../Screencomponents/page6";
import { Footer } from "../Footer/footer";

function Home(){
    return(
        <>
        <Header/>
        <div style={{display:"flex",width:"100%",marginTop:"-80px"}} className="flex">
        <Page1/>
        <UncontrolledExample/>
        </div>
        <Detail/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
        <Page6/>
        <Footer/>
        </>
    )
}
export{Home}