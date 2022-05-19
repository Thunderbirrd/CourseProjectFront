import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../components/Container/Container';
import UserDetails from '../../components/UserDetails/UserDetails';

const UserDetailPage = ({ users, currentUser, setCurrentUser }) => {
  const params = useParams();
  const id = Number.parseInt(params.id, 10);

  useEffect(() => {
    setCurrentUser(users.find((user) => user.id === id));
  }, [users, id, setCurrentUser]);

  console.log(currentUser);

  return (
    <>
      <Container>
        <UserDetails currentUser={currentUser} />
      </Container>
    </>
  );
};

export default UserDetailPage;
