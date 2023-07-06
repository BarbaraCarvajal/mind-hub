
let elementoMain = document.getElementById("main")

/*
let elementoTitulo = document.getElementById("titulo")
let elementoTexto = document.getElementById("texto")
let elementoBoton = document.getElementById("boton")


console.log(elementoTitulo);
console.log([elementoTitulo]);
console.log(elementoMain)
console.log(elementoTexto,elementoBoton)

elementoTitulo.innerText = "este es el titulo"

if (elementoTitulo.innerText == "este es el titulo"){
    elementoTitulo.classList.add("red")
}

let frutas = ["🍐 pera", "🍎 manzana ", "🍈 melon","🍉 sandia"]
/*
let textoParaElMain = ""

frutas.forEach((fruta)=>{
    textoParaElMain = textoParaElMain + "<div>"+fruta+"</div>"
})

elementoMain.innerHTML = textoParaElMain


function dibujarVistaFrutas(){
    elementoMain.innerHTML = ""
    frutas.forEach((fruta)=>{
        let div = document.createElement("div")
        div.innerHTML = fruta
        elementoMain.appendChild(div)
    })
}

dibujarVistaFrutas()

elementoBoton.addEventListener("click", ()=>{
    frutas.push(elementoTexto.value)
    dibujarVistaFrutas()
})

//investigar fectch

// AXIOS
/*
GET PEDIR
POST CREAR
PUT ACTUALIZAR TODO
PATCH ACTUALIZAR PERO SOLA UNA PARTE
DELETE BORRAR
*/

function dibujarVistaPersonajes(personajes){
    elementoMain.innerHTML = ""

    personajes.forEach((personaje)=>{
        let div = document.createElement("div")
        div.innerHTML = personaje.name
        elementoMain.appendChild(div)
    })
}

axios.get("https://hp-api.onrender.com/api/characters").then((response)=>{
    console.log(response.data);
    dibujarVistaPersonajes(response.data)
})
.catch((error)=> console.log(error.message))


console.log("prueba de log")