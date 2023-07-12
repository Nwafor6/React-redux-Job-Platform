import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './responsive.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import jobReducer from './jobReducer.jsx'
import filterReducer from './filterReducer.jsx'


const store= configureStore({
  reducer:{
    Jobs:jobReducer,
    Filters:filterReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
)
