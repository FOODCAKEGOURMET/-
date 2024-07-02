document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Array de credenciais válidas
    var validCredentials = [
        { username: 'jbrandao', password: '123456' },
        { username: 'wsantana', password: '654321' },
        { username: 'gmoreira', password: '010101' },
        { username: 'jbrisa', password: 'teste' }
    ];

    // Verifica se as credenciais fornecidas estão na lista de credenciais válidas
    var isValid = validCredentials.some(function(cred) {
        return cred.username === username && cred.password === password;
    });

    if (isValid) {
        window.location.href = 'estoque.html';
    } else {
        alert('Usuário ou senha incorretos');
    }
});
