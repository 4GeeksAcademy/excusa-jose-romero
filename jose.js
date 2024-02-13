let who = ['Mi perro', 'Mi gato', 'Mi guacamaya', 'Mi conejo'];
let action = ['Comio', 'Orino', 'Daño', 'Rompio'];
let what = ['Mi tarea', 'El Trabajo', 'el carro'];
let when = ['Antes de clase', 'Hace un momento', 'lo estaba terminando', 'Mientras dormia'];

function generadorExcusas(){
    let afrase= new Array;
  afrase = Math.floor(Math.random()* who.length);                
  afrase = Math.floor(Math.random()* action.length);                 
  afrase= Math.floor(Math.random()* what.length);             
  afrase = Math.floor(Math.random()* when.length);
   
  return(afrase[who]+ ""+afrase[action]+""+afrase[what]+ ""+ afrase[when]);
                     
}
function onLoad() {
    var excuse = document.getElementById("excusa");
    excuse.innerHTML = generadorExcusas(who, action, what, when);
  }
  window.onload = onLoad;