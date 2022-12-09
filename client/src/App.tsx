import Navbar from "./components/Navbar/Navbar";
import Chat from "./components/Chat/Chat";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App bg-[#121212] bg-cover">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
