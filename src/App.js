import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Header />
                <Hero />
              </>
            }
          />
          <Route path="/channels" exact element={<Home />} />
          <Route path="/channels/:id" exact element={<Home />} />
        </Routes>
        {/* <Hero /> */}
      </Router>
    </div>
  );
}

export default App;
