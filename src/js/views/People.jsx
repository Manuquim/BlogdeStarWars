import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// Custom Componet que muestra las Cards de los personajes
import { CardPeople } from "../views/CardPeople.jsx";

import { Context } from "../store/appContext";


export const People = () => {
	const { store, actions } = useContext(Context);
	//traemos a people del store
	const people = store.people;
	return (
		<div className="container bg-dark">
            <h1 className="text-light text-center pt-4">People</h1>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{   people.map((e, i)=>{
                        let card = <CardPeople i={i+1} name={e.name} hair_color={e.hair_color} eye_color={e.eye_color} />
                        return card;
                    })
                }
			</div>
		</div>
	);
};