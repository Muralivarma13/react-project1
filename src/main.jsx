import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

// import UserList from './components/profile.jsx'
import FruitsList from './components/Fruits.jsx'
import Customnavbar from './components/customNavbar.jsx';
import CustomCoursel from './components/customCoursel.jsx';
import { CustomSpinner } from './components/customSpinner.jsx';
import Customcard from './components/customCard.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Customnavbar/>
    <CustomCoursel/>
    <CustomSpinner/>
    <Customcard/>
  
    {/* <UserList/> */}
    <FruitsList/>
  </StrictMode>,
)
