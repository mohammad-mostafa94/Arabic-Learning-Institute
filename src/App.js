import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import About from "./components/AboutUs/About";
import Community from "./components/Community/Community";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Service/Services";

function App() {
  return (
    <Router>
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/home" component={HomePage}/>
      <Route exact path="/service" component={Services}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/community" component={Community}/>

      <Route  path="*" component={NotFound}/>
        
    </Switch>
    <Footer/>
  </Router>
  );
}

export default App;
