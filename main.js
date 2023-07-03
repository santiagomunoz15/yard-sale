
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const asideCart = document.querySelector('.product-cart');

const burgerMenu = document.querySelector('.mobile-menu');

const menu = document.querySelector('.menu');

const cardsContainer = document.querySelector('.cards-container');

const productDetail = document.querySelector('.product-detail');

///

const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
const isAsideCartClosed = asideCart.classList.contains('inactive');
const isBurgerMenuClosed = burgerMenu.classList.contains('inactive');
const isDesktopMenuOpen = document.querySelector('.navbar-email').style.display;


function toggleDesktopMenu () {
    
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    productDetail.classList.add('inactive');
    asideCart.classList.add('inactive');

    if (isDesktopMenuClosed) {
        desktopMenu.classList.remove('inactive');
    }

    else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

}


function toggleAsideCart() {

    const isAsideCartClosed = asideCart.classList.contains('inactive');

    productDetail.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    burgerMenu.classList.add('inactive');

    if (!isAsideCartClosed) {
        asideCart.classList.add('inactive');
    }

    if (isAsideCartClosed) {
        asideCart.classList.remove('inactive');
    }

    toggleCardsContainer();
}



function toggleBurgerMenu () {

    const isBurgerMenuClosed = burgerMenu.classList.contains('inactive');
    const asideCart = document.querySelector('.product-cart');

    productDetail.classList.add('inactive');
    asideCart.classList.add('inactive');

    if (isBurgerMenuClosed) {
        burgerMenu.classList.remove('inactive');
    }

    else if (!isBurgerMenuClosed) {
        burgerMenu.classList.add('inactive');
    }

    if (!isAsideCartClosed) {
        asideCart.classList.add('inactive');
    }

    toggleCardsContainer();
}


function toggleCardsContainer () {

    const menu = document.querySelector('.menu');
    const cardsContainer = document.querySelector('.cards-container');
    const isBurgerMenuClosed = burgerMenu.classList.contains('inactive');
    const isAsideCartClosed = asideCart.classList.contains('inactive');
    const menuDisplay = getComputedStyle(menu).display;
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (menuDisplay == 'block') {
        if (!isProductDetailClosed) {
            cardsContainer.style.display = 'none';
        }

        if (isBurgerMenuClosed & isAsideCartClosed & isProductDetailClosed) {
            cardsContainer.style.display = 'grid';
        }
        
        else if (!isBurgerMenuClosed || !isAsideCartClosed) {
            cardsContainer.style.display = 'none';
        }

        
    }

}



function closeProductDetail () {
    productDetail.classList.add('inactive');
    toggleCardsContainer();
}


const productList = [];
    
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/16573573/pexels-photo-16573573/free-photo-of-bosque-bicicleta-aventura-ocio.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

productList.push({
    name: 'iPhone',
    price: 190,
    image: 'https://images.pexels.com/photos/14168781/pexels-photo-14168781.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cutting-edge smartphone with powerful features and sleek design for seamless communication and entertainment.'
});

productList.push({
    name: 'Laptop',
    price: 600,
    image: 'https://images.pexels.com/photos/3712595/pexels-photo-3712595.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Portable computer for productivity on the go, offering versatility and performance for work, study, and entertainment.'
});

productList.push({
    name: 'Watch',
    price: 320,
    image: 'https://images.pexels.com/photos/2155319/pexels-photo-2155319.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Stylish timepiece that combines fashion and functionality, keeping you punctual while adding a touch of sophistication.'
});

productList.push({
    name: 'Speaker',
    price: 95,
    image: 'https://images.pexels.com/photos/12715497/pexels-photo-12715497.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-quality audio device delivering immersive sound and enhancing your music listening or home theater experience.'
});

productList.push({
    name: 'Headset',
    price: 200,
    image: 'https://images.pexels.com/photos/1057712/pexels-photo-1057712.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Personal audio accessory providing exceptional sound quality and comfort, perfect for music, gaming, or private listening.'
});

var i = 0;

function renderProducts (array) {
    for (product of array) {  

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('id', i);
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('alt', product.name + 'image');
        productImg.addEventListener('click', openProductDetail);

        productCard.appendChild(productImg);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        productCard.appendChild(productInfo);
    
        const productInfoDiv = document.createElement('div');
    
        productInfo.appendChild(productInfoDiv);
    
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price;
        
        productInfoDiv.appendChild(productPrice);
    
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        productInfo.appendChild(productInfoFigure);
    
        const productInfoImg = document.createElement('img');
        productInfoImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoImg.setAttribute('alt', 'Add to shopping cart icon');
        productInfoImg.addEventListener('click', renderShoppingCart);

        productInfoFigure.appendChild(productInfoImg);
    
        cardsContainer.appendChild(productCard);

        i++;
    }
}

