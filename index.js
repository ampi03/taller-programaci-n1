var mis_tareas=[];

const listando = () => {
    let lista_items=[]; 

    mis_tareas.forEach(element => {
        let item = `
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            <div class="fw-bold">${element.tarea} </div>
            </div>
            <span class="badge bg-primary rounded-pill">${element.tiempo}</span>
        </li>
        `;

        lista_items.push(item);
    });

    document.getElementById("mis_tareas").innerHTML = lista_items.join("");
}

const guardar = () => {
    //guardamos las nuevas tareas
    const tare = document.getElementById("inp_tarea").value;
    const tiem = document.getElementById("inp_tiempo").value;

    const nueva_tarea = {

        tarea:tare,
        tiempo:tiem
    }

    mis_tareas.push(nueva_tarea);
    listando();
}
const btn = document.querySelector("#btn_guardar");
btn.addEventListener("click", guardar);