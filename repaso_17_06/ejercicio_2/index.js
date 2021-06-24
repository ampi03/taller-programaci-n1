const mostrar = () => {
    let inp1 = document.querySelector("#inp_1").value;
    let inp2 = document.querySelector("#inp_2").value;

    const parrafo = document.querySelector("#resultado");
    const respuesta = sumar(inp1, inp2);

    parrafo.textContent = respuesta;
}

const sumar = (numero1, numero2) => {
    const total = numero1 + numero2;

    let respuesta = Math.sign(total);

    if (respuesta == 1){
        mensaje='El numero es positivo';
    } else{
        if (respuesta == -1){
            mensaje='El numero es negativo';
        } else{
            mensaje='El numero es nulo';
        }
    }
    return mensaje;
}   
const btn = document.querySelector("#btn_mostrar");
btn.addEventListener("click", mostrar);