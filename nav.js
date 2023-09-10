const showMobile = document.getElementById('showMenuBtn');
const close = document.getElementById('close');
const menu = document.getElementById('showMenu');

showMobile.addEventListener('click', () =>{
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    menu.style.justifyContent = 'space-between'
    menu.style.position = 'absolute';
    menu.style.top = '0';
    menu.style.right = '0';
    menu.style.minWidth = '100%';
})

close.addEventListener('click', () => {
    menu.style.display = 'none';
})

