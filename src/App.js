import Register from './pages/registration';
import Login from './pages/login'
import './App.css';
import {BrowserRouter,Route,Routes,Router} from 'react-router-dom';
import CustomerDashboard from './pages/CustomerDashboard';
import 'bootstrap/dist/css/bootstrap.css'
import Customeraddjob from './pages/Customeraddjob';
import CustomerNavigation from './pages/CustomerNavigation';
import Adminnavigation from './pages/Adminnavigation';
import Adminndashboard from './pages/Admindashboard';
import Admineditjobs from './pages/Admineditjobs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/user/signup' element={<Register/>}/>
        <Route path='/user/login' element={<Login/>}/>
        <Route path='/customer/dashboard' element={<><CustomerNavigation/><CustomerDashboard/></>}/>
        <Route path='/customer/addjob' element={<><CustomerNavigation/><Customeraddjob/></>}/>
        <Route path='/admin/profile' element={<><Adminnavigation/><Adminndashboard/></>}/>      
        <Route path='/admin/editJob' element={<><Adminnavigation/> <Admineditjobs/></>}/>    
        </Routes>  
    </div>
  );
}

export default App;
