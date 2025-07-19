
document.querySelectorAll('.img1').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('bordered');
  });
});
