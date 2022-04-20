import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Praktika1 from './praktika1/Praktika1';
import Praktika2 from './praktika2/Praktika2';
import Praktika3 from './praktika3/Praktika3';
import Praktika4 from './praktika4/Praktika4';
import Praktika5 from './praktika5/Praktika5';
import Praktika6 from './praktika6/Praktika6';
import Praktika7 from './praktika7/Praktika7';
import Praktika8 from './praktika8/Praktika8';

import ErrorPage from './ErrorPage';

function App() {
	return (
		<Router>
			<nav>
				<Link className="page" to="/">
					{' '}
					Praktika1
				</Link>
				<Link className="page" to="/praktika2">
					{' '}
					Praktika2
				</Link>
				<Link className="page" to="/praktika3">
					{' '}
					Praktika3
				</Link>
				<Link className="page" to="/praktika4">
					{' '}
					Praktika4
				</Link>
				<Link className="page" to="/praktika5">
					{' '}
					Praktika5
				</Link>
				<Link className="page" to="/praktika6">
					{' '}
					Praktika6
				</Link>
				<Link className="page" to="/praktika7">
					{' '}
					Praktika7
				</Link>
				<Link className="page" to="/praktika8">
					{' '}
					Praktika8
				</Link>

				<Link className="page" to="/ErrorPage">
					{' '}
					ErrorPage
				</Link>
			</nav>

			<Routes>
				<Route path="/" element={<Praktika1 />} />
				<Route path="/praktika2" element={<Praktika2 />} />
				<Route path="/praktika3" element={<Praktika3 />} />
				<Route path="/praktika4" element={<Praktika4 />} />
				<Route path="/praktika5" element={<Praktika5 />} />
				<Route path="/praktika6" element={<Praktika6 />} />
				<Route path="/praktika7" element={<Praktika7 />} />
				<Route path="/praktika8" element={<Praktika8 />} />

				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
