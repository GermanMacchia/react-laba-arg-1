import Container from '../components/Container';
import Main from '../components/Main';
import User from '../components/User';
import FechButton from '../components/FechButton';
import Footer from '../components/Footer';
import useUsers from '../hooks/useUsers';

export default function Home() {
  const { users, isRefreshing, fetchSingleUser, refreshUser, refreshAllUsers } = useUsers();
  const isButtonDisabled = users.length === 0;

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
