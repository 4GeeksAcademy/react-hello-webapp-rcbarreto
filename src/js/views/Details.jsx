import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const Details = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  
  
  const [data, setData] = useState(null);

  useEffect(() => {
    if (params.nature === "people" && !store.people.length) {
      actions.loadPeople();  // Carga las personas si no están en el store
    }
    if (params.nature === "planets" && !store.planets.length) {
      actions.loadPlanets();  // Carga los planetas si no están en el store
    }
  }, [store.people, store.planets, actions, params.nature]); // Dependemos de las personas y planetas en el store

  // Dependiendo del tipo (people o planets), buscamos la información correspondiente
  useEffect(() => {
    if (params.nature === "people") {
      const foundPerson = store.people.find(person => person.uid === params.id);
      if (foundPerson) {
        setData(foundPerson);  // Si encontramos la persona, la guardamos
      }
    } else if (params.nature === "planets") {
      const foundPlanet = store.planets.find(planet => planet.uid === params.id);
      if (foundPlanet) {
        setData(foundPlanet);  // Si encontramos el planeta, lo guardamos
      }
    }
  }, [store.people, store.planets, params.id, params.nature]); // Dependemos de store y params

  // Si no hay datos aún, mostramos un mensaje de carga
  if (!data) {
    return ;
  }

  if (params.nature === "people"){
  // Renderizamos la tarjeta dependiendo de si es una persona o un planeta
  return (
    <div className="card m-2 " style={{ width: "18rem" }}>
      <div className="card-body">
      <div className="text-start m-2 d-flex justify-content-between">
        <img 
          src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} 
          className="card-img-top" 
          alt="..."
          
        />
        </div>
        <h5 className="card-title">{data.properties.name}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, laudantium. Et, laborum. Adipisci eveniet ducimus perferendis libero corrupti magnam rem temporibus? Accusamus ut vero veritatis perspiciatis minus. Sunt, enim totam!</p>
         </div>
        <div>
            <p>Birth</p>
            <p>Year</p>
            <p>{data.properties.birth_year}</p>
        </div>

    </div>
  );
};


if  (params.nature === "people"){
    // Renderizamos la tarjeta dependiendo de si es una persona o un planeta
    return (
      <div className="card m-2 " style={{ width: "18rem" }}>
        <div className="card-body">
        <div className="text-start m-2 d-flex justify-content-between">
          <img 
            src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} 
            className="card-img-top" 
            alt="..."
            
          />
          </div>
          <h5 className="card-title">{data.properties.name}</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, laudantium. Et, laborum. Adipisci eveniet ducimus perferendis libero corrupti magnam rem temporibus? Accusamus ut vero veritatis perspiciatis minus. Sunt, enim totam!</p>
           </div>
          <div>
              <p>Birth</p>
              <p>Year</p>
              <p>{data.properties.birth_year}</p>
          </div>
  
      </div>
    );
  };
}  
export default Details;
