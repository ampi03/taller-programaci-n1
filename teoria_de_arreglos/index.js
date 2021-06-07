
//Crear un Array
const mostrar_long = () =>{
    let marcas = ["Ford", "Renault", "Volkswagen", "Seat", "Peugeot", "Chevrolet", "Fiat", "Toyota", "Chery"]
    console.log(marcas.length);
}
const boton = document.getElementById("btn_1");
boton.addEventListener("click", mostrar_long);

//Acceder a un elemento de Array mediante su índice
const mostrar_posi = () =>{
    let marcas = ["Ford", "Renault", "Volkswagen", "Seat", "Peugeot", "Chevrolet", "Fiat", "Toyota", "Chery"]
    let primero = marcas[0]
    let ultimo = marcas[marcas.length - 1]
    console.log(ultimo);
    console.log(primero);
}
const boton_2 = document.getElementById("btn_2");
boton_2.addEventListener("click", mostrar_posi);

//Recorrer un Array
const recorrer= () =>{
    let marcas = ["Ford", "Renault", "Volkswagen", "Seat", "Peugeot", "Chevrolet", "Fiat", "Toyota", "Chery"]
    marcas.forEach((elemento, indice, array) => {
        console.log(elemento, indice);
    })
    
}
const boton_3 = document.getElementById("btn_3");
boton_3.addEventListener("click", recorrer);

//Añadir un elemento al final de un Array
const anadir= () =>{
    let marcas = ["Ford", "Renault", "Volkswagen", "Seat", "Peugeot", "Chevrolet", "Fiat", "Toyota", "Chery"]
    let nueva_marca = marcas.push('Audi');
    console.log(marcas);
}
const boton_4 = document.getElementById("btn_4");
boton_4.addEventListener("click", anadir);

//Eliminar el último elemento de un Array
const eliminar= () =>{
    let marcas = ["Ford", "Renault", "Volkswagen", "Seat", "Peugeot", "Chevrolet", "Fiat", "Toyota", "Chery"]
    let ultimo = marcas.pop();
    console.log(ultimo);
    console.log(marcas);
}
const boton_5 = document.getElementById("btn_5");
boton_5.addEventListener("click", eliminar);

//Añadir un elemento al principio de un Array
const anadir_principio= () =>{
    let marcas = ["Ford", "Renault", "Volkswagen", "Seat", "Peugeot", "Chevrolet", "Fiat", "Toyota", "Chery"]
    let Longitud_principio = marcas.unshift('Opel');
    console.log(marcas);
}
const boton_6 = document.getElementById("btn_6");
boton_6.addEventListener("click", anadir_principio);

//Eliminar el primer elemento de un Array
const eliminar_principio= () =>{
    let marcas = ["Ford", "Renault", "Volkswagen", "Seat", "Peugeot", "Chevrolet", "Fiat", "Toyota", "Chery"]
    let eliminar_primero = marcas.shift()
    console.log(eliminar_primero);
    console.log(marcas);
}
const boton_7 = document.getElementById("btn_7");
boton_7.addEventListener("click", eliminar_principio);

//Encontrar el índice de un elemento del Array
const encontrar_indice= () =>{
    let marcas = ["Ford", "Renault", "Volkswagen", "Seat", "Peugeot", "Chevrolet", "Fiat", "Toyota", "Chery"]
    marcas.push('Volkswagen')
    let pos = marcas.indexOf('Renault')
    console.log(pos);
}
const boton_8 = document.getElementById("btn_8");
boton_8.addEventListener("click", encontrar_indice);

//Eliminar un único elemento mediante su posición (no funciona)
const eliminar_posicion= () =>{
    let marcas = ["Ford", "Renault", "Volkswagen", "Seat", "Peugeot", "Chevrolet", "Fiat", "Toyota", "Chery"]
    let pos= 3;
    let elementoEliminado = marcas.splice(pos, 1);
    console.log(elementoEliminado);
}
const boton_9 = document.getElementById("btn_9");
boton_9.addEventListener("click", eliminar_posicion);

//Eliminar varios elementos a partir de una posición
const eliminar_varios= () =>{
    let marcas = ["Ford", "Renault", "Volkswagen", "Seat", "Peugeot", "Chevrolet", "Fiat", "Toyota", "Chery"]
    console.log(marcas)

    let pos = 1;
    let numElementos = 2;
    
    let elementosEliminados = marcas.splice(pos, numElementos)
    
    console.log(marcas)
}
const boton_10 = document.getElementById("btn_10");
boton_10.addEventListener("click", eliminar_varios);

//Copiar un Array
const copiar= () =>{
    let marcas = ["Ford", "Renault", "Volkswagen", "Seat", "Peugeot", "Chevrolet", "Fiat", "Toyota", "Chery"]
    let copiaArray = marcas.slice();
    console.log(copiaArray)
}
const boton_11 = document.getElementById("btn_11");
boton_11.addEventListener("click", copiar);

