import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Home from "./pages/Home";
import Logo from "../src/assets/PNG/logo.png";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
          <Home />
        </>
      )}
    </>
  );
}

export default App;
