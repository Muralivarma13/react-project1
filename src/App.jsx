import Application from "./components/Appliction";
import CustomCarousel from "./components/customCoursel";
import Customnavbar from "./components/customNavbar";
import { CustomSpinner } from "./components/customSpinner";
import FetchProducts from "./components/FetchProduct";



function App(){
  return(
    <>
    <Customnavbar/>
    <CustomCarousel/>
    <CustomSpinner/>
    <FetchProducts/>
    {/* <Application/> */}
    </>
  )
}


export default App
