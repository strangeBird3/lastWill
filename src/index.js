import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive.css'

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>), document.getElementById('app'));