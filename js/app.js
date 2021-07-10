//Variables
const menuMobile = document.querySelector('.lista-de-secciones');
const burger = document.querySelector('.burger');
const equis = document.querySelector('.sub-nav__equis');
const headerNav = document.querySelector('.header__nav');
const ulNav = document.querySelector('.header__info');
const tBody = document.querySelector('.menu__list-menu');
const navbar = [
    {
        name : "About Us",
        section : ['historia', 'marca', 'equipo'],
        id : "about-us"
    }, 
    {
        name: "Services",
        section : ['qwords', 'qcode', 'qdesign'],
        id : "services"
    }, 
    {
        name : "References",
        id: "contact"
    }
];


//EventListener
cargarEventListener();

function cargarEventListener(){

    document.addEventListener('DOMContentLoaded', revisarDimensiones);
    window.addEventListener('resize', ajustarSitio);
    burger.addEventListener('click', abrirLista);
    equis.addEventListener('click', cerrarLista);
    tBody.addEventListener('click', cerrarLista);
}

//Funciones

function revisarDimensiones(){

    let anchoBody = document.body.clientWidth; 

    if(anchoBody < 600) {

        if(!burger.childElementCount)
        {
            const span = document.createElement('span');
            span.classList.add('burger-icon');

            burger.appendChild(span);
        }
    }
    
    if(anchoBody >= 600) {
        if(!ulNav.childElementCount)
        {
            console.log('bien');
            navbar.forEach(function(item) {
                const li = document.createElement('li');
                li.innerHTML = `
                    <a href="#${item.id}">${item.name} <span></span></a>
                `;

                ulNav.appendChild(li);
            });
        } 

    }

}

function ajustarSitio() {

    let anchoBody = document.body.clientWidth; 

    if(anchoBody < 600) {

        if(!burger.firstChild)
        {
            const span = document.createElement('span');
            span.classList.add('burger-icon');

            burger.appendChild(span);
        }

        if(ulNav.firstChild)
        {
            while(ulNav.firstChild)
            {
                ulNav.removeChild(ulNav.firstChild);
            }
        }
    }
    
    if(anchoBody >= 600) {
        
        if(burger.firstChild)
        {
            while(burger.firstChild)
            {
                burger.removeChild(burger.firstChild);
            }
        }

        if(!ulNav.firstChild)
        {
            navbar.forEach(function(item) {
                const li = document.createElement('li');
                li.innerHTML = `
                    <a href="#${item.id}">${item.name}<span></span></a>
                `;

                ulNav.appendChild(li);
            });
        } 

    }
}

function abrirLista(e)
{
    e.preventDefault();

    if(e.target.classList.contains('burger-icon'))
    {
        menuMobile.style.display = 'flex';
    }
}

function cerrarLista(e)
{
    e.preventDefault();

    if(e.target.classList.contains('sub-nav__equis')){
        menuMobile.style.display = 'none';
    }

    if(e.target.parentElement.parentElement.classList.contains('list-menu__header-menu')){
        menuMobile.style.display = 'none';
        window.location.href = e.target.getAttribute('href');
    }
}
