import { GET_BOOKS, SET_CLICKED_BOOK } from "../actions";

const initialState = {
  books: [],
  clickedBook: null,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: [...state.books, action.payload],
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
