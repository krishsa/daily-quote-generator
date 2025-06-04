import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  React.createElement(React.StrictMode, null,
    React.createElement(App)
  )
)
