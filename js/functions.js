// Codigo para eliminar un producto del carrito

// Seleccionamos todos los íconos de eliminación
const deleteIcons = document.querySelectorAll('.cart__delete');

// Añadimos un evento de clic a cada ícono
deleteIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        // Obtenemos el contenedor padre más cercano, que es el artículo del carrito
        const cartItem = event.target.closest('.cart__shopping');
        
        // Removemos ese artículo del DOM
        if (cartItem) {
            cartItem.remove();
        }
    });
});

//Codigo para agregar un producto al carrito

// Seleccionamos todos los botones de añadir a favoritos
const favoriteButtons = document.querySelectorAll('.products__add__favorites__btn');

// Encontramos el contenedor del carrito
const cartSection = document.querySelector('.cart');

// Añadimos un evento de clic a cada botón de favoritos
favoriteButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Obtenemos el artículo del producto relacionado al botón de favoritos
        const productItem = event.target.closest('.products__item');

        // Extraemos la información del producto
        const productImg = productItem.querySelector('.products__img').src;
        const productDescription = productItem.querySelector('.products__description__title').innerText;
        const productPrice = productItem.querySelector('.products__price__text').innerText;

        // Creamos un nuevo artículo para agregarlo al carrito
        const cartItem = document.createElement('article');
        cartItem.classList.add('cart__shopping');
        cartItem.innerHTML = `
            <img class="cart__img" src="${productImg}" alt="${productDescription}">
            <p class="cart__description">${productDescription}</p>
            <p class="cart__price">${productPrice}</p>
            <img class="cart__delete" src="img/cancel-delete-remove-svgrepo-com.svg" alt="Icono Quitar">
        `;

        // Añadimos el nuevo artículo al carrito
        cartSection.appendChild(cartItem);

        // Añadimos un evento de clic al ícono de eliminación recién creado
        const deleteIcon = cartItem.querySelector('.cart__delete');
        deleteIcon.addEventListener('click', (event) => {
            const itemToRemove = event.target.closest('.cart__shopping');
            if (itemToRemove) {
                itemToRemove.remove();
            }
        });
    });
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