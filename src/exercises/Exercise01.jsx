import React from 'react';

const TOTAL_USERS = 6

const Exercise01 = () => {
  const [users, setUsers] = React.useState([])

  /* THE FIX STARTS HERE */
  

  React.useEffect(() => {
    let numberOfPosts = [];
    for(var i = 1; i < TOTAL_USERS; i++) {
      numberOfPosts.push(i);
    }
    let promises = numberOfPosts.map((i) => fetch('https://jsonplaceholder.typicode.com/users?id=' + i)
    .then(r => r.json())
    .then(user => user[0])
    )
    Promise.all(promises)
    .then(values => {
      console.log(values)
      setUsers(values)
    })
  }, [])

  /* THE FIX ENDS HERE */
console.log(users);
  return (
    <div className="container">
      <h2>Instructions</h2>

      <p>We are currently trying to render the first 5 users we obtain from a REST API. The problem is that, for some reason, it's only rendering one of them. Another thing we've noticed is that, sometimes, it renders different user.</p>

      <p>
        <strong>TODO:</strong>
        <ul>
          <li>Fetch and Render the first 5 users</li>
          <li>Make sure the order is ascendant by ID</li>
        </ul>
      </p>

      <hr className="my-5" />

      <h3>Users</h3>

      <ul className="list-group">
        {users && users.map (user => <li key={`user-${user.id}`} className="list-group-item">
          <strong>ID:</strong> {user.id} - <strong>Name:</strong> {user.name} <strong>Email:</strong> {user.email}
        </li>)}
      </ul>

    </div>
  );
};

export default Exercise01;
