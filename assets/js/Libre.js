function register() {
    // Definindo o username e a senha
    var username = "teste";
    var password = "teste";
    
    // Atualizando o conteúdo das tags <span> com o username e a senha
    document.getElementById('UsernameMK').innerText = username;
    document.getElementById('PasswordMK').innerText = password;

    // Exibindo a seção de login após o registro
    document.getElementById('registerSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
}

function showRegister() {
    // Exibindo a seção de registro
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('registerSection').style.display = 'block';
}