import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  withRouter
} from 'react-router-dom'
import DefaultLayout from './DefaultLayout'
import PrimaryLayout from './PrimaryLayout'
import routes from '@/router'
import { pathReg } from '@/utils'
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
  // 递归路由
  generateRoute = routes => {
    const { match } = this.props
    return routes.map(item => {
      if (item.children) {
        return this.generateRoute(item.children)
      }
      return (
        <Route
          key={item.path}
          path={pathReg(match.path + item.path)}
          render={() => {
            if (item.noLayout) {
              return <Route component={item.component} />
            }
            return (
              <MainLayout>
                <Route component={item.component} exct={item.path === '/'} />
                {item.redirect && <Redirect to={pathReg(item.redirect)} />}
              </MainLayout>
            )
          }}
        />
      )
    })
  }
  render() {
    return <Switch>{this.generateRoute(routes)}</Switch>
  }
}

export default withRouter(Layout)
