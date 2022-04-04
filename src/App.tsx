import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';


 
function App() {
  return (

      <div className="App">
       <NavBar />
       <ShoppingList />
      </div>

  );
}

export default App;
