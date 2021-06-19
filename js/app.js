//variables
let body = document.querySelector('body');

//listeners
cargarEventListener();

function cargarEventListener()
{
    window.addEventListener('resize', medirAnchoBody);
}

//functions

function medirAnchoBody(e) {
    console.log(body.clientWidth);
}