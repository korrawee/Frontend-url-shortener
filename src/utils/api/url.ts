interface craeteUrlRes {
    shortUrl: string;
}


export async function createUrl(url: string): Promise<string> {
    const res: Response = await fetch('http://localhost/', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({originalUrl: url})
    });
    const content: craeteUrlRes = await res.json()
    return content.shortUrl;
}