// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x : 0,
  y : 0
};
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");


  switch (rover.direction) {
    case "N":
    console.log("Rover gira al Oeste");
    break;
    case "O":
    console.log("Rover gira al Sur");
    break;
    case "S":
    console.log("Rover gira al Este");
    break;
    case "E":
    console.log("Rover gira al Norte");
    break;
    default:
    console.log("Rover gira al Oeste");


  }
  //Uso un switch y compara el valor de rover.direction y según
  //su valor cambia la direccion. Si en N --> O --> S --> E --> N
}

function turnRight(rover){
  console.log("turnRight was called!");

  switch (rover.direction) {
    case "N":
    console.log("Rover gira al Este");
    break;
    case "O":
    console.log("Rover gira al Norte");
    break;
    case "S":
    console.log("Rover gira al Oeste");
    break;
    case "E":
    console.log("Rover gira al Sur");
    break;
    default:
    console.log("Rover gira al Este");


}
  //Uso un switch y compara el valor de rover.direction y según
  //su valor cambia la direccion. Si en N --> E --> S --> O --> N
}

function moveForward(rover){
  console.log("moveForward was called");

switch (rover.direction) {
    case "N":
    console.log( "la nueva posición es", rover.x+=1);
    break;
    case "O":
    console.log("La nueva posicion es", rover.y-=1);
    break;
    case "S":
    console.log("La nueva posición es", rover.x+=1);
    break;
    case "E":
    console.log("La nueva posicion es", rover.y-=1);
    break;
    default:
    console.log("La mueva posición es", rover.x);
  // Comprobar la direccion que tiene el rover (rover.direction)
  // Segun la direccion debera avanzar o retroceder en x o y
  // Si avanza el valor de rover.x / y aumenta en 1 unidad.
  // Si retrocede el varlo de rover.x / y aumenta en 1 unidad.
  // rover.x = rover.x + 1;
  console.log("La nueva posicion es: ", rover.x);



}
}

// Primero hacer los Switch que cambian la direccion del rover segun hacia donde
// apunta.

// Segundo hacer las funciones para que según donde apunte se mueva en el eje x
// o en el eje y.

// Si mira a N avanzar implica restar en x
// Si mira a S avanzar implica sumar en x
// Si mira a E avanzar implica sumar en y
// Si mira a O avanzar implica restar en y
