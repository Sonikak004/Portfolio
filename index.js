// hamburger menu open
function open() {
    document.querySelector('#mobile').style.display = 'block';
  }
  document.querySelectorAll('.items')[0].addEventListener('click', open);
  
  // hamburger menu close
  
  function close() {
    document.getElementById('mobile').style.display = 'none';
  }
  document.getElementById('close-menu').addEventListener('click', close);
  
