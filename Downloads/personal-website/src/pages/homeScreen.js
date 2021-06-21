import React, { useContext } from 'react'
import { SiteInfoContext } from '../contexts/SiteInfoContext'
import IconButton from '@material-ui/core/IconButton'
import { Grid, Typography } from '@material-ui/core'
import TelegramIcon from '@material-ui/icons/Telegram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import { getTranslate } from '../localization/index'
import Helmet from '../components/Helmet'
import useStyles from './styles/home.styles'
import BgEffect from '../components/BgEffect'

export default function HomeScreen() {
  let { siteInfo } = useContext(SiteInfoContext)
  const classes = useStyles()
  const translate = getTranslate()
  return (
    <div className={classes.root} >
      <Helmet title={(siteInfo && siteInfo != null && siteInfo.name) ? siteInfo.name : "" + " - " + translate.personalweb}
        description={
          translate.hi + " " + ((siteInfo && siteInfo != null && siteInfo.name) ? siteInfo.name : "") + " "
          + translate.hi2 + ". " +
          ((siteInfo && siteInfo != null && siteInfo.homeDescription) ? siteInfo.homeDescription : "")
        } />
      <BgEffect divClass={classes.bgEffect} />
      <Grid style={{ zIndex: 1 }} >
        <Typography variant="h1" >{translate.hi}
          <span className={classes.nameText} >
            {(siteInfo && siteInfo.name) ? siteInfo.name : ""}
          </span>
          {translate.hi2}
        </Typography>
        <Typography variant="subtitle1" >
          {(siteInfo && siteInfo.homeDescription) ? siteInfo.homeDescription : ""}
        </Typography>
        <div className={classes.divIcons} >
          <IconButton color="secondary" component="a"
            href={"http://t.me/" + ((siteInfo && siteInfo.telegram) ? siteInfo.telegram : "")}
            className={classes.iconButtnStyle}>
            <TelegramIcon />
          </IconButton>
          <IconButton color="secondary" component="a"
            href={"https://www.linkedin.com/in/" + ((siteInfo && siteInfo.linkedin) ? siteInfo.linkedin : "")}
            className={classes.iconButtnStyle}>
            <LinkedInIcon />
          </IconButton>
          <IconButton color="secondary" component="a"
            href={"https://www.instagram.com/" + ((siteInfo && siteInfo.instagram) ? siteInfo.instagram : "")}
            className={classes.iconButtnStyle}>
            <InstagramIcon />
          </IconButton>
          <IconButton color="secondary" component="a"
            href={"https://api.whatsapp.com/send?phone=98" + ((siteInfo && siteInfo.whatsup) ? siteInfo.whatsup : "")}
            className={classes.iconButtnStyle}>
            <WhatsAppIcon />
          </IconButton>
        </div>
      </Grid>
    </div>
  )
}
