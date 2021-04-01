// Functional Imports
import { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Page Imports
import Home from './pages';
import './App.css';

// Component Imports
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

// Main App
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
 
 
// Tawk To
  (function () {
    var s1 = document.createElement('script'),
      s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6050d522f7ce18270930b107/1f0ts13mn';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();

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
            <CSSTransition key={location.key} timeout={200} classNames='fade'>
              <Switch location={location}>
                <Route path='/' component={Home} exact />
                <Suspense fallback={<div></div>}>
                  <Route path='/download' component={DownloadPage} exact />
                  <Route path='/tools' component={Tools} exact />
                  <Route path='/phishing' component={Phishing} exact />
                  <Route path='/malware' component={Malware} exact />
                  <Route path='/virussen' component={Virussen} exact />
                  <Route path='/nepnieuws' component={Nepnieuws} exact />
                  <Route path='/meer-gevaren' component={Gevaren} exact />
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
