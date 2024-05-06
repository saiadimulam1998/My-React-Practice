import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <h2>Tutorial Home</h2>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ol>
        <hr size="4" noshade/>

        <Routes>
          <Route path='/HTML' element={<div><h2>HTML</h2><p>HELLO</p></div>} />
          <Route path='/CSS' element={<div><h2>CSS</h2><p>HELLO</p></div>} />
          <Route path='/Javascript' element={<div><h2>Javascript</h2><p>HELLO</p></div>} />
          <Route path='/sai' element={<div><h2>Sai</h2><p>Sai</p></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;