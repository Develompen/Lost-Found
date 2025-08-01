import { Routes, Route } from 'react-router-dom';
import ItemList from './pages/itemList/ItemList';
import AddItem from './pages/AddItem/AddItem';
import NavBar from './components/NavBar/NavBar';

const App: React.FC = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemList />} />
				<Route path="/add" element={<AddItem />} />
			</Routes>
		</>
	);
};

export default App;
