function numParImpar(){
    
const numeros = document.getElementById("num1").value;
const numarray = numeros.split(",");

const pares = numarray.filter(numero => numero % 2 == 0);
const impares = numarray.filter(numero => numero % 2 != 0);
const noenteros = numarray.filter(numero => numero % 1 != 0)
if (pares.length!=0){
    resultado.innerHTML = "<font color=red>Los números pares son: </font>"+pares.join(", "); 
}else{
    resultado.innerHTML= "No hay números pares";
}
if (impares.length!=0 ){
    for(i=0;i<impares.length;i++){
        if (isNaN(impares[i])){
            impares[i]="";
        }else if (impares[i]%1!=0){
            impares[i]="";
        }
    }
    resultado2.innerHTML = "<font color=green>Los números impares son: </font>"+impares.join(", ");
}else{
    resultado2.innerHTML = "No hay números impares"
}
if (noenteros.length!=0){
    resultado3.innerHTML= noenteros.join(", ")+" <font color=blue> No es/son enteros </font>";
}
}