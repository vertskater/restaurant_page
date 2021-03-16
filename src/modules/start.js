export default function startPage(){
    const content = document.querySelector('#content');
    const header = document.createElement('header');
    const htmlHeader1 = document.createElement('h1');
    const htmlSpan = document.createElement('span');
    htmlHeader1.textContent = "Welcome to Pachamama";
    htmlSpan.textContent = "Best Restaurant in Town";
    content.appendChild(header);
    header.appendChild(htmlHeader1);
    header.appendChild(htmlSpan);
}

