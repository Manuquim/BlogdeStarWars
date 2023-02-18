import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';


export const BtnFavorites = ({ favoritos }) => {
    const { store, actions } = useContext(Context);
    const favorites = store.favorites;


    const click = (ident) => {
        actions.transforFavorites(ident)
        favorites.length === 1 && actions.transforFavorites(null);
    }


    const [displayLista, setDisplayLista] = useState(false)
    const display =()=>{
        setDisplayLista((displey)=> displey = !displey)
    }


    return (
        
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites  
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                        3
                    </span>
                </button>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Favoritos</Link></li>
                    {
                        favoritos && favoritos.map((ele) => {
                            const listaFavs = [];
                            const ident = ele && ele.id
                            if (ele) {
                                const fav =
                                    <li className="dropdown-item" key={ident} >
                                        <div className="row">
                                            <div className="col-9">
                                                <div>{ele && ele.name}</div>
                                            </div>
                                            <div className="col-3">
                                                <div className="botonDelete" id={ident} onClick={() => click(ele.id)}>
                                                    icon
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                listaFavs.push(fav)
                            }
                            return listaFavs;
                        })
                    }
                </ul>
            </div>

    );
};
