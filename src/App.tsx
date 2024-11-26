import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.page';
import firebaseConfig from './firebase';
import Home from './pages/Home.page';
import { initializeApp } from "firebase/app";

export const app = initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element= {<Home />} />
        <Route path="/login" element= {<Login />} />
      </Routes>
    </Router>
  );
}

export default App;