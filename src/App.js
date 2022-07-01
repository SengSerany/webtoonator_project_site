import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import './index.css';
import Navigation from './components/layout/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navigation />
        </header>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
