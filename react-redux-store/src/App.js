import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
      <Route path="/" exact component={ProductListing} />
      <Route path="/product/:productId" exact component={ProductDetail} />
      <Router>404 Not Found!</Router>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
