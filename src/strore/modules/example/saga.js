// eslint-disable-next-line object-curly-newline
import { call, put, all, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.ClicaBotaoSuccess());
  } catch (e) {
    toast.error('Deu erro.');
    yield put(actions.ClicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
