import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Loyaut from "./components/loyaut/Loyaut";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-content">
          <Loyaut />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
