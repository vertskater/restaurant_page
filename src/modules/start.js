import {createHtml} from './createhtml';
let htmlTags = [
    'header',
    'h1',
    'span',
    'span'
]
let htmlItemsHeader = createHtml(htmlTags);

export default function startPage(){
    const content = document.querySelector('#content');
    htmlItemsHeader[1].textContent = "Welcome to Pachamama";
    htmlItemsHeader[2].textContent = "Best Restaurant in Town";
    htmlItemsHeader[3].textContent = 'Pachamama';
    htmlItemsHeader[3].classList.add('logo');
    content.appendChild(htmlItems[0]);
    for(let i = 1; i<htmlItems.length;i++){
        htmlItemsHeader[0].appendChild(htmlItemsHeader[i]);
    }
}

