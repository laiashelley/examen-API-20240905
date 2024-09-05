// 2- (3 puntos) En la dirección https://reqres.in/api/users/post, crea un nuevo perfi l
// con los atributos fi rst_name, last_name y email. Mostrar en consola el resultado (no
// te preocupes por el número de ID automático que genera la API).

const reqresAPI = "https://reqres.in/api/users";

// leemos API

fetch(reqresAPI)
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((err) => console.log(err));

// creamos nuevo perfil

fetch(reqresAPI, { 
    method: "POST", 
    headers: { 
        "Content-type": "application/JSON"
    },
    body: JSON.stringify ({ 
        first_name: "Laia",
        last_name: "Galvez",
        email: "galvezbachlaia@gmail.com"
    }) 
})
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((err) => console.log(err));