// global import
import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Local import
// import HttpService from '@services/Http';
import ListRouter from '@routes/index';
import { store } from '@redux/store';
import History from '@/shared/libs/history';

// i18n
import '@/i18n';

const App: FunctionComponent = () => {
  History.history = useHistory();
  return (
    <Provider store={store}>
      <ListRouter />
    </Provider>
  );
};

export default App;
