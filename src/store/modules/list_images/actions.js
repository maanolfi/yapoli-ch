export function listImagesRequest() {
  return {
    type: '@images/LIST_IMAGES_REQUEST',
  };
}

export function listImagesSuccess(data) {
  return {
    type: '@images/LIST_IMAGES_SUCCESS',
    payload: data,
  };
}

export function listImagesFailure(msg) {
  return {
    type: '@images/LIST_IMAGES_FAILURE',
    payload: msg,
  };
}

export function deleteImage(nome) {
  return {
    type: '@images/DELETE_IMAGE_ONLY',
    payload: nome,
  };
}
