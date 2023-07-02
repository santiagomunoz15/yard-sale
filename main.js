
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

    if (menuDisplay == 'block') {
        if (isBurgerMenuClosed & isAsideCartClosed) {
            cardsContainer.style.display = 'grid';
        }
        
        else if (!isBurgerMenuClosed || !isAsideCartClosed) {
            cardsContainer.style.display = 'none';
        }
    }

}


//      Product          //

// <div class="product-card">
//     <img onclick="toggleProductDetail()" src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//     <div class="product-info">
//         <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//         </div>
//         <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//         </figure>
//     </div>
// </div>


function closeProductDetail () {
    productDetail.classList.add('inactive');
}


const productList = [];
    
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/16573573/pexels-photo-16573573/free-photo-of-bosque-bicicleta-aventura-ocio.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

productList.push({
    name: 'iPhone',
    price: 190,
    image: 'https://images.pexels.com/photos/14168781/pexels-photo-14168781.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

productList.push({
    name: 'Computer',
    price: 600,
    image: 'https://images.pexels.com/photos/3712595/pexels-photo-3712595.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

productList.push({
    name: 'Watch',
    price: 320,
    image: 'https://images.pexels.com/photos/2155319/pexels-photo-2155319.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

productList.push({
    name: 'Speaker',
    price: 95,
    image: 'https://images.pexels.com/photos/12715497/pexels-photo-12715497.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

productList.push({
    name: 'Headset',
    price: 200,
    image: 'https://images.pexels.com/photos/1057712/pexels-photo-1057712.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

var i = 0;

function renderProducts (array) {
    for (product of array) {  

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('id', i);
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
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
    
        productInfoFigure.appendChild(productInfoImg);
    
        cardsContainer.appendChild(productCard);

        i++;
    }
}

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

}

renderProducts(productList);




// Posible solucion para cambiar los detalles del Product Detail Aside

// function productDetailContent (url, price, title, description) {

    
//     const productDetailUrl = document.createElement('img');
//     productDetailUrl.setAttribute('src', url);
    
//     productDetail.appendChild(productDetailUrl);

//     const productDetailDiv = document.createElement('div');
//     productDetailDiv.classList.add('product-detail-info');

//     const productDetailPrice = document.createElement('p');
//     productDetailPrice.innerHTML = '$' + price;

//     productDetailDiv.appendChild(productDetailPrice);

//     const productDetailTitle = document.createElement('p');
//     productDetailTitle.innerHTML = title;

//     productDetailDiv.appendChild(productDetailTitle);

//     const productDetailDescription = document.createElement('p');
//     productDetailDescription.innerHTML = description;

//     productDetailDiv.appendChild(productDetailDescription);

// }