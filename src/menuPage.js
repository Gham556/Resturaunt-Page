import babies from './babies-2028268.svg';


export const loadMenu = () => {
    const image = new Image();
   
    const content = document.querySelector('div')
    const switchContainer = document.querySelector('.switchContainer')
    const menuContainer = document.createElement('div');

    const menuTitle = document.createElement('h1');
    const menuItemsContainer = document.createElement('div');

    const itemOne = document.createElement('div');
    const itemTwo = document.createElement('div');
    const itemThree = document.createElement('div')
    const itemFour = document.createElement('div');

    const itemOneName = document.createElement('p');
    const itemOnePrice = document.createElement('p');

    const itemTwoName = document.createElement('p');
    const itemTwoPrice = document.createElement('p');

    const itemThreeName = document.createElement('p');
    const itemThreePrice = document.createElement('p');

    const itemFourName = document.createElement('p');
    const itemFourPrice = document.createElement('p');

    image.classList.add('logo');
    menuItemsContainer.classList.add('menuItemsContainer');
    menuContainer.classList.add('menuContainer');
  
    menuTitle.textContent = "MENU";

    itemOneName.textContent = "Strawberry Gushers";
    itemOnePrice.textContent = '4.99';

    itemTwoName.textContent = 'Cinnamon Toast Crunchies';
    itemTwoPrice.textContent = '6.99';

    itemThreeName.textContent = 'Eggos /w extra Syrup & Butter';
    itemThreePrice.textContent = '10.99';

    itemFourName.textContent = 'Spring Rolls';
    itemFourPrice.textContent = '11.99';

    image.src = babies

    switchContainer.appendChild(menuContainer);
    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(menuItemsContainer);

    menuItemsContainer.appendChild(itemOne);
    menuItemsContainer.appendChild(itemTwo);
    menuItemsContainer.appendChild(itemThree);
    menuItemsContainer.appendChild(itemFour);

    itemOne.appendChild(itemOneName);
    itemOne.appendChild(itemOnePrice);

    itemTwo.appendChild(itemTwoName);
    itemTwo.appendChild(itemTwoPrice);

    itemThree.appendChild(itemThreeName);
    itemThree.appendChild(itemThreePrice);

    itemFour.appendChild(itemFourName);
    itemFour.appendChild(itemFourPrice);
}