import { BrowserRouter, Routes, Route } from "react-router-dom";
import _App from "./components/_App";
import PageNotFound from "./components/PageNotFound";
import GetFromDatabase from "./components/firebaseTest/GetFromDatabase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<_App />} />
        <Route path="/form" element={<GetFromDatabase />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
