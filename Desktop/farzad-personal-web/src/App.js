import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Theme from './theme'
import RTL from './components/RTL'
import { getDirection } from './localization'
import MasterLayout from './pages'
import FetchContextProvider from './contexts/FetchContext'
import SiteInfoContextProvider from './contexts/SiteInfoContext'

function App() {
  return (
    <Theme>
      {getDirection() === "rtl" ? (
        <RTL>
          <FetchContextProvider>
            <SiteInfoContextProvider>
              <Router>
                <MasterLayout />
              </Router>
            </SiteInfoContextProvider>
          </FetchContextProvider>
        </RTL>
      ) : (
          <Router>
            <FetchContextProvider>
              <SiteInfoContextProvider>
                <MasterLayout />
              </SiteInfoContextProvider>
            </FetchContextProvider>
          </Router>
        )}

    </Theme>
  )
}

export default App;

