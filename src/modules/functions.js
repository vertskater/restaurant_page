
const createHtml = (htmlTags) => {
    let htmlItems = [];
    for (let item of htmlTags) {
        htmlItems.push(document.createElement(item))
    }
    return htmlItems;
}
const appendFillItems = (numberings, htmlItem, htmlItems) => {
    for(let i = 0; i < numberings.length;i++){
        htmlItem.appendChild(htmlItems[numberings[i]]);
    }
}
const fillContent = (numberings, contents, htmlItems) => {
    for(let i = 0; i<numberings.length;i++){
        htmlItems[numberings[i]].textContent = contents[i];
    }
}
const addClasses = (numberings, htmlItems, classes)=>{
    for(let i = 0;i<numberings.length;i++){
        htmlItems[numberings[i]].className = classes[i];
    }
}

export { createHtml, appendFillItems, fillContent, addClasses };