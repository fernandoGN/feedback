import { fork } from 'redux-saga/effects';
import watchRegister from 'api/sagas/register';
import watchLogin from 'api/sagas/login';
import watchLogged from 'api/sagas/logged';
import watchLogout from 'api/sagas/logout';


function* rootSagas() {
  yield [
    fork(watchRegister),
    fork(watchLogin),
    fork(watchLogged),
    fork(watchLogout)
  ]
}

export default rootSagas;
