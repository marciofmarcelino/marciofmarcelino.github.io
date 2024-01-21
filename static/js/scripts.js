document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const menu = document.getElementById('menu');
    
  
    menuIcon.addEventListener('click', function () {
      toggleBlur();
      menu.style.display = 'block';
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
     
    });
  
    closeIcon.addEventListener('click', function () {
      toggleBlur();
      menu.style.display = 'none';
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    });
  });






function toggleBlur() {
  var content = document.getElementsByClassName('container');
  var excecao = document.querySelector('.header');


  for (var i=0; i<content.length; i++) {
    if (content[i] !== excecao) {
      content[i].style.filter = content[i].style.filter ==='blur(5px)' ? 'none' : 'blur(5px)';
    }
    
  }

};


