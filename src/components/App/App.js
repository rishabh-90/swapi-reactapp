import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import People from '../People/People';
import Movie from '../Movie/Movie';
import Planet from '../Planet/Planet';

const App = () =>{
    return(
        <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId(\d+)" component={Movie} exact />
          <Route path="/people" component={People} exact />
          <Route path="/planet" component={Planet} exact />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
    )
}

export default App