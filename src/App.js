import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Exchanges from './components/Exchanges'
import Coin from './components/Coin'
import Footer from "./components/Footer";
import CoinDetails from "./components/CoinDetails";


function App() {
  return (
      <Router>
        <Header/>
       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Coin" element={<Coin/>} />
          <Route path="/Exchanges" element={<Exchanges/>} />
          <Route path="/coin/:id" element={<CoinDetails/>} />
          
        </Routes>
        
        <Footer/>
      </Router>
  );
}

export default App;
