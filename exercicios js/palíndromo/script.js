function ver(){

    var aux = document.getElementById('palavra').value
    var aux2 = aux.split('').reverse('').join('');

    if(aux===aux2){
        alert('palíndromos')
    }else{
        alert('Não palíndromos')
    }
}