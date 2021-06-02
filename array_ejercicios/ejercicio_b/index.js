const calculando = () => {

    let arreglo = [1,2,3,4,5,6];

    arreglo.push(7);
    arreglo.push(8); 

    let cantidad_numeros = arreglo.length;
    let suma = 0;

    arreglo.forEach (element =>{

        document.write (element);
        suma = suma + element;

    });

    for (let indice in arreglo) {
        
        console.log(arreglo[indice]);

    }

    let promedio = suma/cantidad_numeros;

    document.write (" Su promedio es: "+promedio);
}

const boton = document.querySelector("#btn_mostrar");
boton.addEventListener("click", calculando);