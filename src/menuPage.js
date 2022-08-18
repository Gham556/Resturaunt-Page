import babies from './babies-2028268.svg';


export const loadMenu = () => {
    const image = new Image();
   
    image.src = babies

    const content = document.querySelector('div')
    const contactTab = document.createElement('button');
    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');

    image.classList.add('logo');

    content.appendChild(contactTab);

}