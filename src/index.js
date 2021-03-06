import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faBed, faCalendarAlt, faLaptopMedical } from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(faMapMarkerAlt, faBed, faCalendarAlt, faLaptopMedical);

ReactDOM.render(
	<BrowserRouter>
  		<App />
    </BrowserRouter>,
	document.getElementById('root')
);