import babies from './babies-2028268.svg';

export const pageLoad = (() => {
    
    const content = document.querySelector('div')
    const heading = document.createElement('h1');
    const blurb = document.createElement('h2');
    
    const contactTab = document.createElement('button');
    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');

    const header = document.createElement('div');
    const logoHeader = document.createElement('div');
    const mainContainer = document.createElement('div');

    const image = new Image();
   
    image.src = babies

    mainContainer.classList.add('mainContainer');
    logoHeader.classList.add('logoHeader');
    image.classList.add('logo');
    
    header.classList.add('header');
    contactTab.classList.add('contactTab', 'tab');
    homeTab.classList.add('homeTab', 'tab');
    menuTab.classList.add('menuTab', 'tab');
   
    
    heading.textContent = "Babies Big Bites";
    blurb.textContent = "Come on down to Babies Big Bites! The best late-night eatery around!";
    
    content.appendChild(header);
    
    header.appendChild(contactTab);
    header.appendChild(homeTab);
    header.appendChild(menuTab);

    content.appendChild(mainContainer)
    mainContainer.appendChild(logoHeader)
    logoHeader.appendChild(image);
    logoHeader.appendChild(heading);
   
    content.appendChild(blurb);
    
    content.addEventListener('DOMContentLoaded', import('./style.css'));

    
   
})();

