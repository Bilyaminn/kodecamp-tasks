const checkValue = value => {
    if(value >= 70 && value <=100) console.log('Excellent')
    if(value >= 60 && value <= 69) console.log('Very Good')
    if(value >= 50 && value <= 59) console.log('Good')
    if(value >= 40 && value <= 49) console.log('Poor')
    if(value >= 0 && value <= 39) console.log('Very Poor')
    if(value < 0 || value > 100) console.log('Invalid Score')
}

checkValue(10)
checkValue(45)
checkValue(55)
checkValue(65)
checkValue(80)
checkValue(200)