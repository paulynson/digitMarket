window.addEventListener('scroll', () => {
  const myTop = document.querySelector('.mtop');
  myTop.classList.toggle('active', scrollY >= 200);
});
