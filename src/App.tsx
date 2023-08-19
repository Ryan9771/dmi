import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import GetFromDatabase from "./components/firebaseTest/GetFromDatabase";
import PushToDatabase from "./components/firebaseTest/PushToDatabase";
import Upload from "./pages/Upload";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get/database" element={<GetFromDatabase />} />
        <Route path="/upload/database" element={<PushToDatabase />} />
        <Route path="/upload/file" element={<Upload />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
