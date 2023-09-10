console.log('legend');

// Pen
const view_pen = document.getElementById('view_pen');

const pen_1 = document.getElementById('pen_1');
const pen_2 = document.getElementById('pen_2');
// const pen_3 = document.getElementById('pen_3').src;
// const pen_4 = document.getElementById('pen_4').src;
const penBtn = document.getElementById('penBtn');
const showMorePen = document.getElementById('more_pen');

//Pen event handlers
pen_1.addEventListener('click', () => {
    const display = view_pen.src;
    view_pen.setAttribute('src', pen_1.src);
    pen_1.setAttribute('src', display);

})

pen_2.addEventListener('click', () => {
    const display = view_pen.src;
    view_pen.setAttribute('src', pen_2.src);
    pen_2.setAttribute('src', display);

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

pen_11.addEventListener('click', () => {
    console.log('kota')
    const display = view_pen.src;
    view_pen.setAttribute('src', pen_11.src);
    pen_11.setAttribute('src', display);
    showMorePen.style.display = 'none';
})


pen_22.addEventListener('click', () => {
    console.log('kota')
    const display = view_pen.src;
    view_pen.setAttribute('src', pen_22.src);
    pen_22.setAttribute('src', display);
    showMorePen.style.display = 'none';
})


// Pencil
const view_pencil = document.getElementById('view_pencil');

const pencil_1 = document.getElementById('pencil_1');
const pencil_2 = document.getElementById('pencil_2');
const pencil_3 = document.getElementById('pencil_3');

const showMorePencil = document.getElementById('more_pencil');
const pencilBtn = document.getElementById('pencilBtn');

//Pencil Handlers
pencil_1.addEventListener('click', () => {
    const display = view_pencil.src;
    view_pencil.setAttribute('src', pencil_1.src);
    pencil_1.setAttribute('src', display);
})

pencil_2.addEventListener('click', () => {
    const display = view_pencil.src;
    view_pencil.setAttribute('src', pencil_2.src);
    pencil_2.setAttribute('src', display);
})

pencil_3.addEventListener('click', () => {
    const display = view_pencil.src;
    view_pencil.setAttribute('src', pencil_3.src);
    pencil_3.setAttribute('src', display);
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

pencil_11.addEventListener('click', () => {
    console.log('kota')
    const display = view_pencil.src;
    view_pencil.setAttribute('src', pencil_11.src);
    pencil_11.setAttribute('src', display);
    showMorePencil.style.display = 'none';
})

pencil_22.addEventListener('click', () => {
    console.log('kota')
    const display = view_pencil.src;
    view_pencil.setAttribute('src', pencil_22.src);
    pencil_22.setAttribute('src', display);
    showMorePencil.style.display = 'none';
})
