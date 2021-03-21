import NavBar from './components/NavBar';
import Login from './pages/Login';

import {Route, Switch} from 'react-router-dom';

import TokenHook from './components/TokenHook';

import SignUp from './pages/SignUp'
import Home from './pages/Home'
import VaccinationData from './pages/VaccinationData'
import RestrictionsData from './pages/RestrictionsData'
import HospitalData from './pages/HospitalData'
import UserProfile from './pages/UserProfile'

import './App.css';

function App() {
	const { token, setToken, logout } = TokenHook();

	if (!token) {
		return(
			<Switch>
				<Route exact path="/">
					<Login setToken={setToken} />
				</Route>
		        <Route exact path="/sign-up">
		        	<SignUp setToken={setToken} />
		        </Route>
			</Switch>
		)
	}

	return (
		<div>
			<NavBar logout={logout}/>
			<Switch>
				<Route exact path="/" component={Home} />
		        <Route exact path="/vaccine-data" component={VaccinationData} />
		        <Route exact path="/covid-restrictions" component={RestrictionsData} />
		        <Route exact path="/hospital-data" component={HospitalData} />
		        <Route exact path="/user-profile" component={UserProfile} />
			</Switch>
		</div>
	);
}

export default App;