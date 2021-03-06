// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = function(valueDollar){
    // convertimos el valor a yenes
    let valueInYenes = valueDollar * 130;
    // retornamos el valor
   return valueInYenes;
}
let valueYenes=130
const fromYenToPound = function(valueYenes){
    // convertimos el valor a yenes
    
    let valueInPound =  0.8/ valueYenes;
    // retornamos el valor
   return valueInPound;
}

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
let oneEuroIs = {
    "JPY": 130, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// solo un registro en consola para nosotros.


// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {  sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
