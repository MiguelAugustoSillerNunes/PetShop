document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const usuario = document.getElementById("usuario").value.trim();
        const password = document.getElementById("senha").value.trim();

        const toastSuccess = new bootstrap.Toast(document.getElementById("toastSuccess"));
        const toastError = new bootstrap.Toast(document.getElementById("toastError"));

        if (usuario === "admin" && password === "admin") {
            toastSuccess.show(); 
            setTimeout(() => {
                window.location.href = "tela-inicial.html";
            }, 500);
        } else {
            toastError.show(); 
        }
    });
});
