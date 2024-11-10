import React, { useState, useEffect, useContext } from "react";
import {Context} from "../store/appContext"
import "../../styles/home.css";
import { Cards, CardsPlanets, CardsVehicles } from "../component/cards";

export const Home = () => {
	
	const {store, actions} = useContext(Context)
	

	useEffect(()=>{
		
		actions.loadPeople()
		actions.loadPlanets()
		actions.loadVehicles()
		

		

	},[]) 
	
	return <div className="text-center mt-5">
		<h1>Star Wars API</h1>


		
		<div className="container">
      		<h2>Personajes</h2>
      		<div className="row">
        
        		{store.people.map((item, index) => {
					 return (

			            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            				<Cards name={item.name} uid={item.uid} />
            			</div>
          				);
       			 })}
      		</div>
  		 </div>

		   <div className="container">
		   <h2>Planetas</h2>
      		<div className="row">
        
        		{store.planets.map((item,index)=>{
					 return (

			            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            				<CardsPlanets name={item.name} uid={item.uid} />
            			</div>
          				);
       			 })}
      		</div>
  		 </div>

		

		   <div className="container">
		   <h2>Veiculos</h2>
      		<div className="row">
        
        		{store.vehicles.map((item,index)=>{
					 return (

			            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
            				<CardsVehicles name={item.name} uid={item.uid} />
            			</div>
          				);
       			 })}
      		</div>
  		 </div>


		

	</div>
};
