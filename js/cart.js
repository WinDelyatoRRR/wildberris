function cart() {
    console.log("Hello world!")

    const cartBtn = document.querySelector('.button-cart');
    const cart = document.getElementById('modal-cart');
    const closeBtn = cart.querySelector('.modal-close')

    cartBtn.onclick = function () {
        cart.style.display = 'flex';
    }

    closeBtn.addEventListener('click', function () {
        cart.style.display = '';
    })


}

cart();