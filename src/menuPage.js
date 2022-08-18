import babies from './babies-2028268.svg';


export const loadMenu = () => {
    const image = new Image();
   
    image.src = babies

    const content = document.querySelector('div')
  

    image.classList.add('logo');

    content.appendChild(contactTab);

}