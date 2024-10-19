
// import logo from './logo.svg';
// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import logo from './logo.svg'; // Add your logo here
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, World!</h1>
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
          <h2>You are successfully logged in, {username}!. Thanks</h2>
        </div>
      )}
    </div>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import api from './api';

// function App() {
//   const [data, setData] = useState('');

//   useEffect(() => {
//     api.get('/')
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>{data}</h1>
//     </div>
//   );
// }