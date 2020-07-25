import styles from '&/Index.module.scss';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Index: NextPage = () => {
	const [smol, setSmol] = useState<boolean>(false);

	useEffect(() => {
		if (window.innerWidth < 645) {
			setSmol(true);
		}

		const listener = () => {
			if (window.innerWidth < 645) {
				setSmol(true);
			} else {
				setSmol(false);
			}
		};

		window.addEventListener('resize', listener);

		return () => {
			window.removeEventListener('resize', listener);
		};
	}, []);

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
				{smol ? (
					<div className={styles.col}>
						<div className={styles.card}>
							<h2>Welcome</h2>
							<p>
								The Original Species &#40;TOS&#41; is a student-run project dedicated to providing opportunities for those interested in
								Biology. By hosting events, we hope to test knowledge as well as foster more enthusiasm for life science and all of its
								fascinating intricacies.
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
					</div>
				) : (
					<>
						<div className={styles.col}>
							<div className={styles.card}>
								<h2>Welcome</h2>
								<p>
									The Original Species &#40;TOS&#41; is a student-run project dedicated to providing opportunities for those interested in
									Biology. By hosting events, we hope to test knowledge as well as foster more enthusiasm for life science and all of its
									fascinating intricacies.
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
								<p>
									TOS plans on hosting a variety of Biology-based competitions in the future, beginning with the Biology Bowl in early August.
								</p>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Index;
