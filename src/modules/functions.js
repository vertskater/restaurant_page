
const createHtml = (htmlTags) => {
    let htmlItems = [];
    for (let item of htmlTags) {
        htmlItems.push(document.createElement(item))
    }
    return htmlItems;
}
const appendItems = (numberings, htmlItem, htmlItems) => {
    for(let i = 0; i < numberings.length;i++){
        htmlItem.appendChild(htmlItems[numberings[i]]);
    }
}
const fillContent = (numberings, contents, htmlItems) => {
    for(let i = 0; i<numberings.length;i++){
        htmlItems[numberings[i]].textContent = contents[i];
    }
}
const addClasses = (numberings, htmlItems, classes) => {
    for(let i = 0;i<numberings.length;i++){
        htmlItems[numberings[i]].className = classes[i];
    }
}
const createFooterWave = () => {
    const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const newpath = document.createElementNS('http://www.w3.org/2000/svg', "path");
    svg1.setAttribute("id", "svg");
    svg1.setAttribute("xmlns", "http://www.w3.org/2000/svg;");
    svg1.setAttribute("viewBox", "0 0 1440 320");
    newpath.setAttributeNS(null, "d", "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z");
    newpath.setAttribute("fill-opacity", 1);
    newpath.setAttribute("fill", "#fd7f50");
    // newpath.setAttribute("stroke", "black");
    // newpath.setAttribute("stroke-width", 3);
    svg1.appendChild(newpath);
    return svg1
}

export { createHtml, appendItems, fillContent, addClasses, createFooterWave };