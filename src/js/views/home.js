import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="container-fluid text-center mt-5 bg-dark">
		<div className="cover-container d-flex w-100 p-3 mx-auto flex-column">

      <div className="container card-group bg-dark">

        <div className="card border-dark my-3 mx-2 text-bg-dark">
          <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-title">Luke Skywalker</p>
          </div>
        </div>

        <div className="card border-dark my-3 mx-2 text-bg-dark">
          <img src="https://starwars-visualguide.com/assets/img/characters/2.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-title">C-3PO</p>
          </div>
        </div>

        <div className="card border-dark my-3 mx-2 text-bg-dark">
          <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-title">R2-D2</p>
          </div>
        </div>

        <div className="card border-dark my-3 mx-2 text-bg-dark">
          <img src="https://starwars-visualguide.com/assets/img/characters/4.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-title">Darth Vader</p>
          </div>
        </div>

        <div className="card border-dark my-3 mx-2 text-bg-dark">
          <img src="https://starwars-visualguide.com/assets/img/characters/5.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-title">Leia Organa</p>
          </div>
        </div>

      </div>
    </div>
	</div>
);
