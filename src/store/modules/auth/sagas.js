import { put, takeLatest, all } from 'redux-saga/effects';

import history from '../../../services/history';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  /* Esta validação de email e senha esta muito tosca,
    no caso eu passaria os dados para api, na api seria validado
    e me retornaria um token e os dados complementares */
  const user = {
    nome: 'Marco Antonio',
    job: 'Development',
  };
  const token = '8148641584681488646844';

  if (email !== 'admin@email.com') {
    yield put(signFailure('Email invalid!'));
  }
  if (password !== '@#$234') {
    yield put(signFailure('Password invalid!'));
  } else {
    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  }
}

export function signOut() {
  history.push('/');
}
export default all([
  takeLatest('@auth/AUTH_REQUEST', signIn),
  takeLatest('@auth/AUTH_OUT', signOut),
]);
