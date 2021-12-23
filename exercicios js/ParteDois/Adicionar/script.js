function add(){
    var aux = document.getElementById('entrada').value;
    var aux2 = document.getElementById('lista').innerHTML

    aux2 = aux2 + "<li>" + aux +"</li>"

    document.getElementById('lista').innerHTML = aux2;
}