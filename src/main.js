import { createRoot } from 'react-dom/client'
import { createElement, StrictMode } from 'react'
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  createElement(StrictMode, null,
    createElement(App)
  )
)
