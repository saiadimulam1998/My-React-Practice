import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <h2>Tutorial Home</h2>
        <ol>
          <li> <Link to="/HTML">HTML</Link></li>
          <li><Link to="/CSS">SAI</Link></li>
          <li><Link to="/Arey Babu Liesen care fully">SAI</Link></li>
          <li>Javascript</li>
        </ol>
        <hr size="4" noshade/>

        <Routes>
          <Route path='HTML' element={<div><h2>HTML</h2><p>HELLO</p></div>} />
          <Route path='/CSS' element={<div><h2>CSS</h2><p>CSS</p></div>} />
          <Route path='/Javascript' element={<div><h2>Javascript</h2><p>HELLO</p></div>} />
          <Route path='/sai' element={<div><h2>Javascript</h2><p>HELLO</p></div>} />
          <Route path='/Arey Babu Liesen care fully' element={<div>Sure</div>} />
          <Route path='/' element={<div>React Router Dom </div>} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;