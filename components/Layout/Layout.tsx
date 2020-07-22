import Header from '$/Header/Header';
import { PropsWithChildren } from 'react';
import styles from './Layout.module.scss';

const Layout: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div className={styles.main}>
			<Header />
			<div className={styles.content}>{children}</div>
		</div>
	);
};

export default Layout;
