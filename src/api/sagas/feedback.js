import { takeEvery, put } from 'redux-saga/effects';
import actions from 'api/actions';


export default function* watchLogged() {
  yield takeLatest(actions.feedbacks.negative, negative);
}
