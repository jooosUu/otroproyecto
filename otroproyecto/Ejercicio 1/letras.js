function contarCaracteres() {
    var texto = document.getElementById("texto").value;
    var resultado = document.getElementById("resultado");
    var numChar = texto.length;
    if(isNaN(texto)){
    resultado.innerHTML = "La cantidad de caracteres es: " + numChar ;
  }else{
    resultado.innerHTML = "No se aceptan números como caracter, excepto si se escriben junto con un texto";
  }
}