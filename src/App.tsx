
import './App.scss';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import ContextProvider from './Context/Context';
function App() {
  return (
    <ContextProvider>
    <div className="App">
     <Header />
     <Section1 />
     <Section2 />
     <Section3 />
    </div>
    </ContextProvider>
  );
}

export default App;
