document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const menu = document.getElementById('menu');
  
    menuIcon.addEventListener('click', function () {
      menu.style.display = 'block';
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
      
    });
  
    closeIcon.addEventListener('click', function () {
      menu.style.display = 'none';
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    });
  });
  