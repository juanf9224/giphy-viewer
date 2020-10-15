const url = 'http://api.giphy.com/v1/gifs/search';

const fetchApi = (url, opts) => {
  return fetch(url, opts);
}

export const searchGifs = async (searchTerm) => {
  const result = await fetchApi(
    `${url}?q=${searchTerm}&limit=20&api_key=S73QCJIaQC5IBjhEEhu29ZDRaErRpnT3`,
    {
      method: 'GET',
    }    
  );

  const resWrapper = await result.json();

  if (result.status > 400) {   
    throw new Error(resWrapper);
  } else {
    return resWrapper.data;
  }
};