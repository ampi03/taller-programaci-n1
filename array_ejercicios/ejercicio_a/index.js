const mostrando = () => {

    let clasificaciones = [' Ana ','Oswaldo ','Raúl ','Celia ','María ','Antonio'];

    clasificaciones.forEach (element =>{

        document.write(element);

    });

    for (let indice in clasificaciones) {
        
        document.write(clasificaciones[indice]);

    }
    
    document.write(`
        Primer puesto: ${clasificaciones[0]}
        Segundo puesto: ${clasificaciones[1]}
        Tercer puesto: ${clasificaciones[2]}
    `);
}

const boton = document.querySelector("#btn_mostrar");
boton.addEventListener("click", mostrando );