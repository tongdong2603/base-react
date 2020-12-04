import { takeEvery, put } from 'redux-saga/effects';
import { ProductApi } from '@services/Api';

function* test() {
  const data = yield ProductApi.getProductById({
    params: {
      id: 123,
    },
  });
  console.log('🚀 ~ file: saga.ts ~ line 6 ~ function*test ~ data', data);
  yield put({ type: 'home/add' });
}

export default function* rootSaga() {
  yield takeEvery('TEST_TEST', test);
}
