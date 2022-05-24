import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Authentication from './pages/Login/Authentication';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgetPass from './pages/Login/ForgetPass';
import PrivateRouter from './Shared/PrivateRoute';
import ToolDetails from './pages/Home/ToolDetails';
import Dashboard from './pages/Dashboard/Dashboard';
import MyProfile from './pages/Dashboard/MyProfile';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tool/:id' element={<PrivateRouter><ToolDetails /></PrivateRouter>}></Route>
        <Route path='/dashboard' element={<PrivateRouter><Dashboard /></PrivateRouter>}>
          <Route index element={<MyProfile />}></Route>
          <Route path='myOrder' element={<MyOrders />}></Route>
          <Route path='addReview' element={<AddReview />}></Route>
        </Route>
        <Route path='/login' element={<Authentication></Authentication>}></Route>
        <Route path='/forgetPass' element={<ForgetPass></ForgetPass>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
