import styles from '&/EventsEvent.module.scss';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useMemo } from 'react';

const EventsEvent: NextPage = () => {
	const router = useRouter();
	const eventName = useMemo(() => (router.query.event ? capitalize((router.query.event as string).replace('-', ' ')) : ''), [router.query.event]);

	return (
		<div className={styles.main}>
			<Head>
				<title>TOS | {eventName}</title>
			</Head>
			<h1>Details for {eventName}</h1>
			<p>Description here</p>
			<hr />
			<h3>Rules</h3>
			<ul className={styles.lists}>
				<li>
					Bacon ipsum dolor amet spare ribs picanha meatloaf brisket porchetta alcatra. Filet mignon andouille flank, chuck prosciutto drumstick pork.
				</li>
				<li>Meatball landjaeger doner pork chop, chicken sausage hamburger short ribs ham pork belly chislic shoulder.</li>
				<li>Bacon brisket landjaeger sirloin, jerky tongue tri-tip alcatra burgdoggen leberkas.</li>
				<li>Ground round chuck biltong pork belly, frankfurter bacon bresaola beef rump.</li>
				<li>Tongue salami spare ribs t-bone boudin, meatball ribeye pancetta.</li>
			</ul>
			<hr />
			<h3>Prizes</h3>
			<ul className={styles.lists}>
				<li>
					Bacon ipsum dolor amet spare ribs picanha meatloaf brisket porchetta alcatra. Filet mignon andouille flank, chuck prosciutto drumstick pork.
				</li>
				<li>Meatball landjaeger doner pork chop, chicken sausage hamburger short ribs ham pork belly chislic shoulder.</li>
				<li>Bacon brisket landjaeger sirloin, jerky tongue tri-tip alcatra burgdoggen leberkas.</li>
				<li>Ground round chuck biltong pork belly, frankfurter bacon bresaola beef rump.</li>
				<li>Tongue salami spare ribs t-bone boudin, meatball ribeye pancetta.</li>
			</ul>
			<hr />
			<h3>Register</h3>
			<ul className={styles.lists}>
				<li>
					Bacon ipsum dolor amet spare ribs picanha meatloaf brisket porchetta alcatra. Filet mignon andouille flank, chuck prosciutto drumstick pork.
				</li>
				<li>Meatball landjaeger doner pork chop, chicken sausage hamburger short ribs ham pork belly chislic shoulder.</li>
				<li>Bacon brisket landjaeger sirloin, jerky tongue tri-tip alcatra burgdoggen leberkas.</li>
				<li>Ground round chuck biltong pork belly, frankfurter bacon bresaola beef rump.</li>
				<li>Tongue salami spare ribs t-bone boudin, meatball ribeye pancetta.</li>
				<a href="#">Register Here</a>
			</ul>
		</div>
	);
};

function capitalize(str: string): string {
	return str
		.split(' ')
		.map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
		.join(' ');
}

export default EventsEvent;
