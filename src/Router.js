import React, { PropTypes } from 'react';
import { IndexRedirect, Router, Route, IndexRoute } from 'react-router';
import Base from 'components/Base';
import Login from 'components/user/Login';
import Register from 'components/user/Register';
import ChangePassword from 'components/user/ChangePassword';
import Screen5 from './components/screen5/Screen5'

import Profile from 'components/profile';

const FeedbackRouter = ({ history, validate }) => {

  return (
    <Router history={history}>
      <Route path="/register" component={Register} />
      <Route path="/change_password" component={ChangePassword} />
      <Route path="/" component={Base}>
        <IndexRoute component={Screen5} />
      </Route>
    </Router>
  )
}

export default FeedbackRouter;
