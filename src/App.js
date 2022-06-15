import './header.css';
import User from "./components/user"
import Navbar from "./components/Navbar"
function App() {
  return (
    <div className="header">
      <Navbar  title="User App"/>
      <hr/>
      <User
      name="Sahil Mamedov"
      age="25"
      salary="3000"
      />
       <User
      name="Ugur Emen"
      age="24"
      salary="3500"
      />
       <User
      name="Remzi Gotder veren"
      age="24"
      salary="6000"
      />
      
    </div>
  );
}

export default App;
