'use strict'
import './main.min.css';
import startPage from './modules/start';
import menuPage from './modules/menu';
import contactPage from './modules/contact';
import * as helper from './modules/functions';
import { htmlTagsTabs, htmlTabsContent } from './modules/content';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/brands';
//import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/solid';

//Create HTML-Tags
const content = document.querySelector('#content');
let htmlItemsTabs = helper.createHtml(htmlTagsTabs);

content.appendChild(htmlItemsTabs[0]);
htmlItemsTabs[0].appendChild(htmlItemsTabs[1]);
helper.appendItems([2, 3, 4], htmlItemsTabs[1], htmlItemsTabs);
//Fill Tags with content
helper.fillContent([2, 3, 4], htmlTabsContent, htmlItemsTabs);
//Ad Classes and IDs
for (let i = 2; i < htmlItemsTabs.length; i++) {
    htmlItemsTabs[i].id = 'tab' + (i-1)
    htmlItemsTabs[i].className = 'tabmenu';
}

startPage();
menuPage();
contactPage();
const tabcontents = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabmenu');
helper.tabLogic(tabcontents, tabs);

