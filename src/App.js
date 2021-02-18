import "./App.css";
import routes from "./config/routes";
import Navbar from "./containers/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      {routes}
    </div>
  );
}

export default App;
