var Var1 = "Esta es una variable"; // variables globales

let Var2 = "esta es otra variable"; // usar mejor let 

const Var3 = "hola" // variables constantes

// == solo ve el contenido por ejemplo
// 2 sería igual que "2"
// === revisa que realmente sean iguales


let numero1 = "2"
let numero2 = 2

if(numero1 > numero2){
    console.log(numero1 +" es mayor")


}else if( numero1 == numero2){
    console.log("Son iguales")

}else{
    console.log(numero2 + " es mayor")
}


for(let i = 0; i < 10; i++){
    console.log(i);
}
let nombre = "barb"

while(nombre == "barb"){
    console.log("el nombre es "+nombre)
    nombre = "Barbarita"
    console.log("El nombre ahora es "+nombre)
}

let num = 0;

while(num<10){
    console.log(num);
    num++;
}
//objetos puede ser let o const
const Persona = {
    nombre : "Bárbara",
    edad : 29,
    ciudad : "Quilpué",
    caminar : function(){
        console.log(nombre+" esta caminando")
    }
}

Persona.nombre = "Barbarita"
Persona.apellido = "Carvajal"

console.log(Persona)

//Arrays
let cosas = ["b", Persona, null, undefined]

cosas[2] = "mokita"

console.log(cosas[2]);

let frutas = ["Pera", "Manzana", "Sandia", "Melon", "Sandia"]
let libros = ["Harry Potter", "Blanca Nieves", "Caperucita Roja"]



function mostrarArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
mostrarArray(libros);

Persona.caminar();

frutas.forEach(function(fruta){
    console.log(fruta);
})

//funcion con flechas 

const funcionPrueba = ()=> 2*2
console.log(funcionPrueba());

let filtrarFrutas = frutas.filter((fruta)=> fruta == "Sandia")

console.log(filtrarFrutas);

let personas = [
    {nombre: "Barbara", apellido: "Carvajal"},
     {nombre: "Camilo", apellido: "Monsalves"}
];

let apellidos = personas.map(persona=>{
    let apellidoModificado = persona.apellido = persona.apellido + " Es el apellido"

    return apellidoModificado;
})

console.log(apellidos)

// revisar sort

let frutasOrdenadas = frutas.sort((a,b) => a - b)

console.log(frutasOrdenadas)