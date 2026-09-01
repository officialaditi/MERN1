import Footer from "./component/Footer";
import Header from "./component/Header";
import HomeScreen from "./Screen/HomeScreen";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
return (
 
   
   <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomeScreen/>} />
    </Routes>
    <Footer/>
   </BrowserRouter>


)
}
export default App;