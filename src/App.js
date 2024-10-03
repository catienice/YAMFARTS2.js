import logo from './logo.svg';
import './App.css';
import About from './components/About'
import AboutDisplay from './components/AboutDisplay'
import Cards from './components/Cards'


function App() {
  return (
    <div className="App">
        <h1 id="name">YAMFARTS</h1>
        <img 
        id="logo"
        src="https://i.ibb.co/KG1S7mx/yamlogo.png"
        alt="YamFarts Logo"
        />
       <p>
        < Cards name='Garden Gnome'/>
        < Cards name='Garden Gnome'/>
       </p>
     </div>
  );
};

export default App;
