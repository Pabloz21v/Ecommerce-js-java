
//CARGA INICIAL
document.addEventListener('DOMContentLoaded', () => {
    let busqueda = 'Electrodomesticos'
    document.querySelector('#busqueda').innerHTML = "Resultados de: "+busqueda;
    fetchFuncion(busqueda)
    carrusel()
});

//Fecht carga inicial para el carrusel
function carrusel(){
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=` + busqueda+ `&limit=5#json`)
    .then(response => response.json())
    .catch(error => dibujarError(error))
}

//MENU 
function getGet(element, value) {
    console.log(element);
    document.querySelector('#busqueda').innerHTML = value;
    fetchFuncion(value)
}


//FECHT de los botones del menu, entrega 5 resultados
function fetchFuncion(busqueda) {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=` + busqueda+ `&limit=5#json`)
        .then(response => response.json())
        .then(response => renderProducts(response))
        .catch(error => dibujarError(error))
}

// BUSCADOR que entrega 10 resultados
function getProducts() {
    let buscadorML = document.getElementById('buscadorML').value
    document.querySelector('#busqueda').innerHTML = "Resultados de: "+buscadorML;
    const respuesta = fetch(`https://api.mercadolibre.com/sites/MLA/search?q=` + buscadorML + `&limit=10#json`);
    respuesta
        .then(response => response.json())
        .then(response => renderProducts(response))
        .catch(error => dibujarError(error))
}

// Renderizado tabla de productos
function renderProducts(response) {
    const products = response.results;
    let rows = '';
    for (let product of products) {
        rows += `
        <tr>
            <td>${product.title}</td>
            <td >
                <img src="${product.thumbnail}" alt="" class="img-thumbnail" style="max-width: 100px;">
            </td>
        </tr>
        `
    }
    document.querySelector('#products').innerHTML = rows;
}


function dibujarError(error) {
    document.querySelector('#busqueda').innerHTML = "Busqueda no encontrada";
    console.log(error);
    console.table(error);
}