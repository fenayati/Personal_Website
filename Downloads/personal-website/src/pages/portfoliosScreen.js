import React, { useContext } from 'react'
import { SiteInfoContext } from '../contexts/SiteInfoContext'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Title from '../components/title'
import { getTranslate } from '../localization/index'
import Portfolio from '../components/portfolio'
import Helmet from '../components/Helmet'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    padding: 30,
    paddingTop: 60,
    width: "100%",
    [theme.breakpoints.down('xs')]: {
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 80
    }
  }
}))

export default function PortfoliosScreen() {
  let { siteInfo } = useContext(SiteInfoContext)
  const classes = useStyles()
  const translate = getTranslate()

  return (
    <div className={classes.root} >
      <Helmet
        title={
          ((siteInfo && siteInfo.name) ? siteInfo.name : "" + " ")
          + " - " + translate.portfolios}
        description={
          translate.portfolioDesc
        } />
      <Title title={translate.portfolios} />
      <Grid item xs={12} container direction="row" justify='flex-start' alignItems="center">
        {siteInfo && siteInfo.portfolios && siteInfo.portfolios.map((portfolio) =>
          <Portfolio
            key={portfolio._id}
            title={portfolio.title}
            desc={portfolio.subtitle}
            href={portfolio.site}
            image={portfolio.image} />
        )}
      </Grid>
    </div>
  )
}
