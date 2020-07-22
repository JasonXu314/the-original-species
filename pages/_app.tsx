import '&/global.scss';
import { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
	<Layout>
		<Component {...pageProps} />
	</Layout>
);

export default MyApp;
