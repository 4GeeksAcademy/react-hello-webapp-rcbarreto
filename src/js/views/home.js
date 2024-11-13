import React, { useState, useEffect, useContext } from "react";
import {Context} from "../store/appContext"
import "../../styles/home.css";
import { Cards, CardsPlanets, CardsVehicles } from "../component/cards";

export const Home = () => {
	
	const { store} = useContext(Context);

  
 	
	return <div className="text-center mt-5">
		
				<h1>Star Wars API</h1>


		
				<div className="container my-5">
  <h2 className="text-danger">Personajes</h2>
  
  <div className="d-flex flex-row overflow-auto b">
    {store.people.map((item, index) => (
      <div key={index} className="col-12 col-md-6 col-lg-3 mb-4 flex-shrink-0">
        <Cards name={item.properties.name} uid={item.uid} gender={item.properties.gender} eye_color={item.properties.eye_color} hair_color={item.properties.hair_color}/>
      </div>
    ))}
  </div>
</div>

		   <div className="container">
		   <h2>Planetas</h2>
      		<div className="d-flex flex-row overflow-auto">
        
        		{store.planets.map((item,index)=>{

					
					 return (

			            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4 flex-shrink-0">
            				<CardsPlanets name={item.properties.name} uid={item.uid} population={item.properties.population} terrain={item.properties.terrain} />
            			</div>
          				);
       			 })}
      		</div>
  		 </div>

		

		   <div className="container">
		   <h2>Veiculos</h2>
      		<div className="d-flex flex-row overflow-auto">
        
        		{store.vehicles.map((item,index)=>{

				
					 return (

			            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4 flex-shrink-0">
            				<CardsVehicles name={item.properties.name} uid={item.uid} vehicle_class={item.properties.vehicle_class} model={item.properties.model}/>
            			</div>
          				);
       			 })}
      		</div>
  		 </div>

		   
  		 


		

	</div>
};
