function calcular(){
    var numero=parseInt(document.getElementById('numero').value);
    var impar=0
    var par=0
    var sumapar=0
    for(let i=1; i<=numero;i++){
    if (i%2!=0) {
        document.write(i+'<br>')
        impar++;
        
    }
}
for(let i=1; i<=numero;i++){
    if (i%2==0) {
        sumapar+=i;
        
    }
}
document.write("la suma de pares es : " +sumapar)

    }
