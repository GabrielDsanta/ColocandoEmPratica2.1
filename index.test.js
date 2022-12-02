
const index = require('./index.js')

test('Calcular gastos com combustivel', () => {
    expect(index.CalculateExpenses(50000, 'gasolina')).toBe(3)
}) 

test('Calcular gastos com combustivel', () => {
    expect(index.CalculateStops(['criança', 'adulto', 'criança'], 5.5)).toBe(8)
}) 

test('Calcular gastos com combustivel', () => {
    expect(index.CalculateMeals(5, ['criança', 'adulto'])).toBe(370)
}) 
