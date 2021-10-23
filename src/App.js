import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import Users from "./components/Users/Users";
import Header from './components/Header/Header';
import AddProduct from "./components/AddUser/AddProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/users">
              <Users></Users>
            </Route>
            <Route path="/product/add">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/product/update/:id">
              <UpdateUser></UpdateUser>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
