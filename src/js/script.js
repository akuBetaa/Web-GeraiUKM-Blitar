// Menggunakan JavaScript untuk memuat dan menampilkan navbar
document.addEventListener("DOMContentLoaded", function () {
    fetch("/pages/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        });
});