import React from 'react'
import { AppView } from './app/components'
import { BrowserRouter as Router } from 'react-router-dom'
import './firmware-update/stent/machine'

const App: React.FC = () => {
  return (
  <Router>
    <AppView />
  </Router>
  )
}

export default App
