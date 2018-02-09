/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno= document.getElementById("numeroUno").value;
    numeroDos= document.getElementById("numeroDos").value;

    numeroUno= parseInt(numeroUno);
    numeroDos= parseInt(numeroDos);
    
    resultado=numeroUno+numeroDos;
    
    alert(resultado)
}

//Camel case siempre miniscula despues mayuscula//
//ERROR NAN PORQUE INGRESAS UN NUMERO QUE ESTA EN STRING ""//
//parseInt lo pasamos a numeroUno de que sea letra a numero, "2" a que sea 2//