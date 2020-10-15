import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ArticleListing from './components/pages/ArticleListing'
import Article from './components/pages/Article'
import AddPost from './components/pages/AddPost'
import PageNotFound from './components/pages/PageNotFound'


const Routes = () => (
  <Switch>
    <Route path='/' exact component={ArticleListing} />
    <Route path='/articles' exact component={ArticleListing} />
    <Route path='/article/:id' exact component={Article} />
    <Route path='/add' exact component={AddPost} />
    <Route path="/page-not-found" exact component={PageNotFound} />
    <Redirect to="/page-not-found" />
  </Switch>
)

export default Routes
