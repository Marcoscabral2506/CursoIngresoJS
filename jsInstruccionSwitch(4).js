function Mostrar()
{
//tomo la edad  
    var mesDelAño;
    mesDelAño= document.getElementById('mes').value;
    
    switch(mesDelAño)
    {
        case "Febrero":
            alert("Este mes tiene 28 días");
            break;  
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("Este mes tiene 31 dias");
            break;
        default:   
            alert("Este mes tiene 30 dias");
            break;
    }

}//FIN DE LA FUNCIÓN