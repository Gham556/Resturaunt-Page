
import { pageLoad } from './page-load.js';
import { loadMenu } from './menuPage.js';


const switchContainer = document.querySelector('.switchContainer');
const buttons = document.querySelectorAll('button');


for (let i of buttons) {
i.addEventListener('click', switchTabs)
};




function switchTabs() {
        switchContainer.innerHTML = '';

        if (this.classlist = 'menuTab') {
            loadMenu();
        }
    };