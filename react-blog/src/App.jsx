import "./App.css";
import NavBar from "./navBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./mainSection/PostList";
import PostDetail from "./mainSection/PostDetails";
import Contact from "./contactUsPage/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="*" element={<PostList />} />
        </Routes>
        <footer>
          <p>© 2025 W Blog. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
