// Script para cambiar la opción seleccionada del tipo de horario
var totalHoras = 0;
var valueTipo = 1;
document.getElementById("resHoras").onchange=function() {
    var numHoras = parseFloat(document.getElementById("numHoras").value);
    valueTipo = parseFloat(this.value);
    var text = this.options[this.selectedIndex].text;
    totalHoras = valueTipo*numHoras;
    document.getElementById("tipo").innerHTML = text;
    document.getElementById("tipo2").innerHTML = text;
    document.getElementById("totalHoras").innerHTML =  totalHoras;
    insertarCodigo();
}
document.getElementById("numHoras").onchange=function() {
    valueTipo = parseFloat(document.getElementById("resHoras").value);
    var numHoras = parseFloat(this.value);
    var text = document.getElementById("resHoras").options[document.getElementById("resHoras").selectedIndex].text;
    totalHoras = valueTipo*numHoras;
    document.getElementById("tipo").innerHTML = text;
    document.getElementById("totalHoras").innerHTML =  totalHoras;
    insertarCodigo();
}
var t1 = {nombre:"Proyecto I.S", materia:"Ingeniería de Software", dificultad:4, prioridad: 5, entrega: "12/11/2019"};
var t2 = {nombre:"Proyecto Conta", materia:"Contabilidad I", dificultad:1, prioridad: 4, entrega: "12/04/2019"};
var t3 = {nombre:"Examen A.S.2", materia:"Álgebra Superior II", dificultad:2, prioridad: 4, entrega: "12/9/2019"};
var t4 = {nombre:"Ensayo", materia:"Redacción", dificultad:4, prioridad: 3, entrega: "12/07/2019"};
var t5 = {nombre:"Parcial", materia:"Cálculo III", dificultad:5, prioridad: 3, entrega: "12/05/2019"};
var t6 = {nombre:"Hoja de trabajo", materia:"Álgebra Superior II", dificultad:4, prioridad: 2, entrega: "12/06/2019"};
var tareas = [t1,t2,t3,t4,t5,t6];    
var action = 1;

function calcularPlan(){
    if ( action == 1 ) {
        action = 2;
        document.getElementById("tareas").style.display = "inline-block";
        document.getElementById("btn-plan").style.backgroundColor = "#6610f2";
        document.getElementById("btn-plan").innerHTML = "Ocultar plan";
        insertarCodigo();
    } else {
        action = 1;
        document.getElementById("lista").innerHTML= "";
        document.getElementById("tareas").style.display = "none";
        document.getElementById("btn-plan").style.backgroundColor = "#23dd6a";
        document.getElementById("btn-plan").innerHTML = "Calcular plan";
    }
}

function insertarCodigo(){
    document.getElementById("lista").innerHTML= "";
    var eRes = +document.getElementById("resHoras").value;
    var max = 1;
    switch(eRes){
        case 1: max = 2;
        break;
        case 5: max = 4;
        break;
        case 20: max = tareas.length;
        break;
        default: max = 1;
    } 
    var sumaDificultad = 0;
    var h = document.getElementById("lista");
    // ver cuantos son (test)
    //h. insertAdjacentHTML("beforeend", '<span>'+action+'</span>');
    for (let i=0; i<max; i+=1) {
        h.insertAdjacentHTML("beforeend",'<ul class = "listaTarea" id = "tarea '+i+'"><li><strong>Nombre:</strong><span class ="tareas" id="nom'+i+'" > </span></li>' +
        '<li><strong>Materia:</strong><span class ="tareas" id="mat'+i+'" ></span></li><li><strong>Tiempo sugerido:</strong>' +
        '<strong><span class ="tareas" id="hrs'+i+'" ></span></strong></li></ul>');
        sumaDificultad += tareas[i].dificultad;
    }      

    // Llenar datos de tareas
    var totalHoras = 0;
    var formaCalcular = 1;
    var numHoras = 0;
    var eNum = document.getElementById("numHoras");
    var eRes = document.getElementById("resHoras");
    numHoras = +eNum.value;
    formaCalcular = +eRes.value;
    var text = eRes.options[eRes.selectedIndex].text;
    totalHoras = formaCalcular * numHoras;

    for (let i=0; i<max; i+=1) {
        document.getElementById("nom"+i).innerHTML = tareas[i]["nombre"];
        document.getElementById("mat"+i).innerHTML = tareas[i]["materia"];
        var proporcion = Math.round(tareas[i]["dificultad"]/sumaDificultad*totalHoras *100) / 100 ;
        var entero = Math.floor(proporcion);
        var decimal = Math.round((proporcion - entero) * 60);
        document.getElementById("hrs"+i).innerHTML = Math.round(tareas[i]["dificultad"]/sumaDificultad *100) +"% = "+entero+" horas "+decimal+" minutos";
    }
}

//Funcionalidad para la cuenta/inicio de sesion
function loadSesion(){
    if (sessionStorage.getItem("cuenta") == "True"){
        document.getElementById("sesion").style.display = "block";
        document.getElementById("default").style.display = "none";   
        document.getElementById("cerrar").style.display = "block";   
    }
    else{
        document.getElementById("sesion").style.display = "none";
        document.getElementById("default").style.display = "block";   
        document.getElementById("cerrar").style.display = "none";  
    }
}
function cierraSesion(){
    sessionStorage.removeItem("cuenta");
    loadSesion();
}