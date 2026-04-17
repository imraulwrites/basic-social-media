import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Timeline from './pages/Timeline/Timeline';
import Chart from './pages/Chart/Chart';
import { ToastContainer } from 'react-toastify';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/stats" element={<Chart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
