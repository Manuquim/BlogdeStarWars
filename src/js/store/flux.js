const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
            selectPlanet: [],
			favorites: [],
            people: [],
            selectPerson: [],
		},
		actions: {
			// Use getActions to call a function within a function
			//loadSomeData: () => { /** fetch().then().then(data => setStore({ "foo": data.bar })) */ },
            getPlanet: (planet) => { setStore({ selectPlanet: planet, }); },
			getPlanets: async () => {
                const store = getStore();
                if (localStorage.getItem("planets") === null) { //localStorage.setItem('test', 1);
                                                                //localStorage.getItem('test') //1
                    const response = await fetch(`https://swapi.dev/api/planets`, {
                        method: "GET",
                        ContentType: "application/json",
                    });
                    const responseJSON = await response.json();

                    setStore({ planets: responseJSON.results, });

                    localStorage.setItem(`planets`, JSON.stringify(store.planets));
                    let storage = localStorage.getItem("planets");
                } else {
                    setStore({ planets: JSON.parse(localStorage.getItem("planets")), });
                }
            },
            getPeople: async () => {
                const store = getStore();
                if (localStorage.getItem("people") === null) { //localStorage.setItem('test', 1);
                                                                //localStorage.getItem('test') //1
                    const response = await fetch(`https://swapi.dev/api/people`, {
                        method: "GET",
                        ContentType: "application/json",
                    });
                    const responseJSON = await response.json();

                    setStore({ people: responseJSON.results, });

                    localStorage.setItem(`people`, JSON.stringify(store.people));
                    let storage = localStorage.getItem("people");
                } else {
                    setStore({ people: JSON.parse(localStorage.getItem("people")), });
                }
            },
            getPerson: (person) => { setStore({ selectPerson: person, }); },

            addFavorite : item =>{
                const store = getStore();
                let favorito=store.favorites;
                //Buscamos si el elemento ya esta en el store de favoritos
                let it=favorito.filter((i)=>i.name==item.name);
                //Si no esta, se añade al store de favoritos
                if(it.length==0){setStore({ favorites: [...store.favorites, item] });}
            },
            /*addFavorite : item =>{
                const store = getStore();
                if(!(action.isFavorite.item)) {setStore({ favorites: [...store.favorites, item] })};
            },*/
            delFavorite: item => {
                const store = getStore();
                const delName = store.favorites.filter(name => name !== item);
                setStore({ favorites: delName });
            },

            isFavorite: item => {
                const store = getStore();
                let favoritos=store.favorites;
                //Buscamos si el elemento ya esta en el store de favoritos
                let it=favoritos.filter((i)=>i.name==item.name);
                //Si no esta return false
                if(it.length==0){
                    return false;
                }
                return true;
            }
		}
	};
};

export default getState;
