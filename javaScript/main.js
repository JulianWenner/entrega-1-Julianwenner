let continuar=true;
do{
let respuesta=prompt("Tiene dientes y no come, tiene cabeza y no es hombre :ingrese respuesta de adivinanza");
 
if(respuesta=="AJO"|| respuesta=="ajo"|| respuesta=="Ajo"){
continuar=false;

 }else{
    console.log("palabra incorrecta")
 }
}while(continuar);

console.log("VISCTORIA")