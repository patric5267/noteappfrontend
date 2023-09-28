//import Home from './components/Home';
import Login from "./components/Login";
import Sign from "./components/Sign";
import Overviewpage from "./components/Overviewpage";
import Home from "./components/Home";
import Setting from "./components/Setting";
import Addnote from "./components/Addnote";
import Updatenote from "./components/Updatenote";
import Chat from "./components/Chat";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

function App() {
  return (
  <>
  <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/overviewpage" element={<Overviewpage/>}/>
      <Route path="/sign" element={<Sign/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/setting/:id" element={<Setting/>}/>
      <Route path="/addnote" element={<Addnote/>}/>
      <Route path="/update" element={<Updatenote/>}/>
      <Route path="/chat" element={<Chat/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
