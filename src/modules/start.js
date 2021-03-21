import {createHtml, appendFillItems, fillContent, addClasses} from './functions';
import {htmlTagsHeader, htmlTagsTeaser, htmlHeaderContent, htmlTeaserContent, classesTeaser} from './content';
//load HTML-Tags
let htmlItemsHeader = createHtml(htmlTagsHeader);
let htmlItemsTeaser = createHtml(htmlTagsTeaser);
let numberingsCreateTags = [
    [1,2,3,4],
    [4,5,7],
    [2,3,8],
    [9,10,12]
]
let numberingsFillContent = [
    [1,2,3],
    [2,4,7,9,12]
]
let numberingsAddClasses = [
    [1,3,5]
]
export default function startPage(){
    const content = document.querySelector('#content');
    //Append Content with html tags
    //Header
    content.appendChild(htmlItemsHeader[0]);
    appendFillItems(numberingsCreateTags[0], htmlItemsHeader[0], htmlItemsHeader);
    //Create Teaser-Tags
    content.appendChild(htmlItemsTeaser[0]);
    htmlItemsTeaser[0].appendChild(htmlItemsTeaser[1]);
    appendFillItems(numberingsCreateTags[2], htmlItemsTeaser[1], htmlItemsTeaser);
    appendFillItems(numberingsCreateTags[1], htmlItemsTeaser[3], htmlItemsTeaser);
    appendFillItems(numberingsCreateTags[3], htmlItemsTeaser[8], htmlItemsTeaser);
    htmlItemsTeaser[5].appendChild(htmlItemsTeaser[6]);
    htmlItemsTeaser[10].appendChild(htmlItemsTeaser[11]);

    //Fill html tags with content
    //Fill Header Content
    fillContent(numberingsFillContent[0], htmlHeaderContent, htmlItemsHeader);
    //Fill Teaser Content
    fillContent(numberingsFillContent[1], htmlTeaserContent, htmlItemsTeaser);
    //Add Classes
    //Header Classes
    htmlItemsHeader[4].className = 'fas fa-chevron-down';
    htmlItemsHeader[3].classList.add('logo');
    //Teaser Classes
    addClasses(numberingsAddClasses[0], htmlItemsTeaser, classesTeaser);
}

