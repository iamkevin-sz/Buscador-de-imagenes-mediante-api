export const getGifs = async (category) => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=cgdp6rg9dpeG9QZr0J8LCMXeWFFT0iUr`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((imagenes) => {
      return {
        id: imagenes.id,
        title: imagenes.title,
        url: imagenes.images.downsized_medium.url,
      };
    });
    return gifs;
    // setImages(() => gifs);
  };