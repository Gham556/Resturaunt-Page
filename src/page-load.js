

export const pageLoad = (() => {
    const content = document.querySelector('div')
    const heading = document.createElement('h1');
    const blurb = document.createElement('h2');
    const image = document.createElement('img');
 

    image.src = ('./babies-2028268.svg')
    
   
    heading.textContent = "Babies Big Bites";
    blurb.textContent = "Come on down to Babies Big Bites! The best late-night eatery around!";
    
    content.appendChild(image);
    content.appendChild(heading);
    content.appendChild(blurb);
    
    image.classList.add('logo');
    content.setAttribute('id', 'content')
    
   
})();

