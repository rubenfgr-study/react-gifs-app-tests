export const getGifs = async (category) => {
    const uri = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=3&api_key=3VsaeQ2V9TX9hwZftQRAaG1ldcWKJXhm`;
    const resp = await fetch(uri);
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}