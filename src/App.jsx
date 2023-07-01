import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { routes } from "./Routes/utils/routes";
import { useGlobalContext } from "./Components/utils/global.context";
import './index.css'




function App() {
  
  const {dentistsStates} = useGlobalContext();
  return (
      <div className={`App ${dentistsStates.theme}`}>
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={`${routes.detail}/:id`} element={<Detail/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;