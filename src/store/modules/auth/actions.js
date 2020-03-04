export function signInRequest(email, password) {
  return {
    type: '@auth/AUTH_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/AUTH_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure(msg) {
  return {
    type: '@auth/AUTH_FAILURE',
    payload: msg,
  };
}

export function signOut() {
  return {
    type: '@auth/AUTH_OUT',
  };
}
