function Divisibles(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var con = 0;
    if(num1%1!=0){
        resultado.innerHTML= "El numero "+ num1 + " debe ser entero";
        con = 1;
    } 
    if(num2%1!=0){
        resultado2.innerHTML= "El numero "+ num2 + " debe ser entero";
        con = 1;
    }
    if (num1<0){
        resultado.innerHTML= "El numero "+num1+" debe ser positivo";
        con = 1;
    }
    if (num2<0){
        resultado2.innerHTML= "El numero "+num2+" debe ser positivo";
        con = 1;
    }
    if (num1<0 && num1%1!=0){
        resultado.innerHTML= "El numero "+num1+" debe ser entero positivo";
        con = 1;
    }
    if(num2<0 && num2%1!=0){
        resultado2.innerHTML= "El numero "+num2+" debe ser entero positivo";
        con = 1;
    }
    if (con!=1){
        if (num1%num2==0){
            resultado.innerHTML = "El numero " +num1+ " es divisible entre el numero "+num2;
            resultado2.innerHTML ="";
        }else{
            resultado.innerHTML = "El numero " +num1+ " no es divisible entre el numero "+num2;
            resultado2.innerHTML = "";
        }
    }
}