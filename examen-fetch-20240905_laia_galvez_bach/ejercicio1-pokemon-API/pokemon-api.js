// 1- (2 puntos) En base al JSON del pokemon 19 de la Pokeapi (https://pokeapi.co/
//     api/v2/pokemon/12/), y sin hacer fetch, indica cómo llegarías a los siguientes datos
//     de ese objeto:
//     - habilities / del 1 / is hidden (tiene que dar false)
//     - name (tiene que ser Rattata)
//     - game_indices / 5 / version name (tiene que ser crystal)
//     - Moves 2 / name (es tackle)

const urlRattata = "https://pokeapi.co/api/v2/pokemon/19/";

fetch(urlRattata)
    .then((response) => response.json())
    .then((data) => {

        console.log(data);

        let habilidadesRattata = data.abilities[0].is_hidden;
        document.getElementById("habilidadesRattata").innerHTML = habilidadesRattata;
        
        let nombreRattata = data.forms[0].name.toUpperCase();
        document.getElementById("nombreRattata").innerHTML = nombreRattata;

        let indexRattata = data.game_indices[5].version.name.toUpperCase();
        document.getElementById("indexRattata").innerHTML = indexRattata;

        let movimientosRattata = data.moves[2].move.name.toUpperCase();;
        document.getElementById("movimientosRattata").innerHTML = movimientosRattata;
      
    })
    .catch((err) => console.log(err));