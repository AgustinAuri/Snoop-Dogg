
const productos = [
    { name: "remera", price: 2500 },
    { name: "pantalon", price: 7500 },
    { name: "vela", price: 1500 },
    { name: "disco", price: 1000 },
    { name: "libro", price: 1500 },
];

console.log(
    items.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }

        return 0;
    })
);

let encontrado = productos.find(productos => productos.nombre === "Javascript");
console.log(encontrado); 

let precio = parseInt(prompt("ingrese el producto a buscar"));
let filtrados = productos.filter((productos) => cursos.precio > precio);
filtrados.forEach((productos) => {
    let mensaje = `
    nombre: ${curso.nombre}
    $${curso.precio}
    `;

    alert(mensaje);
});