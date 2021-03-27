import * as helper from './functions';
import { htmlTagsHeader, htmlTagsTeaser, htmlTagsFooter, htmlHeaderContent, htmlTeaserContent, classesTeaser } from './content';
//load HTML-Tags
let htmlItemsHeader = helper.createHtml(htmlTagsHeader);
let htmlItemsTeaser = helper.createHtml(htmlTagsTeaser);
let htmlItemsFooter = helper.createHtml(htmlTagsFooter);
let numberingsCreateTags = [
    [1, 2, 3, 4],
    [4, 5, 7],
    [2, 3, 8],
    [9, 10, 12],
    [1, 2, 3]
]
let numberingsFillContent = [
    [1, 2, 3],
    [2, 4, 7, 9, 12]
]
let numberingsAddClasses = [
    [1, 3, 5, 8, 10]
]
export default function startPage() {
    const content = document.querySelector('#content');
    const start1 = document.createElement('div');
    start1.id = 'content1';
    start1.classList.add('tabcontent')
    content.appendChild(start1);
    //Append Content with html tags
    //Header
    start1.appendChild(htmlItemsHeader[0]);
    helper.appendItems(numberingsCreateTags[0], htmlItemsHeader[0], htmlItemsHeader);
    //Append Teaser-Tags
    start1.appendChild(htmlItemsTeaser[0]);
    htmlItemsTeaser[0].appendChild(htmlItemsTeaser[1]);
    helper.appendItems(numberingsCreateTags[2], htmlItemsTeaser[1], htmlItemsTeaser);
    helper.appendItems(numberingsCreateTags[1], htmlItemsTeaser[3], htmlItemsTeaser);
    helper.appendItems(numberingsCreateTags[3], htmlItemsTeaser[8], htmlItemsTeaser);
    htmlItemsTeaser[5].appendChild(htmlItemsTeaser[6]);
    htmlItemsTeaser[10].appendChild(htmlItemsTeaser[11]);
    //Add Footer-Tags
    //Add Footer SVG Wave
    const svg = helper.createFooterWave("M0,96L80,112C160,128,320,160,480,186.7C640,213,800,235,960,213.3C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z");
    start1.appendChild(htmlItemsFooter[0]);
    helper.appendItems(numberingsCreateTags[4], htmlItemsFooter[0], htmlItemsFooter);
    htmlItemsFooter[0].appendChild(svg);
    //Fill html tags with content
    //Fill Header Content
    helper.fillContent(numberingsFillContent[0], htmlHeaderContent, htmlItemsHeader);
    //Fill Teaser Content
    helper.fillContent(numberingsFillContent[1], htmlTeaserContent, htmlItemsTeaser);
    //Add Classes
    //Header Classes
    htmlItemsHeader[4].className = 'fas fa-chevron-down';
    htmlItemsHeader[3].classList.add('logo');
    //Teaser Classes
    helper.addClasses(numberingsAddClasses[0], htmlItemsTeaser, classesTeaser);
    //Footer Classes
    htmlItemsFooter[1].className = 'fab fa-facebook-f';
    htmlItemsFooter[2].className = 'fab fa-twitter';
    htmlItemsFooter[3].className = 'fab fa-instagram';
    //ADD scr Attribut and Picture url
    htmlItemsTeaser[6].src = 'https://github.com/vertskater/restaurant_page/blob/next/dist/img/chef.jpg?raw=true';
    htmlItemsTeaser[11].src = 'https://github.com/vertskater/restaurant_page/blob/next/dist/img/farmer.jpg?raw=true';
}

