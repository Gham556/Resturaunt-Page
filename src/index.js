
import { pageLoad } from './page-load.js';
;


const content = document.querySelector('div');
const contactTab = document.querySelector('.contactTab');

contactTab.addEventListener('click', switchTabs)





function switchTabs() {
        content.innerHTML = '';
    };