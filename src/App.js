import './App.css';
import Cards from './components/Cards'
import About from './components/About'



function App() {
  return (
    <div className="App">
      {/* <div>< About /></div> */}
        <h1 id="name">YAMFARTS</h1>
        <img 
          id="logo"
          src="https://i.ibb.co/KG1S7mx/yamlogo.png"
          alt="YamFarts Logo"
        />
        <img 
          id="logo"
          src="https://i.ibb.co/KG1S7mx/yamlogo.png"
          alt="YamFarts Logo"
        />
        <img 
          id="logo"
          src="https://i.ibb.co/KG1S7mx/yamlogo.png"
          alt="YamFarts Logo"
        />
        <h1 id="shop">SHOP</h1>
        <div>
          < Cards />
       </div>
     </div>
  );
};

export default App;


