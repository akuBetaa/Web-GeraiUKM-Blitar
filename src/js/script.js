// Menggunakan JavaScript untuk memuat dan menampilkan navbar
document.addEventListener("DOMContentLoaded", function () {
  fetch("/pages/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
});

///untuk memanggil list Product
document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("product-container");

    // Loop through the products array
    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        // Create a new div element for each product
        const productDiv = document.createElement("div");
        productDiv.className = "col";

        // Populate the div with product information
        productDiv.innerHTML = `
                <div class="item-product shadow p-3 border rounded">
                <img src=${product.img} class="object-fit-cover border rounded" alt="">

                <div class="row mt-3">
                    <div class="col-9">
                        <h5 class="fw-semibold">${product.name}</h5>
                        <p class="fw-semibold fs-6">${product.deskripsi}</p>
                    </div>
                    <div class="col-2">
                        <h5 class="fw-semibold">${product.harga}</h5>
                        <button class="btn btn-dark m-0 p-0">
                            <img src="../src/img/icon-cart.png" class="" alt="">
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Append the product div to the container
        productContainer.appendChild(productDiv);
    }
});

