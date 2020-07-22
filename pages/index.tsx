import styles from '&/Index.module.scss';
import { NextPage } from 'next';
import Head from 'next/head';

const Index: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>The Original Species</title>
			</Head>
			<div className={styles.imgContainer}>
				<img className={styles.img} src="stock.jpg" alt="Image Failed To Load..." title="stock photo :P" />
			</div>
			<div className={styles.card}>
				<h1>The Original Species</h1>
				<p>introduction of events/subjects</p>
			</div>
			<div className={styles.grid}>
				<div className={styles.col}>
					<div className={styles.card}>
						<h2>Welcome</h2>
						<p>Some welcoming piece of text</p>
					</div>
				</div>
				<div className={styles.col}>
					<div className={styles.card}>
						<h2>Events</h2>
						<p>Events hosting and will host in future</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
