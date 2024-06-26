import React from 'react'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import News from './components/News';

const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" ><News key="general" category="general"/></Route>
        <Route exact path="/general" ><News key="general" category="general"/></Route>
        <Route exact path="/business" ><News key="business" category="business"/></Route>
        <Route exact path="/entertainment" ><News key="entertainment" category="entertainment"/></Route>
        <Route exact path="/general" ><News key="general" category="general"/></Route>
        <Route exact path="/health" ><News key="health" category="health"/></Route>
        <Route exact path="/science" ><News key="science" category="science"/></Route>
        <Route exact path="/sports" ><News key="sports" category="sports"/></Route>
        <Route exact path="/technology" ><News key="technology" category="technology"/></Route>
      </Switch>
    </div>
    </Router>
  )
}

export default App
