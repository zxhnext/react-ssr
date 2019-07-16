import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line
import App from './views/App'

// ReactDOM.render(<App />, document.getElementById('root')) // hydrate

const root = document.getElementById('root')
const render = (Component) => {
  ReactDOM.render( // hydrate
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default // eslint-disable-line 
    // ReactDOM.render(<NextApp />, document.getElementById('root'))
    render(NextApp)
  })
}
