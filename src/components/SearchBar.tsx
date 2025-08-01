type Props = {
	searchTerm: string;
	onSearchChange: (value: string) => void;
};

const SearchBar = ({ searchTerm, onSearchChange }: Props) => {
	return (
		<input
			type="text"
			placeholder="🔍 Поиск по названию..."
			value={searchTerm}
			onChange={(e) => onSearchChange(e.target.value)}
		/>
	);
};

export default SearchBar;
