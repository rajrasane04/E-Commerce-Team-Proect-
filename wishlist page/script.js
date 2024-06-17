const product = [
    {
        id: 0,
        image: 'img-0.jpeg',
        title: 'PUMA-180 Unisex Sneakers',
        price: 120,
    },
    {
        id: 1,
        image: 'img-1.jpeg',
        title: 'Rider Future Vintage Unisex Sneakers',
        price: 60,
    },
    {
        id: 2,
        image: 'img-2.jpeg',
        title: 'Porsche Legacy Caven 2.0 Unisex Motorsport Sneakers',
        price: 230,
    },
    {
        id: 3,
        image: 'img-3.jpeg',
        title: 'Cricket square Mens Shoes',
        price: 100,
    }
];

const categories = [...new Set(product.map(item => item))];
let i = 0;

document.getElementById('root').innerHTML = categories.map(item => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>₹ ${price}.00</h2>
                <button onclick='addtocart(${i++})'>Add To Cart</button>
            </div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });   //to add items to cart from main page
    displayCart();
};

function delElement(a) {         //to delete items from cart
    cart.splice(a, 1);
    displayCart();
};

function displayCart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartitem').innerHTML = "Your Cart is Empty";  //for display cart is empty
        document.getElementById("total").innerHTML = "₹0.00";   //to display money count
    } else {
        document.getElementById('cartitem').innerHTML = cart.map((items, index) => {
            var { image, title, price } = items;
            total += price;     //if addded more than 1 item add its price to total
            document.getElementById("total").innerHTML = "₹ " + total + ".00";      //to display count
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <div>
                        <p style='font-size:12px;'>${title}</p>
                        <h2 style='font-size:15px;'>₹ ${price}.00</h2>
                        <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                    </div>
                </div>`
            );
        }).join('');
    }
}