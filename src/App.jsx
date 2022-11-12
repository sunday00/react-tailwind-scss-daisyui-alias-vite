import { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from '@v/Home.jsx';

function App() {


  return (
    <div className="App" data-theme="dracula">
      <nav>
        <NavLink className={ a => `btn btn-info btn-xs active-${a.isActive}` } to={'/'}>home</NavLink>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
