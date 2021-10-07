import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import About from "./components/AboutUs/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Service from "./components/Service/Service";

function App() {
  return (
    <Router>
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/about" component={About}/>

      <Route path=""/>
        
    </Switch>
    <Footer/>
  </Router>
    // <div>
    //   <h1>Bismillah</h1>
      
    // </div>
  );
}

export default App;
