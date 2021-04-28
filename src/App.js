import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';


import Home from './comp/Home';
import About from './comp/About';




function App() {
  return (
    <div className="App">

    <Switch>
        <Route exact path = '/' > <Home /> </Route>
        <Route path = '/about'> <About /> </Route>
    
    
    </Switch>


    </div>
  );
}

export default App;
