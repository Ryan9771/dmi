import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Accessibilty from "./pages/Accessibilty";
// import Upload from "./pages/Upload";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accessibility" element={<Accessibilty />} />
        {/* <Route path="/upload/file" element={<Upload />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
