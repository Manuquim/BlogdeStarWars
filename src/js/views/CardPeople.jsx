import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

// people: https://starwars-visualguide.com/assets/img/characters/1.jpg
// planets: https://starwars-visualguide.com/assets/img/planets/1.jpg
// host = "https://starwars-visualguide.com/assets/img/"



export const CardPeople = ({ i, name, hair_color, eye_color}) => {
    const { store, actions } = useContext(Context);
    const people = store.people;
    const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + i + ".jpg";
   
    const handleOnErrorImg = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    }

    return (
        <div className="col">
            <div className="card border-dark my-3 mx-2 text-bg-dark">
                <img alt="" src={urlImage} onError={handleOnErrorImg}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Hair color: {hair_color}</p>
                    <p className="card-text">Eye color: {eye_color} </p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/People/${i}`} className="btn btn-secondary" 
                            onClick={() => actions.getPerson({i:i,name:name, hair_color:hair_color,eye_color:eye_color })}>
                                Details
                        </Link>
                        <Link className="btn btn-outline-warning" 
                            onClick={() => 
                            {
                                let x=i-1;
                                actions.addFavorite(people[x])
                            }}>
                                {actions.isFavorite(people[i-1]) ? 
                                <i className="fas fa-heart fa-lg"></i> : <i className="far fa-heart fa-lg"></i>}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}