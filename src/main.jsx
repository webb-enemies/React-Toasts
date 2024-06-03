import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import { toststore } from './store/toststore.js'
import Tostcompo from './componentes/Tostcompo.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={toststore}>
    <Tostcompo/>
    <App />
  </Provider>,
)
