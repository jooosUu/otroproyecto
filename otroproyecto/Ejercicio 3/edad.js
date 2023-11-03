function verificarEdad(){
    var nombre= document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var resultado = document.getElementById("resultado");
    if (edad >= 18) {
        resultado.innerHTML = "Señor " + nombre + ", usted es mayor de edad";
      } else if(edad==0 || edad<0){
        resultado.innerHTML = "La edad ingresada no es valida";
      } else {
        resultado.innerHTML = "Joven, " + nombre + ", eres menor de edad";
      } 
}