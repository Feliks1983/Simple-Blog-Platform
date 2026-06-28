import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./loyouts/Header";
import { loadStory } from "./features/post/createSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStory());
  }, [dispatch]);

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <div className="main">
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
