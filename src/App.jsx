import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
