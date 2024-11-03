// Layout component for the application
import Head from 'next/head';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => (
    <div className={styles.container}>
        <Head>
            <title>CRM App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>{children}</main>
    </div>
);

export default Layout;
