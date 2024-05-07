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

// Selecciona todos los botones de favoritos
const favoriteButtons = document.querySelectorAll('.products__add__favorites__btn');

// Selecciona el contenedor de artículos en el carrito
const cartItemsContainer = document.querySelector('.cart__items');

// Agrega el evento de clic para cada botón de favoritos
favoriteButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productItem = event.target.closest('.products__item');

        // Extrae la información del producto
        const productImg = productItem.querySelector('.products__img').src;
        const productDescription = productItem.querySelector('.products__description__title').innerText;
        const productPrice = productItem.querySelector('.products__price__text').innerText;

        // Crea un nuevo artículo para agregarlo al carrito
        const cartItem = document.createElement('article');
        cartItem.classList.add('cart__shopping');
        cartItem.innerHTML = `
            <img class="cart__img" src="${productImg}" alt="${productDescription}">
            <p class="cart__description">${productDescription}</p>
            <p class="cart__price">${productPrice}</p>
            <img class="cart__delete" src="img/cancel-delete-remove-svgrepo-com.svg" alt="Icono Quitar">
        `;

        // Añade el nuevo artículo al contenedor de artículos en el carrito
        cartItemsContainer.appendChild(cartItem);

        // Agrega un evento de clic al ícono de eliminación
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

// Función para abrir o cerrar el carrito
function toggleCart(event) {
    // Previene el comportamiento predeterminado del enlace
    event.preventDefault();

    const cart = document.querySelector('.cart');
    // Verifica si el carrito está visible o no
    if (cart.style.right === '0px') {
        cart.style.right = '-100%'; // Esconde el carrito
    } else {
        cart.style.right = '0px'; // Muestra el carrito
    }
}

// Asigna la función a los íconos con ID `cart__img__open__cart` y `cart__img__open__cart__v2`
document.getElementById('cart__img__open__cart').addEventListener('click', toggleCart);

// Asegúrate de que este elemento exista en tu HTML antes de asignarle un manejador de eventos
if (document.getElementById('cart__img__open__cart__v2')) {
    document.getElementById('cart__img__open__cart__v2').addEventListener('click', toggleCart);
}



// Cerrar carrito con el boton X

document.querySelector('.cart__exit').addEventListener('click', function() {
    const cart = document.querySelector('.cart');
    cart.style.right = '-100%'; 
});


// Animacion del Header principal

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