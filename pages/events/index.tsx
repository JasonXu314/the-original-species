import styles from '&/Events.module.scss';
import events from '@/events';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface IPageProps {
	events: IEvent[];
}

const Events: NextPage<IPageProps> = ({ events }) => {
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
				{events.map((event, i) => (
					<div key={i} className={styles.card}>
						<div className={styles.iconContainer}>
							<img className={styles.img} src="stock.jpg" alt="Image Failed To Load..." title="stock photo :P" />
						</div>
						<div className={styles.cardContent}>
							<h2>{event.name}</h2>
							<p>{event.description}</p>
							<br />
							<Link href="/events/[event]" as={`/events/${event.name.replace(' ', '-').toLowerCase()}`}>
								<a>Details</a>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps<IPageProps> = async () => {
	return {
		props: {
			events
		}
	};
};

export default Events;
