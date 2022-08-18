import babies from './babies-2028268.svg';


export const loadMenu = () => {
    const image = new Image();
   
    const content = document.querySelector('div')
    const switchContainer = document.querySelector('.switchContainer')
    const menuContainer = document.createElement('div');

    const menuTitle = document.createElement('h1');
    const menuItemsContainer = document.createElement('div');

    const itemOne = document.createElement('h2');
    const itemTwo = document.createElement('h2');
    const itemThree = document.createElement('h2')
    const itemFour = document.createElement('h2');

    image.classList.add('logo');
  
    menuTitle.textContent = "MENU";

    image.src = babies

    switchContainer.appendChild(menuContainer);
    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(menuItemsContainer);

    menuItemsContainer.appendChild(itemOne);
    menuItemsContainer.append(itemTwo, itemThree, itemFour);

}