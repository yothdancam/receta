document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar-toggler');
    const navList = document.querySelector('.list');
    const lines = document.querySelectorAll('.linea');

    toggleButton.addEventListener('click', () => {
      navList.classList.toggle('active');
      lines.forEach((line) => line.classList.toggle('active'));
    });
  });