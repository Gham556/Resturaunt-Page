
import { pageLoad } from './page-load.js';
import { loadMenu } from './menuPage.js';
import { contactPageLoad } from './contactPage.js';
import { homePageLoad } from './homePageLoad.js';

const switchContainer = document.querySelector('.switchContainer');
const buttons = document.querySelectorAll('button');


for (let i of buttons) {
i.addEventListener('click', function() {
    switchContainer.innerHTML = '';
    
    const temp = this.classList.value
        if (temp === 'contactTab') {
            contactPageLoad();
        }

        else if (temp === 'homeTab') {
            homePageLoad();
        }

        else if (temp === 'menuTab') {
            loadMenu();
        }
})
};


content.addEventListener('DOMContentLoaded', import('./style.css'));

