import AudioGuide from "./components/AudioGuide/AudioGuide";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Eat from "./components/Eat/Eat";
import PopularObj from "./components/AudioGuide/PopularObj/PopularObj";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="audio" element={<AudioGuide />}>
              <Route path="popular" element={<PopularObj />}></Route>
            </Route>
            <Route path="events" element={<Events />}></Route>
            <Route path="eat" element={<Eat />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
