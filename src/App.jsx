import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import Error from "./pages/Error/Error";
import Note from "./pages/Note/Note";
import Blogs from "./pages/Blogs/Blogs";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Poll from "./pages/Poll/Poll";
import SignUp from "./pages/Sign Up/SignUp";
import SignIn from "./pages/Sign In/SignIn";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Hero />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/note" element={<Note />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Poll />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
