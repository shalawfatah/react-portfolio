import { Container, Grid } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Contact from './components/contact/Contact';

function App() {
  return (
    <Container className={'top_60'}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={3} lg={3} >
        <Sidebar />
      </Grid>
      <Grid item xs>
        <Router>
          <Header />
          <div className='main-content container_shadow'>
          <Switch>
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/' component={Resume} />
          </Switch>
          </div>
        </Router>
        <Footer />
      </Grid>
    </Grid>
    </Container>
  );
}

export default App;
