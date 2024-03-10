import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        {/* Redirect users to the login page if they try to access a non-existent route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;


//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Skail</h1>
//         <p>
//
//         </p>
//       </header>
//     </div>
//   );
// }
//
// export default App;
