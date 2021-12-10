import {
  HIDE_MESSAGE,
  INIT_URL,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILED,
  SIGNOUT_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILED
} from "constants/ActionTypes";

const INIT_STATE = {
  loader: false,
  signupResult: false,
  messageText: '',
  descriptionText: '',
  notificationType: '',
  showMessage: false,
  initURL: '',
  authUser: JSON.parse(localStorage.getItem('user')),
};


export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIGNUP_USER_SUCCESS: {
      return {
        ...state,
        messageText: action.payload.message,
        descriptionText: action.payload.description,
        notificationType: 'success',
        showMessage: true,
        signupResult: true,
      }
    }
    case SIGNUP_USER_FAILED: {
      return {
        ...state,
        messageText: action.payload.message,
        descriptionText: action.payload.description,
        notificationType: 'error',
        showMessage: true,
        signupResult: false,
      }
    }
    case SIGNIN_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      }
    }
    case SIGNIN_USER_FAILED: {
      return {
        ...state,
        loader: false,
        messageText: action.payload.message,
        descriptionText: action.payload.description,
        notificationType: 'error',
        showMessage: true,
      }
    }
    case INIT_URL: {
      return {
        ...state,
        initURL: action.payload
      }
    }
    case SIGNOUT_USER_SUCCESS: {
      return {
        ...state,
        authUser: null,
        initURL: '/',
      }
    }

    case SHOW_MESSAGE: {
      return {
        ...state,
        showMessage: true
      }
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        showMessage: false,
        messageText: '',
        descriptionText: '',
        notificationType: ''
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
    default:
      return state;
  }
}
