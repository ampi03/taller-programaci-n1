const calcular = () =>{
    const select = document.querySelector("#slt_operacion").value;

    const input_1 = document.querySelector("#dato_1").value;
    const input_2 = document.querySelector("#dato_2").value;

    const parrafo = document.querySelector ("#resultados");

    if (select == 0)
    {
        const intensidad = (input_1)/(input_2);
        parrafo.textContent = `
            El resultado en I es: ${intensidad}
        `;
    }
    else
    {
        if (select == 1){
            const tension = (input_1)/(input_2);
            parrafo.textContent = `
                El resultado en T es: ${tension}
            `;
        }
        else{
            const resistencia = (input_1)/(input_2);
            parrafo.textContent = `
            El resultado en R es: ${resistencia}
            `;
        }
    }
}

const cambiar_label = () =>{
    const select = document.querySelector("#slt_operacion").value;
    const label1 = document.querySelector("#lbl_1");
    const label2 = document.querySelector("#lbl_2");
    if(select == 0)
    {
        label1.textContent = 'V(tension)';
        label2.textContent = 'R(resistencia)';
    }
    else{
        if(select == 1)
        {
            label1.textContent = 'I(intensidad)';
            label2.textContent = 'R(resistencia)';
        }
        else{
            label1.textContent = 'V(tension)';
            label2.textContent = 'R(resistencia)';
        }
    }
}

//identificar el boton a traves de su id
const btn=document.querySelector("#btn_calcular");
 
//cuando se haga click en el boton se ejecuta la funcion
btn.addEventListener("click", calcular);

//acá encontramos a nuestro select, para despues escuchar sus cambios
const select = document.querySelector("#slt_operacion");

//al seleccionar una opcion distinta del select, hay un change
//y cuando suceda ese cambio, quiere ejecutar la funcion calcular
select.addEventListener("change", cambiar_label);