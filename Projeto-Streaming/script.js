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
