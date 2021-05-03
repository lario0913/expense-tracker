import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider} from '@speechly/react-client'


import './index.css';
import App from './App';
import { Provider } from './context/context';

ReactDOM.render(
  <SpeechProvider appId="bf8debe2-a1f9-4b47-82c4-4e65739cd529" language="en-US" >
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

