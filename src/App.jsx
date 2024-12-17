import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Logo from "../src/assets/PNG/NAA_AMANUA.png";
import { motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const News = React.lazy(() => import("./pages/News"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();
  const validPaths = ['/', '/about'];

  // Show NavBar only on certain paths
  const showNavBar = validPaths.includes(location.pathname);

  // Loading Component
  const PageLoading = () => (
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
          width: "300px",
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
      <Typography variant = 'body1' style={{color: "#000"}}>Please wait while we load the page...</Typography>
    </motion.div>
  );

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <>
          {showNavBar && <NavBar />}
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;
