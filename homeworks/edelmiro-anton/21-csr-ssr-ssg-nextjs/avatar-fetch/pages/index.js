import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Loader from '../components/Loader';
import AddButton from '../components/AddButton';
import RefreshAllBtn from '../components/RefreshAllBtn';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <>
      <Layout>
        {loading ? (
          <Loader />
        ) : (
          <div className={styles.container}>
            <div style={{ display: '-webkit-box' }}>
              {people.map((person, index) => (
                <Img src={person.url} onClick={() => refreshAvatar(index)} />
              ))}
              <AddButton onClick={addAvatar} />
            </div>
            <div className={styles.refreshContainer}>
              {people.length ? <RefreshAllBtn onClick={refreshAll} /> : null}
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}
