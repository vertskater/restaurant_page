
const createHtml = (htmlTags) => {
    let htmlItems = [];
    for (let item of htmlTags) {
        htmlItems.push(document.createElement(item))
    }
    return htmlItems;
}

export { createHtml };