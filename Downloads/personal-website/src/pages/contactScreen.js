import React, { useContext } from 'react'
import { SiteInfoContext } from '../contexts/SiteInfoContext'
import { Grid, Typography } from '@material-ui/core'
import Title from '../components/title'
import { getTranslate } from '../localization/index'
import './contact.css'
import Contact from '../components/contact'
import CallIcon from '@material-ui/icons/CallOutlined'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import RoomIcon from '@material-ui/icons/RoomOutlined'
import Helmet from '../components/Helmet'
import useStyles from './styles/contact.styles'

export default function ContactScreen() {
  let { siteInfo } = useContext(SiteInfoContext)
  const classes = useStyles()
  const translate = getTranslate()
  return (
    <Grid alignItems="flex-start" container className={classes.root} >
      <Helmet title={
        ((siteInfo && siteInfo.name) ? siteInfo.name : "" + " ")
        + " - " + translate.contact}
        description={
          ((siteInfo && siteInfo.contactDescription) ? siteInfo.contactDescription : "")
        } />
      <Grid className={classes.contactGrid} item container xs={12}>
        <Title title={translate.contactme} />
        <Grid container direction='row' >
          <Grid item xs={12} className={classes.detailsGrid} >
            <Typography variant="body1">
              {((siteInfo && siteInfo.contactDescription) ? siteInfo.contactDescription : "")}
              <Typography component="span" variant="body1" color="primary" >
                {" "}{translate.bestwish}
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={classes.FormGrid}  >
            <Contact
              icon={<CallIcon className={classes.iconStyle} />}
              title={translate.phone}
              text1={((siteInfo && siteInfo.phone1) ? siteInfo.phone1 : "" + " ")}
              text2={((siteInfo && siteInfo.phone2) ? siteInfo.phone2 : "" + " ")}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.detailsGrid} >
            <Contact
              icon={<EmailIcon className={classes.iconStyle} />}
              title={translate.email}
              text1={((siteInfo && siteInfo.email1) ? siteInfo.email1 : "" + " ")}
              text2={((siteInfo && siteInfo.email2) ? siteInfo.email2 : "" + " ")}
            />
          </Grid>
          <Grid item xs={12} className={classes.detailsGrid} >
            <Contact
              icon={<RoomIcon className={classes.iconStyle} />}
              title={translate.address}
              text1={((siteInfo && siteInfo.address) ? siteInfo.address : "" + " ")}
              text2=""
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
