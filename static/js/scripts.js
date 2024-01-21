document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const menu = document.getElementById('menu');
    
  
    menuIcon.addEventListener('click', function () {
      aplicarBlur();
      menu.style.display = 'block';
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
     
    });
  
    closeIcon.addEventListener('click', function () {
      removerBlur();
      menu.style.display = 'none';
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    });
  });
  

function aplicarBlur() {
  var content = document.getElementsByClassName('container');
  var excecao = document.querySelector('.header');

  if (content.length > 0) {
    
    for (var i=0; i<content.length; i++) {
      if (content[i] !== excecao) {
        content[i].style.filter = 'blur(5px)';
      }
      
    }
  }
  
};

function removerBlur(){
  var content = document.getElementsByClassName('container');

  if (content.length > 0) {

    for (var i=0; i<content.length; i++) {
      content[i].style.filter = 'none';
    }
  }

};
