function Mostrar()
{
  var numeroUno;
  var numeroDos;
  var resultado;

  numeroUno=prompt("Ingrese numero");
  numeroDos=prompt("Ingrese numero ");

  numeroUno=parseInt(numeroUno);
  numeroDos=parseInt(numeroDos);

  if(numeroUno==numeroDos)
  {
      resultado=numeroUno*numeroDos;
  }
 else if (numeroUno>numeroDos)
 {
     resultado=numeroUno-numeroDos;
 }
 else
 {
     resultado=numeroUno+numeroDos;
 }
 document.write(resultado);
}

/* else if para evitar hacer mas largo, mas entendible, se concatena al if
