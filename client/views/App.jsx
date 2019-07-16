import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../config/router'

export default class App extends React.Component {
  componentDidMount() {
    // do
  }

  render() {
    return [
      <div key="content">
        <Link to="/">首页</Link>
        <Link to="/detail">详情</Link>
      </div>,
      <Routes key="routes" />,
    ]
  }
}
