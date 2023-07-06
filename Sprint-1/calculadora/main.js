// Calculadora

//Suma
function Suma(num1,num2){
    return (num1+num2);
}

//Resta
function Resta(num1,num2){
    return (num1-num2);
}

//Multiplicación
function Multiplicacion(num1,num2){
    return (num1*num2);
}

//División
function Division(num1,num2){
    return (num1/num2);
}

function Calculadora(num1,num2,operacion){
    if (operacion == "suma" || operacion == "+"){
        return "La suma es: "+Suma(num1,num2);
    }else if(operacion == "resta" || operacion == "-"){
        return "La resta es: "+Resta(num1,num2);
    }else if(operacion == "multiplicacion" || operacion == "*"){
        return "La multiplicación es: "+Multiplicacion(num1,num2)
    }else if(operacion == "division" || operacion == "/"){
        if (num2 == 0){
            return "No se puede dividir por 0"
        }else{
            return "La división es "+Division(num1,num2);
        }
    }else{
        return "Operación no valida"
    }
}

console.log(Calculadora(2,7,"+"));
console.log(Calculadora(5,3,"-"));
console.log(Calculadora(20,4,"."));
console.log(Calculadora(13,0,"/"));

console.log("-------------------")

console.log(Calculadora(5,3,"suma"));
console.log(Calculadora(10,4,"resta"));
console.log(Calculadora(6,2,"multiplicacion"));
console.log(Calculadora(15,3,"division"));