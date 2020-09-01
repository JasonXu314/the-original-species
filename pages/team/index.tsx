import styles from '&/Team.module.scss';
import { NextPage } from 'next';
import Head from 'next/head';

const Events: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>TOS | Team</title>
			</Head>
			<div className={styles.card}>
				<h1>Our Team</h1>
				<p>
					Our team is composed of motivated and passionate lovers of Biology and STEM in general, including 1 USABO national finalist, 4 Top 50
					qualifiers, and 8 Semifinalists. Many of our team members have participated in a wide variety of other high school competitions such as the
					National Science Bowl and the Science Olympiad. We are dedicated to providing the best experience to participants in our events.
				</p>
			</div>
			{/* <div className={styles.grid}>
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
			</div> */}
		</div>
	);
};

export default Events;
