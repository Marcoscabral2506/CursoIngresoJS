function Mostrar()
{
  var importeProducto;
  var importeFinal;
  
  importeProducto= prompt("ingrese importe ");

  importeProducto=parseInt(importeProducto);
  
  importeFinal=importeProducto*1.21;

  document.getElementById("importeFinal").value=importeFinal;
  
}
