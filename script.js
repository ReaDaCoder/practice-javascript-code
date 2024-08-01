//how to use map method in an array of objects.
const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5
    },
    {
        name: 'desktop',
        price: 1500,
        count: 2
    },
    {
        name: 'phone',
        price: 500,
        count: 10
    }
];

const totalProductsValue = products.map(item => item.price * item.count);
console.log(totalProductsValue);