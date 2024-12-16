import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Home from "./pages/Home";
import Logo from "../src/assets/PNG/logo.png";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();
  const validPaths = ['/',]

  //show nav bar
  const showNavBar = validPaths.includes(location.pathname);

  

  const PageLoading = () => {
    return (
      <motion.div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        className="loading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={Logo}
          style={{
            width: "500px",
            height: "auto",
          }}
          alt="logo"
          initial={{ y: 0 }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </motion.div>
    );
  };

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <>
         <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
