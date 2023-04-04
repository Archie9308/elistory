import AudioGuide from "./components/AudioGuide/AudioGuide";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="audio" element={<AudioGuide />}></Route>
            <Route></Route>
            <Route></Route>
          </Route>
        </Routes>
        <AudioGuide />
      </div>
    </BrowserRouter>
  );
}

export default App;
