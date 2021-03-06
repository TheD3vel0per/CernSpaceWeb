// react
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';

// pages
import HomePage from './pages/HomePage';
// import SamplePage from './pages/SamplePage';
import AboutUsPage from './pages/AboutUsPage';
import SingleProjectPage from './pages/SingleProjectPage';
import SearchPage from './pages/SearchPage';


import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render(): any {
    return (
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/project/:id' component={SingleProjectPage}></Route>
          <Route path='/about-us' component={AboutUsPage}></Route>
          <Route path='/search/:query' component={SearchPage}></Route>
          <Route path='/search/' component={SearchPage}></Route>
          <Route path='/' component={HomePage}></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
