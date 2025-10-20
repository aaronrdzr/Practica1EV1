const botonBuscar= document.getElementById("botonBuscar");
const inputPais = document.getElementById("pais");
const nombre = document.getElementById("nombre");
const capital= document.getElementById("capital");
const monedas = document.getElementById("monedas");
const lenguaje = document.getElementById("lenguaje");
const bandera = document.getElementById("bandera"); 




async function buscarPais(){
   const respuesta = await fetch("https://restcountries.com/v3.1/name/"+ inputPais.value);
   const info = await respuesta.json();
   const infoPais= info[0];

   console.log(infoPais.name.common);
    



    
    

}




botonBuscar.addEventListener("click", e =>{
    e.preventDefault();
    buscarPais();
})
