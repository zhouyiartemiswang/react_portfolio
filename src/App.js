import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path={["/", "/about"]} component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                <Route component={NoMatch} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
