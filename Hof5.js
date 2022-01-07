const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '10' },
];

let result = 0;
products.forEach(product => {
    result += Number(product.price);
})
console.log(result);

let totalSum = products.reduce((acc, cur) => {
    return Number(acc) + Number(cur.price)}, 0);
console.log(totalSum);

