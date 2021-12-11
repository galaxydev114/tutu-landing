import React from 'react';
import {
  // Redirect,
  Route,
  Switch
} from 'react-router-dom';

import Home from '../pages/Home';

// const PrivateRoute = ({component: Component, location, authUser, ...rest}) => {
//   <Route
//     {...rest}
//     render={props =>
//       authUser
//         ? <Component {...props} />
//         : <Redirect
//           to={{
//             pathname: '/signin',
//             state: {from: location}
//           }}
//         />}
//   />
// };

const RegularRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => <Component {...props} />}/>
);

const Router = ({match}) => (
  <Switch>
    <RegularRoute exact path='/' component={Home}/>
  </Switch>
);

export default Router;