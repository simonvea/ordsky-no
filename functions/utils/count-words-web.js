const request = require('request-promise-native');
const HTMLParser = require('node-html-parser');
const countWords = require('./count-words')

async function countWordsOnPages(urls, htmlElement = 'body') {
    const pages = [];
    for (let url of urls) {
        const words = countWordsOnPage(url, htmlElement);
        pages.push(words);
    }

    const allWords = await Promise.all(pages);
    const combinedCount = combineResultsFromEachUrl(allWords)

    return combinedCount
}

async function countWordsOnPage(url, htmlElement = 'body') {
    const root = await getHTML(url);
    const mainInfo = root.querySelector(htmlElement);
    if(!mainInfo) {
        throw new Error("NO TEXT")
    }
    const text = mainInfo.rawText;
    const words = countWords(text);
    return words
}

async function getHTML(url) {
    const html = await request(url);
    const root = HTMLParser.parse(html);
    return root
}

function combineResultsFromEachUrl(pages) {
    const result = {};
    pages.forEach(page => {
        const words = Object.keys(page);
        for (const word of words) {
            if(!result[word]) {
                result[word] = page[word]
            } else {
                result[word] += page[word]
            }
        }
    })
    return result
}

module.exports = countWordsOnPages