import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import api, { login, getUsers } from './Api';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username);
      console.log(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, there!</h1>
      </header>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <h2>Hello, You are successfully logged in, {username}!</h2>
          <button onClick={handleGetUsers}>Get Users</button>
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user.username}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import logo from './logo.svg'; // Add your logo here
// import './App.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username) {
//       setIsLoggedIn(true);
//     }
//   };

//   return (
//     <div className="App">
//       <header>
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Hello, World!</h1>
//       </header>

//       {!isLoggedIn ? (
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <button type="submit">Login</button>
//         </form>
//       ) : (
//         <div>
//           <h2>Hello, You are successfully logged in, {username}!</h2>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
