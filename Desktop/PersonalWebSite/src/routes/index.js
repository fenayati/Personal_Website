import React, { useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import NotFound from '../pages/404'
import AboutScreen from '../pages/aboutScreen'
import ContactScreen from '../pages/contactScreen'
import HomeScreen from '../pages/homeScreen'
import PortfolioScreen from '../pages/portfoliosScreen'
import ResumeScreen from '../pages/resumeScreen'

export default function Index() {
  let pathname = useLocation().pathname
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <Switch>
      <Route exact path="/">
        <HomeScreen />
      </Route>
      <Route exact path="/fa">
        <HomeScreen />
      </Route>
      <Route exact path="/about">
        <AboutScreen />
      </Route>
      <Route exact path="/fa/about">
        <AboutScreen />
      </Route>
      <Route exact path="/contact">
        <ContactScreen />
      </Route>
      <Route exact path="/fa/contact">
        <ContactScreen />
      </Route>
      <Route exact path="/resume">
        <ResumeScreen />
      </Route>
      <Route exact path="/fa/resume">
        <ResumeScreen />
      </Route>
      <Route exact path="/portfolio">
        <PortfolioScreen />
      </Route>
      <Route exact path="/fa/portfolio">
        <PortfolioScreen />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  )
}
