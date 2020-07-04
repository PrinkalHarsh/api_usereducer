export const initialState = {
  loading: true,
  error: ' ',
  post: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };

    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'something wrong',
      };

    default:
      return state;
  }
};
