function Mostrar()
{
    var numeroUno, numeroDos, numeroTres, numeroMayor;
    numeroUno=prompt("");
    numeroDos=prompt("");
    numeroTres=prompt("");

    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
    numeroTres=parseInt(numeroTres);
    
    if(numeroUno>numeroDos && numeroUno>numeroTres)
    {
        numeroMayor=numeroUno;
    }
    else{
        if(numeroDos>numeroDos && numeroDos>numeroTres)
        {
            numeroMayor=numeroDos;
        }
        else{
            numeroMayor=numeroTres
        }
    }
    alert(numeroMayor);
}