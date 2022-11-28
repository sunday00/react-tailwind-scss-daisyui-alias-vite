import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from '@v/Home.jsx';
import Nav from "@c/Nav.jsx";

function App() {


  return (
    <RecoilRoot>
      <div className="App" data-theme="dracula">
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App
