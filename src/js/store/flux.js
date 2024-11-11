const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: []
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			loadPeople: async () => {
				try {
					const res = await fetch("https://www.swapi.tech/api/people/");
					const data = await res.json();
			
					// Extraer todas las URLs de los personajes
					const peopleUrls = data.results.map(item => item.url);
			
					// Hacer fetch en paralelo para todas las URLs
					const peopleData = await Promise.all(
						peopleUrls.map(async url => {
							const response = await fetch(url);
							const personData = await response.json();
							return personData.result;
						})
					);
			
					// Guardar la lista de personas en el store de una sola vez
					setStore({
						people: [...getStore().people, ...peopleData]
					});
			
				} catch (err) {
					console.error(err);
				}
			},
			
			loadPlanets: async () => {
				try {
					const res = await fetch("https://www.swapi.tech/api/planets/");
					const data = await res.json();
			
					// Extraer todas las URLs de los planetas
					const planetUrls = data.results.map(item => item.url);
			
					// Hacer fetch en paralelo para todas las URLs
					const planetsData = await Promise.all(
						planetUrls.map(async url => {
							const response = await fetch(url);
							const planetData = await response.json();
							return planetData.result;
						})
					);
			
					// Guardar la lista de planetas en el store de una sola vez
					setStore({
						planets: [...getStore().planets, ...planetsData]
					});
			
				} catch (err) {
					console.error(err);
				}
			},
			
			loadVehicles: async () => {
				try {
					const res = await fetch("https://www.swapi.tech/api/vehicles/");
					const data = await res.json();
			
					// Extraer todas las URLs de los vehículos
					const vehicleUrls = data.results.map(item => item.url);
			
					// Hacer fetch en paralelo para todas las URLs
					const vehiclesData = await Promise.all(
						vehicleUrls.map(async url => {
							const response = await fetch(url);
							const vehicleData = await response.json();
							return vehicleData.result;
						})
					);
			
					// Guardar la lista de vehículos en el store de una sola vez
					setStore({
						vehicles: [...getStore().vehicles, ...vehiclesData]
					});
			
				} catch (err) {
					console.error(err);
				}
			},

				

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
		}
	};
};

export default getState;
