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

 (function (d, m) {
  var kommunicateSettings = {
   appId: '23cddffdce5721a0eb1952c01bb81b91',
   popupWidget: true,
   automaticChatOpenOnNavigation: true,
  };
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
  var h = document.getElementsByTagName('head')[0];
  h.appendChild(s);
  window.kommunicate = m;
  m._globals = kommunicateSettings;
 })(document, window.kommunicate || {});

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
