
import './App.css';
import Contributors from './components/Contributors/Contributors';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
     <div className='app_style'>
      <Navbar/>
      <Contributors/>
      <HomePage/>
      <Footer/>
     </div>
  );
}

export default App;
