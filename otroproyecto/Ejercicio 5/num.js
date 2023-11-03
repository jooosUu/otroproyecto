function verificarNumero(){
var valor = document.getElementById("valor").value;
var resultado = document.getElementById("resultado");

if (valor%2===0){
    resultado.innerHTML= "El numero es par";
}else if(valor%1!=0){
    resultado.innerHTML= "Debe ingresar un numero entero";
}else{
    resultado.innerHTML= "El numero es impar";
}
if (valor<0){
    resultado.innerHTML= "El numero debe ser positivo";
}
if (valor<0 && valor%1!=0){
        resultado.innerHTML= "Debe ingresar numeros enteros positivos";
}
}