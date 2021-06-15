import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Title from '../components/title'
import { getTranslate } from '../localization/index'
import './contact.css'
import Contact from '../components/contact'
import CallIcon from '@material-ui/icons/CallOutlined'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import RoomIcon from '@material-ui/icons/RoomOutlined'
import Helmet from '../components/Helmet'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
  },
  contactGrid: {
    paddingTop: 60,
    paddingBottom: 60,
    paddingRight: 30,
    paddingLeft: 30,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 5,
      paddingLeft: 5,
    }

  },
  FormGrid: {
    padding: 10
  },
  detailsGrid: {
    padding: 10
  },
  getintouch: {
    textAlign: 'left'
  },
  iconStyle: {
    fontSize: 30,

  }

}))
export default function ContactScreen() {
  const classes = useStyles()
  const translate = getTranslate()
  return (
    <Grid alignItems="flex-start" container className={classes.root} >
      <Helmet title={translate.name + " - " + translate.contact}
        description={
          translate.contactText + " " + translate.bestwish
        } />
      <Grid className={classes.contactGrid} item container xs={12}>
        <Title title={translate.contactme} />
        <Grid container direction='row' >
          <Grid item xs={12} className={classes.detailsGrid} >
            <Typography variant="body1">
              {translate.contactText}
              <Typography component="span" variant="body1" color="primary" >
                {" "}{translate.bestwish}
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={classes.FormGrid}  >
            <Contact
              icon={<CallIcon className={classes.iconStyle} />}
              title={translate.phone}
              text1="+989220479451"
              text2="+982166438930"
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.detailsGrid} >
            <Contact
              icon={<EmailIcon className={classes.iconStyle} />}
              title={translate.email}
              text1="farshidk0594@gmail.com"
            // text2="admin.sitename@example.com"
            />
          </Grid>
          <Grid item xs={12} className={classes.detailsGrid} >
            <Contact
              icon={<RoomIcon className={classes.iconStyle} />}
              title={translate.address}
              text1={translate.addressdetails}
              text2=""
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
