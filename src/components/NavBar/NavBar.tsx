import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
	return (
		<nav className={styles.nav}>
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive
						? `${styles['nav-link']} ${styles.active}`
						: styles['nav-link']
				}
			>
				Список
			</NavLink>
			<NavLink
				to="/add"
				className={({ isActive }) =>
					isActive
						? `${styles['nav-link']} ${styles.active}`
						: styles['nav-link']
				}
			>
				Добавить
			</NavLink>
		</nav>
	);
};

export default NavBar;
