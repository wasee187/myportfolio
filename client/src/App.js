import Nav from './component/navSection/Nav.jsx';
import Footer from './component/footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Project from './pages/work/Project.jsx';
import Login from './pages/login/Login.jsx';
import Write from './pages/write/Write.jsx';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context.js';

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/project/:projectId'>
            <Project />
          </Route>
          <Route path='/logADin'>{user ? <Home /> : <Login />}</Route>
          <Route path='/addNew'>{user ? <Write /> : <Home />}</Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
