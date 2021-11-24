
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import JumboTron from './components/JumboTron';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <JumboTron/>
     <Portfolio/>
     <About/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
