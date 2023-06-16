export const GET_BOOKS = "GET_BOOKS";
export const GET_CLICKED_BOOK_ID = "GET_CLICKED_BOOK_ID";
export const SET_CLICKED_BOOK = "SET_CLICKED_BOOK";
const url = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

// Redux action to fetch books from the Google Books API
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
      console.log("data", data);

      dispatch({
        type: GET_BOOKS,
        payload: data.items,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const saveBookId = (bookId) => {
  return async (dispatch) => {
    dispatch({ type: SET_CLICKED_BOOK });

    try {
      dispatch({
        type: GET_CLICKED_BOOK_ID,
        payload: bookId,
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
      console.log("Clicked:book", data);

      dispatch({
        type: SET_CLICKED_BOOK,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
