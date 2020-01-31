/**
    This program generates Fake pair data of Information:
    { (pressure, oil),  (pressure, oil),  (pressure, oil),  (pressure, oil) }
    
    This informations are exposed in JSON format via an API


    Next customizations:


    #1) Receive 'Correlation' from client(trough html form)
    #2) Receive quantity as a fixed number, or offers randomQuantity

**/

var express = require('express')
var app = express()

function Oil(pressure, temperature){
    this.pressure=pressure
    this.temperature=temperature
}


/* Generates data oil */
function generateRandomOil(){
    let randomOilDataList = []
    let randomQuantity = Math.random()*5
    let randomPressure = Math.random()*1000
    let randomTemperature = Math.random()*1000

    let i=0
    while(i<randomQuantity){
        randomOilDataList.push(new Oil(randomPressure, randomTemperature))
        i++
    }

    return randomOilDataList
}


/* Correlation is a function that associate Each temperature to a Pressure trough some Rule f(x)*/
function correlationTempPressure(temp, correlation){
    return correlation(temp);
}


app.listen(3000, () => {
    console.log("Server running on port 3000")
});

app.get("/generate_oil_dataset", (req, res, next) =>{

    let randomData = generateRandomOil()
    res.json(randomData)
})