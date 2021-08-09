import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import ScrollToTop from './components/ScrollToTop';
import More from './components/pages/More';
import Kimco from './components/projects/Kimco';
import Assesment from './components/projects/Assesment';
import Routing from './components/projects/Routing';
import String from './components/projects/String';
import Hack from './components/projects/Hack';



function App() {
  return (
    <>
    <Router>
      <ScrollToTop /> 
    <Header /> 
      <Switch> 

        <Route path='/' exact component={Home}/>
        <Route path='/projects' component={Projects}/> 
        <Route path='/more' component={More}/> 
        <Route path='/contact' component={Contact}/>
        <Route path='/kimco' component={Kimco}/>
        <Route path='/assesment' component={Assesment}/>
        <Route path='/routing' component={Routing}/>
        <Route path='/hack' component={Hack}/>
        <Route path='/string' component={String}/>
        
      </Switch>
     
    </Router>
      </> 
    
  )
}

export default App;
