import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { AppHeader, About, Projects, SingleProject } from './components';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <AppHeader />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/project/:slug' component={SingleProject} />
            <Redirect to='/' />
          </Switch>
        </div>
      </Router>
      <footer className='app-footer'>
        Contact me: alexandrpedenko@gmail.com
      </footer>
    </div>
  );
};

export default App;
