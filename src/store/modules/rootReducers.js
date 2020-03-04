import { combineReducers } from 'redux';

import auth from './auth/reducers';
import listImages from './list_images/reducers';

export default combineReducers({
  auth,
  listImages,
});
