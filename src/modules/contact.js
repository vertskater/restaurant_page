import * as helper from './functions';
import {htmlTagsFooter, htmlTagsContact, htmlTagsHeader, htmlContactContent} from './content';

let htmlItemsFooter = helper.createHtml(htmlTagsFooter);
let htmlItemsHeader = helper.createHtml(htmlTagsHeader);
let htmlItemsContact = helper.createHtml(htmlTagsContact);

let numberingsCreateTags = [
    [1,2,3],
    [1,2,3,4],
    [1,2],
    [3,4,5,6]
]
let numberingsFillContent = [
    [1, 2, 3]
]

export default function contactPage() {  
    const content = document.querySelector('#content');
    const start1 = document.createElement('div');
    start1.id = 'content3';
    start1.classList.add('tabcontent')
    content.appendChild(start1);
    //Append HTML Tags
    start1.appendChild(htmlItemsHeader[0]);
    helper.appendItems(numberingsCreateTags[1], htmlItemsHeader[0], htmlItemsHeader);
    start1.appendChild(htmlItemsContact[0]);
    helper.appendItems(numberingsCreateTags[2], htmlItemsContact[0], htmlItemsContact);
    helper.appendItems(numberingsCreateTags[3], htmlItemsContact[2], htmlItemsContact);
    //Fill Tags with content
    helper.fillContent(numberingsFillContent[0], htmlContactContent, htmlItemsHeader);
    htmlItemsContact[1].textContent = htmlContactContent[3];
    console.log(htmlItemsContact[1]);
    htmlItemsContact[6].textContent = htmlContactContent[4];
    //Add Classes
    htmlItemsHeader[3].classList.add('logo');
    //Add attribute
    for(let i = 3; i<5;i++){
        htmlItemsContact[i].type = 'text'
    };
    htmlItemsContact[3].placeholder = 'Full Name';
    htmlItemsContact[4].placeholder = 'E-Mail Adress';
    //Crate Footer
    const svg = helper.createFooterWave("M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z");
    start1.appendChild(htmlItemsFooter[0]);
    helper.appendItems(numberingsCreateTags[0], htmlItemsFooter[0], htmlItemsFooter);
    htmlItemsFooter[0].appendChild(svg);
    htmlItemsFooter[1].className = 'fab fa-facebook-f';
    htmlItemsFooter[2].className = 'fab fa-twitter';
    htmlItemsFooter[3].className = 'fab fa-instagram';
}