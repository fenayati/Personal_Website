import React from 'react'
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
    }
  }
}))

export default function PortfoliosScreen() {
  const classes = useStyles()
  const translate = getTranslate()

  return (
    <div className={classes.root} >
      <Helmet title={translate.name + " - " + translate.portfolios}
        description={
          translate.portfolioDesc
        } />
      <Title title={translate.portfolios} />
      <Grid item xs={12} container direction="row" justify='flex-start' alignItems="center">
        {translate.portfoliosList.map((portfolio) =>
          <Portfolio key={portfolio.id}
            title={portfolio.title}
            desc={portfolio.desc}
            href="https://reactdeveloper.ir/"
            image={portfolio.image} />
        )}
      </Grid>
    </div>
  )
}
