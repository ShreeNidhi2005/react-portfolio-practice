import logo from './logo.svg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import ProjectData from './data/ProjectData';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project />
      <Footer/>
    </div>
  );
}

export default App;
