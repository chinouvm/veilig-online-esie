import { useState, Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ScrollToTop = lazy(() => import('./components/Scroll'));
const Sidebar = lazy(() => import('./components/Sidebar'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const About = lazy(() => import('./components/about'));
const DownloadPage = lazy(() => import('./pages/download'));
const Tools = lazy(() => import('./pages/tools'));
const Phishing = lazy(() => import('./pages/phishing'));
const Malware = lazy(() => import('./pages/malware'));
const Virussen = lazy(() => import('./pages/virussen'));
const Gevaren = lazy(() => import('./pages/gevaren'));
const Nepnieuws = lazy(() => import('./pages/nepnieuws'));

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <ScrollToTop />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
      </Suspense>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={200} classNames="fade">
              <Switch location={location}>
                <Route path="/" component={Home} exact />
                <Suspense fallback={<div></div>}>
                  <Route path="/download" component={DownloadPage} exact />
                  <Route path="/tools" component={Tools} exact />
                  <Route path="/phishing" component={Phishing} exact />
                  <Route path="/malware" component={Malware} exact />
                  <Route path="/virussen" component={Virussen} exact />
                  <Route path="/nepnieuws" component={Nepnieuws} exact />
                  <Route path="/meer-gevaren" component={Gevaren} exact />
                </Suspense>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
      <Suspense fallback={<div></div>}>
        <About />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
