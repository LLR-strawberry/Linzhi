import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom'
import DefaultLayout from './DefaultLayout'
import PrimaryLayout from './PrimaryLayout'
import routes from '@/router'
import theme from '@/config/theme'

// 根据theme设置layout
class MainLayout extends Component {
  render() {
    return (
      <div>
        {theme.layout === 'primary' ? (
          <PrimaryLayout children={this.props.children} />
        ) : (
          <DefaultLayout children={this.props.children} />
        )}
      </div>
    )
  }
}

class Layout extends Component {
  render() {
    return (
      <Switch>
        {routes.map((item, index) => (
          <Route
            key={item.path}
            path={item.path}
            render={() => {
              if (item.noLayout) {
                return <Route component={item.component} />
              }
              return (
                <MainLayout>
                  <Route component={item.component} />
                </MainLayout>
              )
            }}
          />
        ))}
      </Switch>
    )
  }
}

export default withRouter(Layout)
