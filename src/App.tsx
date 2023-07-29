import { BrowserRouter, Routes, Route } from "react-router-dom";
import _App from "./components/_App";
import PageNotFound from "./components/PageNotFound";
import GetFromDatabase from "./components/firebaseTest/GetFromDatabase";
import PushToDatabase from "./components/firebaseTest/PushToDatabase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<_App />} />
        <Route path="/form" element={<GetFromDatabase />} />
        <Route path="/upload" element={<PushToDatabase />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
