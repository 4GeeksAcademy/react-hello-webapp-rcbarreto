import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const Details = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Cargar datos si no están en el store
    if (params.nature === "people" && !store.people.length) {
      actions.loadPeople();
    }
    if (params.nature === "planets" && !store.planets.length) {
      actions.loadPlanets();
    }
    if (params.nature === "vehicles" && !store.vehicles.length) {
      actions.loadVehicles();
    }
  }, [store.people, store.planets, store.vehicles, actions, params.nature]);

  // Buscar y guardar datos según el tipo (people, planets o vehicles)
  useEffect(() => {
    if (params.nature === "people") {
      const foundPerson = store.people.find(person => person.uid === params.id);
      if (foundPerson) setData(foundPerson);
    } else if (params.nature === "planets") {
      const foundPlanet = store.planets.find(planet => planet.uid === params.id);
      if (foundPlanet) setData(foundPlanet);
    } else if (params.nature === "vehicles") {
      const foundVehicle = store.vehicles.find(vehicle => vehicle.uid === params.id);
      if (foundVehicle) setData(foundVehicle);
    }
  }, [store.people, store.planets, store.vehicles, params.id, params.nature]);

  if (!data) return <p>Loading...</p>;

  // Renderizar según el tipo de datos
  if (params.nature === "people") {
    return (
<div className="card mt-5 bg-dark text-white w-50 mx-auto">
  <div className="card-body d-flex">
    {/* Columna de Imagen */}
    <div className="me-3">
      <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} alt="Character Image" className="img-fluid" />
    </div>
    
    {/* Columna de Nombre y Descripción */}
    <div>
      <h2>{data.properties.name}</h2>
      <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur excepturi quae fugit facere assumenda dolorem, quas asperiores necessitatibus magni optio aliquid unde expedita, culpa ipsum. Exercitationem architecto inventore doloribus temporibus?</p>
    </div>
  </div>
    
  <div className="card-footer bg-danger text-white">
    <div className="container">
      <div className="row text-center">
        <div className="col-2">
          <label className="fw-bold">Name</label>
          <p>{data.properties.name}</p>
        </div>
        <div className="col-2">
          <label className="fw-bold">Birth Year</label>
          <p>{data.properties.birth_year}</p>
        </div>
        <div className="col-2">
          <label className="fw-bold">Gender</label>
          <p>{data.properties.gender}</p>
        </div>
        <div className="col-2">
          <label className="fw-bold">Height</label>
          <p>{data.properties.height}</p>
        </div>
        <div className="col-2">
          <label className="fw-bold">Skin Color</label>
          <p>{data.properties.skin_color}</p>
        </div>
        <div className="col-2">
          <label className="fw-bold">Eye Color</label>
          <p>{data.properties.eye_color}</p>
        </div>
      </div>
        
      </div>
    </div>
  </div>






     
    );
  } else if (params.nature === "planets") {
    return (

      
<div className="card mt-5 bg-dark text-white w-50 mx-auto">
  <div className="card-body d-flex">
    {/* Columna de Imagen */}
    <div className="me-3">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} alt="Character Image" className="img-fluid" />
    </div>
    
    {/* Columna de Nombre y Descripción */}
    <div>
      <h2>{data.properties.name}</h2>
      <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur excepturi quae fugit facere assumenda dolorem, quas asperiores necessitatibus magni optio aliquid unde expedita, culpa ipsum. Exercitationem architecto inventore doloribus temporibus?</p>
    </div>
  </div>
    
  <div className="card-footer bg-danger text-white">
    <div className="container">
      <div className="row text-center">
        <div className="col-2">
          <label className="fw-bold">Name</label>
          <p>{data.properties.name}</p>
        </div>
        <div className="col-2">
          <label className="fw-bold">Climate</label>
          <p>{data.properties.climate}</p>
        </div>
        <div className="col-2">
          <label className="fw-bold">Population</label>
          <p>{data.properties.population}</p>
        </div>
        <div className="col-2">
          <label className="fw-bold">Orbital Period</label>
          <p>{data.properties.orbital_period}</p>
        </div>
        <div className="col-2">
          <label className="fw-bold">Rotation Period</label>
          <p>{data.properties.rotation_period}</p>
        </div>
        <div className="col-2">
          <label className="fw-bold">Diamet</label>
          <p>{data.properties.diameter}</p>
        </div>
      </div>
        
      </div>
    </div>
  </div>
      
    );



  } else if (params.nature === "vehicles") {
    return (
      <div className="card m-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}
            className="card-img-top"
            alt="Vehicle"
          />
          <h5 className="card-title">{data.properties.name}</h5>
          <p>Model: {data.properties.model}</p>
          <p>Manufacturer: {data.properties.manufacturer}</p>
        </div>
      </div>
    );
  }
  
  return null;
};

export default Details;
