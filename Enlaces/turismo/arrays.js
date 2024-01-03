/* entradaGratis = false

function horario(hora) {

  let edad = prompt(`¿Cúal es tu edad?.........................................................${hora}:00Hs`)
  
  if (edad >= 18){
    if (hora >= 2 && hora <= 7 && entradaGratis == false){
      entradaGratis = true
      alert("pasa maestro es gratis")
    }

    else if (hora >= 2 && hora <= 7 && entradaGratis == true){
      alert("son 500 pesos maestro")
    }
  }

  if (edad >= 18 && hora < 2 || hora > 7){
    alert("son 500 pesos maestro")
  }
    
    if (edad < 18){
      alert("los nenes deberian estar en sus casas")
    } 

} */

let javascript;

function juego(elemento){
  elemento = prompt("piedra papel o tijera")
  javascript = Math.random();
  if (javascript <= 0.333333333333 && javascript >=0){
    alert(`${elemento} - piedra`)
    if (elemento == "papel"){
      alert("GANASTE")
    }
    else if (elemento == "tijeras" || elemento == "tijera"){
      alert("perdiste")
    }
    else if (elemento == "piedra"){
      alert("empate")}
    else alert("error");
  }

  if (javascript <= 0.666666666666 && javascript >= 0.333333333334){
    alert(`${elemento} - papel`)
    if (elemento == "papel"){
      alert("empate")
    }
    else if (elemento == "tijeras" || elemento == "tijera"){
      alert("GANASTE")
    }
    else if (elemento == "piedra"){
      alert("perdiste")
    }
    else alert("error")
  }

  if (javascript <= 0.999999999999 && javascript >= 0.666666666667){
    alert(`${elemento} - tijeras`)
    if (elemento == "papel"){
      alert("perdiste")
    }
    else if (elemento == "tijeras" || elemento == "tijera"){
      alert("empate")
    }
    else if (elemento == "piedra"){
      alert("GANASTE")
    }
    else alert("error")
  } 
  
}

juego()
