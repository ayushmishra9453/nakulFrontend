import Footer from './components/Footer';
import Home from './components/Home';
import House from './components/House';
import MainCard from './components/MainCard';


function App() {
  return (
    <div className="flex flex-col h-full w-full">
    <Home/>
    <MainCard/>
   <House/>
   <Footer/>
    </div>
  );
}

export default App;
