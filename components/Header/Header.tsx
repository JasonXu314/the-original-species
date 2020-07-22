import Link from 'next/link';
import styles from './Header.module.scss';

const Header: React.FC = () => {
	return (
		<header className={styles.main}>
			<nav className={styles.nav}>
				<h1 className={styles.logo}>
					<Link href="/">
						<a className={styles.text}>The Original Species</a>
					</Link>
				</h1>
				<ul className={styles.links}>
					<li className={styles.link}>
						<Link href="/events">
							<a className={styles.text}>Events</a>
						</Link>
					</li>
					<li className={styles.link}>
						<Link href="/team">
							<a className={styles.text}>Our Team</a>
						</Link>
					</li>
					<li className={styles.link}>
						<Link href="/contact">
							<a className={styles.text}>Contact Us</a>
						</Link>
					</li>
					<li className={styles.link}>
						<Link href="/join">
							<a className={styles.text}>Join Us</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
