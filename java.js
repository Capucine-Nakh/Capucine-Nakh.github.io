// Sélectionne toutes les images de la galerie
const galleryImages = document.querySelectorAll('.thumbnail');
const overlay = document.getElementById('overlay');
const fullscreenImage = document.getElementById('fullscreen-image');

// Pour chaque image, ajoute un événement au clic
galleryImages.forEach(img => {
  img.addEventListener('click', function() {
    overlay.style.display = 'flex';
    fullscreenImage.src = this.src;
  });
});

// Ferme l'overlay en cliquant sur la croix
document.querySelector('.close-btn').addEventListener('click', function() {
  overlay.style.display = 'none';
});

// Ferme l'overlay en cliquant à côté de l'image
overlay.addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});

// document.querySelectorAll('.grid-projets').forEach(img => {
//   img.addEventListener('click', function() {
//     this.classList.toggle('fullscreen-image');
//   });
// });


// const galleryImages = document.querySelectorAll('.grid-projets');
// const overlay = document.getElementById('overlay');
// const fullscreenImage = document.getElementById('fullscreen-image');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Ouvre l'image en plein écran
galleryImages.forEach((img, index) => {
  img.addEventListener('click', function() {
    overlay.style.display = 'flex';
    fullscreenImage.src = this.src;
    currentIndex = parseInt(this.dataset.index);
  });
});

// Ferme l'overlay
closeBtn.addEventListener('click', function() {
  overlay.style.display = 'none';
});

// Navigation vers l'image précédente
prevBtn.addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  fullscreenImage.src = galleryImages[currentIndex].src;
});

// Navigation vers l'image suivante
nextBtn.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  fullscreenImage.src = galleryImages[currentIndex].src;
});

// Ferme l'overlay en cliquant à côté
overlay.addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});

