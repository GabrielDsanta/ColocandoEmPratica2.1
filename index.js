


function CalculateExpenses(meters, gas){
    let gasValue = 0
    let total = 0
    meters = meters / 1000
    gas == 'gasolina' ? gasValue = 16 : gasValue = 11
    return total = Math.round(meters / gasValue)
}

function CalculateStops(passengers, time){
    let counterKids = 0
    let counterAdult = 0 
    let interval = 0
    
    passengers.forEach(item => {
       item == 'criança' ? counterKids++: counterAdult++
    })

    counterKids == passengers.length && (interval = 60)
    counterAdult == passengers.length && (interval = 90)
    counterKids > counterAdult && (interval = 40)

    return interval / time
}

function CalculateMeals(stops, passengers){
    let total = 0
    let adults = 0
    let kids = 0

    passengers.forEach((item) => {
        item === "adult" && adults++
        item === "criança" && kids++
    })

  total = adults * 50 + kids * 40

  for(let index = 0; index < numberOfStops; index++){
    if(index % 2 === 0 && index > 0){
      total += adults * 50 + kids * 40
    }

    if(index % 2 !== 0){
      total += adults * 30 + kids * 20
    }
  }

  return total
}
