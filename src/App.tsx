import { Route, Routes } from 'react-router-dom'
import './App.css'
import City from './components/city/City'
import Main from './pages/Main'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/city' element={<City />} />
			</Routes>
		</div>
	)
}

export default App
