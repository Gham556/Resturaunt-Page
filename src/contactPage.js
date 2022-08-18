import babies from './babies-2028268.svg';
import babyGirl from './baby-146862.svg';

export function contactPageLoad() {
    const image = new Image();
    const profilPic = new Image();

    const content = document.querySelector('div')
    const switchContainer = document.querySelector('.switchContainer')
    const babyCard = document.createElement('div');

    image.classList.add('logo');
    babyCard.classList.add('babyCard');

    image.src = babies;
    profilPic.src = babyGirl;

    switchContainer.appendChild(babyCard)
    babyCard.appendChild(profilPic)
}