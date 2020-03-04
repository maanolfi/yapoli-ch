import { put, call, takeLatest, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { listImagesSuccess, listImagesFailure } from './actions';

export function* listImagesApi() {
  try {
    const { data } = yield call(api.get, `/images`);

    yield put(listImagesSuccess(data));
  } catch (e) {
    yield put(listImagesFailure('Falha ao careegar dados da api'));
  }
}

export default all([takeLatest('@images/LIST_IMAGES_REQUEST', listImagesApi)]);
