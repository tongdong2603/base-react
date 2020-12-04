import { all, fork } from 'redux-saga/effects';

import { saga as homeSaga } from '@redux/home';

export default function* rootSaga() {
  yield all([fork(homeSaga)]);
}
