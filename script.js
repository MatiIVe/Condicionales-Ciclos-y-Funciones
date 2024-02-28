//**************1**************
function ParImpar(numero) {
    if  (numero % 2 == 0) {
        console.log(numero + " es par");
    } else {
        console.log(numero + " es impar");
    }
};

//**************2**************
function MayorMenor(num1, num2) {
    if(num1 == num2) {
        console.log("Son iguales")
    }
    else if(num1 > num2){
        console.log("El mayor es: "+ num1);
    }
    else{
        console.log("El mayor es: "+ num2);
        };
};
//MayorMenor(60, 60)

//**************3**************
function Multiplo(numero) {
    if(numero % 5 == 0) {
        console.log("Es multiplo de 5");
        }else{ 
            console.log("No es multiplo de 5");
        };
    };
 //Multiplo(23)


//**************4**************
 function Recorrido(numero) {
    for (let i = 0; i <=  numero; i++) {
        console.log(i);
    }
 };

 //Recorrido(10)


 //**************5**************
 // FORMA 1
 function Repetir (palabra, numero) {
    let contador = "";
     for (let i = 0; i < numero; i++){
         contador += palabra;
     } console.log(contador)
 }

//Repetir("hola", 5)

// FORMA 2
function Repetir2 (palabra, numero) {
    let contador = "";
     for (let i = 0; i < numero; i++){
         contador += console.log(palabra);
     }
 }
//Repetir2("chau", 3)

//**************6**************
function Arreglo(arreglo){
    for(let i = 0; i < arreglo.length; i++ ){
        console.log(arreglo[i])
    }
}

//Arreglo(["hola" , "consola", "barba", "lentejas"])

//**************7**************
function  MenosCinco(array){
    array.splice(4,1)
    for(let i = 0; i < array.length; i++ ){
        console.log(array[i])
    }
}

//MenosCinco([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//**************8**************

function Multiplicar(array, num) {
    for(let i = 0; i < array.length; i++){
        console.log(array[i] * num)
    }
}


//Multiplicar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)