import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import Bourbon from './pages/Bourbon'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header className="test">
        <h1></h1>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/"><p>Bourbon</p></Link>
            </li>
            <li>
              <Link to="/1"><p>Tequila</p></Link>
            </li>
            <li>
              <Link to="/2"><p>Craft Cocktails</p></Link>
            </li>
            <li>
              <Link to="/3"><p>Beer/Wine</p></Link>
            </li>
            <li>
              {/* <Link to="/4"><p>Rum</p></Link> */}
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Bourbon}></Route>
        <Route exact path="/1" component={Page}></Route>
        <Route exact path="/2" component={Page2}></Route>
        <Route exact path="/3" component={Page3}></Route>
        <Route exact path="/4" component={Page4}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
