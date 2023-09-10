
// Pen
const view_pen = document.getElementById('view_pen');

const pen_1 = document.getElementById('pen_1');
const pen_2 = document.getElementById('pen_2');
const pen_3 = document.getElementById('pen_3');
const pen_4 = document.getElementById('pen_4');

let capture = document.getElementById('cap_pen');
let capture01 = document.getElementById('cap_pen1');
let capture02 = document.getElementById('cap_pen2');
let capture03 = document.getElementById('cap_pen3');
let capture04 = document.getElementById('cap_pen4');

const penBtn = document.getElementById('penBtn');
const showMorePen = document.getElementById('more_pen');

//Pen event handlers
pen_1.addEventListener('click', () => {
    const display = view_pen.src;
    const caption_ = capture.textContent;

    view_pen.setAttribute('src', pen_1.src);
    pen_1.setAttribute('src', display);
    capture.textContent = capture01.textContent;
    capture01.textContent = caption_;

})

pen_2.addEventListener('click', () => {
    const display = view_pen.src;
    const caption_ = capture.textContent;

    view_pen.setAttribute('src', pen_2.src);
    pen_2.setAttribute('src', display);
    capture.textContent = capture02.textContent;
    capture02.textContent = caption_;

})

pen_3.addEventListener('click', () => {
    const display = view_pen.src;
    const caption_ = capture.textContent;

    view_pen.setAttribute('src', pen_3.src);
    pen_3.setAttribute('src', display);
    capture.textContent = capture03.textContent;
    capture03.textContent = caption_;

})

pen_4.addEventListener('click', () => {
    const display = view_pen.src;
    const caption_ = capture.textContent;

    view_pen.setAttribute('src', pen_4.src);
    pen_4.setAttribute('src', display);
    capture.textContent = capture04.textContent;
    capture04.textContent = caption_;

})

//MOBILE OPTIONS
penBtn.addEventListener('click', () => {
    showMorePen.style.display = 'block';
    showMorePen.style.position = 'absolute';
    showMorePen.style.bottom = '25%'
    showMorePen.style.width = '300px'
})


const pen_11 = document.getElementById('pen_11');
const pen_22 = document.getElementById('pen_22');

let capture11 = document.getElementById('cap_pen11');
let capture22 = document.getElementById('cap_pen22');

pen_11.addEventListener('click', () => {
    const display = view_pen.src;
    const caption_ = capture.textContent;

    view_pen.setAttribute('src', pen_11.src);
    pen_11.setAttribute('src', display);
    capture.textContent = capture11.textContent;
    capture11.textContent = caption_;
    showMorePen.style.display = 'none';
})


pen_22.addEventListener('click', () => {
    const display = view_pen.src;
    const caption_ = capture.textContent;

    view_pen.setAttribute('src', pen_22.src);
    pen_22.setAttribute('src', display);
    capture.textContent = capture22.textContent;
    capture22.textContent = caption_;
    showMorePen.style.display = 'none';
})


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
    showMorePencil.style.bottom = '25%'
    showMorePencil.style.width = '300px'

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
