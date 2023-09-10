
// Pencil
const view_pencil = document.getElementById('view_pencil');

const pencil_1 = document.getElementById('pencil_1');
const pencil_2 = document.getElementById('pencil_2');
const pencil_3 = document.getElementById('pencil_3');
const pencil_4 = document.getElementById('pencil_4');

let cap = document.getElementById('cap_pencil');
let caption01 = document.getElementById('cap_pencil1');
let caption02 = document.getElementById('cap_pencil2');
let caption03 = document.getElementById('cap_pencil3');
let caption04 = document.getElementById('cap_pencil4');

const showMorePencil = document.getElementById('more_pencil');
const pencilBtn = document.getElementById('pencilBtn');

//Pencil Handlers
pencil_1.addEventListener('click', () => {
    const display = view_pencil.src;
    const caption_ = cap.textContent;

    view_pencil.setAttribute('src', pencil_1.src);
    pencil_1.setAttribute('src', display);
    cap.textContent = caption01.textContent;
    caption01.textContent = caption_;
})

pencil_2.addEventListener('click', () => {
    const display = view_pencil.src;
    const caption_ = cap.textContent;

    view_pencil.setAttribute('src', pencil_2.src);
    pencil_2.setAttribute('src', display);
    cap.textContent = caption02.textContent;
    caption02.textContent = caption_;
})

pencil_3.addEventListener('click', () => {
    const display = view_pencil.src;
    const caption_ = cap.textContent;

    view_pencil.setAttribute('src', pencil_3.src);
    pencil_3.setAttribute('src', display);
    cap.textContent = caption03.textContent;
    caption03.textContent = caption_;
})

pencil_4.addEventListener('click', () => {
    const display = view_pencil.src;
    const caption_ = cap.textContent;

    view_pencil.setAttribute('src', pencil_4.src);
    pencil_4.setAttribute('src', display);
    cap.textContent = caption04.textContent;
    caption04.textContent = caption_;
})

pencilBtn.addEventListener('click', () => {
    showMorePencil.style.display = 'block';
    showMorePencil.style.position = 'absolute';
    showMorePencil.style.bottom = '25%';
    showMorePencil.style.left = '10%';
    showMorePencil.style.width = '80%'

})


//MOBILE OPTIONS
const pencil_11 = document.getElementById('pencil_11');
const pencil_22 = document.getElementById('pencil_22');

let caption1 = document.getElementById('cap_pencil11');
let caption2 = document.getElementById('cap_pencil22');

pencil_11.addEventListener('click', () => {
    const display = view_pencil.src;
    const caption_ = cap.textContent;
    
    view_pencil.setAttribute('src', pencil_11.src);
    pencil_11.setAttribute('src', display);
    cap.textContent = caption1.textContent;
    caption1.textContent = caption_;
    showMorePencil.style.display = 'none';
})


pencil_22.addEventListener('click', () => {
    const display = view_pencil.src;
    const caption_ = cap.textContent;

    view_pencil.setAttribute('src', pencil_22.src);
    pencil_22.setAttribute('src', display);
    cap.textContent = caption2.textContent;
    caption2.textContent = caption_;
    showMorePencil.style.display = 'none';
})
