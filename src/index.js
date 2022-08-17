
import { pageLoad } from './page-load.js';

const content = document.querySelector('div')
const contactTab = document.createElement('button');
contactTab.addEventListener('click', switchTabs);
content.appendChild(contactTab);



document.addEventListener('DOMContentLoaded', import('./style.css'))

const image = document.querySelector('img')



function switchTabs() {
        content.innerHTML = '';
    };