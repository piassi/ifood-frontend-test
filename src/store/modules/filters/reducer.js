import {
  SET_LOCALE_FILTER,
  SET_COUNTRY_FILTER,
  SET_TIMESTAMP_FILTER,
  SET_OFFSET_FILTER,
  SET_LIMIT_FILTER,
} from './actions';

const defaultState = {
  locale: 'pt_BR',
  country: 'BR',
  limit: 3,
  offset: 0,
  timestamp: new Date(),
};

export function filters(state = defaultState, action) {
  switch (action.type) {
    case SET_LOCALE_FILTER:
      return {
        ...state,
        locale: action.payload,
      };

    case SET_COUNTRY_FILTER:
      return {
        ...state,
        country: action.payload,
      };

    case SET_LIMIT_FILTER:
      return {
        ...state,
        limit: action.payload,
      };

    case SET_OFFSET_FILTER:
      return {
        ...state,
        offset: action.payload,
      };

    case SET_TIMESTAMP_FILTER:
      return {
        ...state,
        timestamp: action.payload,
      };

    default:
      return state;
  }
}
