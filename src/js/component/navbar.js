import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

		<div className="container">
		
		<nav className="navbar  mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">StarWars</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
 					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    					Favorites
  					</button>
  					<ul className="dropdown-menu">
    					<li></li>
    
  					</ul>
				</div>
			</div>
		</nav>

	</div>

	);
};
