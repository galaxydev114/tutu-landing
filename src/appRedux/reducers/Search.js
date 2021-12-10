import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PRODUCTS_SUCCESS,
  SET_CURRENT_PAGE_NUMBER,
  SET_TOTAL_PAGE_AMOUNT,
  SET_SEARCH_TEXT,
  SET_CATEGORY_ID,
} from "constants/ActionTypes"

const INIT_STATE = {
  loader: false,
  products: [],
  totalPagesAmt: null,
  curPageNum: null,
  categories: [],
  searchText: null,
  categoryId: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.payload
      }
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload
      }
    }
    case SET_CURRENT_PAGE_NUMBER: {
      return {
        ...state,
        curPageNum: action.payload
      }
    }
    case SET_TOTAL_PAGE_AMOUNT: {
      return {
        ...state,
        totalPagesAmt: action.payload
      }
    }
    case SET_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.payload
      }
    }
    case SET_CATEGORY_ID: {
      return {
        ...state,
        categoryId: action.payload
      }
    }
    default:
      return state;
  }
}