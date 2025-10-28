const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);


  if (usuario) {
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    alert('Login realizado com sucesso!');
    window.location.href = 'index.html'; // redireciona para a página principal
  } else {
    alert('E-mail ou senha incorretos');
  }
});
