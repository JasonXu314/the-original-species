import styles from '&/EventsEvent.module.scss';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const EventsEvent: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>TOS | Biology Bowl</title>
			</Head>
			<h1 className={styles.alert}>Note: This event has concluded!</h1>
			<h2>Top 3 Teams:</h2>
			<ul className={styles.lists}>
				<li>
					<div>
						<p>USABOwl</p> <img src="/crown.svg" className={styles.crown} />
					</div>
				</li>
				<li>Pair of meciums</li>
				<li>ppu</li>
			</ul>
			<h2>Final Bracket</h2>
			<Link href="/bio-bowl-bracket.svg">
				<a>
					<img className={styles.bracket} src="/bio-bowl-bracket.svg" alt="Final Bracket" title="Final Bracket" />
				</a>
			</Link>
			<h1 className={styles.alert}>Note: This event has concluded!</h1>
			<br />
			<h1>Details for Biology Bowl</h1>
			<p>
				Hello and welcome to our first event! The Biology Bowl will be a 64 team, single elimination, Quiz Bowl-styled competition modeled after the
				National Science Bowl. The competition will only test Biology topics and will range in difficulty from AP-level to USABO-level based off of
				round progression. The competition will take place through both Discord and Zoom on August 8th 2020.
			</p>
			<a href="https://docs.google.com/document/d/1_f6iY2_lq4J5B5RArVEMLHsWSNanEgabmLolfIoB98Q/edit?usp=sharing" target="_blank" rel="noreferrer">
				Rules
			</a>
			<hr />
			<h3>Prizes</h3>
			<ul className={styles.lists}>
				<li>The Winning Team will receive 50 USD</li>
			</ul>
			<hr />
			<h3>Register</h3>
			<ul className={styles.lists}>
				<li>Registration should be complete by the end of the day August 5th.</li>
				<li>Only one member of each team should fill out a registration form.</li>
				<li>Each team should fill out the registration form only once, if errors were made or updates are needed, please contact the TOS team.</li>
				<li>After registration, you will receive an email confirming your registration within 2 days.</li>
				<a href="https://forms.gle/DB9v13TmGfU9wB3SA" target="_blank" rel="noreferrer">
					Register Here
				</a>
			</ul>
			<Link href="/events">
				<a>Back</a>
			</Link>
		</div>
	);
};

export default EventsEvent;
