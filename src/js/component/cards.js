import React from "react"
import {Link} from "react-router-dom"

const Cards = (props, )=>{

    
    
    return (

      

        <>

    

    <div className="card m-2" style={{width: "18rem"}}>
        <div className="card-body">
           <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.uid+".jpg"} className="card-img-top" alt="..."/>
           <h5 className="card-title">{props.name}</h5>
        </div>
        <div  className="text-start m-2">
           <p><strong> Gender:</strong> {props.gender} </p>
           <p><strong>  Hair color:</strong>  {props.hair_color} </p> 
           <p> <strong> Eye color:</strong>  {props.eye_color} </p>         
        
        
            <div className="text-start m-2 d-flex justify-content-between">
                <Link to={`/people/${props.uid}`} className="btn btn-primary">
                    Learn More
                </Link>
                <i className="fa-regular fa-heart ms-auto fs-2 text-warning"></i>
            </div>
       
           
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
           
            <img src={"https://starwars-visualguide.com/assets/img/planets/"+props.uid+".jpg"} className="card-img-top" alt="..."/>
            <h5 className="card-title">{props.name}</h5>
        </div>

        <div  className="text-start m-2">

            <p><strong> Population:</strong> {props.population} </p>
            <p><strong>  Terrain:</strong>  {props.terrain} </p>         
        
        
            <div className="text-start m-2 d-flex justify-content-between">
                <Link to={`/planets/${props.uid}`} className="btn btn-primary">
                    Learn More
                </Link>
                <i className="fa-regular fa-heart ms-auto fs-2 text-warning"></i>
            </div>
       
           
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
           
            <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+props.uid+".jpg"} className="card-img-top" alt="..."/>
            <h5 className="card-title">{props.name}</h5>
        </div>

        <div  className="text-start m-2">
           <p><strong> Population:</strong> {props.population} </p>
           <p><strong>  Terrain:</strong>  {props.terrain} </p> 
             
        
        
            <div className="text-start m-2 d-flex justify-content-between">
                <Link to={`/vehicles/${props.uid}`} className="btn btn-primary">
                    Learn More
                </Link>
                <i className="fa-regular fa-heart ms-auto fs-2 text-warning"></i>
            </div>
       
           
        </div>
    </div>

   

  </>  
    )
} 

export { Cards, CardsPlanets, CardsVehicles };
