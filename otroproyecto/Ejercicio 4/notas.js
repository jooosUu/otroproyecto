function verificarPromedio(){
  var nombre = document.getElementById("nombre").value;
  var materia = document.getElementById("materia").value;
  var nota1 = document.getElementById("nota1").value;
  var nota2 = document.getElementById("nota2").value;
  var nota3 = document.getElementById("nota3").value;
  var resultado = document.getElementById("resultado");
  var suma = (parseFloat(nota1) +parseFloat (nota2) +parseFloat (nota3))
  var promedio = suma/3;

  if (promedio >= 3.0) {
    resultado.innerHTML = "Felicitaciones "+ nombre + "<font color=green>, su nota es de: "+ promedio+"</font>"+", aprobo la materia de "+ materia;
  }else{
    resultado.innerHTML = "Lo sentimos "+ nombre + "<font color=red>, su nota es de: "+ promedio +"</font>"+", reprobo la materia de "+ materia;
  }
}