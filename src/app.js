import React from 'react';
import { render } from 'react-dom';
import { TodoList } from './components';
import { createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

render(
  <TodoList todos={store.getState()} />,
  document.getElementById('app')
);