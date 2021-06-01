const preguntar = () =>{
    //almacena la respuesta del usuario
    const respuesta = window.prompt ("¿Usted es culpable?");

    //se da un mensaje al usuario dependiendo de su respuesta
    if(respuesta == 'si')
    {
        document.write ("Irás a la carcel");
    }else{
        if(respuesta == 'no')
        {
            document.write ("Irás a casa");
        }
        else{
            document.write ("La documentación, por favor");
        }
    }

}

const boton = document.querySelector("#btn_responder");

boton.addEventListener("click", preguntar);