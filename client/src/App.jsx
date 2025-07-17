import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Checklab-Project" element={<Login/>}/>
        <Route path="/Checklab-Project" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
