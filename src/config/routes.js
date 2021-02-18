import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import TodosContainer from '../containers/TodosContainer';


export default (
<div className="container">
<Switch>
  <Route exact path='/' component={ Home } />    
  <Route path='/todo' component={ TodosContainer } />
</Switch>
</div>
);