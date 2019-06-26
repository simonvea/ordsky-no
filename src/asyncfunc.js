export async function getCloud(data) {
    const url = '/api/create-cloud'
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