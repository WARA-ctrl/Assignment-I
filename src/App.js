import "./App.css";
import SearchInput from "./SearchInput";
import Data from "./Data";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/parti" element={<SearchInput />} />
          <Route path="/partii" element={<Data />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
