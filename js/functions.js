// Remover productos del Carrito de Compras
const iconRemove = document.querySelectorAll(".cart__delete");
console.log(iconRemove);

iconRemove.forEach(elem => {
    elem.addEventListener("click", () => {
        const elemParent = elem.parentElement;
        elemParent.remove();
    })
});


// Mostrar Carrito de Compras al dar click
const header = document.querySelector("header");
const logos = header.querySelectorAll(".header__logo");
const cartIcon = logos[2];  
const cart = document.querySelector(".cart__img");

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");
});

// Hover de opacidad para los productos
const products = document.querySelectorAll(".products__item");

products.forEach(product => {
    product.addEventListener("mouseenter", () => {
        product.style.opacity = ".5";
    });

    product.addEventListener("mouseleave", () => {
        product.style.opacity = "1";
    });
});