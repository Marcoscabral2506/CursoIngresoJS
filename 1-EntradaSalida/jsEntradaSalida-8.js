/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var elDividiendo;
    var elDivisor;
    var resultado;

    elDividiendo= document.getElementById("numeroDividendo").value;
    elDivisor= document.getElementById("numeroDivisor").value;

    elDividiendo= parseInt(elDividiendo);
    elDivisor= parseInt(elDivisor);

    resultado=elDividiendo%elDivisor;

    alert("el resto es "+resultado);
}
