import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import CartWidget from "./components/CartWidget"
import './App.css'
const App = () => {

  const greeting = "Welcome to my e-Commerce"

    return (
      <div className="app">
      <NavBar >
      <CartWidget/>
      </NavBar> 
      <ItemListContainer greeting={greeting}/>

      </div>
    )
}

export default App