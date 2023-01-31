import Game  from "./components/Game";
import Home  from "./components/Home";
import { GameContextProvider } from "./GameContext";
import { Route, Routes } from "react-router-dom"


function App() {
  
  return (
  <GameContextProvider>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Game/>} path='/game'/>
    </Routes>
  </GameContextProvider>  
  );
}

export default App;
