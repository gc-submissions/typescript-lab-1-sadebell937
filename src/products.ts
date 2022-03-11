interface Product {
    name: string;
    price: number;
}

const products :Product [] = [
    {name: 'purse', price: 100},
    {name: 'Jacket', price: 50},
    {name: 'shirt', price: 15},
    {name: 'pants', price: 25}
]

function calAverageProductPrice(products:Product[]): string {
    let prices : number = 0;

    for(let i =0; i < products.length; i++){
        prices += products[i].price;
        products[i].price / 4;
        prices = products[i].price }


    }
    
    
    
    return prices;

}