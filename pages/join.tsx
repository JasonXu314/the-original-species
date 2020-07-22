import styles from '&/Join.module.scss';
import { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>TOS | Join Us</title>
			</Head>
			<h1>Join Us</h1>
			<p>Reasons</p>
		</div>
	);
};

export default Contact;
