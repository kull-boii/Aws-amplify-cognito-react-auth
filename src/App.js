import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import PremiumPage from "./components/PremiumPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavLink
            exact="true"
            activeClassName="active"
            to="/"
            className="content"
          >
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/about" className="content">
            About
          </NavLink>
          <NavLink activeClassName="active" to="/premium" className="content">
            Premium Content
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/premium" element={<PremiumPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
