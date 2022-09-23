import useUsers from '../hooks/useUsers';
import Container from '../components/Container';
import Main from '../components/Main';
import User from '../components/User';
import FetchButton from '../components/FetchButton';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import ErrorMessage from '../components/ErrorMessage';

export async function getServerSideProps() {
  const INITIAL_USERS = 5;
  const URL = `https://tinyfac.es/api/data?limit=${INITIAL_USERS}&quality=0`;

  const res = await fetch(URL);
  const data = await res.json();

  return { props: { data } };
}

export default function Home({ data }) {
  const { users, isRefreshing, setUsers, fetchSingleUser, refreshUser, refreshAllUsers } = useUsers();

  useEffect(() => {
    if (!data.error) {
      setUsers(data);
    }
  }, [data, setUsers]);

  // If we have a problem with the first request then this will render
  if (data.error) {
    return <ErrorMessage />;
  }

  // If everything is correct this will render
  return (
    <Container>
      <Main>
        {users.map((user, index) => {
          return <User user={user} index={index} isRefreshing={isRefreshing} refreshUser={refreshUser} key={user.id} />;
        })}
        <FetchButton fetchSingleUser={fetchSingleUser} />
      </Main>
      <Footer refreshAllUsers={refreshAllUsers} />
    </Container>
  );
}
