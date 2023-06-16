import { GET_BOOKS, SET_CLICKED_BOOK, GET_CLICKED_BOOK_ID } from "../actions";

const initialState = {
  books: [],
  clickedBookId: null,
  clickedBook: null,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case GET_CLICKED_BOOK_ID:
      return {
        ...state,
        clickedBookId: action.payload,
      };
    case SET_CLICKED_BOOK:
      return {
        ...state,
        clickedBook: action.payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
