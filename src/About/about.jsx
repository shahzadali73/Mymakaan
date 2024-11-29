import React from "react";
import { Page } from "./page";
import { Header } from "../Header/header";
import { Detail } from "../Screencomponents/detailpage";
import { Page3 } from "../Screencomponents/page3";
import { Page5 } from "../Screencomponents/page5";
import { Page6 } from "../Screencomponents/page6";
import { Footer } from "../Footer/footer";

function About(){
    return(
        <>
        <Header/>
        <Page/>
        <Detail/>
        <Page3/>
        <Page5/>
        <Page6/>
        <Footer/>
        </>
    )
}
export{About}