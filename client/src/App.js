import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import About from "./pages/About.js";
import PageNotFound from "./pages/PageNotFound";
import Policy from "./pages/Policy.js";
import Contact from "./pages/Contact.js";
import Register from "./pages/Auth/Register.js";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Auth/Login.js";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
