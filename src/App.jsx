import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import "./db/sdk";

const App = () => {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }
    }, 0);
  }, [hash]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // const { user } = useData() || {};
  // console.log("from App.js " + user);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default App;
