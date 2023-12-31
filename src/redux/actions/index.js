export const GET_BOOKS = "GET_BOOKS";
export const SET_CLICKED_BOOK = "SET_CLICKED_BOOK";
const url = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const getBooks = () => {
  return async (dispatch) => {
    dispatch({ type: GET_BOOKS });
    const query = "fiction";
    const maxResults = 40;

    try {
      const response = await fetch(
        `${url}?q=${query}&maxResults=${maxResults}&key=${apiKey}`
      );
      const data = await response.json();
      //console.log("data", data);

      dispatch({
        type: GET_BOOKS,
        payload: data.items,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getBookById = (bookId) => {
  return async (dispatch) => {
    dispatch({ type: SET_CLICKED_BOOK });

    try {
      const response = await fetch(`${url}/${bookId}?key=${apiKey}`);
      const data = await response.json();
      //console.log("Clicked:book", data);

      dispatch({
        type: SET_CLICKED_BOOK,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
