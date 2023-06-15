export const GET_BOOKS = "GET_BOOKS";
export const SET_CLICKED_BOOK = "SET_CLICKED_BOOK";

// Redux action to fetch books from an API
export const getBooks = () => {
  return async (dispatch) => {
    dispatch({ type: GET_BOOKS });
    const url = "https://books39.p.rapidapi.com/CZFA4F/books";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6b60bcd9f5mshcf4124a4a148f4fp15648cjsnb23881f1a0a6",
        "X-RapidAPI-Host": "books39.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log("data", data);

      dispatch({
        type: GET_BOOKS,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
