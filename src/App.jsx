import { BrowserRouter } from "react-router-dom";
import Header from "./loyouts/Header";
import Router from "./router/Router";

function App() {
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
