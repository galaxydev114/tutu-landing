import {
	ON_SHOW_LOADER,
	ON_HIDE_LOADER,
	HIDE_MESSAGE,
	SHOW_MESSAGE,
	FETCH_ESTIMATES_DATA_START,
	FETCH_ESTIMATES_DATA_SUCCESS,
	ON_SUBMIT_ESTIMATE_REQUEST_SUCCESS,
	// ON_SUBMIT_ESTIMATE_REQUEST_FAILED,
  INIT_QUOTATION_REQIUEST_RESULT,
  SET_ESTIMATES_COUNT
} from "constants/ActionTypes";

const INIT_STATE = {
  loader: false,
  fetching: false,
  showMessage: false,
  messageText: '',
  showSuccessMessage:  false,
  showErrorMessage: false,
  estimateList: [],
  quotationRequestCode: '',
  quotationRequestResult: false,
  countEstimates: localStorage.getItem('estimateList') ? JSON.parse(localStorage.getItem('estimateList')).length : ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ON_SUBMIT_ESTIMATE_REQUEST_SUCCESS: {
      return {
        ...state,
        loader: false,
        quotationRequestResult: true,
        quotationRequestCode: action.payload,
      }
    }
    case FETCH_ESTIMATES_DATA_START: {
      return {
        ...state,
        fetching: true
      }
    }
    case INIT_QUOTATION_REQIUEST_RESULT: {
      return {
        ...state,
        quotationRequestResult: false,
        quotationRequestCode: '',
        estimateList: [],
        countEstimates: ''
      }
    }
    case FETCH_ESTIMATES_DATA_SUCCESS: {
      return {
        ...state,
        fetching: false,
        estimateList: action.payload
      }
    }
    case ON_SHOW_LOADER: {
      return {
        ...state,
        loader: true
      }
    }
    case ON_HIDE_LOADER: {
      return {
        ...state,
        loader: false
      }
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        messageText: '',
        showSuccessMessage: false,
        showErrorMessage: false,
        showMessage: false
      }
    }
    case SHOW_MESSAGE: {
      return {
        ...state,
        showMessage: true
      }
    }
    case SET_ESTIMATES_COUNT: {
      return {...state, countEstimates: action.payload}
    }
    default:
      return state;
  }
}