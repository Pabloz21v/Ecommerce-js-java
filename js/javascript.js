/*var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, // Muestra 4 tarjetas a la vez
    spaceBetween: 10, // Espacio entre tarjetas
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
});*/

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto', // Mostrará el número de tarjetas según el espacio disponible
    spaceBetween: 10, // Espacio entre las tarjetas
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: { // Para teléfonos
            slidesPerView: 1, // 1 tarjeta a la vez
        },
        768: { // Para tablets
            slidesPerView: 2, // dos tarjetas a la vez
        },
        992: { // 
            slidesPerView: 4, // 4 tarjetas a la vez
        },
    }
});
/*Botoncitos de "*/
document.getElementById('btn-22').addEventListener('click', function() {
    document.getElementById('monitor-title').innerText = "Monitor 22\" FHD con panel IPS 75Hz y bordes Ultradelgados";
    document.getElementById('monitor-price').innerText = "$249.999";
});

document.getElementById('btn-27').addEventListener('click', function() {
    document.getElementById('monitor-title').innerText = "Monitor 27\" FHD con panel IPS 75Hz y bordes Ultradelgados";
    document.getElementById('monitor-price').innerText = "$299.999";
});

document.getElementById('btn-43').addEventListener('click', function() {
    document.getElementById('tv-title').innerText = "43\" UHD 4K Smart TV AU7000";
    document.getElementById('tv-price').innerText = "$599.999";
});

document.getElementById('btn-55').addEventListener('click', function() {
    document.getElementById('tv-title').innerText = "55\" UHD 4K Smart TV AU7000";
    document.getElementById('tv-price').innerText = "$749.999";
});

document.getElementById('btn-70').addEventListener('click', function() {
    document.getElementById('tv-title').innerText = "70\" UHD 4K Smart TV AU7000";
    document.getElementById('tv-price').innerText = "$1.259.999";
});

