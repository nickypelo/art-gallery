console.log('legend');

// Pen
const view_pen = document.getElementById('view_pen');
const displayPen = 'http://127.0.0.1:5500/src/img/manta.jpg';

const pen_1 = document.getElementById('pen_1');
const pen_2 = document.getElementById('pen_2');
// const pen_3 = document.getElementById('pen_3').src;
// const pen_4 = document.getElementById('pen_4').src;
const penBtn = document.getElementById('penBtn');
const showMorePen = document.getElementById('more_pen');

//Pen event handlers
pen_1.addEventListener('click', () => {
    if(displayPen === view_pen.src){
        view_pen.setAttribute('src', pen_1.src);
        pen_1.setAttribute('src', displayPen);
    }
    else{
        pen_1.setAttribute('src', view_pen.src);
        view_pen.setAttribute('src', displayPen);
    }
})

pen_2.addEventListener('click', () => {
    if(displayPen === view_pen.src){
        view_pen.setAttribute('src', pen_2.src);
        pen_2.setAttribute('src', displayPen);
    }
    else{
        pen_2.setAttribute('src', view_pen.src);
        view_pen.setAttribute('src', displayPen);
    }
})

penBtn.addEventListener('click', () => {
    showMorePen.style.display = 'block';
    showMorePen.style.position = 'absolute';
    showMorePen.style.bottom = '25%'
    showMorePen.style.width = '300px'
})


// Pencil
const view_pencil = document.getElementById('view_pencil');
const displayPencil = 'http://127.0.0.1:5500/src/img/lwando.jpg';

const pencil_1 = document.getElementById('pencil_1');
const pencil_2 = document.getElementById('pencil_2');
const pencil_3 = document.getElementById('pencil_3');

const showMorePencil = document.getElementById('more_pencil');
const pencilBtn = document.getElementById('pencilBtn');

pencil_1.addEventListener('click', () => {
    if(displayPencil === view_pencil.src){
        view_pencil.setAttribute('src', pencil_1.src);
        pencil_1.setAttribute('src', displayPencil);
    }
    else{
        pencil_1.setAttribute('src', view_pencil.src);
        view_pencil.setAttribute('src', displayPencil);
    }

})

pencil_2.addEventListener('click', () => {
    if(displayPencil === view_pencil.src){
        view_pencil.setAttribute('src', pencil_2.src);
        pencil_2.setAttribute('src', displayPencil);
    }
    else{
        pencil_2.setAttribute('src', view_pencil.src);
        view_pencil.setAttribute('src', displayPencil);
    }

})

pencil_3.addEventListener('click', () => {
    if(displayPencil === view_pencil.src){
        view_pencil.setAttribute('src', pencil_3.src);
        pencil_3.setAttribute('src', displayPencil);
    }
    else{
        pencil_3.setAttribute('src', view_pencil.src);
        view_pencil.setAttribute('src', displayPencil);
    }

})

pencilBtn.addEventListener('click', () => {
    showMorePencil.style.display = 'block';
    showMorePencil.style.position = 'absolute';
    showMorePencil.style.bottom = '25%'
    showMorePencil.style.width = '300px'

})

