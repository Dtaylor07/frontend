
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

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg'; // Add your logo here
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple login logic (you can expand this)
    if (username) {
      setIsLoggedIn(true);
    }
  };

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5');
      setPhotos(response.data);
    } catch (error) {
      console.error('Error fetching photos', error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchPhotos();
    }
  }, [isLoggedIn]);

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
          <h2>Welcome, {username}!</h2>
          <h3>Here are some photos:</h3>
          <div className="photo-gallery">
            {photos.map(photo => (
              <div key={photo.id}>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <p>{photo.title}</p>
              </div>
            ))}
          </div>
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