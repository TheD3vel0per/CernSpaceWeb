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

// pages
import HomePage from './pages/HomePage';
import SamplePage from './pages/SamplePage';

class App extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render(): any {
    return (
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/sample' component={SamplePage}></Route>
          <Route path='/' component={HomePage}></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
