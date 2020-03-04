import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import listImages from './list_images/sagas';

export default function* rootSaga() {
  return yield all([auth, listImages]);
}
