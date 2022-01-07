const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '10' },
];

const allAreNumbers = products.every((price) => typeof price === 'number');
products.forEach(product => {
    console.log(`${product.price} - typ danych ${typeof product.price}`);
})

