import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//@ts-ignore;
import { BrowserRouter } from 'react-router-dom';
//@ts-ignore;
import { Provider } from 'react-redux';
import store from './store/getStore';


ReactDOM.render(
  <React.StrictMode>
	<Provider store={store}>
	  <BrowserRouter>
		<App/>
	  </BrowserRouter>
	</Provider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);


serviceWorker.unregister();
