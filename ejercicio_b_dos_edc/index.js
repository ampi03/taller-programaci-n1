const enseñar = () =>{
    
    const respuesta = window.prompt ("¿Qué topping desea en su helado?");

    let helado = 250;


    if(respuesta == 'oreo')
    {
        let total = helado + 40;
        document.write ('Su total es: $' +total);

    }else{
        if(respuesta == 'kitkat')
        {
            let total = helado + 55;
            document.write ('Su total es: $' +total);

        }else{
            if(respuesta == 'brownie')
            {
                let total = helado + 65;
                document.write ('Su total es: $' +total);

            }else{
                if(respuesta == 'rocklets')
                {
                    let total = helado + 75;
                    document.write ('Su total es: $' +total);

                }else{
                    document.write ('No tenemos ese topping, lo sentimos.');
                }
            }
        }
    } 
}

const boton = document.querySelector("#btn_mostrar");

boton.addEventListener("click", enseñar);