renderProducts(productList);


function openProductDetail () {

    var id = event.target.parentNode.getAttribute('id');

    const productDetailImg = document.querySelector('.product-detail-img');
    productDetailImg.setAttribute('src', productList[id].image);

    const productDetailPrice = document.querySelector('.product-detail-price');
    productDetailPrice.innerHTML = '$' + productList[id].price;

    const productDetailTitle = document.querySelector('.product-detail-title');
    productDetailTitle.innerHTML = productList[id].name;

    const productDetailDescription = document.querySelector('.product-detail-description');
    productDetailDescription.innerHTML = productList[id].description;

    productDetail.classList.remove('inactive');

    toggleCardsContainer();
}


function renderShoppingCart () {
    
    var id = event.target.closest('.product-card');
    var idValue = id.getAttribute('id');

    console.log("Shopping Cart Evoked");
    
    const shoppingCartDiv = document.querySelector('.shopping-cart');

    const shoppingCartContainer = document.createElement('div');
    shoppingCartContainer.classList.add('shopping-cart-product');
    
    const shoppingCartFigure = document.createElement('figure');
    
    shoppingCartContainer.appendChild(shoppingCartFigure);
    
    const shoppingCartImg = document.createElement('img');
    shoppingCartImg.setAttribute('src', productList[idValue].image);
    shoppingCartImg.setAttribute('alt', productList[idValue].name + 'image');

    shoppingCartFigure.appendChild(shoppingCartImg);

    const shoppingCartTitle = document.createElement('p');
    shoppingCartTitle.innerHTML = productList[idValue].name;

    shoppingCartContainer.appendChild(shoppingCartTitle);

    const shoppingCartPrice = document.createElement('p');
    shoppingCartPrice.innerHTML = '$' + productList[idValue].price;

    shoppingCartContainer.appendChild(shoppingCartPrice);

    const shoppingCartClose = document.createElement('img');
    shoppingCartClose.setAttribute('src', './icons/icon_close.png');
    shoppingCartClose.setAttribute('alt', 'close icon');
    shoppingCartClose.addEventListener('click', removeShoppingCartProduct);

    shoppingCartContainer.appendChild(shoppingCartClose);

    shoppingCartDiv.appendChild(shoppingCartContainer);

    i = -1;
}


// ---------------------------------------------------------

// Funcion con valores ya asignados

// function renderShoppingCart () {

//     var id = event.target.closest('.product-card');
    
//     const shoppingCartDiv = document.querySelector('.shopping-cart');

//     const shoppingCartContainer = document.createElement('div');
//     shoppingCartContainer.classList.add('shopping-cart-product');
//     shoppingCartContainer.setAttribute('id', i);
    
//     const shoppingCartFigure = document.createElement('figure');
    
//     shoppingCartContainer.appendChild(shoppingCartFigure);
    
//     const shoppingCartImg = document.createElement('img');
//     shoppingCartImg.setAttribute('src', 'https://images.pexels.com/photos/1057712/pexels-photo-1057712.jpeg?auto=compress&cs=tinysrgb&w=800');
//     shoppingCartImg.setAttribute('alt', 'computer' + 'image');

//     shoppingCartFigure.appendChild(shoppingCartImg);

//     const shoppingCartTitle = document.createElement('p');
//     shoppingCartTitle.innerHTML = 'Computer';

//     shoppingCartContainer.appendChild(shoppingCartTitle);

//     const shoppingCartPrice = document.createElement('p');
//     shoppingCartPrice.innerHTML = '$' + '50';

//     shoppingCartContainer.appendChild(shoppingCartPrice);

//     const shoppingCartClose = document.createElement('img');
//     shoppingCartClose.setAttribute('src', './icons/icon_close.png');
//     shoppingCartClose.setAttribute('alt', 'close icon');
//     shoppingCartClose.addEventListener('click', removeShoppingCartProduct);

//     shoppingCartContainer.appendChild(shoppingCartClose);

//     shoppingCartDiv.appendChild(shoppingCartContainer);

//     i--;

// }


function removeShoppingCartProduct () {
    
    
    var id = event.target.closest('.shopping-cart-product');
    
    console.log(id);

    
}



