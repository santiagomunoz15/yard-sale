
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




function openProductDetail () {
    productDetail.classList.remove('inactive');
}


function closeProductDetail () {
    productDetail.classList.add('inactive');
}


const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Car',
    price: 999,
    image: 'https://images.pexels.com/photos/2643698/pexels-photo-2643698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Computer',
    price: 600,
    image: 'https://images.pexels.com/photos/10257920/pexels-photo-10257920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Car',
    price: 999,
    image: 'https://images.pexels.com/photos/2643698/pexels-photo-2643698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Computer',
    price: 600,
    image: 'https://images.pexels.com/photos/10257920/pexels-photo-10257920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});



function renderProducts (array) {
    for (product of array) {
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
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
    }
}

renderProducts(productList);


