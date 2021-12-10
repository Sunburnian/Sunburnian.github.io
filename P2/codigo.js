function verificar(){
    var entrega = document.getElementById('Entrega').value;
    var retirada = document.getElementById('retirada').value;
    var valor = parseFloat(document.getElementById('carro').value);
    

   if(entrega!=retirada){
        valor+=300;    
   }
   
   alert("o valor a ser cobrado é de : R$" + valor+",00");
}