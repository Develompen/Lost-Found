import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import type { Item } from '../types/Item';

const API_URL = 'https://688cb56acd9d22dda5ce2e91.mockapi.io/api/v1/item';

type ItemsContextType = {
	items: Item[];
	loading: boolean;
	error: string;
	fetchItems: () => void;
	markAsDone: (id: string) => void;
};

const ItemsContext = createContext<ItemsContextType | null>(null);

export const ItemsProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [items, setItems] = useState<Item[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	const fetchItems = async () => {
		try {
			setLoading(true);
			const res = await axios.get<Item[]>(API_URL);
			setItems(res.data);
		} catch (err) {
			console.error(err);
			setError('Ошибка при загрузке данных');
		} finally {
			setLoading(false);
		}
	};

	const markAsDone = async (id: string) => {
		try {
			await axios.put(`${API_URL}/${id}`, { status: 'Завершён' });
			await fetchItems();
		} catch (err) {
			console.error('Ошибка при обновлении:', err);
		}
	};

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<ItemsContext.Provider
			value={{ items, loading, error, fetchItems, markAsDone }}
		>
			{children}
		</ItemsContext.Provider>
	);
};

export const useItemsContext = () => {
	const context = useContext(ItemsContext);
	if (!context) {
		throw new Error('useItemsContext должен быть внутри <ItemsProvider>');
	}
	return context;
};
