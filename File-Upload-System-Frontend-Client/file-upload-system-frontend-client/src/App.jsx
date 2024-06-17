import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddFile from "./components/AddFile";
import ShowFiles from "./components/ShowFiles";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ShowFiles />} />
          <Route path="/add-file" element={<AddFile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
