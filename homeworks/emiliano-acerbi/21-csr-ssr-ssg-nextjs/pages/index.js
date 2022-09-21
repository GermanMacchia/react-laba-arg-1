import Container from '../components/Container';
import Main from '../components/Main';
import User from '../components/User';
import FechButton from '../components/FechButton';
import Footer from '../components/Footer';
import useUsers from '../hooks/useUsers';
import { useEffect } from 'react';

export default function Home({ data }) {
  const { users, isRefreshing, setUsers, fetchSingleUser, refreshUser, refreshAllUsers } = useUsers();
  const isButtonDisabled = users.length === 0;

  useEffect(() => {
    setUsers(data);
  }, []);

  return (
    <Container>
      <Main>
        {users.map((user, index) => {
          return <User user={user} index={index} isRefreshing={isRefreshing} refreshUser={refreshUser} key={user.id} />;
        })}
        <FechButton fetchSingleUser={fetchSingleUser} />
      </Main>
      <Footer isButtonDisabled={isButtonDisabled} refreshAllUsers={refreshAllUsers} />
    </Container>
  );
}

export async function getServerSideProps() {
  const INITIAL_USERS = 5;
  const URL = `https://tinyfac.es/api/data?limit=${INITIAL_USERS}&quality=0`;

  const res = await fetch(URL);
  const data = await res.json();

  return { props: { data } };
}
