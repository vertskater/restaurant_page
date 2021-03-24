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
    //Append Content with html tags
    //Header
    content.appendChild(htmlItemsHeader[0]);
    helper.appendItems(numberingsCreateTags[0], htmlItemsHeader[0], htmlItemsHeader);
    //Create Teaser-Tags
    content.appendChild(htmlItemsTeaser[0]);
    htmlItemsTeaser[0].appendChild(htmlItemsTeaser[1]);
    helper.appendItems(numberingsCreateTags[2], htmlItemsTeaser[1], htmlItemsTeaser);
    helper.appendItems(numberingsCreateTags[1], htmlItemsTeaser[3], htmlItemsTeaser);
    helper.appendItems(numberingsCreateTags[3], htmlItemsTeaser[8], htmlItemsTeaser);
    htmlItemsTeaser[5].appendChild(htmlItemsTeaser[6]);
    htmlItemsTeaser[10].appendChild(htmlItemsTeaser[11]);
    //Add Footer-Tags
    //Add Footer SVG Wave
    const svg = helper.createFooterWave();
    content.appendChild(htmlItemsFooter[0]);
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

