const botonBuscar= document.getElementById("botonBuscar");


async function buscarPersonaje(){
    const respuesta = await fetch("https://swapi.dev/api/people/"+ pais.value); 
    const infoPais = await respuesta.json();
    
    



    
    

}




botonBuscar.addEventListener("click", e =>{
    e.preventDefault();
    buscarPersonaje();
})
