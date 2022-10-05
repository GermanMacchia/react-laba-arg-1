import Head from 'next/head';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <!-- GOOGLE FONTS --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet" />
        {/* <!-- GOOGLE FONTS --> */}
        <title>Tiny Faces App</title>
      </Head>

      <main className={styles.container}>{children}</main>
    </>
  );
}
