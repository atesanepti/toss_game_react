import Layer from "./Components/Layer";
import TossHome from "./Pages/TossHome";
import LuckGameHome from "./Pages/LuckGameHome";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layer>
          <Routes>
            <Route path="/" element={<TossHome />} />
            <Route path="/Game" element={<LuckGameHome />} />
          </Routes>
        </Layer>
      </BrowserRouter>
    </>
  );
}

export default App;
