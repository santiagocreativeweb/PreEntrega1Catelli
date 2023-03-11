let usuario = prompt("Registrese en la web, ingrese su Nombre")
let contraseña = prompt("Ingrese la contraseña que desea agregar")

alert("Su usuario y contraseña se registraron exitosamente")
let mensaje = "Bienvenido " + usuario + " a nuestra tienda, vendemos estos productos\n\n1- MONITOR 144hz \n2- MEMORIA RAM 8GB \n3- MOTHERBOARD B550 \n4- FUENTE 650W \n5- GRAFICA 1660 NVIDIA GTX \n6- TECLADO SK61 "

let usuarioIngresado = prompt("Ingrese su Usuario")
let contraseñaIngresada = prompt("Ingrese su Contraseña")
for (let i = 0; i < 3; i++) {
    if (usuario === usuarioIngresado && contraseña === contraseñaIngresada) {
        alert("Bienvenido " + usuarioIngresado + " a nuestra web")
        break
    } else {
        alert("Su usuario o contraseña es incorrecta")
        usuarioIngresado = prompt("Ingrese su Usuario")
        contraseñaIngresada = prompt("Ingrese su Contraseña")
    }
}

function mensajedeentrada() {
    alert(mensaje)
}

mensajedeentrada()

let carrito = [] // declaramos el arreglo para el carrito
let respuesta = "S"
let total = 0

while (respuesta.toUpperCase() === "S") {
  let componentes = prompt("Ingrese los componentes que quiere comprar:\n\n" +
                            "1- MONITOR 144hz \n" +
                            "2- MEMORIA RAM 8GB \n" +
                            "3- MOTHERBOARD B550 \n" +
                            "4- FUENTE 650W \n" +
                            "5- GRAFICA 1660 NVIDIA GTX \n" +
                            "6- TECLADO SK61 \n" +
                            "Ingrese 0 para finalizar la compra")

  if (componentes !== "0") { // si el usuario no termino de comprar
    switch (componentes) {
      case "1":
        carrito.push("Monitor 144hz") 
        let MONITOR = 5740  // PRECIO DEL MONITOR
        total += MONITOR // SUMA PARA EL PRECIO TOTAL
        alert("El Monitor 144hz se agregó al carrito")
        break
      case "2":
        carrito.push("Memoria RAM 8GB") 
        let RAM = 1800 // PRECIO DE LA RAM
        total += RAM // SUMA PARA EL PRECIO TOTAL
        alert("La Memoria RAM de 8GB se agregó al carrito")
        break
      case "3":
        carrito.push("Motherboard B550")
        let MOTHERBOARD = 3400 // PRECIO DE LA MOTHERBOARD
        total += MOTHERBOARD // SUMA PARA EL PRECIO TOTAL
        alert("La Motherboard se agregó al carrito")
        break
      case "4":
        carrito.push("Fuente 650W") 
        let FUENTE = 2500 // PRECIO DE LA FUENTE
        total += FUENTE // SUMA PARA EL PRECIO TOTAL
        alert("La Fuente de 650W se agregó al carrito")
        break
      case "5":
        carrito.push("Tarjeta Gráfica 1660 NVIDIA GTX") 
        let GRAFICA = 9900 // PRECIO DE LA GRAFICA
        total += GRAFICA // SUMA PARA EL PRECIO TOTAL
        alert("La Tarjeta Gráfica se agregó al carrito")
        break
      case "6":
        carrito.push("Teclado SK61") 
        let TECLADO = 700 // PRECIO DE LA FUENTE
        total += TECLADO // SUMA PARA EL PRECIO TOTAL
        alert("El Teclado se agregó al carrito")
        break
      default:
        alert("No tenemos el producto seleccionado")
        break
    }
  } else { // el usuario termina de comprar su pc :)
    break
  }

  respuesta = prompt("¿Desea seguir agregando productos al carrito? (S/N)").toUpperCase()
}

// muestra el carrito de compras
let carritoMsg = "Los productos en su carrito son:\n\n"
for (let i = 0; i < carrito.length; i++) {
  carritoMsg += carrito[i] + "\n"
}

alert(carritoMsg + "\nEl precio total de su compra es: $" + total)

let compraConfirmada = "S"
let pagoConfirmado = ""

pagoConfirmado = prompt("Desea comprar estos productos? (S/N)")

if (pagoConfirmado.toUpperCase() === "S") {
  alert("Su compra fue autorizada, muchas gracias por su compra")
} else if (pagoConfirmado.toUpperCase() === "N") {
  alert("Se ha cancelado la compra")
} 

  /*let pagoConfirmado = prompt("Desea comprar estos productos? (S/N)").toUpperCase()
if (compra === compraConfirmada) {
  compraConfirmada = "Su compra fue autorizada, muchas gracias por su compra"
} else {
  compraRechaza = "Su pago fue rechazado, vuelve a intentarlo nuevamente"
}*/

