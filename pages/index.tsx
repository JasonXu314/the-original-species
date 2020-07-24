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
			<div className={styles.card}>
				<h1>The Original Species</h1>
			</div>
			<div className={styles.grid}>
				<div className={styles.col}>
					<div className={styles.card}>
						<h2>Welcome</h2>
						<p>
							The Original Species &#40;TOS&#41; is a student-run project interested in providing Biology opportunities and hosting Biology events
							for students interested and to get more interested in Biology and its intricacies.
						</p>
					</div>
				</div>
				<div className={styles.col}>
					<div className={styles.card}>
						<Link href="/events">
							<a className={styles.link}>
								<h2 className={styles.text}>Events</h2>
							</a>
						</Link>
						<p>TOS plans on hosting a variety of Biology-based competitions in the future, beginning with the Biology Bowl in early August.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
