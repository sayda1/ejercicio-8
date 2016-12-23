function calcular(){
    var n = document.getElementById("n").value;
    var numFijo=21;
    var resultado;
    
    var salida =document.getElementById("salida");
    
    if( n>numFijo ){
        
       resultado = n-numFijo;
        resultado=resultado*2;
        salida.innerHTML=resultado;
        
    }else{
        resultado = numFijo-n;
        salida.innerHTML=resultado;
    }
}