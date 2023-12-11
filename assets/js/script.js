const players = [
    { nombre: 'Jugador 1', n1: 34, n2: 32, n3: 23, n4: 1, n5: 5, n6: 3 },
    { nombre: 'Jugador 2', n1: 67, n2: 46, n3: 67, n4: 44, n5: 12, n6: 7 },
    { nombre: 'Jugador 3', n1: 90, n2: 87, n3: 86, n4: 49, n5: 4, n6: 47 },
    { nombre: 'Jugador 4', n1: 38, n2: 93, n3: 88, n4: 30, n5: 16, n6: 52 },
    { nombre: 'Jugador 5', n1: 63, n2: 85, n3: 91, n4: 51, n5: 35, n6: 62 },
    { nombre: 'Jugador 6', n1: 7, n2: 54, n3: 52, n4: 44, n5: 12, n6: 88 },
    { nombre: 'Jugador 7', n1: 1, n2: 2, n3: 73, n4: 73, n5: 27, n6: 11 },
    { nombre: 'Jugador 8', n1: 6, n2: 8, n3: 77, n4: 59, n5: 30, n6: 9 },
    { nombre: 'Jugador 9', n1: 5, n2: 85, n3: 29, n4: 46, n5: 12, n6: 52 },
    { nombre: 'Jugador 10', n1: 23, n2: 33, n3: 99, n4: 33, n5: 22, n6: 81 }
]

const divLista = document.querySelector("#lista")
const btnResultados = document.querySelector("#termino")
const perdedor = document.querySelector("#perdidas")
const unoBueno = document.querySelector("#ganarUno")
const ganadorLoto = document.querySelector("#loto")
const numerosGanadores = [7, 54, 52, 44, 12, 88]

const generarTemplate = () => {
    let contenidos = ''
    for (player of players) {
        contenidos += `<div id="jugadores">
            <h3>Nombre: ${player.nombre}</h3>
            <h4>Numeros: </h4>
            <p>${player.n1}</p>
            <p>${player.n2}</p>
            <p>${player.n3}</p>
            <p>${player.n4}</p>
            <p>${player.n5}</p>
            <p>${player.n6}</p>
        </div>
        `
    }
    return contenidos
};

divLista.innerHTML = generarTemplate()

const mostrarGanadores = () => {
    let contadorLoto = 0
    let contadorPerdedores = 0
    let contadorUno = 0
    for (player of players) {
        if (player.n1 && player.n2 && player.n3 && player.n4 && player.n5 && player.n6 in numerosGanadores) {
            contadorLoto += 1
        }
        if (player.n1 in numerosGanadores ||
            player.n2 in numerosGanadores ||
            player.n3 in numerosGanadores ||
            player.n4 in numerosGanadores ||
            player.n5 in numerosGanadores ||
            player.n6 in numerosGanadores) {
                contadorUno+=1
        } else {
            contadorPerdedores += 1
        }
    }
    unoBueno.innerHTML = contadorUno
    perdedor.innerHTML = contadorPerdedores
    ganadorLoto.innerHTML = contadorLoto
}

btnResultados.addEventListener("click", function () {
    mostrarGanadores()
})