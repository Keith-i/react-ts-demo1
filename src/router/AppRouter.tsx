import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import List from '../pages/List'

export default class AppRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/list" component={List}></Route>
        </Switch>
      </HashRouter>
    )
  }
}