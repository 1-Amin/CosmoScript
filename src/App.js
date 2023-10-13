import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tariff from "./pages/Tariff";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tariffs" element={<Tariff />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
