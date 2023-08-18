import { BrowserRouter, Routes, Route } from "react-router-dom";
import _App from "./pages/_App";
import PageNotFound from "./pages/PageNotFound";
import GetFromDatabase from "./components/firebaseTest/GetFromDatabase";
import PushToDatabase from "./components/firebaseTest/PushToDatabase";
import FileUpload from "./components/firebaseTest/FileUpload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<_App />} />
        <Route path="/get/database" element={<GetFromDatabase />} />
        <Route path="/upload/database" element={<PushToDatabase />} />
        <Route path="/upload/file" element={<FileUpload />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
