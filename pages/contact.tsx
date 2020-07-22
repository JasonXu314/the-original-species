import styles from '&/Contact.module.scss';
import { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
	return (
		<div className={styles.main}>
			<Head>
				<title>TOS | Contact Us</title>
			</Head>
			<h1>Contact Us</h1>
			<a href="#">Contact Us</a>
		</div>
	);
};

export default Contact;
