import Register from './pages/registration';
import Login from './pages/login'
import './App.css';
import {BrowserRouter,Switch,Route , Redirect} from 'react-router-dom';
import CustomerDashboard from './pages/CustomerDashboard';
import 'bootstrap/dist/css/bootstrap.css'
import Customeraddjob from './pages/Customeraddjob';
import CustomerNavigation from './pages/CustomerNavigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/user/login"}/>
        </Route>
        <Route path={"/user/signup"} exact>
          <Register/>
        </Route>
        <Route path={"/user/login"} exact>
          <Login/>
        </Route>
        <Route path={"/customer/dashboard"} exact>
          
      <CustomerNavigation/>
          <CustomerDashboard/>
        </Route>
        <Route path={"/customer/addjob"} exact>
          
      <CustomerNavigation/>
          <Customeraddjob/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
