import { Routes, Route } from "react-router-dom";

import "./style.css";
import { AuthenticatePage, LandingPage } from "./components/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthenticatePage />}></Route>
        <Route path="/home" element={<LandingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
