import UserList from "../components/UserList";
import Header from "../components/Header";

const Users = () => {
  return (
    <>
      <Header />
      <main className="users-page">
        <UserList />
      </main>
    </>
  );
};

export default Users;
