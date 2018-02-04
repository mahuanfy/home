import React, {Component} from 'react'
import BlogIndex from './components/blog/index'
import BlogDetail from './components/blog/blog-detail'
import TimeIndex from './components/time/index'
import BlogAdd from './components/blog/manage/bolg-add'
import TagAdd from './components/blog/manage/tag-add'
import Index from './components/index'
import {Route, HashRouter as Router} from 'react-router-dom'
import Layout from './components/common/layout/layout'

class App extends Component {
  render () {
    return (
      <Router>
        <Layout>
          <Route exact path='/' component={Index} />
          <Route exact path='/blogs' component={BlogIndex} />
          <Route exact path='/manage/blogs' component={BlogAdd} />
          <Route exact path='/manage/tags' component={TagAdd} />
          <Route exact path='/blogs/:id' component={BlogDetail} />
          <Route exact path='/time' component={TimeIndex} />
        </Layout>
      </Router>
    )
  }
}

export default App
