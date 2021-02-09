import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';

import HomePortofolio from './pages/HomePortofolio/HomePortofolio';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>/</div>}>
        <Switch>
          <Route path="/" component={HomePortofolio} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
