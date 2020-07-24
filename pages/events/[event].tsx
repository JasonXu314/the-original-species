import styles from '&/EventsEvent.module.scss';
import events from '@/events';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface IPageProps {
	event: IEvent;
}

const EventsEvent: NextPage<IPageProps> = ({ event }) => {
	return (
		<div className={styles.main}>
			<Head>
				<title>TOS | {event.name}</title>
			</Head>
			<h1>Details for {event.name}</h1>
			<p>{event.description}</p>
			<a href={event.rulesLink} target="_blank" rel="noreferrer">
				Rules
			</a>
			<hr />
			<h3>Prizes</h3>
			<ul className={styles.lists}>
				{event.prizes.map((prize, i) => (
					<li key={i}>{prize}</li>
				))}
			</ul>
			<hr />
			<h3>Register</h3>
			<ul className={styles.lists}>
				{event.registration.map((rule, i) => (
					<li key={i}>{rule}</li>
				))}
				<a href={event.registrationLink} target="_blank" rel="noreferrer">
					Register Here
				</a>
			</ul>
			<Link href="/events">
				<a>Back</a>
			</Link>
		</div>
	);
};

export const getStaticProps: GetStaticProps<IPageProps, { event: string }> = async ({ params }) => {
	return {
		props: {
			event: events.find((event) => event.name.replace(' ', '-').toLowerCase() === params!.event)!
		}
	};
};

export const getStaticPaths: GetStaticPaths<{ event: string }> = async () => {
	return {
		paths: events.map((event) => ({ params: { event: event.name.replace(' ', '-').toLowerCase() } })),
		fallback: false
	};
};

export default EventsEvent;
