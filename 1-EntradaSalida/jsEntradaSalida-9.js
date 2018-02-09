/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
     var sueldoUno;
     var resultado;
     var importe;
         
     sueldoUno= document.getElementById("sueldo").value;
     resultado= document.getElementById("resultado").value;

     sueldoUno= parseInt(sueldoUno);
     
     importe= sueldoUno*1.1;

     document.getElementById("resultado").value=importe;

}
