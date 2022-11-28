import Register from './pages/registration';
import Login from './pages/login'
import './App.css';
import {Route,Routes} from 'react-router-dom';
import CustomerDashboard from './pages/CustomerDashboard';
import 'bootstrap/dist/css/bootstrap.css'
import Customeraddjob from './pages/Customeraddjob';
import CustomerNavigation from './pages/CustomerNavigation';
import Adminnavigation from './pages/Adminnavigation';
import Adminndashboard from './pages/Admindashboard';
import Admineditjobs from './pages/Admineditjobs';
import Jobseekernavigation from './pages/Jobseekernavigation';
import Jobseekerapplyjob from './pages/Jobseekerapplyjob';
import Jobseekerdasboard from './pages/Jobseekerdasboard';
import Jobseekerappliedjob from './pages/Jobseekerappliedjob';
import AdminCandidates from './pages/AdminCandidates';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Circuit-Breakers' element={<Login/>}/>
        <Route path='/user/signup' element={<Register/>}/>
        <Route path='/user/login' element={<Login/>}/>
        
        <Route path='/customer' element={<CustomerNavigation/>}>
        <Route path='addjob' element={<Customeraddjob/>}/>
        <Route path='dashboard' element={<CustomerDashboard/>}/>
        </Route>
        
        <Route path='/user' element={<Jobseekernavigation/>}>
        <Route path='applyjob' element={<Jobseekerapplyjob/>}/>
        <Route path='dashboard' element={<Jobseekerdasboard/>}/>
        <Route path='appliedjobs' element={<Jobseekerappliedjob/>}/>
        </Route>
        
        <Route path='/admin' element={<Adminnavigation/>}>
        <Route path='profile' element={<Adminndashboard/>}/>
        <Route path='editjob' element={<Admineditjobs/>}/>
        <Route path='candidates' element={<AdminCandidates/>}/>
        </Route>
      </Routes>  
    </div>
  );
}

export default App;
