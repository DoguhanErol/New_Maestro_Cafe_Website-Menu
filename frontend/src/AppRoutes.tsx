
import { Route, Routes} from "react-router-dom";
import Contact from "./ui/pages/Contact";
import Home from "./ui/pages/Home";
import Menu from "./ui/pages/Menu";

const AppRoutes = () => {
  return (
    <>
      <Routes>
          <Route path='/'  element={<Home />}/>
          <Route path='/iletisim'  element={<Contact />}/>
          <Route path='/menu'  element={<Menu />}/>
          <Route path='/menu/:categoryId'  element={<Menu />}/>
          <Route path='*'  element={'Error'}/>
      </Routes>
    </>
  )
}

export default AppRoutes