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
			<h2>Important Documents</h2>
			<ul className={styles.lists}>
				<li>
					<h3>Rounds</h3>
					<ul className={styles.lists}>
						<li>
							<a href="https://docs.google.com/document/d/1Z3DFgnVHpa7Wbn3bqXTifoFd0ultBKjhDQgxXwvglTI/edit?usp=sharing">Round 1</a>
						</li>
						<li>
							<a href="https://docs.google.com/document/d/1kOTktrc2VWsg3loolwt8tNh_ANmjjRDaogF3LU88Esg/edit?usp=sharing">Round 2</a>
						</li>
						<li>
							<a href="https://docs.google.com/document/d/1R1vYDHYuD_T78x8fdannZ73A3vwMpY5NDsBihG1AFGo/edit?usp=sharing">Round 3</a>
						</li>
						<li>
							<a href="https://docs.google.com/document/d/1HwZyBLBvVsPovEroQ4NujNBfIWbx-RJJYiYJkGIvgl0/edit?usp=sharing">Round 4</a>
						</li>
						<li>
							<a href="https://docs.google.com/document/d/1gVlUecoxuborVnnhc7RIwl5vm2LKFoea8L7Q_gnrJZs/edit?usp=sharing">Round 5</a>
						</li>
						<li>
							<a href="https://docs.google.com/document/d/1HmbTorafY9MvV6rwycfVKsNSPJLcobauVPJF6Hb9K3M/edit?usp=sharing">Round 6</a>
						</li>
						<li>
							<a href="https://docs.google.com/document/d/1qPsmZzhY6A9Ax9LqX0ShO2FrPuVKSb9IQzKzATmsItc/edit?usp=sharing">Spares</a>
						</li>
					</ul>
					<h4>Note: Questions have been edited after the competition to ensure accuracy and relevance</h4>
				</li>
				<li>
					<h3>Visual Bonus Slides</h3>
					<ul className={styles.lists}>
						<li>
							<a href="https://docs.google.com/presentation/d/1-m0qVcGg_b7r-V4hG-zeE058-yQef2Og7oZqmnOce38/edit?usp=sharing">Round 5</a>
						</li>
						<li>
							<a href="https://docs.google.com/presentation/d/1st6T_CKkIjcqbX8Vfr4uQ7mV2RfBWnFKPux5Jo7Go2U/edit?usp=sharing">Round 6</a>
						</li>
						<li>
							<a href="https://docs.google.com/presentation/d/1gTpJ-oJAcwF4gNw54b1SbUyg5AYyI_N6i3iGNLuH_o4/edit?usp=sharing">Round 7</a>
						</li>
					</ul>
				</li>
				<li>
					<h3>Pretest</h3>
					<a href="https://docs.google.com/document/d/1896S44RL528zHMSK8nyGIHWGF8_XCdPeHMuwWCEH69k/edit?usp=sharing">Pretest</a>
					<br />
					<a href="https://docs.google.com/document/d/1JMcZG_kMtjar2GFIOxTl26RY9Ay0pSsXYTpPikKIoEE/edit?usp=sharing">Pretest - Key</a>
					<h4>This test was used before the competition to assess the abilities of each team and create the seed</h4>
				</li>
			</ul>
			<h1 className={styles.alert}>Note: This event has concluded!</h1>
			<br />
			<h1>Details for Biology Bowl</h1>
			<p>
				Hello and welcome to our first event! The Biology Bowl will be a single elimination Quiz Bowl-styled competition modeled after the National
				Science Bowl. The competition will only test Biology topics and will range in difficulty from AP-level to USABO-level based off of round
				progression. The competition will take place through both Discord and Zoom on August 8th 2020.
			</p>
			<p>108 competitors from 40 teams and 6 countries competed in the Biology Bowl</p>
			<a
				href="https://docs.google.com/document/d/1_f6iY2_lq4J5B5RArVEMLHsWSNanEgabmLolfIoB98Q/edit?usp=sharing"
				target="_blank"
				rel="noreferrer noopener">
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
