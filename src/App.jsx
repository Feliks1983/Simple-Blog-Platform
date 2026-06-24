import { BrowserRouter } from "react-router-dom";
import Header from "./component/header/Header";
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
