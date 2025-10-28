const formCadastro = document.getElementById('formCadastro');

formCadastro.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('cadastroEmail').value;
  const senha = document.getElementById('cadastroSenha').value;

  // Verifica se já existe o e-mail cadastrado
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const existe = usuarios.find(u => u.email === email);

  if (existe) {

    alert('Esse e-mail já está cadastrado!');
  } else {
    usuarios.push({ email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Conta criada com sucesso!');
    window.location.href = 'login.html';
  }
});

