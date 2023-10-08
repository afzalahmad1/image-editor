import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import {Editor} from "./pages/Editor"
import Header from "./components/Header";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/upload" element={<Editor/>} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
