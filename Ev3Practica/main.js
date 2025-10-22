const botonBuscar= document.getElementById("botonBuscar");
const inputPais = document.getElementById("pais");
const nombre = document.getElementById("nombre");
const capital= document.getElementById("capital");
const horario= document.getElementById("horario"); 
const lenguaje = document.getElementById("lenguaje");
const bandera = document.getElementById("bandera"); 
const nombre2 = document.getElementById("nombre2")



async function buscarPais(){
   const respuesta = await fetch("https://restcountries.com/v3.1/name/"+ inputPais.value);
   if (!respuesta.ok) throw new Error("No se encontró el país");
   const info = await respuesta.json();
   const infoPais= info[0];

   console.log(infoPais.name.common);
    const idioma = Object.values(infoPais.languages);
    

   nombre.innerText = infoPais.name.official;   
   nombre2.innerText= infoPais.name.common; 
   lenguaje.innerText= idioma;  
   capital.innerText= infoPais.capital; 
   bandera.src = infoPais.flags.svg;
   horario.innerText=infoPais.timezones; 


    
    

} 




botonBuscar.addEventListener("click", e =>{
    e.preventDefault();
    buscarPais();
})
