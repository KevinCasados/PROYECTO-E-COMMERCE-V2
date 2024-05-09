// ANIMACION DEL HEADER PRINCIPAL

let lastScrollTop = 0; // Guardar la última posición de desplazamiento
const header = document.querySelector('.header');
const buffer = 20; // Distancia en píxeles antes de hacer aparecer el header

window.addEventListener('scroll', function() {
    let currentScroll = window.scrollY; 

    // Si desplazamos hacia abajo más de `buffer` píxeles y el header no está visible
    if (currentScroll > lastScrollTop + buffer) {
        header.classList.add('hidden');
    } 
    // Si desplazamos hacia arriba o volvemos al principio
    else if (currentScroll < lastScrollTop - buffer || currentScroll <= 0) {
        header.classList.remove('hidden');
    }

    // Actualiza la última posición de desplazamiento
    lastScrollTop = currentScroll;
});

// AGREGAR - QUITAR - CONTEO. DE PROUCTOS DEL CARRITO

document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.querySelector('.cart__items');

    function updateCartBadge() {
        const numItems = document.querySelectorAll('.cart__shopping').length;
        const badges = document.querySelectorAll('.cart__badge');
        badges.forEach(badge => badge.textContent = numItems);
    }

    function handleDelete(event) {
        const cartItem = event.target.closest('.cart__shopping');
        if (cartItem) {
            cartItem.remove();
            updateCartBadge(); // Actualiza el badge después de eliminar un artículo
        }
    }

    // Aplicar handleDelete a todos los íconos de eliminación existentes, incluidos los iniciales
    document.querySelectorAll('.cart__delete').forEach(icon => {
        icon.addEventListener('click', handleDelete);
    });

    // Añade eventos de clic para manejar la adición de productos al carrito
    document.querySelectorAll('.products__add__favorites__btn').forEach(button => {
        button.addEventListener('click', function(event) {
            const productItem = event.target.closest('.products__item');
            const productImg = productItem.querySelector('.products__img').src;
            const productDescription = productItem.querySelector('.products__description__title').innerText;
            const productPrice = productItem.querySelector('.products__price__text').innerText;

            const cartItem = document.createElement('article');
            cartItem.classList.add('cart__shopping');
            cartItem.innerHTML = `
                <img class="cart__img" src="${productImg}" alt="${productDescription}">
                <p class="cart__description">${productDescription}</p>
                <p class="cart__price">${productPrice}</p>
                <img class="cart__delete" src="img/cancel-delete-remove-svgrepo-com.svg" alt="Icono Quitar">
            `;

            cartItem.querySelector('.cart__delete').addEventListener('click', handleDelete);
            cartItemsContainer.appendChild(cartItem);
            updateCartBadge(); // Actualiza el badge después de añadir un artículo
        });
    });
});

//MOSTRAR Y OCULTAR EL CARRITO Y EL MENU

// Seleccionamos el ícono del menú principal, el ícono de salida del menú, y el propio menú
const menuIcon = document.querySelector('.menu__img');
const exitMenuIcon = document.querySelector('.menu__exit');
const menuIcon2 = document.querySelector('.menu__img__2');
const menu = document.querySelector('.menu');

// Seleccionamos el ícono del carrito principal, el ícono de salida del carrito, y el propio carrito
const cartIcon = document.getElementById('cart__img__open__cart');
const cartIcon2 = document.getElementById('cart__img__open__cart__v2');
const cartExitIcon = document.querySelector('.cart__exit');
const cart = document.querySelector('.cart');

// Función para abrir o cerrar el carrito
function toggleCart(event) {
    event.preventDefault();
    
    // Si el menú está visible, lo cerramos
    if (menu.style.right === '0%') {
        menu.style.right = '-100%';
    }

    // Alternamos el estado del carrito
    if (cart.style.right === '0px') {
        cart.style.right = '-100%'; // Esconde el carrito
    } else {
        cart.style.right = '0px'; // Muestra el carrito
    }
}

// Función para abrir o cerrar el menú
function toggleMenu(event) {
    event.preventDefault();
    
    // Si el carrito está visible, lo cerramos
    if (cart.style.right === '0px') {
        cart.style.right = '-100%';
    }

    // Alternamos el estado del menú
    if (menu.style.right === '0%') {
        menu.style.right = '-100%'; // Esconde el menú
    } else {
        menu.style.right = '0%'; // Muestra el menú
    }
}

// Asignamos la función `toggleCart` a ambos íconos del carrito
cartIcon.addEventListener('click', toggleCart);
cartIcon2.addEventListener('click', toggleCart);

// Asignamos la función `toggleMenu` a ambos íconos del menú
menuIcon.addEventListener('click', toggleMenu);
menuIcon2.addEventListener('click', toggleMenu);

// Asignamos la función para cerrar el carrito al ícono de salida del carrito
cartExitIcon.addEventListener('click', () => {
    cart.style.right = '-100%';
});

// Asignamos la función para cerrar el menú al ícono de salida del menú
exitMenuIcon.addEventListener('click', () => {
    menu.style.right = '-100%';
});