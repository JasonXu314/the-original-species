import styles from '&/Team.module.scss';
import members from '@/members';
import { NextPage } from 'next';
import Head from 'next/head';

const Events: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>TOS | Team</title>
			</Head>
			<div className={styles.heading}>
				<h1>Our Team</h1>
				<p>
					Our team is composed of motivated and passionate lovers of Biology and STEM in general, including 1 USABO national finalist, 4 Top 50
					qualifiers, and 8 Semifinalists. Many of our team members have participated in a wide variety of other high school competitions such as the
					National Science Bowl and the Science Olympiad. We are dedicated to providing the best experience to participants in our events.
				</p>
			</div>
			<div className={styles.grid}>
				<div className={styles.col}>
					{members
						.filter((_, i) => i % 2 === 0)
						.map((member, i) => (
							<div className={styles.card} key={i}>
								<h2>{member.name}</h2>, <h4>{member.location}</h4>
								{member.roles.map((role, j) => (
									<p key={j}>{role}</p>
								))}
							</div>
						))}
				</div>
				<div className={styles.col}>
					{members
						.filter((_, i) => i % 2 === 1)
						.map((member, i) => (
							<div className={styles.card} key={i}>
								<h2>{member.name}</h2>, <h4>{member.location}</h4>
								{member.roles.map((role, j) => (
									<p key={j}>{role}</p>
								))}
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Events;
