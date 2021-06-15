import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import { Grid, Typography } from '@material-ui/core'
import './home.css'
import TelegramIcon from '@material-ui/icons/Telegram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import { getTranslate } from '../localization/index'
import Helmet from '../components/Helmet'

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    overflow: 'hidden',
    position: 'relative',
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  divIcons: {
    marginTop: 25
  },
  iconButtnStyle: {
    border: "2px solid #2e344e",
    marginRight: 8,
    marginLeft: 8,
    transition: "0.5s",
    "&:hover": {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      transition: "1s",
    }
  }
}))
export default function HomeScreen() {
  const classes = useStyles()
  const translate = getTranslate()
  return (
    <div className={classes.root} >
      <Helmet title={translate.name}
        description={
          translate.hi + " " + translate.name + " " + translate.hi2 + ". " + translate.desc
        } />
      <div style={{
        position: 'absolute',
        width: "100%",
        height: "100%",
        transform: "rotateZ(45deg)"
      }} >
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>

      </div>
      <Grid style={{ zIndex: 1 }} >
        <Typography variant="h1" >{translate.hi}
          <span className={classes.nameText} >{translate.name}</span>
          {translate.hi2}
        </Typography>
        <Typography variant="subtitle1" >
          {translate.desc}
        </Typography>
        <div className={classes.divIcons} >
          <IconButton color="secondary" component="a" href="http://t.me/farshid0594" className={classes.iconButtnStyle}>
            <TelegramIcon />
          </IconButton>
          <IconButton color="secondary" component="a" href="https://www.linkedin.com/in/farshid-karami-4611a2b6" className={classes.iconButtnStyle}>
            <LinkedInIcon />
          </IconButton>
          <IconButton color="secondary" component="a" href="https://www.instagram.com/farshid0594/" className={classes.iconButtnStyle}>
            <InstagramIcon />
          </IconButton>
        </div>
      </Grid>
    </div>
  )
}
