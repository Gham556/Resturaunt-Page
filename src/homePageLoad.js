import babies from './babies-2028268.svg';

export const homePageLoad = function () {
    const image = new Image();
   
    image.src = babies

    const content = document.querySelector('div')
    const heading = document.createElement('h1');
    const blurb = document.createElement('h2');

     //containers
     const header = document.createElement('div');
     const logoHeader = document.createElement('div');
     const mainContainer = document.createElement('div');
     const switchContainer = document.querySelector('.switchContainer')
 
     switchContainer.classList.add('switchContainer');
     mainContainer.classList.add('mainContainer');
     logoHeader.classList.add('logoHeader');
     image.classList.add('logo');
     
     heading.classList.add('title');

     heading.textContent = "Babies Big Bites";
     blurb.textContent = "Come on down to Babies Big Bites! The best late-night eatery around!";

     content.appendChild(switchContainer);
     switchContainer.appendChild(mainContainer);
     mainContainer.appendChild(logoHeader);
     logoHeader.appendChild(image);
     logoHeader.appendChild(heading);
    
     switchContainer.appendChild(blurb);
     
};