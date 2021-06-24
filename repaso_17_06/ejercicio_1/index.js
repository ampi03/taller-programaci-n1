//Realizar un programa que, pidiendo la introducción de un número, averigüe
//mediante una función, si dicho número que se le pase es positivo, negativo o nulo. Para
//ello, deberá imprimir en pantalla, en caso positivo, el mensaje “El número es positivo”.En
//el caso de ser negativo escribirá “El número es negativo”. Si resulta ser nulo escribirá “El
//número es nulo”.

const calcular = () => {
    const valor_numero = document.querySelector("#inp_numero").value;
    const parrafo = document.querySelector("#parrafo");
    let mensaje = '';

    if(valor_numero == 0){
        mensaje = 'El número es nulo';
    }else {
        if (valor_numero > 0){
            mensaje = 'El número es positivo';
        }else {
            mensaje = 'El número es negativo';
        }
    }
    parrafo.textContent = mensaje;
}
const btn = document.querySelector("#btn_mostrar");
btn.addEventListener("click", calcular);