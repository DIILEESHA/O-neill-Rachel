import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import RsvpForm from "./pages/rsvps/RsvpForm";
import AdminDashboard from "./pages/rsvps/AdminDashboard";
import "./App.css";
import Nav from "./components/nav/Nav";

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

const App = () => {
  // const location = useLocation();

  // Show Nav only on Home page
  // const showNav = location.pathname === "/";

  return (
    <div className="tex">
      {/* {showNav && <Nav />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RsvpForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default AppWrapper;
