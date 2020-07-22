import styles from '&/Team.module.scss';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Events: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>TOS | Team</title>
			</Head>
			<div className={styles.card}>
				<h1>Our Team</h1>
				<p>General Introduction</p>
			</div>
			<div className={styles.grid}>
				<div className={styles.col}>
					<div className={styles.card}>
						<div className={styles.cardContent}>
							<h2>Daniel</h2>
							<p>Description</p>
							<Link href="/team/[member]" as="/team/daniel">
								<a>Details</a>
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.col}>
					<div className={styles.card}>
						<div className={styles.cardContent}>
							<h2>Tyler</h2>
							<p>Description</p>
							<Link href="/team/[member]" as="/team/tyler">
								<a>Details</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
