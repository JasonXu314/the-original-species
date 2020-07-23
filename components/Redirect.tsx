import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

interface Props {
	to: string;
}

const Redirect: React.FC<Props> = ({ to }) => {
	const router = useRouter();

	useEffect(() => {
		router.push(to);
	}, [to, router]);

	return null;
};

export default Redirect;
