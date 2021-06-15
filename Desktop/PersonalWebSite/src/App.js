import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Theme from './theme'
import RTL from './components/RTL'
import { getDirection } from './localization'
import MasterLayout from './pages'

function App() {
  return (
    <Theme>
      {getDirection() === "rtl" ? (
        <RTL>
          <Router>
            <MasterLayout />
          </Router>
        </RTL>
      ) : (
          <Router>
            <MasterLayout />
          </Router>
        )}

    </Theme>
  )
}

export default App;

