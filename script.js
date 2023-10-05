const cart = [10,244,99,2,20,33,250]
let finalValue = 0
let totalValue = 0
let valueDiscount


function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}





cart.forEach(value => {
    totalValue += value
    valueDiscount =   finalValue-totalValue

    if (value > 30) {
        const discount = calculateDiscount(value,10)
        finalValue += value - discount
        console.log( discount )
        
        
    } else {
        finalValue += value
    }
    
});

console.log(`O valor total da sua compra foi de R$${totalValue} e o valor com disconto ficou R$${finalValue}`)