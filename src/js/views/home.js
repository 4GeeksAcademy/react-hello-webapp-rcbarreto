import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {

	const [ people, setPeople] = useState ([])
	useEffect(()=>{
		fetch("https://www.swapi.tech/api/planets")
		.then(res => res.json())
		.then(data => setPeople(data.results))
		.catch(err => console.error(err))
	},[]) 
	return <div className="text-center mt-5">
		<h1>Star Wars API</h1>
		{
			people.map((item,index)=>{
			return(
				<h1 key={index}> {item.name} </h1>
			)	
			})
			
		}
		
	</div>
};
