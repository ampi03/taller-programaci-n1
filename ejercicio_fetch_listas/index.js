const mostrar_usuarios = async () =>{

    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await respuesta.json();

    const total_items = [];

    data.forEach(element => {
        console.log(element.name);
        //conformamos un item con el nombre del usuario
        let item = `<li class ="list-group-item">${element.name}</li>  `
        //llenamos el array con un item
        total_items.push(item);

    });
    //llenamos el ul usando innerhtm. Pero aplicamos un Join para eliminar las comillas del array total items
    document.getElementById("ul_usuarios").innerHTML = total_items.join("");


}

//const boton = document.querySelector("#btn_mostrar");

const boton = document.getElementById("btn_mostrar");
boton.addEventListener("click", mostrar_usuarios );