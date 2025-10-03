"use strict"

const agenda = {
    nombre:"",
    tareas:[],

    agregarTarea(descrip, priorid){
        const tarea = {
            descripcion:descrip,
            prioridad:priorid,
            estado:"pendiente"
        }
        this.tareas.push(tarea);
    },

    listarTareas(){
        if(this.tareas.length==0)
            console.log("No hay tareas");
        else{
            this.tareas.forEach ((tarea, i)=>{
            console.log("TAREA" + i + " Descricpion: "+tarea.descripcion +" Priodidad: "+ tarea.prioridad + " Estado: " + tarea.estado);
        });
        }
    },

    marcarCompletada(indice){
        if(indice<0 || indice>this.tareas.length){
            console.log("INDICE INVÁLIDO");
        }else{
            this.tareas[indice].estado = "completada";
        }

    },

    eliminarTarea(indice){
        if(indice<0 || indice>this.tareas.length){
            console.log("INDICE INVÁLIDO");
        }else{
            this.tareas.splice(indice, 1); //splice metodo predefinido de js. se le pasa por parámetos el índice q se quiere borrar y el número de elementos a borrar a partir de ahí
        }
    },

    listarPendientes(){
        console.log("TAREAS PENDIENTES");
        this.tareas.forEach((tarea, i)=>{
            if(tarea.estado == "pendiente"){
                console.log("Tarea "+i+": "+tarea.descripcion+"\n");
            }
        });
    },

    ordenarPorPrioridad(){
        for(let i=0; i<this.tareas.length-1; i++){
            for(let j=0; j<this.tareas.length-i-1; j++){
                if(this.tareas[j].prioridad>this.tareas[j+1].prioridad){
                    let aux=this.tareas[j];
                    this.tareas[j]=this.tareas[j+1];
                    this.tareas[j+1]=aux;
                }
            }
        }
    },

    //mia
    visualizarAgenda(){
        console.log("AGENDA DE: "+this.nombre+"\n");
        this.tareas.forEach((tarea,i)=>{
            console.log("TAREA" + i + " Descricpion: "+tarea.descripcion +" Priodidad: "+ tarea.prioridad + " Estado: " + tarea.estado);
        });
    }
}

agenda.nombre=prompt("Introduce dueño de agenda (NOMBRE): ");

menuParte1();

function menuParte1() {
    let op;
    do {
        console.log("\nIntroduce opcion:");
        console.log("1 - Agregar tarea");
        console.log("2 - Listar Tareas");
        console.log("3 - Marcar como completada");
        console.log("4 - Eliminar tarea");
        console.log("5 - Listar tareas pendientes");
        console.log("6 - Ordenar por prioridad");
        console.log("7 - Visualizar agenda");
        console.log("8 - Salir");

        op = Number(prompt("Introduce opcion: "));
        menuParte2(op);

    } while(op != 8);
}

function menuParte2(op) {

    switch(op) {
        case 1:
            agenda.agregarTarea(prompt("Descripcion: "), Number(prompt("Prioridad: ")));
            break;
        case 2:
            agenda.listarTareas();
            break;
        case 3:
            agenda.marcarCompletada(Number(prompt("Introduce tarea para marcar como completada")));
            break;
        case 4:
            agenda.eliminarTarea(Number(prompt("Introduce tarea a eliminar: ")));
            break;
        case 5:
            agenda.listarPendientes();
            break;
        case 6:
            agenda.ordenarPorPrioridad();
            break;
        case 7:
            agenda.visualizarAgenda();
            break;
        case 8:
            console.log("SALIENDO...");
            break;
        default:
            console.log("NO VALIDO");
    }

}
