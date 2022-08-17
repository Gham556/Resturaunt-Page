import { pageLoad } from './page-load.js';
import './style.css';

const content = document.querySelector('div')
const contactTab = document.createElement('button','.contact');
contactTab.addEventListener('click', switchTabs);
content.appendChild(contactTab);


pageLoad();

function switchTabs() {
        content.innerHTML = '';
    };