import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  data: [],
};

export default function listImages(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@images/LIST_IMAGES_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@images/LIST_IMAGES_SUCCESS':
      return produce(state, draft => {
        draft.loading = false;
        draft.data = action.payload;
      });
    case '@images/DELETE_IMAGE_ONLY':
      return produce(state, draft => {
        draft.data = state.data.filter(el => el.nome !== action.payload);
      });
    default:
      return state;
  }
}
