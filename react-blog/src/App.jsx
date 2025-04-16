import "./App.css";
import NavBar from "./navBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./mainSection/PostList";
import PostDetail from "./mainSection/PostDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="*" element={<PostList />} />
      </Routes>
      <footer className="footer">
        <p>© 2023 W Blog. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
