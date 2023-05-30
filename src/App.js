import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Login from './components/signin';
import Admin from './components/admin';
import { Routes ,BrowserRouter,Route, useNavigate } from 'react-router-dom';
import UserPage from './components/userpage';
import Createexp from './components/createexp';
import Viewuserexpenses from './components/viewuserexpenses';
import Expenseview from './components/expenseview';
import Createuser from './components/createuser';
import AdminExpenseView from './components/adminexpenseview';
import EditUser from './components/edituser';
import pools from './components/images/pools.jpeg'
import yubi from './components/images/Yubi.jpeg'
import { useEffect } from 'react';
import Viewdoc from './components/viewdoc';

const Routing =()=>{
  const navigate=useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('user_id')) navigate('/')
  },[])
  return(
    <Routes>
      <Route exact path="/users/admin" element={<Admin></Admin>}></Route>
      <Route exact path="/" element={<Login></Login>}></Route>
      <Route exact path='/userpage/:id' element={<UserPage></UserPage>}></Route>
      <Route exact path='/createexp/:id' element={<Createexp></Createexp>}></Route>
      <Route exact path='/viewuserexpenses/:id' element={<Viewuserexpenses></Viewuserexpenses>}></Route>
      <Route exact path='/expenseview/:id' element={<Expenseview></Expenseview>}></Route>
      <Route exact path='/createuser' element={<Createuser></Createuser>}></Route>
      <Route exact path='/adminexpenseview/:id' element={<AdminExpenseView></AdminExpenseView>}></Route>
      <Route exact path='/edit/:id' element={<EditUser></EditUser>}></Route>
      <Route exact path='/viewdoc' element={<Viewdoc></Viewdoc>}></Route>
    </Routes>
  )
}
function App() {
  
  return (
    <div className="App" style={{backgroundImage: `url(${yubi})`,height:"106vh"}}>
      
     <BrowserRouter>
      <Routing></Routing>
     </BrowserRouter>
    </div>
  );
}

export default App;
