//variables
const nav = document.querySelector('.header__nav');
let body = document.querySelector('body');
const burger = document.querySelector('.burger');
const headerInfo = document.querySelector('.header__info');

const info = ['About Us', 'Services', 'References'];

//listeners
cargarEventListener();

function cargarEventListener()
{
    window.addEventListener('resize', medirAnchoBody);
}

//functions

function medirAnchoBody() {

    let anchoBody = body.clientWidth;
    console.log(anchoBody);

    if(anchoBody < 600)
    {
        if(headerInfo)
        {
            while(headerInfo.firstChild)
            {
                headerInfo.remove(headerInfo.firstChild);
            }
        }

        if(!burger.firstChild)
        {
            const span = document.createElement('span');
            span.classList.add('burger-icon');
            burger.appendChild(div);
        }

    }

    if(anchoBody >= 600 && anchoBody < 800)
    {

        if(!headerInfo.firstChild)
        {
            info.forEach(function(item){
                const li = document.createElement('li');
                li.innerHTML = 
                `
                    <a href="#">${item} <span></span> </a>
                `;

                
            });
        }
    }

}