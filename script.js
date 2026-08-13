const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => nav.classList.toggle('open'));

const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const close = lightbox.querySelector('.close');

document.querySelectorAll('.photo').forEach(button => {
  button.addEventListener('click', () => {
    const img = button.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
}
close.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
