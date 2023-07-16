import { Outlet } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
const App = () => (
  <div className="App">
   <Header/>
   <Outlet/>
   <Footer/>
  </div>
);

export default App
