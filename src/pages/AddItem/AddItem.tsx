import { useState } from 'react';
import { useAddItem } from '../../hooks/useAddItem/useAddItem';
import type { ItemType, ItemStatus } from '../../types/Item';
import styles from './styles.module.scss';

const AddItem = () => {
	const [imageUrl, setImageUrl] = useState('');
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [date, setDate] = useState('');
	const [type, setType] = useState<ItemType>('Потеряно');
	const [status, setStatus] = useState<ItemStatus>('Активный');

	const { handleAdd, error } = useAddItem();

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		handleAdd(imageUrl, name, location, date, type, status);

		setTimeout(() => {
			window.location.reload();
		}, 2000);
	};

	return (
		<div className={`${styles.add} container`}>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<form onSubmit={onSubmit}>
				<h2>Добавить</h2>
				<input
					type="text"
					placeholder="Ссылка на изображение"
					value={imageUrl}
					onChange={(e) => setImageUrl(e.target.value)}
				/>
				<br />
				<input
					type="text"
					placeholder="Название предмета"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<br />
				<input
					type="text"
					placeholder="Местоположение"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
				<br />
				<input
					type="date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
				<br />
				<label>
					Тип:
					<select
						value={type}
						onChange={(e) => setType(e.target.value as ItemType)}
					>
						<option value="Потеряно">Потеряно</option>
						<option value="Найдено">Найдено</option>
					</select>
				</label>
				<br />
				<label>
					Статус:
					<select
						value={status}
						onChange={(e) => setStatus(e.target.value as ItemStatus)}
					>
						<option value="Активен">Активен</option>
						<option value="Завершён">Завершён</option>
					</select>
				</label>
				<br />
				<button type="submit">
					Добавить
				</button>
			</form>
		</div>
	);
};

export default AddItem;
