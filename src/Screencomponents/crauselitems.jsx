import React from "react";

function Craouselitem(props){
    return(
        <>
        <div className="craouselimg">
        <img src={props.img} alt="House" />
        </div>
        </>
    )
}
export{Craouselitem}