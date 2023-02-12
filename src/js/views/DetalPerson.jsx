import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";


export const DetalPerson = () => {
    const { store, actions } = useContext(Context);
    const selectPerson = store.selectPerson;

    const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + selectPerson.i + ".jpg";
    const handleOnErrorImg = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };

    return (
        <div className="container bg-dark">
        <div className="card mb-3  bg-dark text-light">
            <div className="row g-0">
                <div className="col-md-7">
                    <img className="img-fluid rounded-start" src={urlImage} onError={handleOnErrorImg}></img>
                </div>
                <div className="col-md-3">
                    <div className="card-body">
                        <h1>{selectPerson.name}</h1>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-2">
                    <h5>Name</h5>
                    <p>{selectPerson.name}</p>
                </div>
                <div className="col-2">
                    <h5>Hair Color</h5>
                    <p>{selectPerson.hair_color}</p>
                </div>
                <div className="col-2">
                    <h5>Eye Color</h5>
                    <p>{selectPerson.eye_color}</p>
                </div>
            </div>
        </div>
        </div>
    );
}