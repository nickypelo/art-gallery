
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
    showMorePen.style.bottom = '25%';
    showMorePen.style.left = '10%';
    showMorePen.style.width = '80%'
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


document.addEventListener('click', () => {
    console.log('hey')
})