function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    // Verifică credențialele hardcodate
    if (username === "parinte" && password === "parinte") {
        message.innerHTML = "Autentificare reușită pentru părinte!";
        // Redirecționează către pagina pentru configurarea programului de iluminat pentru părinte
        window.location.href = "pagina_parinte.html";
    } else if (username === "copil" && password === "copil") {
        message.innerHTML = "Autentificare reușită pentru copil!";
        // Redirecționează către pagina pentru configurarea programului de iluminat pentru copil
        window.location.href = "pagina_copil.html";
    } else {
        message.innerHTML = "Credențiale incorecte. Încercați din nou.";
    }
}