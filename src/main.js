import {select} from 'd3-selection';
const form = document.querySelector('form');
const textArea = document.getElementById('words');
const wordCloud = document.getElementById('word-cloud');
const downloadElement = document.getElementById('download');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const words = countWords(textArea.value);
    
    getCloud({words})
        .then(cloud => {
            appendCloudToElement(cloud, wordCloud);
            const svg = wordCloud.querySelector('svg');
            const dataURL = svgDataURL(svg);
            appendDowloadButtonToElement(dataURL, downloadElement)
        })
        .catch(err => console.error(err));
    form.reset();
})

function countWords(string) {
    const regExp = /\S+[^\W]/gi;
    const words = string.toLowerCase().match(regExp);
    const count = {};

    if(isIterable(words)) { //checks if there are no words and throws an error if there are no words
        for (let word of words) {
            if(!count[word]) {count[word] = 1}
            else {count[word]++}
        }
    } else {throw new Error}
    
    return count
}

function isIterable(obj) {

    if (obj === null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}

async function getCloud(data) {
    const url = '/api/create-cloud';
    const init = {
        method: "POST",
        headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
    }

    const response = await fetch(url, init);
    const cloud = await response.json();

    return cloud
}

function appendCloudToElement(cloud, element) {

    //removes previous cloud
    if(element.firstChild) {element.removeChild(element.firstChild)}

    select(element).append("svg")
        .attr("width", 500) //layout.size()[0]
        .attr("height", 500) //layout.size()[1]
        .append("g")
        .attr("transform", "translate(" + 500 / 2 + "," + 500 / 2 + ")")
        .selectAll("text")
        .data(cloud)
        .enter().append("text")
        .style("font-size", (d) => d.size + "px")
        .style("font-family", "Impact")
        .style("fill", (d) => d.fill)
        .attr("text-anchor", "middle")
        .attr("transform", (d) => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
        .text((d) => d.text);
}

function appendDowloadButtonToElement(dataURL, element){
    const html = `<a href="${dataURL}" download="ordsky" class="btn btn-secondary" role="button" id="download-btn">Last ned som svg</a>`
    element.innerHTML = html
}

function svgDataURL(svg) {
    const svgAsXML = (new XMLSerializer).serializeToString(svg);
    return "data:image/svg+xml," + encodeURIComponent(svgAsXML);
}
