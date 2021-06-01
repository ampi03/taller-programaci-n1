const edades = () =>{
    const edad = document.querySelector("#Edad").value;
    if (edad >= 1 && edad < 13 ) {
        alert ('Es menor a 13 años');
    }else{
        if (edad >= 13 && edad < 21) {
            alert('Sí, está entre los 13 y 21 años');
        }else{
            alert('Es mayor de edad')
        }
        
    }
}
const btn=document.querySelector("#btn_mostrar");
btn.addEventListener("click", edades);