import React from 'react';
import AppProvider from './utils/AppProvider';
import store from './store';
import Todo from './components/Todo/Todo';

import './App.css';

const App = () => (
  <AppProvider store={store}>
    <Todo />
  </AppProvider>
);

export default App;
