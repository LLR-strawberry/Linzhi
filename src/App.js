import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import Layout from '@/components/Layout'
import '@/assets/styles/reset.scss'
import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConfigProvider locale={zhCN}>
          <Router>
            <Switch>
              <Route component={Layout}></Route>
            </Switch>
          </Router>
        </ConfigProvider>
      </Provider>
    )
  }
}
