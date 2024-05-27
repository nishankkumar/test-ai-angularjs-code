import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useRootScope from './hooks/useRootScope';

// Import all the route components
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Services from './routes/Services';
import Portfolio from './routes/Portfolio';
import Blog from './routes/Blog';
import FAQ from './routes/FAQ';

const App: React.FC = () => {
  const { rootScopeState, setRootScopeAttribute } = useRootScope();

  useEffect(() => {
    // Fixing facebook bug with redirect
    if (window.location.hash === '#_=_') {
      window.location.hash = '#!';
    }

    // Add any other initialization logic here
    // SECOND AGENT: [MISSING CONTEXT] - Add any additional initialization logic if needed
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
        <Route path="/faq" component={FAQ} />
      </Switch>
    </Router>
  );
};

export default App;