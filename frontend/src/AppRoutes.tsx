
import { Route, Routes} from "react-router-dom";
import Contact from "./ui/pages/Contact";
import Home from "./ui/pages/Home";

const AppRoutes = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/iletisim' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default AppRoutes