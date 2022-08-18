
import { pageLoad } from './page-load.js';
import { loadMenu } from './menuPage.js';


const content = document.querySelector('div');
const contactTab = document.querySelector('.contactTab');
const buttons = document.querySelectorAll('button');
console.log(buttons)

for (let i of buttons) {
i.addEventListener('click', switchTabs)
};




function switchTabs() {
        content.innerHTML = '';

        if (this.classlist = 'menuTab') {
            loadMenu();
        }
    };