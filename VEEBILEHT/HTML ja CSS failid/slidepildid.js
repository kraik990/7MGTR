// Fail: slidepildid.js
// Autor: ChatGPT (OpenAI) 
// Kuupäev: 30.11.2024
// vahetab pilte sujuvalt iga 3sek tagant

let currentImage = 0;
const images = document.querySelectorAll('.image');

function changeImage() {
  
  images[currentImage].style.opacity = 0;

  
  currentImage = (currentImage + 1) % images.length;

  
  images[currentImage].style.opacity = 1;
}

images[currentImage].style.opacity = 1;


setInterval(changeImage, 3000);