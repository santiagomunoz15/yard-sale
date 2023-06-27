
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const asideCart = document.querySelector('.product-detail');

function toggleDesktopMenu () {

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideCartClosed = asideCart.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        isDesktopMenuClosed.classList.add('inactive');
    }

    if (isDesktopMenuClosed) {
        isDesktopMenuClosed.classList.remove('inactive');
    }

    if (!isAsideCartClosed) {
        asideCart.classList.add('inactive');
    }

}

const burgerMenu = document.querySelector('.mobile-menu');


function toggleBurgerMenu () {

    const isBurgerMenuClosed = burgerMenu.classList.contains('inactive');
    const isAsideCartClosed = asideCart.classList.contains('inactive');

    if (!isBurgerMenuClosed) {
        burgerMenu.classList.add('inactive');
    }

    if (isBurgerMenuClosed) {
        burgerMenu.classList.remove('inactive');
    }

    if (!isAsideCartClosed) {
        asideCart.classList.add('inactive');
    }

    toggleCardsContainer();
}



const menu = document.querySelector('.menu');

function toggleAsideCart() {

    const isBurgerMenuClosed = burgerMenu.classList.contains('inactive');
    const isAsideCartClosed = asideCart.classList.contains('inactive');

    if (!isAsideCartClosed) {
        asideCart.classList.add('inactive');
    }

    if (isAsideCartClosed) {
        asideCart.classList.remove('inactive');
    }

    if (!isBurgerMenuClosed) {
        asideCart.classList.add('inactive');
    }

    toggleCardsContainer();
}



const cardsContainer = document.querySelector('.cards-container');

function toggleCardsContainer () {

    const isAsideCartClosed = asideCart.classList.contains('inactive');
    const isBurgerMenuClosed = burgerMenu.classList.contains('inactive');
    const isDesktopMenuOpen = document.querySelector('.navbar-email').style.display;

    if (isDesktopMenuOpen == 'list-item') {
        cardsContainer.style.display = 'grid';
    }
    
    if (isBurgerMenuClosed & isAsideCartClosed) {
        cardsContainer.style.display = 'grid';
    }
    
    else if (!isBurgerMenuClosed || !isAsideCartClosed) {
        cardsContainer.style.display = 'none';
    }

}


//      Product          //

// <div class="product-card">
//     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
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



const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Car',
    price: 999,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computer',
    price: 600,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts (array) {
    for (product of array) {
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        productCard.appendChild(img);
    
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