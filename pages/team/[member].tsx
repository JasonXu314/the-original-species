import styles from '&/EventsEvent.module.scss';
import members from '@/members';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface PageProps {
	member: IMember;
}

const TeamMember: NextPage<PageProps> = ({ member }) => {
	return (
		<div className={styles.main}>
			<Head>
				<title>TOS | {member.name}</title>
			</Head>
			<h1>Details for {member.name}</h1>
			<p>{member.bio[0]}</p>
			<p>{member.bio[1]}</p>
			<Link href="/team">
				<a>Back</a>
			</Link>
		</div>
	);
};

export const getStaticProps: GetStaticProps<PageProps, { member: string }> = async ({ params }) => {
	return {
		props: {
			member: members.find((mem) => mem.name.replace(' ', '-').toLowerCase() === params!.member)!
		}
	};
};

export const getStaticPaths: GetStaticPaths<{ member: string }> = async () => {
	return {
		paths: members.map((mem) => ({ params: { member: mem.name.replace(' ', '-').toLowerCase() } })),
		fallback: false
	};
};

export default TeamMember;
