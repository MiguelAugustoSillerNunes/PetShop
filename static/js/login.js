document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário

        const email = document.getElementById("text").value;
        const password = document.getElementById("password").value;

        if (email === "admin" && password === "admin") {
            alert("Login bem-sucedido!");
            // Redirecionar (caso necessário)
            // window.location.href = "dashboard.html";
        } else {
            alert("Usuário ou senha incorretos!");
        }
    });
});
