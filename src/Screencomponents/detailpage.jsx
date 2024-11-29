import React from "react";

function Detail(){
    return(
        <>
        <div className="detail-container">
            <input type="text" placeholder="Search Keyword"/>
            <select>
                <option>Property Type</option>
                <option>Property Type1</option>
                <option>Property Type2</option>
                <option>Property Type3</option>
            </select>
            <select>
                <option>Location</option>
                <option>Location 1</option>
                <option>Location 2</option>
                <option>Location 3</option>
            </select>
            <button>Search</button>
        </div>
        </>
    )
}
export{Detail}