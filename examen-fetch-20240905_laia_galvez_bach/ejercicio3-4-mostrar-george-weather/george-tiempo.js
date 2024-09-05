// 3- (3 puntos) Muestra en pantalla mediante <div> o/y <p> estos resultados: nombre,
// apellidos email e imagen del primer elemento en el array (George Bluth) (ver
// imagen abajo).

const georgeAPI = "https://reqres.in/api/users";

fetch(georgeAPI)
.then((response) => response.json())
.then((data) => {
  
    console.log(data);

    let nombreGeorge = data.data[0].first_name;
    document.getElementById("nombre").innerHTML = nombreGeorge;

    let apellidoGeorge = data.data[0].last_name;
    document.getElementById("apellido").innerHTML = apellidoGeorge;

    let emailGeorge = data.data[0].email;
    document.getElementById("email").innerHTML = emailGeorge;

    let fotoGeorge = data.data[0].avatar;
    document.getElementById("foto").src = fotoGeorge;

})
.catch((err) => console.log(err));

// // 4- (2 puntos) Conecta a la API openweathermap.org con tu API Key y muestra el clima en Barcelona: descripción en castellano, grados en Celsius y humedad en % (ver imagen)

document.getElementById("botonTiempo").addEventListener("click", () => {

    const tiempoAPI = "http://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&APPID=3e23da879f54f2f8cb69fb9774008bb0&units=metric&lang=es";

    fetch(tiempoAPI)
    .then((response) => response.json())
    .then((data) => {
  
        console.log(data);

        let temperaturaBCN = data.main.temp;
        document.getElementById("temperatura").innerHTML = "La temperatura es de: " + temperaturaBCN + " ºC";

        let humedadBCN = data.main.humidity;
        document.getElementById("humedad").innerHTML = "La humedad es de: " + humedadBCN + "%";

        let descripcionBCN = data.weather[0].description;
        document.getElementById("descripcion").innerHTML = "Hace " + descripcionBCN;

    })
    .catch((err) => console.log(err));

})