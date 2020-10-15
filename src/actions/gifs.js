export const setGifs = (payload) => ({
  type: "SET_GIFS",
  payload,
});
export const getGifs = () => ({
  type: "GET_GIFS",
});
export const getGifsSuccess = (payload) => ({
  type: "GET_GIFS_SUCCESS",
  payload,
});
export const getGifsError = (payload) => ({
  type: "GET_GIFS_ERROR",
  payload,
});