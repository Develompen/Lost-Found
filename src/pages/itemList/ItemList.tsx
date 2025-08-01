import { useState } from 'react';
import { useItemsContext } from '../../context/ItemsContext';
import { useSearchFilter } from '../../hooks/useSearch/useSearchFilter';
import SearchBar from '../../components/SearchBar';
import styles from './styles.module.scss';

const ItemList = () => {
	const [typeFilter, setTypeFilter] = useState<'all' | 'Потеряно' | 'Найдено'>(
		'all',
	);
	const [statusFilter, setStatusFilter] = useState<
		'all' | 'Активный' | 'Завершён'
	>('all');
	const [searchTerm, setSearchTerm] = useState('');

	const { items, loading, error, markAsDone } = useItemsContext();
	const filteredItems = useSearchFilter(
		items,
		typeFilter,
		statusFilter,
		searchTerm,
	);

	return (
		<div className={`${styles.content} container`}>
			<div className={styles['title']}>
				<h1>Список предметов</h1>
				<SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
			</div>

			<div className={styles['Content-Filters']}>
				<label>
					Тип:&nbsp;
					<select
						value={typeFilter}
						onChange={(e) =>
							setTypeFilter(e.target.value as 'all' | 'Потеряно' | 'Найдено')
						}
					>
						<option value="all">Все</option>
						<option value="Потеряно">Потеряно</option>
						<option value="Найдено">Найдено</option>
					</select>
				</label>
				&nbsp;&nbsp;
				<label>
					Статус:&nbsp;
					<select
						value={statusFilter}
						onChange={(e) =>
							setStatusFilter(e.target.value as 'all' | 'Активный' | 'Завершён')
						}
					>
						<option value="all">Все</option>
						<option value="Активный">Активный</option>
						<option value="Завершён">Завершён</option>
					</select>
				</label>
				&nbsp;&nbsp;
			</div>

			{loading && <p>Загрузка...</p>}
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{!loading && filteredItems.length === 0 && <p>Ничего не найдено</p>}

			<ul className={styles['item-list']}>
				{filteredItems.map((item) => (
					<li
						className={styles.item}
						key={item.id}
						style={{
							border: '1px solid #ccc',
							margin: '10px',
							padding: '10px',
						}}
					>
						<img src={item.imageUrl} alt={item.name} width={150} />
						<div>
							<h3>{item.name}</h3>
							<p>📍 {item.location}</p>
							<p>📅 {item.date}</p>
							<p>📝 Тип: {item.type}</p>
							<p>⚙️ Статус: {item.status}</p>

							{item.status !== 'Завершён' && (
								<button onClick={() => markAsDone(item.id)}>
									Завершить
								</button>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ItemList;
