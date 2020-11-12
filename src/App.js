import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Helmet>
                <style>
                    {
                        `body {
                            background-image: url("https://res.cloudinary.com/artemiswang/image/upload/v1605131792/background_img_y89c9e.png")
                        }`
                    }
                </style>
            </Helmet>
            <NavBar />
            <Switch>
                <Route exact path={["/", "/about"]} component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                <Route component={NoMatch} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
