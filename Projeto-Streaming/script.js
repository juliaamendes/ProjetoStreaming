// Exemplo de interação simples
document.querySelectorAll('.filme img').forEach(img => {
  img.addEventListener('click', () => {
    alert("Faça login para assistir!");
  });
});

const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;

document.querySelector('.next').onclick = () => {
  index = (index + 1) % images.length;
  slides.style.transform = `translateX(-${index * 300}px)`;
};

document.querySelector('.prev').onclick = () => {
  index = (index - 1 + images.length) % images.length;
  slides.style.transform = `translateX(-${index * 300}px)`;
};
// Função para carregar e salvar favoritos no localStorage
function getFavoritos() {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
}

function salvarFavoritos(favoritos) {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

// Botões de favoritar
document.querySelectorAll(".favoritar").forEach(botao => {
    botao.addEventListener("click", () => {
        const card = botao.parentElement;
        const id = card.dataset.id;
        const titulo = card.dataset.titulo;
        const img = card.dataset.img;

        let favoritos = getFavoritos();

        // Verifica se já está nos favoritos
        const existe = favoritos.find(f => f.id === id);

        if (existe) {
            // Remove
            favoritos = favoritos.filter(f => f.id !== id);
            botao.textContent = "⭐ Favoritar";
        } else {
            // Adiciona
            favoritos.push({ id, titulo, img });
            botao.textContent = "✅ Favoritado";
        }

        salvarFavoritos(favoritos);
    });
});

// Marca os que já estão favoritados
window.addEventListener("DOMContentLoaded", () => {
    const favoritos = getFavoritos();
    document.querySelectorAll(".card").forEach(card => {
        const id = card.dataset.id;
        if (favoritos.some(f => f.id === id)) {
            card.querySelector(".favoritar").textContent = "✅ Favoritado";
        }
    });
});

