let doadores = [];

document.getElementById("formdoacao").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let idade = parseInt(document.getElementById("idade").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let tipoSanguineo = document.getElementById("tipoSanguineo").value;
    let telefone = document.getElementById("telefone").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let estado = document.getElementById("estado").value.trim();

    //VALIDAÇÕES

    //Obrigatórios
    if (
        nome === "" ||
        email === "" ||
        !idade ||
        !peso ||
        tipoSanguineo === "" ||
        telefone === "" ||
        cidade === "" ||
        estado === ""
    ) {
        alert("Todos os campos são obrigatórios.");
        return;
    }

    //Nome e sobrenome
    if (nome.split(" ").length < 2) {
        alert("Digite nome e sobrenome.");
        return;
    }

    //Email válido
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("Digite um email válido.");
        return;
    }

    //Idade mínima
    if (idade < 16) {
        alert("A idade mínima é 16 anos.");
        return;
    }

    //Peso mínimo
    if (peso < 50) {
        alert("O peso mínimo é 50kg.");
        return;
    }

    //Telefone com apenas números
    let regexTelefone = /^[0-9]+$/;

    if (!regexTelefone.test(telefone)) {
        alert("O telefone deve conter apenas números.");
        return;
    }

});