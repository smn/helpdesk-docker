import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import LoginView from 'views/LoginView/LoginView'
import InboxView from 'views/InboxView/InboxView'
import CaseView from 'views/CaseView/CaseView'
import FaqView from 'views/FaqView/FaqView'
import { MessageList, Message, CaseList, Case, CaseCreate, FaqCategoryList, FaqCategory } from 'components/'
import NotFoundView from 'views/NotFoundView/NotFoundView'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='login' component={LoginView} />
    <Route path='inbox' component={InboxView}>
      <IndexRoute component={MessageList}/>
      <Route path='message/:id' component={Message}/>
      <Route path='filter/:filter' component={MessageList}/>
    </Route>
    <Route path='cases' component={CaseView}>
      <IndexRoute component={CaseList}/>
      <Route path='create/:messageId' component={CaseCreate}/>
      <Route path='case/:id' component={Case}/>
      <Route path='filter/:filter' component={CaseList}/>
    </Route>
    <Route path='faqs' component={FaqView}>
      <IndexRoute component={FaqCategoryList}/>
      <Route path='category/:id' component={FaqCategory}/>
    </Route>
    <Route path='/404' component={NotFoundView} />
    <Redirect from='*' to='/404' />
  </Route>
)
