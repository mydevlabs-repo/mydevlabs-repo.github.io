import "./App.css";

import TopNavbar from "./Components/Navbar";

import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer";

const Home = lazy(() => import("./Routes/Home"));
const Skills = lazy(() => import("./Routes/Skills"));
const Experience = lazy(() => import("./Routes/Experience"));
const Graduation = lazy(() => import("./Routes/Graduation"));
const Ssc = lazy(() => import("./Routes/Ssc"));
const Hsc = lazy(() => import("./Routes/HighSchool"));
const PageNotFound = lazy(() => import("./Components/PageNotFound"));
const Loading = lazy(() => import("./Components/Loading"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <>
          <TopNavbar></TopNavbar>
        </>

        <Routes>
          <Route path="/skills" element={<Skills />} />

          <Route path="/experience" element={<Experience />} />

          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} replace>
            <Route index path="grad" element={<Graduation />} />
            <Route path="ssc" element={<Ssc />} />
            <Route path="hsc" element={<Hsc />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </Suspense>
  );
}

export default App;
