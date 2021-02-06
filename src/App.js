import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register.tsx';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
