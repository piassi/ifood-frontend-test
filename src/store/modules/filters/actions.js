export const SET_LOCALE_FILTER = 'SET_LOCALE_FILTER';
export const SET_COUNTRY_FILTER = 'SET_COUNTRY_FILTER';
export const SET_LIMIT_FILTER = 'SET_LIMIT_FILTER';
export const SET_OFFSET_FILTER = 'SET_OFFSET_FILTER';
export const SET_TIMESTAMP_FILTER = 'SET_TIMESTAMP_FILTER';

export const setLocaleFilter = (payload) => (dispatch) => {
  dispatch({
    type: SET_LOCALE_FILTER,
    payload,
  });
};

export const setCountryFilter = (payload) => (dispatch) => {
  dispatch({
    type: SET_COUNTRY_FILTER,
    payload,
  });
};

export const setLimitFilter = (payload) => (dispatch) => {
  dispatch({
    type: SET_LIMIT_FILTER,
    payload,
  });
};

export const setOffsetFilter = (payload) => (dispatch) => {
  dispatch({
    type: SET_OFFSET_FILTER,
    payload,
  });
};

export const setTimestampFilter = (payload) => (dispatch) => {
  dispatch({
    type: SET_TIMESTAMP_FILTER,
    payload,
  });
};
