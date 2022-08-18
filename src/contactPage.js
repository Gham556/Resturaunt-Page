import babies from './babies-2028268.svg';
import babyGirl from './baby-146862.svg';

export function contactPageLoad() {
    const image = new Image();
    const profilPic = new Image();

    const content = document.querySelector('div')
    const switchContainer = document.querySelector('.switchContainer')
    const babyCard = document.createElement('div');
    const babycardText = document.createElement('div');

    const babyName = document.createElement('div');
    const babyDetails = document.createElement('div');

    const babyJob = document.createElement('div');
    const babyNum = document.createElement('div');
    const babyEmail = document.createElement('div');
    
    image.classList.add('logo');
    babyCard.classList.add('babyCard');
    babycardText.classList.add('babyCardText');
    babyName.classList.add('babyName');
    babyDetails.classList.add('babyDetails');

    image.src = babies;
    profilPic.src = babyGirl;

    babyName.textContent = 'BABY';
    babyJob.textContent = 'Chef';
    babyNum.textContent = '111-222-3333';
    babyEmail.textContent = 'whoGaveABabyAnEmail@email.com';


    switchContainer.appendChild(babyCard);
    
    babyCard.appendChild(profilPic);
    babyCard.appendChild(babycardText);

    babycardText.appendChild(babyName);
    babycardText.appendChild(babyDetails);

    babyDetails.appendChild(babyJob);
    babyDetails.appendChild(babyNum);
    babyDetails.appendChild(babyEmail);
}