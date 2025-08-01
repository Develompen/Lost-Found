import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ItemType, ItemStatus } from '../../types/Item';
import { addItem } from '../../api/itemsApi';

export const useAddItem = () => {
	const navigate = useNavigate();
	const [error, setError] = useState('');

	const handleAdd = async (
		imageUrl: string,
		name: string,
		location: string,
		date: string,
		type: ItemType,
		status: ItemStatus,
	) => {
		if (!imageUrl || !name || !location || !date) {
			setError('Пожалуйста, заполните все поля');
			return;
		}

		try {
			await addItem({ imageUrl, name, location, date, type, status });
			navigate('/');
		} catch (err) {
			console.error(err);
			setError('Ошибка при отправке данных');
		}
	};

	return { handleAdd, error };
};
