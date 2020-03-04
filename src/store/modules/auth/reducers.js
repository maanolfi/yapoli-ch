import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  user: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/AUTH_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.user = action.payload.user;
      });
    case '@auth/AUTH_OUT':
      return produce(state, draft => {
        draft.token = null;
        draft.user = null;
      });
    default:
      return state;
  }
}
