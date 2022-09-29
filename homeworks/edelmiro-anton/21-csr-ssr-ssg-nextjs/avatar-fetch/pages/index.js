import styles from '../styles/Home.module.css';
import { Loader } from '../components/Loader';
import { AddButton } from '../components/AddButton';
import { RefreshAllBtn } from '../components/RefreshAllBtn';
import { useAvatars } from '../hooks/useAvatars';
import { Layout } from '../components/Layout';
import { Img } from '../components/Img';

export async function getServerSideProps() {
  const limit = 5;
  const resp = await fetch(`https://tinyfac.es/api/data?limit=${limit}&quality=0`);
  const data = await resp.json();
  return { props: { data: data } };
}

export default function Home({ data }) {
  const { fetchAvatar, people, setPeople, loading, addAvatar, refreshAvatar, refreshAll } = useAvatars(data);

  return (
    <>
      <Layout>
        {console.log(data)}

        {
          <main>
            {loading ? (
              <Loader />
            ) : (
              <div className={styles.container}>
                {console.log(data)}
                <div style={{ display: '-webkit-box' }}>
                  {data.map((person, index) => {
                    return <Img person={person} refreshAvatar={() => refreshAvatar(index)} />;
                  })}
                  <AddButton fetchAvatar={fetchAvatar} />
                </div>
                <div className={styles.refreshContainer}>
                  {people.length ? <RefreshAllBtn refreshAll={refreshAll} /> : null}
                </div>
              </div>
            )}
          </main>
        }
      </Layout>
    </>
  );
}
