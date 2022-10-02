import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Theming imports
import { GlobalStyles } from "./styles/GlobalStyles";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));

function App() {
  return (

    <>

      <Router>
        
        <Suspense fallback={<div>Loading...</div>}>
          
          <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />

          </Routes>

        </Suspense>
      </Router>

      <GlobalStyles />

      </>

  );
}

export default App;
