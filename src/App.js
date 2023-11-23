import './App.css';

import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  // pageSize = 12;
  // apiKey = '83021bb6af17429aaa14055e1284a0f5'

  const [progress,setProgress] = useState(0);

  // state = {
  //   progress: 0,
  // };
  // setProgress = (progress)=>{
  //   setState({
  //     progress:progress
  //   })
  // };

  let progressBar = ()=>{
    setProgress({
      progress: progress
    });
  };

    return (
      <>
      <Router>
        <div>
          <Navbar/>
          <LoadingBar
            height= {3}
            color='#f11946'
            progress={progress}
          />
          <Switch>
            <Route exact path="/"><News setProgress={progressBar} key="general" category="general"/></Route>
            <Route exact path="/business"><News setProgress={progressBar} key="business" category="business"/></Route>
            <Route exact path="/entertainment"><News setProgress={progressBar} key="entertainment" category="entertainment"/></Route>
            <Route exact path="/general"><News setProgress={progressBar} key="general" category="general"/></Route>
            <Route exact path="/health"><News setProgress={progressBar} key="health" category="health"/></Route>
            <Route exact path="/science"><News setProgress={progressBar} key="science" category="science"/></Route>
            <Route exact path="/sports"><News setProgress={progressBar} key="sports" category="sports"/></Route>
            <Route exact path="/technology"><News setProgress={progressBar} key="technology" category="technology"/></Route>
          </Switch>
        </div>
      </Router>
      </>
    )
}

export default App
