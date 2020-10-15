export const defaultGifsState = {
  items: [],
  error: ''
};

export default (state = defaultGifsState, action) => {
  switch (action.type) {
    case "SET_GIFS":
      return {
        items: action.payload,
      };
    case "GET_GIFS":
      return {
        ...state
      };
    case "GET_GIFS_SUCCESS":
      return {
        ...state,
        items: action.payload,
        error: "",
      };
    case "GET_GIFS_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}