import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoardComponent from './App';
import registerServiceWorker from './registerServiceWorker';
import { observe } from './components/game';

const rootEl = document.getElementById('root');

observe(piecePosition =>
  ReactDOM.render(
    <BoardComponent piecePosition={piecePosition} />,
    rootEl
  )
);
registerServiceWorker();
