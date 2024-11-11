import React, { useState, useEffect, useContext } from "react";
import {Context} from "../store/appContext"
import "../../styles/home.css";
import { Cards, CardsPlanets, CardsVehicles } from "../component/cards";

export const Home = () => {
	
	const { store} = useContext(Context);

  
 	
	return <div className="text-center mt-5">
		
				<h1>Star Wars API</h1>


		
		<div className="container">
      		<h2>Personajes</h2>
      		<div className="row">
        
        		{store.people.map((item, index) => {
								
						console.log(item)
							
					return (
											
			            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            				<Cards name={item.properties.name} uid={item.uid} gender={item.properties.gender} eye_color={item.properties.eye_color} hair_color={item.properties.hair_color}/>
            			</div>

						
          				);
						
						  
       			 })}
				 
				 
      		</div>
  		 </div>


		   <div className="container">
		   <h2>Planetas</h2>
      		<div className="row">
        
        		{store.planets.map((item,index)=>{

					console.log(item)

					 return (

			            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            				<CardsPlanets name={item.properties.name} uid={item.uid} population={item.properties.population} terrain={item.properties.terrain} />
            			</div>
          				);
       			 })}
      		</div>
  		 </div>

		

		   <div className="container">
		   <h2>Veiculos</h2>
      		<div className="row">
        
        		{store.vehicles.map((item,index)=>{

					console.log(item)
					
					 return (

			            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            				<CardsVehicles name={item.properties.name} uid={item.uid} />
            			</div>
          				);
       			 })}
      		</div>
  		 </div>

		   
  		 


		

	</div>
};
