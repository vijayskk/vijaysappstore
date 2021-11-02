import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Details from './components/Details';
import Categories from './components/Categories';
import Header from './components/Header';
import AllHome from './components/AllHome';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Categories />
        <Switch>
          <Route path="/" exact component={AllHome} />
          <Route path="/home" component={Home} />
          <Route path="/details" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
