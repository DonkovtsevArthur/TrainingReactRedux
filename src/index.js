import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { createStore } from 'redux';
import { Provider } from "react-redux";

import MainComponent from "./components/MainComponent";
import { rootReducer } from "./store/reducers";

import registerServiceWorker from './registerServiceWorker';




//store(state)
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
