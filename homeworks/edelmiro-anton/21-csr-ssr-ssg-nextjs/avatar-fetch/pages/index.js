import styles from '../styles/Home.module.css';
import Loader from '../components/Loader/Loader';
import AddButton from '../components/AddButton/AddButton';
import RefreshAllButton from '../components/RefreshAllButton/RefreshAllButton';
import { useAvatars } from '../hooks/useAvatars';
import Layout from '../components/Layout/Layout';
import Img from '../components/Img/Img';

export async function getServerSideProps() {
  const limit = 5;
  const resp = await fetch(`https://tinyfac.es/api/data?limit=${limit}&quality=0`);
  const data = await resp.json();
  return { props: { data: data } };
}

export default function Home({ data }) {
  const { people, loading, addAvatar, refreshAvatar, refreshAll } = useAvatars(data);

  if (data.error) {
    return alert('Sorry, the web site brokes down :( Try again in a few minutes.');
  }

  return (
    <Layout>
      {
        <>
          {loading ? (
            <Loader />
          ) : (
            <div className={styles.container}>
              <div style={{ display: '-webkit-box' }}>
                {people.map((person, index) => {
                  return <Img key={person.id} person={person} refreshAvatar={() => refreshAvatar(index)} />;
                })}
                <AddButton addAvatar={addAvatar} />
              </div>
              <div className={styles.refreshContainer}>
                {people.length ? <RefreshAllButton refreshAll={refreshAll} /> : null}
              </div>
            </div>
          )}
        </>
      }
    </Layout>
  );
}
