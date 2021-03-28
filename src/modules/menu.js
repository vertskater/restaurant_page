import * as helper from './functions';
import {htmlTagsMenu, htmlTagsFooter, classesMenu, htmlMenuContent} from './content';

let htmlItemsMenu = helper.createHtml(htmlTagsMenu);
let htmlItemsFooter = helper.createHtml(htmlTagsFooter);

let numberingsCreateTags = [
    [2,3,4,5,6,7],
    [1,2,3],
    [14,15,16,17,18,19],
    [8,9,10,11,12,13]
]
let numberingsAddClasses = [
    [2,3,4,5,6,7]
]
export default function menuPage(){
    const content = document.querySelector('#content');
    const start1 = document.createElement('div');
    start1.id = 'content2';
    start1.classList.add('tabcontent')
    content.appendChild(start1);
    //Append HTML Tags
    start1.appendChild(htmlItemsMenu[0]);
    start1.appendChild(htmlItemsMenu[1]);
    htmlItemsMenu[1].classList.add('dishes-container')
    helper.appendItems(numberingsCreateTags[0], htmlItemsMenu[1], htmlItemsMenu);
    //Add img Tag and div Tag into dishes-item
    for(let i = 2; i<8;i++){
        htmlItemsMenu[i].appendChild(htmlItemsMenu[numberingsCreateTags[2][i-2]]);
        htmlItemsMenu[i].appendChild(htmlItemsMenu[numberingsCreateTags[3][i-2]]);
    }
    //Fill Tags with content
    htmlItemsMenu[0].textContent = htmlMenuContent[0];
    helper.fillContent(numberingsCreateTags[3], htmlMenuContent.slice(1), htmlItemsMenu);

    //Add Classes
    htmlItemsMenu[0].classList.add('menuHeading');
    helper.addClasses(numberingsAddClasses[0], htmlItemsMenu, classesMenu);

    //Add picture source
    htmlItemsMenu[14].src = 'https://github.com/vertskater/restaurant_page/blob/next/dist/img/clyde-gravenberch-mmHGXwhB7cE-unsplash.jpg?raw=true';
    htmlItemsMenu[15].src = 'https://github.com/vertskater/restaurant_page/blob/next/dist/img/alexandra-andersson-XNM9O4Kfy2o-unsplash.jpg?raw=true';
    htmlItemsMenu[16].src = 'https://github.com/vertskater/restaurant_page/blob/next/dist/img/amirali-mirhashemian-k0M7DdIjQIU-unsplash.jpg?raw=true';
    htmlItemsMenu[17].src = 'https://github.com/vertskater/restaurant_page/blob/next/dist/img/ryan-concepcion-50KffXbjIOg-unsplash.jpg?raw=true';
    htmlItemsMenu[18].src = 'https://github.com/vertskater/restaurant_page/blob/next/dist/img/sam-moqadam-mxKAKIG8MZA-unsplash.jpg?raw=true';
    htmlItemsMenu[19].src = 'https://github.com/vertskater/restaurant_page/blob/next/dist/img/sk-uVPV_nV17Tw-unsplash.jpg?raw=true';
    //Create Footer
    const svg = helper.createFooterWave("M0,96L48,106.7C96,117,192,139,288,128C384,117,480,75,576,64C672,53,768,75,864,117.3C960,160,1056,224,1152,218.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z");
    start1.appendChild(htmlItemsFooter[0]);
    helper.appendItems(numberingsCreateTags[1], htmlItemsFooter[0], htmlItemsFooter);
    htmlItemsFooter[0].appendChild(svg);
    htmlItemsFooter[1].className = 'fab fa-facebook-f';
    htmlItemsFooter[2].className = 'fab fa-twitter';
    htmlItemsFooter[3].className = 'fab fa-instagram';
}