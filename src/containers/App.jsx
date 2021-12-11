import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from '../appRedux/store';

import Router from '../routes/index';

import Footer from './Footer';


const store = configureStore(/* provide initial state if any */);

const App = () => {
  const match = useRouteMatch();

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router match={match}/>
        <Footer/>
      </ConnectedRouter>
    </Provider>
  );
};


export default App;