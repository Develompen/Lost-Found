import { useEffect, useState } from 'react';
import type { Item } from '../../types/Item';

export const useSearchFilter = (
	items: Item[],
	typeFilter: 'all' | 'Потеряно' | 'Найдено',
	statusFilter: 'all' | 'Активный' | 'Завершён',
	searchTerm: string,
) => {
	const [filteredItems, setFilteredItems] = useState<Item[]>([]);

	useEffect(() => {
		let result = [...items];

		if (typeFilter !== 'all') {
			result = result.filter((item) => item.type === typeFilter);
		}

		if (statusFilter !== 'all') {
			result = result.filter((item) => item.status === statusFilter);
		}

		if (searchTerm.trim() !== '') {
			const term = searchTerm.toLowerCase();
			result = result.filter((item) => item.name.toLowerCase().includes(term));
		}

		setFilteredItems(result);
	}, [items, typeFilter, statusFilter, searchTerm]);

	return filteredItems;
};
