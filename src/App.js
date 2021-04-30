import logo from './logo.svg';
import './App.css';
import {Route, useLocation, Switch, useHistory} from 'react-router-dom';


import Home from './comp/Home';
import About from './comp/About';
import Contact from './comp/Contact';




function App() {
    
    return (
        <div className = 'App'>
            <Switch>
                <Route exact path = '/'> <Home /> </Route>
                <Route path = '/about'> <About /> </Route>   
                <Route path = '/contact'> <Contact /> </Route>  
            </Switch>
            
        </div>
    );
}

export default App;

