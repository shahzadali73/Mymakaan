import React from "react";
import { Page } from "./page1";
import { Header } from "../Header/header";
import { Detail } from "../Screencomponents/detailpage";
import { Footer } from "../Footer/footer";
import { Page7 } from "./page2";
import { Cpage3 } from "./page3";
import { Cpage4 } from "./page4";

function Contact(){
    return(
        <>
        <Header/>
        <Page/>
        <Detail/>
        <Page7/>
        <Cpage3/>
        <Cpage4/>
        <Footer/>
        </>
    )
}
export{Contact}