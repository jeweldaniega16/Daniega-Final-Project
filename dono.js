const product = [
    {
        id: 0,
        image: 'assets/images/1.jpg',
        title: 'Versace Eros',
        price: 5000,
    },
    {
        id: 1,
        image: 'assets/images/2.jpg',
        title: 'Clinique Happy Men',
        price: 5000,
    },
    {
        id: 2,
        image: 'assets/images/8.jpg',
        title: 'Ralph Lauren Polo Black',
        price: 2000,
    },
    {
        id: 3,
        image: 'assets/images/7.jpg',
        title: 'Blu Atlas',
        price: 2300,
    },

    {
        id: 4,
        image: 'assets/images/10.jpg',
        title: 'Adidas Dynamic Pulse',
        price: 800,
    },

    {
        id: 5,
        image: 'assets/images/4.jpg',
        title: 'Dior Sauvage',
        price: 2000,
    },

    {
        id: 6,
        image: 'assets/images/3.jpg',
        title: 'Chance Eau Chanel',
        price: 2000,
    },

    {
        id: 7,
        image: 'assets/images/5.jpg',
        title: 'Versace Bright',
        price: 1000,
    },

    {
        id: 8,
        image: 'assets/images/6.jpg',
        title: 'Gucci Bloom',
        price: 500,
    },

    {
        id: 9,
        image: 'assets/images/9.jpg',
        title: 'Jovan Black Women',
        price: 1200,
    },

    {
        id: 10,
        image: 'assets/images/11.jpg',
        title: 'Revlon Charlie RED EDT',
        price: 2400,
    },

    {
        id: 12,
        image: 'assets/images/12.jpg',
        title: 'Jovan White Musk',
        price: 1100,
    }




];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

window.onload = function() {
    var backButton = document.getElementById("backButton");
    backButton.onclick = function() {
      history.go(-1);
    }
  };