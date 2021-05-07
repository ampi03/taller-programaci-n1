const calcular = () =>{
    const input_a = document.querySelector("#dato_a").value;
    const input_b = document.querySelector("#dato_b").value;
    const input_c = document.querySelector("#dato_c").value;

    const parrafo = document.querySelector("#resultados");

    const bloque_1 = (Math.pow(input_b,2))-(4*input_c);
    const bloque_2 = 2*input_a;
    const raiz = Math.sqrt(bloque_1);
    const bloque_3 = raiz/bloque_2;
    const resultado_1 = -input_b +bloque_3;
    const resultado_2 = -input_b -bloque_3;

    parrafo.textContent = `
    El resultado 1 es: ${resultado_1}
    El resultado 2 es: ${resultado_2}
    `;
}
//identificar el boton a traves de su id
const btn=document.querySelector("#btn_resultado");
 
//cuando se haga click en el boton se ejecuta la funcion
btn.addEventListener("click", calcular);