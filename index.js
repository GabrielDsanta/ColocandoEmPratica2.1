

// console.log(CalculateStops(['criança', 'adulto', 'criança'], 5.5))
// console.log(CalculateExpenses(50000, 'gasolina'))
// console.log(CalculateMeals(5, ['criança', 'adulto']))

function CalculateExpenses(meters, gas){
  if(meters !== Math.floor(meters) | gas !== 'gasolina' && gas !== 'etanol'){
    return console.log('Valor inválido')
  }
    
  let gasValue = 0
  let total = 0
  meters = meters / 1000
  gas == 'gasolina' ? gasValue = 16 : gasValue = 11
  return total = Math.round(meters / gasValue)
}
  
function CalculateStops(passengers, time){
  if(time === Math.floor(time)){
    return console.log('Valor inválido')
  }
  let counterKids = 0
  let counterAdult = 0 
  let interval = 0
      
  passengers.forEach(item => {
    if(item !== 'criança' && item !== 'adulto'){
      return console.log('Valor inválido')
    }

    item == 'criança' ? counterKids++ : counterAdult++
  })
  
  counterKids == passengers.length && (interval = 60)
  counterAdult == passengers.length && (interval = 90)
  counterKids > counterAdult && (interval = 40)
  
  return Math.ceil(interval / time)
}
  
function CalculateMeals(stops, passengers){
  if(stops !== Math.floor(stops) | stops < 0){
    return console.log('Valor inválido')
  }
  let total = 0
  let adults = 0
  let kids = 0
  
  passengers.forEach((item) => {
    item === 'adulto' && adults++
    item === 'criança' && kids++
    if(item !== 'criança' && item !== 'adulto'){
      return console.log('Valor inválido')
    }
  })
  
  total = (adults * 50) + (kids * 40)
  
  for(let index = 0; index < stops; index++){
    if(index % 2 === 0 && index > 0){
      total += (adults * 50) + (kids * 40)
    }
  
    if(index % 2 !== 0){
      total += (adults * 30) + (kids * 20)
    }
  }
  
  return total
}
  
module.exports = {CalculateExpenses, CalculateStops, CalculateMeals}