import React from "react"

const Cards = (props)=>{

    
    
    return (

        <>

    
        
    <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
        <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.uid+".jpg"} className="card-img-top" alt="..."/>
         
        </div>
    </div>

    

  </>  
    )
} 
const CardsPlanets = (props)=>{
    
   

    return (

        <>

    
    <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
        <img src={"https://starwars-visualguide.com/assets/img/planets/"+props.uid+".jpg"} className="card-img-top" alt="..."/>
         
        </div>
    </div>

   

  </>  
    )
} 

const CardsVehicles = (props)=>{
    
   

    return (
        
        <>
       
    <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
        <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+props.uid+".jpg"} className="card-img-top" alt="..."/>
         
        </div>
    </div>

   

  </>  
    )
} 

export { Cards, CardsPlanets, CardsVehicles };
