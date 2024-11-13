import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Cards = (props) => {
    const { store, actions } = useContext(Context);

    // Verifica si el personaje actual está en favoritos
    const isFavorite = store.favorites.some(fav => fav.uid === props.uid && fav.type === "people");

    return (
        <div className="card m-2 bg-dark text-white">
            <div className="card-body">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top" alt="..." />
                <h5 className="card-title">{props.name}</h5>
            </div>
            <div className="text-start m-2">
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Hair color:</strong> {props.hair_color}</p>
                <p><strong>Eye color:</strong> {props.eye_color}</p>

                <div className="text-start m-2 d-flex justify-content-between">
                    <Link to={`/people/${props.uid}`} className="btn btn-primary">
                        Learn More
                    </Link>
                    <i
                        className={`fa${isFavorite ? "-solid" : "-regular"} fa-heart ms-auto fs-2 ${isFavorite ? "text-warning" : ""}`}
                        onClick={() => actions.Favorite({ uid: props.uid, name: props.name, type: "people" })}
                        style={{ cursor: "pointer" }}
                    ></i>
                </div>
            </div>
        </div>
    );
};

const CardsPlanets = (props) => {
    const { store, actions } = useContext(Context);

    const isFavorite = store.favorites.some(fav => fav.uid === props.uid && fav.type === "planets");

    return (
        <div className="card bg-dark text-white">
            <div className="card-body">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} className="card-img-top" alt="..." />
                <h5 className="card-title">{props.name}</h5>
            </div>
            <div className="text-start m-2">
                <p><strong>Population:</strong> {props.population}</p>
                <p><strong>Terrain:</strong> {props.terrain}</p>

                <div className="text-start m-2 d-flex justify-content-between">
                    <Link to={`/planets/${props.uid}`} className="btn btn-primary">
                        Learn More
                    </Link>
                    <i
                        className={`fa${isFavorite ? "-solid" : "-regular"} fa-heart ms-auto fs-2 ${isFavorite ? "text-warning" : ""}`}
                        onClick={() => actions.Favorite({ uid: props.uid, name: props.name, type: "planets" })}
                        style={{ cursor: "pointer" }}
                    ></i>
                </div>
            </div>
        </div>
    );
};

const CardsVehicles = (props) => {
    const { store, actions } = useContext(Context);

    const isFavorite = store.favorites.some(fav => fav.uid === props.uid && fav.type === "vehicles");

    return (
        <div className="card bg-dark text-white">
            <div className="card-body">
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`} className="card-img-top" alt="..." />
                <h5 className="card-title">{props.name}</h5>
            </div>
            <div className="text-start m-2">
                <p><strong>Model:</strong> {props.model}</p>
                <p><strong>Vehicle class:</strong> {props.vehicle_class}</p>

                <div className="text-start m-2 d-flex justify-content-between">
                    <Link to={`/vehicles/${props.uid}`} className="btn btn-primary">
                        Learn More
                    </Link>
                    <i
                        className={`fa${isFavorite ? "-solid" : "-regular"} fa-heart ms-auto fs-2 ${isFavorite ? "text-warning" : ""}`}
                        onClick={() => actions.Favorite({ uid: props.uid, name: props.name, type: "vehicles" })}
                        style={{ cursor: "pointer" }}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export { Cards, CardsPlanets, CardsVehicles };
