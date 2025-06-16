
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ClubDataScreen from "./screens/ClubDataScreen";
import Games from "./screens/Games";
import BettingScreen from "./screens/BettingScreen";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ClubDataScreen />} />
      <Route path="/games/:clubId" element={<Games />} />
      <Route path="/games/:clubId/:gameId" element={<BettingScreen />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
