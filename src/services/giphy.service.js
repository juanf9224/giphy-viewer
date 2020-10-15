const url = "api.giphy.com/v1/gifs/search";

const fetchApi = (url, opts) => {
  return fetch(url, opts);
}

export const searchGifs = async (searchTerm) => {
  const result = await fetchApi(url, {
    method: 'GET',
    api_key: 'S73QCJIaQC5IBjhEEhu29ZDRaErRpnT3',
    q: searchTerm
  });

  if (result.status > 400) {
    return console.error('Error fetching gifs');
  } else {
    return result.json();
  }
};