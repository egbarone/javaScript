let cA = parseInt(prompt("Ingrese cuantos alumnos registrara"));
let eA;
let sA = 0 
let n;

for(n=1;n<=cA;n++){
    eA = parseInt(prompt("Ingrese la edad del alumno"+n));
    sA = sA + eA;
}
console.log(`El Promedio de las edades de los ${cA} alumnos es: ${sA/cA}`);