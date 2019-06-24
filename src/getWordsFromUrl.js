const responseElement = document.getElementById('word-cloud');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = getDataFromForm();

    getWordCount(data)
        .then(wordcount => {
            console.log(wordcount);
        })
        .catch(err => console.error(err))

});

function getDataFromForm() {
    const linksElement = document.getElementById('lenker');
    const rawData = linksElement.value.split(",");
    
    const data = {
        urls: rawData,
    };

    return data
}

async function getWordCount(data) {
    const url = '/api/count-words-on-pages';
    const init = {
        method: "POST",
        headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
    }

    const response = await fetch(url, init);
    const wordcount = await response.json();

    return wordcount
}