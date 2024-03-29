import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import registerSaga from '@pages/RegisterPage/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    registerSaga(),
  ]);
}
