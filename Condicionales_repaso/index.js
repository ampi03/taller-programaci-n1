
const mensaje_clima = () => {
    //acá identificamos el SELECT a traves de su ID
    const valor_clima = document.querySelector("#slt_clima").value;

    //acá identificamos el parrafo a traves de su ID
    const parrafo = document.querySelector("#p_descripción_clima");

    var mensaje = '';

    if(valor_clima == 0)
    {
        mensaje = 'Cielo despejado, sin probabilidades de nubosidad';
        parrafo.textContent = mensaje;
    }
    else
    {
        if(valor_clima == 1)
        {
            mensaje = 'Fuertes lluvias, con posibilidad de mejorar durante la noche';
            parrafo.textContent = mensaje;
        }
        else
        {
            mensaje = 'Cielo parcialmente nublado, con posibilidad de lluvias';
            parrafo.textContent = mensaje;
        }
    }
}

//acá simplemente encontramos a nuestro select, para despues escuchar sus cambios
const select = document.querySelector("#slt_clima");

//al seleccionar una opcion distinta del select,eso implica un cambio (change)
//y cuando suceda ese cambio, quiere ejecutar la funcion mensaje_clima
select.addEventListener("change", mensaje_clima);