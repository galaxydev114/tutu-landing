import {SWITCH_LANGUAGE} from "constants/ActionTypes";

const initialSettings = {
  isDirectionRTL: false,
  locale: {
    languageId: 'portuguese',
    locale: 'pt',
    name: 'Português',
    icon: 'br'
  }
};

const settings = (state = initialSettings, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return {
        ...state,
        locale: action.payload,

      };
    default:
      return state;
  }
};

export default settings;
