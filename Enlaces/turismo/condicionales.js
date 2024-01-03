/*   let notas = [20, 14, 20, 20, 20]

if (notas[0] + notas[1] + notas[2] + notas[3] + notas[4] == 100){
  console.log("Sacaste la nota más alta.")
}

if (notas[0] < 14){
  console.log("desaprobaste la parte 1")
}

if (notas[1] < 14){
  console.log("desaprobaste la parte 2")
}

if (notas[2] < 14){
  console.log("desaprobaste la parte 3")
}

if (notas[3] < 14){
  console.log("desaprobaste la parte 4")
}

if (notas[4] < 14){
  console.log("desaprobaste la parte 5")
}

if (notas[0] + notas[1] + notas[2] + notas[3] + notas[4] < 84){
  console.log("DESAPROBASTE EL EXAMEN WACHO")
}

if (notas[0] + notas[1] + notas[2] + notas[3] + notas[4] > 84){
  console.log("APROBASTE EL EXAMEN WACHO")
} */

 let pepitoDinero = prompt("¿Cuanto dinero tienes pepito?");

 let jorgeDinero = prompt("¿Cuanto dinero tienes jorge?");

 let carlosDinero = prompt("¿Cuanto dinero tienes carlos?");

pepitoDinero = parseInt(pepitoDinero)

jorgeDinero = parseInt(jorgeDinero)

carlosDinero = parseInt(carlosDinero)

if (pepitoDinero >= 2 && pepitoDinero < 5){
  alert("podes comprar helado de banana(pepito)")
  alert("y te sobra " + (pepitoDinero - 2) + " pesos")
}

else if (pepitoDinero >= 5 && pepitoDinero < 8){
  alert("podes comprar helado de milanesa(pepito)")
  alert("y te sobra " + (pepitoDinero - 5) + " pesos")
}

else if (pepitoDinero >= 8 && pepitoDinero < 10){
  alert("podes comprar helado de de(pepito)")
  alert("y te sobra " + (pepitoDinero - 8) + " pesos")
}

else if (pepitoDinero >= 10 && pepitoDinero < 18){
  alert("podes comprar helado de helado y helado de aire (pepito)")
  alert("y te sobra " + (pepitoDinero - 10) + " pesos")
}

else if (pepitoDinero >= 18 && pepitoDinero < 20){
  alert("podes comprar helado de chocolate (pepito) ")
  alert("y te sobra " + (pepitoDinero - 18) + " pesos")
}

else if (pepitoDinero >= 20){
  alert("podes comprar helado de vainilla (pepito)")
  alert("y te sobra " + (pepitoDinero - 20) + " pesos")
}

else {
  alert("no te alcanza pa")
}

if (jorgeDinero >= 2 && jorgeDinero < 5){
  alert("podes comprar helado de banana(jorge)")
  alert("y te sobra " + (jorgeDinero - 2) + " pesos")
}

else if (jorgeDinero >= 5 && jorgeDinero < 8){
  alert("podes comprar helado de milanesa(jorge)")
  alert("y te sobra " + (jorgeDinero - 2) + " pesos")
}

else if (jorgeDinero >= 8 && jorgeDinero < 10){
  alert("podes comprar helado de de(jorge)")
  alert("y te sobra " + (jorgeDinero - 2) + " pesos")
}

else if (jorgeDinero >= 10 && jorgeDinero < 18){
  alert("podes comprar helado de helado y helado de aire (jorge) ")
  alert("y te sobra " + (jorgeDinero - 2) + " pesos")
}

else if (jorgeDinero >= 18 && jorgeDinero < 20){
  alert("podes comprar helado de chocolate (jorge) ")
  alert("y te sobra " + (jorgeDinero - 2) + " pesos")
}

else if (jorgeDinero >= 20){
  alert("podes comprar helado de vainilla (jorge)")
  alert("y te sobra " + (jorgeDinero - 2) + " pesos")
}

else {
  alert("no te alcanza pa")
}

if (carlosDinero >= 2 && carlosDinero < 5){
  alert("podes comprar helado de banana(carlos)")
  alert("y te sobra " + (carlosDinero - 2) + " pesos")
}

else if (carlosDinero >= 5 && carlosDinero < 8){
  alert("podes comprar helado de milanesa(carlos)")
  alert("y te sobra " + (carlosDinero - 2 ) + " pesos")
}

else if (carlosDinero >= 8 && carlosDinero < 10){
  alert("podes comprar helado de de(carlos)")
  alert("y te sobra " + (carlosDinero - 2) + " pesos")
}

else if (carlosDinero >= 10 && carlosDinero < 18){
  alert("podes comprar helado de helado y helado de aire (carlos)")
  alert("y te sobra " + (carlosDinero - 2) + " pesos")
}

else if (carlosDinero >= 18 && carlosDinero < 20){
  alert("podes comprar helado de chocolate (carlos)")
  alert("y te sobra " + (carlosDinero - 2) + " pesos")
}

else if (carlosDinero >= 20){
  alert("podes comprar helado de vainilla (carlos)")
  alert("y te sobra " + (carlosDinero - 2) + " pesos")
}

else {
  alert("no te alcanza pa")
}
