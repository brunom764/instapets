import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import NewPostPage from "./pages/post";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/new-post" element={<NewPostPage/>} />
    </Routes>

  );
}

export default App;
