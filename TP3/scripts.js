const cardContainer = document.getElementById("cardProd");
const traerProd = (url) => {
    axios.get(url)
        .then(res => {
            res.data.products.forEach(element => {
                const unaCard = document.createElement("div");
                unaCard.classList.add("col-md-4");
                unaCard.innerHTML = `
                    <div class="card" id="card1">
                        <img src="${element.images[0]}" height="200px" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">$${element.price}</p>
                            <!-- Botón modal -->
                            <button type="button" class="btn btn-primary" onclick="verDetalle('${element.title}','${element.description}','${element.stock}')">
                                Ver Info
                            </button>
                        </div>
                    </div>
                `;
                cardContainer.appendChild(unaCard);
            });
            console.log(res);
        })
}
traerProd('https://dummyjson.com/products');

const filtrarCat = (url) => {
    axios.get(url)
        .then(res => {
            const catUl = document.getElementById("categorias");

            res.data.category.forEach(element => {
                const catLi = document.createElement("li");
                catLi.classList.add("dropdown-item")
                unLi.innerHTML = `${element.category}`;
                catUl.appendChild(catLi);
            });
            console.log(res);
        })
}
filtrarCat('https://dummyjson.com/products/categories');

const buscar = () => {
    cardContainer.innerHTML = "";
    const barraBusqueda = document.getElementById("busqueda")
    const texto = barraBusqueda.value;
    traerProd('https://dummyjson.com/products/search?q=' + texto);
}

const verDetalle = (titulo, desc, stock) => {
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    const tituloModal = document.getElementById("exampleModalLabel");
    tituloModal.innerHTML = titulo;
    const modalBody = document.getElementById("modalBody")
    modalBody.innerHTML = `<p>Descripción: ${desc}</p>
    <br>
    <h3>Stock: ${stock}</h3>`
    myModal.show();
}