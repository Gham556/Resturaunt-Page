import babies from './babies-2028268.svg';


export const loadMenu = () => {
    const image = new Image();
   
    const content = document.querySelector('div')
    const switchContainer = document.querySelector('.switchContainer')
    const babyCard = document.createElement('div');

    image.classList.add('logo');
    babyCard.classList.add('babyCard');

    image.src = babies

    switchContainer.appendChild(babyCard)
}