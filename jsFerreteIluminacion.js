/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad;
    var marca;
    var descuento;
    var importe;
    var importeFinal;

    cantidad=document.getElementById("Cantidad").value;
    marca=document.getElementById("Marca").value;
    cantidad=parseInt(cantidad)
    importe=cantidad*35;
    
    if(cantidad>=6){
            descuento=importe*0.5;
        }else if(cantidad==5 && marca=="ArgentinaLuz"){
            descuento=importe*0.4;
        }else if(cantidad==5){
            descuento=importe*0.3;
        }else if(cantidad==4)
        if(marca=="ArgentinaLuz"|| marca=="FelipeLamparas"){
            descuento=importe*0.25;
        }else{
            descuento=importe*0.20;
        }
        else if(cantidad==3){
            switch(marca){
                case "ArgentinaLuz":
                descuento=importe*0.15;
                break;
                case "FelipeLamparas":
                descuento=importe*0.10;
                break;
                default:
                descuento=importe*0.05;
            }
        } importeFinal=importe-descuento;
        if(importeFinal>120){
            importeFinal=importeFinal*1.10;
            alert("");
        }else{
            alert("");
        }
    
    
                
                
               
    






                /*break;   

            case "5": 
                     if(marca=="ArgentinaLuz")
                       { 
                           resultado=cantidad*35*0.40;
                           document.getElementById("precioDescuento").value=resultado;                
                       }
            default:
                    resultado=cantidad*35*0.30;
                    document.getElementById("precioDescuento").value=resultado;
                break;
    }
    
 	
}





if cantidadd==5)
if marca == argentina luz 
porcentaje=0.4;
else

descuento= precioBruto*porcentaje


descuento cantidad porcentaje 
switcg(marca)
{
        case "argentina luz:
        switch(cantidad)
        case 1:
        case 2:
        descuento=0;
        break
        case 3:
        porcentaje=0.15;
        break;
        case 4: 
        porcentaje=0.25;
        case 5:
        porcentaje= 0.40
        case 6:
        porcentaje=0.5;
}
 if else if else if else primero
 switch con cantidad