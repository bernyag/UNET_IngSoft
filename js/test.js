var t1 = {nombre:"Proyecto I.S", materia:"Ingeniería de Software", dificultad:9, prioridad: 9};
var t2 = {nombre:"Proyecto Conta", materia:"Contabilidad I", dificultad:6, prioridad: 6};
var t3 = {nombre:"Examen A.S.2", materia:"Álgebra Superior II", dificultad:10, prioridad: 7};
var tareas = [t1,t2,t3];
function mostrarTareas2(){
    document.getElementById("listaTareas").innerHTML = tareas[0]["nombre"];
}
let products = [
{
    name: "chair",
    inventory: 5,
    unit_price: 45.99
},
{
    name: "table",
    inventory: 10,
    unit_price: 123.75
},
{
    name: "sofa",
    inventory: 2,
    unit_price: 399.50
}
];
function mostrarTareas1() {
    let product_names = [];
    for (let i=0; i<products.length; i+=1) {
        product_names.push(products[i].name);
    }
    document.getElementById("listaTareas").innerHTML = product_names;
}
function mostrarTareas(){
    document.getElementById("listaTareas").innerHTML = "hola";

}