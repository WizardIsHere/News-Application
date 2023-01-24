import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import "./App.css";
import Auth from "./pages/Auth/Auth";
import Dash from "./pages/DashBoard/Dash";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {

  const [isDash, setIsDash] = useState(true)

  return (
    <div>
      <Router>
        <AuthProvider>
        {!isDash ? <NavBar /> : ''}
          <Routes>
            <Route exact path="/" element={<ProtectedRoute><Dash /></ProtectedRoute>} />
            <Route path="/signup" element={<Auth/>} />
            <Route path="/login" element={<Login/>} />
            
            {/* Navbar Routes*/}
            <Route path="/general" element={<News cat={'general'} />} />
            <Route path="/business" element={<News cat={'business'} />} />
            <Route path="/entertainment" element={<News cat={'entertainment'} />} />
            <Route path="/health" element={<News cat={'health'} />} />
            <Route path="/science" element={<News cat={'science'} />} />
            <Route path="/technology" element={<News cat={'technology'} />} />
            <Route path="/sports" element={<News cat={'sports'} />} />
          </Routes>
          {/* Footer */}
          <Footer />
        </AuthProvider>
      </Router>

    </div>
  );
};

export default App;
