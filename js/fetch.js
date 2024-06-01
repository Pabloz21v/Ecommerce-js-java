
//CARGA INICIAL
document.addEventListener('DOMContentLoaded', () => {
    let busqueda = 'electrodomestico'
    fetchFuncion(busqueda)
});

//MENU 
function getGet(element, value) {
    console.log(element);
    fetchFuncion(value)
}


//FECHT FUNCION
function fetchFuncion(busqueda) {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=` + busqueda + `&limit=5#json`)
        .then(response => response.json())
        .then(response => renderProducts(response))
        .catch(error => dibujarError(error))
}

// BUSCADOR
function getProducts() {
    let buscadorML = document.getElementById('buscadorML').value

    const respuesta = fetch(`https://api.mercadolibre.com/sites/MLA/search?q=` + buscadorML + `&limit=10#json`);
    respuesta
        .then(response => response.json())
        .then(response => renderProducts(response))
        .catch(error => dibujarError(error))
}

function renderProducts(response) {
    const products = response.results;
    let rows = '';
    for (let product of products) {
        rows += `
        <tr>
            <td>${product.title}</td>
            <td>
                <img src="${product.thumbnail}" alt="" class="img-fluid">
            </td>
            <td><button type="button" onclick="openModalProduct(${product.id})" id="${product.id}" class="btn btn-primary" 
            data-bs-toggle="modal" data-bs-target="#modalResultadoBusqueda" >Mas info</button></td>
            </tr>
        `
    }
    document.querySelector('#products').innerHTML = rows;
}

// fetch por producto para modal
function openModalProduct(product) {
    const respuesta = fetch(`https://api.mercadolibre.com/items/` + product.id);
    respuesta
        .then(response => response.json())
        .then(response => renderModalProduct(response))
        .catch(error => dibujarError(error))
}

// contenido modal
function renderModalProduct(response) {
    const product = response;
    let modalResultadoBusqueda =
        `
        <div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">${product.title}</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body d-flex justify-content-center">
                <div class="card mb-3">
                <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.currency_id} ${product.price}</h5>
                    <p class="card-text">${product.warranty}</small></p>
                </div>
			</div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary">Comprar</button>
        </div>
        `
    document.querySelector('#datosResultadoBusqueda').innerHTML = modalResultadoBusqueda;
}

function dibujarError(error) {
    console.log(error);
    console.table(error);
}