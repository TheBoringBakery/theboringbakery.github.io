import Header from './components/Header.js'
import Home from './components/Home.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Timeline from './components/Timeline.js'
import NoMatch from './components/NoMatch.js'
import ResponseForm from './components/ResponseForm.js'
import './components/Clash.css';
import {Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App boddy">
        <Header />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/MoonCaker">
              <Redirect to="/" />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/timeline">
                <Timeline />
            </Route>
            <Route exact path="/response_suggestion">
                <ResponseForm />
            </Route>
            <Route>
                <NoMatch />
            </Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
