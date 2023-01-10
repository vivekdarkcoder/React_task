import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/app.scss"
import "./style/header.scss"
import "./style/menu.scss"
import "./style/home.scss"
import Header from "./components/Header";
import Home from "./components/Home";
import ProductsPage from "./components/ProductsPage";
function App() {
  return (
    <Router>
    <Home/>
  </Router>
  );
}

export default App;
