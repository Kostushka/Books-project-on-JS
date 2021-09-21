class Header {
    render(count) {
        const html = `
            <div class='header-container'>
                <div class='header-counter'>
                    📂 ${count}
                </div>
            </div>
        `;
        ROOT_HEADER.innerHTML = html;
    }
}

const productsStore = localStorageUtils.getProducts();

const headerPage = new Header();
headerPage.render(productsStore.length);
