function UserCard({ user }) {
  return (
    <Card>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </Card>
  );
}
