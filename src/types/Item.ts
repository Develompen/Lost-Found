export type ItemType = 'Потеряно' | 'Найдено';
export type ItemStatus = 'Активный' | 'Завершён';

export interface Item {
	id: string;
	imageUrl: string;
	name: string;
	location: string;
	date: string;
	type: ItemType;
	status: ItemStatus;
}
