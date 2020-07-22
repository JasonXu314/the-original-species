import styles from '&/Events.module.scss';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Events: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>TOS | Events</title>
			</Head>
			<div className={styles.card}>
				<h1>Events</h1>
				<p>General Introduction</p>
			</div>
			<div className={styles.list}>
				<div className={styles.card}>
					<div className={styles.iconContainer}>
						<img className={styles.img} src="stock.jpg" alt="Image Failed To Load..." title="stock photo :P" />
					</div>
					<div className={styles.cardContent}>
						<h2>Biology Bowl</h2>
						<p>Description</p>
						<Link href="/events/[event]" as="/events/biology-bowl">
							<a>Biology Bowl</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
