import { makeStyles } from '@/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
	const [hamburger, setHamburger] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		if (window.innerWidth < 645) {
			setHamburger(true);
		}

		const listener = () => {
			if (window.innerWidth < 645) {
				setHamburger(true);
			} else {
				setHamburger(false);
				setOpen(false);
			}
		};

		window.addEventListener('resize', listener);

		return () => {
			window.removeEventListener('resize', listener);
		};
	}, []);

	return (
		<header className={styles.main}>
			<nav className={styles.nav}>
				<h1 className={styles.logo}>
					<Link href="/">
						<a className={styles.text} title="TAKE ME HOME... COUNTRY ROAD">
							The Original Species
						</a>
					</Link>
				</h1>
				{hamburger ? (
					<div className={makeStyles(styles.hamburger, open ? styles.open : undefined)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className={styles.icon}
							onClick={() => setOpen(!open)}>
							<line x1="3" y1="6" x2="21" y2="6"></line>
							<line x1="3" y1="12" x2="21" y2="12"></line>
							<line x1="3" y1="18" x2="21" y2="18"></line>
						</svg>
						<ul className={styles.links}>
							<li className={styles.link}>
								<Link href="/">
									<a className={styles.text} title="TAKE ME HOME... COUNTRY ROAD">
										Home
									</a>
								</Link>
							</li>
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
					</div>
				) : (
					<ul className={styles.links}>
						<li className={styles.link}>
							<Link href="/">
								<a className={styles.text} title="TAKE ME HOME... COUNTRY ROAD">
									Home
								</a>
							</Link>
						</li>
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
				)}
			</nav>
		</header>
	);
};

export default Header;
