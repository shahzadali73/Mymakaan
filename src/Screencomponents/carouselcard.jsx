import React from "react";

function Carouselcard(props){
    return(
        <>
        <div className="carousel-card">
                            <div className="content">
                            <p>{props.detail}</p>
                            <div className="flex">
                            <div className="image">
                            <img src={props.img} alt="" />
                            </div>
                            <div className="text">
                            <h5>{props.name}</h5>
                            <h6>{props.profession}</h6>
                            </div>
                            </div>
                            </div>
            </div>
        </>
    )
}
export{Carouselcard}