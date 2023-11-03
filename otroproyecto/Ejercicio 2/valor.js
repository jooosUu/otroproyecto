function identificarTipoDato() {
    var valor = document.getElementById("valor").value;
    var resultado = document.getElementById("resultado");
    if(isNaN(valor)){
      resultado.innerHTML = "El valor ingresado es de tipo texto.";
    }else{
      resultado.innerHTML = "El valor ingresado es de tipo número.";
    }
  }