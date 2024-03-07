import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './todoReducer';
import App from './App';

export type RootState = ReturnType<typeof store.getState>;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
