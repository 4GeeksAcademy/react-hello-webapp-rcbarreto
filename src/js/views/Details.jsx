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
      <div className="card m-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
            className="card-img-top"
            alt="Character"
          />
          <h5 className="card-title">{data.properties.name}</h5>
          <p>{data.properties.birth_year}</p>
        </div>
      </div>
    );
  } else if (params.nature === "planets") {
    return (
      <div className="card m-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}
            className="card-img-top"
            alt="Planet"
          />
          <h5 className="card-title">{data.properties.name}</h5>
          <p>Population: {data.properties.population}</p>
          <p>Climate: {data.properties.climate}</p>
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
