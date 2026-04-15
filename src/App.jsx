import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
