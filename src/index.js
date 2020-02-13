import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import ScrollToTop from './utils/ScrollToTop/ScrollToTop'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'))
