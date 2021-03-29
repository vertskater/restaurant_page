
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
const createFooterWave = (coordinates) => {
    const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const newpath = document.createElementNS('http://www.w3.org/2000/svg', "path");
    svg1.setAttribute("id", "svg");
    svg1.setAttribute("xmlns", "http://www.w3.org/2000/svg;");
    svg1.setAttribute("viewBox", "0 0 1440 320");
    newpath.setAttributeNS(null, "d", coordinates);
    newpath.setAttribute("fill-opacity", 1);
    newpath.setAttribute("fill", "#fd7f50");
    // newpath.setAttribute("stroke", "black");
    // newpath.setAttribute("stroke-width", 3);
    svg1.appendChild(newpath);
    return svg1
}
const tabLogic = (tabcontent, tabmenu) => {
    const tabcontents = tabcontent;
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = 'none';
    }
    tabcontents[0].style.display = 'block';
    const tabs = tabmenu;
    const nav = document.querySelector('nav');
    console.log(nav);
    for (let tab of tabs) {
        tab.addEventListener('click', () => {
            for (let i = 0; i < tabcontents.length; i++) {
                tabcontents[i].style.display = 'none';
            }
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].className = 'classmenu';
            }
            if (tab.id === 'tab1') {
                tabcontents[0].style.display = 'block';
                nav.style.backgroundColor = '#ff7f50';
                tab.className = 'classmenu active';
            } else if (tab.id === 'tab2') {
                tabcontents[1].style.display = 'block';
                nav.style.backgroundColor = '#008080';
                tab.className = 'classmenu active';
            } else if (tab.id === 'tab3') {
                tabcontents[2].style.display = 'block';
                nav.style.backgroundColor = '#4a83b6'
                tab.className = 'classmenu active';
            }
        })
    }
}

export { createHtml, appendItems, fillContent, addClasses, createFooterWave, tabLogic };