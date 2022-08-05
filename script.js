

const cotizaciones = [] 


class Cotizacion{
    constructor(item, valor, cuotas){
    this.item = item
    this.valor = valor
    this.cuotas = cuotas
}
}

function calcular(){
    let confirmar
    do{
            // debugger
        let item = prompt("Ingrese que es lo que desea comprar\n por ejemplo, un iPad")

        let valor = parseFloat(prompt("ingresa el valor en 1 pago de su producto."))
        if (isNaN(valor)){
            alert("Debe elegir un valor numerico")
        }
        else{
        let cuotas = parseFloat(prompt("Ingresa la cantidad de cuotas entre uno y seis pagos."))
        if ((cuotas > 6)||(isNaN(cuotas))){
            alert("Debe elegir una cantidad de cuotas entre 1 y 6")
        }
        else{
        console.log("Debera abonar", cuotas,"cuotas de", "$", calculoCuotas(valor, cuotas))
        alert("Debera abonar\n" + cuotas +" cuotas de" + " $" + parseFloat(calculoCuotas(valor, cuotas)))
        }
        cotizaciones.push(new Cotizacion(item, valor, cuotas))
        }
        confirmar = confirm("realizar otra operacion?")
        }  
        
        while (confirmar);
    
}


function calculoCuotas(num1,cuotas){
    switch(cuotas){
        case 1:
            return num1
        case 2:
            return (num1 * 1.12)/2
        case 3:
            return (num1 * 1.18)/3
        case 4:
            return (num1 * 1.24)/4
        case 5:
            return (num1 * 1.31)/5
        case 6:
            return (num1 * 1.39)/6
        default:
            return "elegir entre 1 y 6 pagos"
    }
}

function consultarCotizaciones(){
    console.table(cotizaciones)
}

function borrarUltimo(){
    console.log("se elimino",cotizaciones[cotizaciones.length - 1])
    cotizaciones.pop()
    
}

