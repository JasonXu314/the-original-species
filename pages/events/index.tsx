import styles from '&/Events.module.scss';
import { makeStyles } from '@/utils';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Events: NextPage = () => {
	const [smol, setSmol] = useState<boolean>(false);

	useEffect(() => {
		if (window.innerWidth < 674) {
			setSmol(true);
		}

		const listener = () => {
			if (window.innerWidth < 674) {
				setSmol(true);
			} else {
				setSmol(false);
			}
		};

		window.addEventListener('resize', listener);

		return () => {
			window.removeEventListener('resize', listener);
		};
	}, []);

	return (
		<div className={styles.main}>
			<Head>
				<title>TOS | Events</title>
			</Head>
			<div className={styles.card}>
				<h1>Events</h1>
				<p>These are the events we are/will be hosting</p>
			</div>
			<div className={styles.list}>
				<div className={styles.card}>
					<div className={makeStyles(styles.iconContainer, smol ? styles.smol : undefined)}>
						<img className={styles.img} src="stock.jpg" alt="Image Failed To Load..." title="stock photo :P" />
					</div>
					<div className={styles.cardContent}>
						<Link href="/events/biology-bowl">
							<a>
								<h2>Biology Bowl</h2>
							</a>
						</Link>
						{!smol && (
							<>
								<p>
									Hello and welcome to our first event! The Biology Bowl will be a 64 team, single elimination, Quiz Bowl-styled competition
									modeled after the National Science Bowl. The competition will only test Biology topics and will range in difficulty from
									AP-level to USABO-level based off of round progression. The competition will take place through both Discord and Zoom on
									August 8th 2020.
								</p>

								<br />
								<Link href="/events/biology-bowl">
									<a>Details</a>
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
