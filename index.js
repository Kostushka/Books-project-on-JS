function render() {
    const productsStore = localStorageUtils.getProducts();
    headerPage.render(productsStore.length);
    productsPage.render();
}

let CATALOG = [];

fetch('server/catalog.json')
    // fetch('http://localhost:3001/catalog')
    .then((res) => res.json())
    .then((body) => {
        CATALOG = body;
        render();
    })
    .catch((error) => {
        console.log(error);
    });
