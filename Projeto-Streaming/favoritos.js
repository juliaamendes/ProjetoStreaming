function getFavoritos() {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
}

function salvarFavoritos(favoritos) {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function renderFavoritos() {
    const lista = document.getElementById("lista-favoritos");
    const favoritos = getFavoritos();

    lista.innerHTML = "";

    if (favoritos.length === 0) {
        lista.innerHTML = "<p>Você ainda não adicionou nenhum favorito 😢</p>";
        return;
    }

    favoritos.forEach(filme => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
      <img src="${filme.img}" alt="${filme.titulo}">
      <h3>${filme.titulo}</h3>
      <button class="remover">❌ Remover</button>
    `;

        card.querySelector(".remover").addEventListener("click", () => {
            const novos = favoritos.filter(f => f.id !== filme.id);
            salvarFavoritos(novos);
            renderFavoritos();
        });

        lista.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderFavoritos);
