
import './App.scss';
import Header from './components/Header';
import Section2 from './components/Section2';
import ContextProvider from './Context/Context';
function App() {
  return (
    <ContextProvider>
    <div className="App">
     <Header />
     <Section2 />
    </div>
    </ContextProvider>
  );
}

export default App;
