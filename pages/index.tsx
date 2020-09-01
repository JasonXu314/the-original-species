import styles from '&/Index.module.scss';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Index: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>The Original Species</title>
			</Head>
			<div className={styles.imgContainer}>
				<img className={styles.img} src="stock.jpg" alt="Image Failed To Load..." title="stock photo :P" />
			</div>
			<h1 className={styles.heading}>The Original Species</h1>
			<div className={styles.grid}>
				<div className={styles.col}>
					<div className={styles.card}>
						<h2>Welcome</h2>
						<p>
							The Original Species &#40;TOS&#41; is a student-run project dedicated to providing opportunities for those interested in Biology. By
							hosting events, we hope to test knowledge as well as foster more enthusiasm for life science and all of its fascinating intricacies.
						</p>
					</div>
					<div className={styles.card}>
						<Link href="/events">
							<a className={styles.link}>
								<h2 className={styles.text}>Events</h2>
							</a>
						</Link>
						<p>TOS plans on hosting a variety of Biology-based competitions in the future, beginning with the Biology Bowl in early August.</p>
					</div>
					<div className={styles.card}>
						<h2>Links</h2>
						<p>Events are recorded and placed on our YouTube Channel</p>
						<a href="https://www.youtube.com/channel/UCvkCFuQHsffVAqqMPwVEiZA" target="_blank" rel="noreferrer noopener" className={styles.link}>
							The Original Species
						</a>
						<hr />
						<p>Join our Discord server to learn more!</p>
						<a href="https://discord.gg/6mbNa3b" target="_blank" rel="noreferrer noopener" className={styles.link}>
							https://discord.gg/6mbNa3b
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
