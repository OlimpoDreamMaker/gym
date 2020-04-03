const menu = document.querySelector('.menu-mobile')
const btnMenu = document.querySelector('.icono-menu')
const close = document.querySelector('.close')

btnMenu.addEventListener('click',()=>{
  menu.style.right = 0;
})

close.addEventListener('click',()=>{
  menu.style.right = "-60%";
})