import { getCloud } from './asyncfunc.js'
import * as dom from './domfunc.js'

const form = document.querySelector('form');
const textArea = document.getElementById('words');
const wordCloudParent = document.getElementById('word-cloud');
const downloadParent = document.getElementById('download');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const words = countWords(textArea.value);
    
    getCloud({words})
        .then(cloud => {
            dom.appendCloud(cloud, wordCloudParent);
            const svg = wordCloudParent.querySelector('svg');
            const dataURL = svgDataURL(svg);
            dom.appendDowloadButton(dataURL, downloadParent)
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

function svgDataURL(svg) {
    const svgAsXML = (new XMLSerializer).serializeToString(svg);
    return "data:image/svg+xml," + encodeURIComponent(svgAsXML);
}
