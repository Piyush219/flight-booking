import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainBodyContainer from './components/MainBodyContainer/MainBodyContainer';
import { Route, Routes } from 'react-router-dom';
import CustomerDashboard from './components/CustomerDashboard/CustomerDashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';


function App() {
  return (
   <div>
      <h3 className='centerHeading'>
        As Design was not there,so created this simple UI but all the required
        functionalities are implements
      </h3>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainBodyContainer />} />
          <Route path='/customerDashboard' element={<CustomerDashboard />} />
          <Route path='/adminDashboard' element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
