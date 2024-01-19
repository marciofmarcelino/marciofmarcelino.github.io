document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const menu = document.getElementById('menu');
  
    menuIcon.addEventListener('click', function () {
      menu.style.display = 'block';
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    });
  
    closeIcon.addEventListener('click', function () {
      menu.style.display = 'none';
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
  