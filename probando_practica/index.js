const mostrar = () =>{
    //almacena la respuesta del usuario-si/no-
    const respuesta = window.prompt ("¿Está seguro?");

    //se da la respuesta del programa al usuario
    document.write (respuesta)

}

//el boton ejecuta la pregunta para el usuario
const boton = document.querySelector("#btn_mostrar");

boton.addEventListener("click", mostrar);