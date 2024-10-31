import React from "react"

const Cards = (props)=>{
    
    return (

    <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
        <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.uid+".jpg"} className="card-img-top" alt="..."/>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    )
} 
export default Cards

