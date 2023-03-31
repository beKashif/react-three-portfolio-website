import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Approach from './components/Approach';
import ThreeScene from './components/ThreeScene';

function App() {
  return (
   <>
   <Header />
   <ThreeScene />
   <Portfolio />
   <Skills />
   <Approach />
   </>
  );
}

export default App;
