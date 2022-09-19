
const productos = [
    { nombre: "remera", precio: 2500 },
    { nombre: "pantalon", precio: 7500 },
    { nombre: "vela", precio: 750 },
    { nombre: "disco", precio: 1000 },
    { nombre: "libro", precio: 1500 },
];

let carrito = [];

let seleccion = prompt ("hola desea comprar algun producto si o no");

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("hola desea comprar algo si o no")
}

if(seleccion == "si"){
    alert("acontinuacion nuesta lista de productos")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join(" / "))
}

else if (seleccion == "no"){
    alert("gracias por venis, hasta pronto!")
};

while(seleccion != "no"){
    let producto = prompt("compra lo que mas te gusta!")
    let precio = 0

    if(producto == "remera" || producto == "pantalon" || producto == "vela" || producto == "disco" || producto == "libro"){
        switch(producto){
            case "remera":
                precio = 2500;
                break
            ;
            case "pantalon":
                precio = 7500;
                break;

            case "vela":
                precio = 750;
                break;
            
            case "disco":
                precio = 1000;
                break;
            
            case "libro":
                precio =1500;
                break
        }
        let unidades = parseInt(prompt("cuantas unidades quieres?"))

        carrito.push({producto, unidades, precio})
    }
    seleccion = prompt("desea seguir comprando?")
    while(seleccion === "no"){
        alert("gracias por su compra!, hasta pronto!")
        carrito.forEach((carritoFinal) => {
            console.log(`su carrito tiene, producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`el total a pagar por su compra es: ${total}`);