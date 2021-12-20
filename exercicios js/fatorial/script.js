function fatorial(){
    var aux = document.getElementById('fatorial').value;
    var fatorial=aux,i;

    if(aux==0){
        alert('1');
    }else{
        for(i=aux-1;i>0;i--){
            fatorial*= i;
        }
        alert(fatorial);
    }
    
}