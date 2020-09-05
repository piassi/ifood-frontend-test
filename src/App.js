import React from 'react';
import './assets/scss/bootstrap.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import { Spotifood } from './components/Spotifood';

function App() {
  return (
    <Provider store={store()}>
      <Spotifood />
    </Provider>
  );
}

export default App;
