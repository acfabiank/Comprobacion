var contenido = document.querySelector("#contenido");
var popdigi = document.querySelector("#info");
var boton = document.querySelector("#ver");
const lista = document.getElementById("listado");
const elemento = document.getElementById("digilista");
const oculto = document.getElementById("ocultar")
var temp; // Definimos temp como variable global

lista.addEventListener("click", function() {
    elemento.style.display = "block";
    });

    oculto.addEventListener("click", function() {
        elemento.style.display = "none";
        });








fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(datos => {
    tabla(datos);
    });

function tabla(datos) {
    contenido.innerHTML = " ";
    let contador = 1;
    for (let digimon of datos) {
    contenido.innerHTML += `
        <tr class="digimon-row">
        <th scope="row">${contador}</th> 
        <th scope="row"> 
        <button onclick="mostrar('${digimon.name}')" id="ver" class="btn btn-dark">
        Más
        </button> 
        </th>

        <td id="nombre" class="fw-normal" >${digimon.name}</td> 
        
        </tr>
        `;

    contador++;
    // if (contador == 5) {
    // break;
    // }
    }
}

// Función para mostrar la información detallada de un Digimon
function mostrar(nombre) {
  // Buscamos el objeto correspondiente al nombre en el arreglo de datos
    temp = null;
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${nombre}`)
    .then(response => response.json())
    .then(digimon => {
    temp = digimon[0];
      // Mostramos la información detallada del Digimon
    popdigi.innerHTML = `
        <div class="offcanvas-header bg-dark text-center text-white position-fixed top-50 start-50 rounded-3 translate-middle shadow" style="display: block;">
        <button type="button" class=" text-center btn-close btn-close-white" aria-label="Close" id="botonx"></button>
        <div class="offcanvas-body">

        <img src="${temp.img}"class="rounded-3" width="300px"></img>

        <div class="p-2 rounded-3">
        <h5 class="card-title">${temp.name}</h5>
        </div>

        <div class="p-2 rounded-3">
        <p class="card-text">${temp.level}</p>
        </div>

        </div>
        </div>
        `;
    });
}

// Evento para cerrar la información detallada del Digimon
popdigi.addEventListener("click", (event) => {
if (event.target.id === "botonx") {
    popdigi.innerHTML = "";
}
});













// var contenido = document.querySelector("#contenido")
// var popdigi = document.querySelector("#info")
// var boton = document.querySelector("#ver")

// // popdigi.innerHTML = " "

// fetch("https://digimon-api.vercel.app/api/digimon")
// .then(response => response.json())
// .then(datos => {
//     tabla(datos)
    
// });

// function tabla(datos) {
//     contenido.innerHTML = " "
//     let contador = 1;
//     for(let temp of datos){
//         contenido.innerHTML += `
//         <tr class="digimon-row">
//         <th scope="row">${contador} 
//         <button onclick="mostrar()" id="ver">Ver Más</button>
//         </ th> 
//         <td id= nombre>${temp.name}</td> 
//         <td>${temp.level}</td> 
//         </tr>
//     `
//     contador ++;

//     if (contador == 5){
//         break
//     }
//     }
// }



// $(document).ready(function(){
//     boton.addEventListener("click", () => {
//         var nombredigi = document.getElementById("nombre").value
//             if (nombredigi == temp.name){
//             popdigi.innerHTML = `
//             <div class="offcanvas-header bg-dark text-white position-fixed top-50 start-50 translate-middle" style="display: block;">
//             <button type="button" class="btn-close btn-close-white" aria-label="Close"
//             id="botonx"></button>
//             <div class="offcanvas-body">
//             <h5 class="card-title">${temp.name}</h5>
//             <p class="card-text">${temp.level}</p>
//             <img src="${temp.img}" width="200px"></img>
//             </div>
//             </div>
//             `
            
//         }


//     })

// })



// function popup(datos){
//     popdigi.innerHTML = " "
//     let contador = 1;
//     for(let temp of datos){
//         popdigi.innerHTML += `
//         <div class="offcanvas-header bg-dark text-white position-fixed top-50 start-50 translate-middle" style="display: block;">
//         <button type="button" class="btn-close btn-close-white" aria-label="Close"
//         id="botonx"></button>
//         <div class="offcanvas-body">
//         <h5 class="card-title">${temp.name}</h5>
//         <p class="card-text">${temp.level}</p>
//         <img src="${temp.img}" width="200px"></img>
//         </div>
//         </div>
//         `
//         contador ++;
//         if (contador == 2){
//             break
//         }
//     }
// }

// function mostrar(){
    
//     document.getElementById("popdigi").style.display ="block";
// }

// function ocultar(){
//     document.getElementById("popdigi").style.display ="none";

// }




