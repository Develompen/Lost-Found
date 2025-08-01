import axios from 'axios';
import type {  ItemType, ItemStatus } from '../types/Item';

const API_URL = 'https://688cb56acd9d22dda5ce2e91.mockapi.io/api/v1/item';

interface NewItem {
	imageUrl: string;
	name: string;
	location: string;
	date: string;
	type: ItemType;
	status: ItemStatus;
}

export const addItem = async (item: NewItem) => {
	const response = await axios.post(API_URL, item);
	return response.data;
};
