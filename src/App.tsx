import { BrowserRouter, Routes, Route } from "react-router-dom";
import _App from "./components/_App";
import PageNotFound from "./components/PageNotFound";
import Form from "./components/firebaseTest/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<_App />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
