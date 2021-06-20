//Variables
const burger = document.querySelector('.burger');
const ulNav = document.querySelector('.header__info');
let navbar = ['About Us', 'Services', 'References'];


//EventListener
cargarEventListener();

function cargarEventListener(){

    document.addEventListener('DOMContentLoaded', revisarDimensiones);
    window.addEventListener('resize', ajustarSitio);
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
                    <a href="#">${item} <span></span></a>
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
                    <a href="#">${item} <span></span></a>
                `;

                ulNav.appendChild(li);
            });
        } 

    }
}
