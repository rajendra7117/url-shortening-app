
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import ContextProvider from './Context/Context';

function App() {
  return (
    <ContextProvider>
    <div className="App">
     <Header />
     <Section1 />
     <Section2 />
     <Section3 />
     <Section4 />
     <Footer />
    </div>
    </ContextProvider>
  );
}

export default App;
