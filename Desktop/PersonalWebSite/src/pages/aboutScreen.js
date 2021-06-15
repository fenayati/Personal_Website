import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Title from '../components/title'
import { getTranslate } from '../localization/index'
import MainImage from '../assets/images/main.jpg'
import Service from '../components/service'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import CodeIcon from '@material-ui/icons/Code'
import WebIcon from '@material-ui/icons/Web'
import StorageIcon from '@material-ui/icons/Storage'
import Helmet from '../components/Helmet'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
  },
  aboutGrid: {
    paddingTop: 15,
    paddingBottom: 60,
    paddingRight: 30,
    paddingLeft: 30,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 15,
      paddingLeft: 15,
    }

  },
  nameText: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  mainImage: {
    width: "100%",
    height: "100%"
  },
  ImageGrid: {
    position: 'relative',
    "&::after": {
      content: "''",
      position: 'absolute',
      right: 0,
      top: "auto",
      bottom: 0,
      height: "65%",
      width: 15,
      background: "rgba(3,127,255,.6)"
    },
    "&::before": {
      content: "''",
      position: 'absolute',
      left: 0,
      top: 0,
      height: "65%",
      width: 15,
      background: "rgba(3,127,255,.6)"
    }
  },
  aboutTextGrid: {
    paddingRight: 20,
    paddingLeft: 20,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      marginTop: 15,
      marginBottom: 15,
    }
  },
  iconStyle: {
    fontSize: 46,
    color: theme.palette.primary.main
  },
}))
export default function AboutScreen() {
  const classes = useStyles()
  const translate = getTranslate()
  return (
    <Grid alignItems="flex-start" container className={classes.root} >
      <Helmet title={translate.name + " - " + translate.about}
        description={
          translate.hi + " " + translate.name + " " + translate.hi2 + ". " + translate.desc
        } />
      <Grid className={classes.aboutGrid} item container xs={12}>
        <Title title={translate.aboutme} />
        <Grid container direction='row' >
          <Grid item xs={12} md={6} className={classes.ImageGrid}  >
            <img className={classes.mainImage} src={MainImage} alt={translate.name} />
          </Grid>
          <Grid item xs={12} md={6} className={classes.aboutTextGrid} >
            <Typography variant="h3" >{translate.hi}
              <span className={classes.nameText} >{translate.name}</span>
              {translate.hi2}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 10 }} >
              {translate.desc}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }} >
              <b style={{ minWidth: 100, display: 'inline-block' }} >{translate.age}</b>
              {' : '}
                            27 {translate.years}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }} >
              <b style={{ minWidth: 100, display: 'inline-block' }} >{translate.nationality}</b>
              {' : '}
              {translate.iranian}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }} >
              <b style={{ minWidth: 100, display: 'inline-block' }} >{translate.languages}</b>
              {' : '}
              {translate.persian}, {translate.english}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }} >
              <b style={{ minWidth: 100, display: 'inline-block' }} >{translate.phone}</b>
              {' : '}
                            +989220479451
                        </Typography>
            {/* <div style={{ display: 'flex', marginTop: 20 }} >
                            <Button variant="contained" color="primary">
                                {translate.downloadcv}
                            </Button>
                        </div> */}
            <Typography variant="subtitle2" style={{ marginTop: 15 }} color="primary">
              {translate.slogan}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.aboutGrid} item container xs={12}>
        <Title title={translate.services} />
        <Grid container direction='row' >
          <Service
            icon={<WebIcon className={classes.iconStyle} />}
            title={translate.webdeisgn} desc={translate.webdeisgndesc} />
          <Service
            icon={<StorageIcon className={classes.iconStyle} />}
            title={translate.database} desc={translate.databasedesc} />
          <Service
            icon={<CodeIcon className={classes.iconStyle} />}
            title={translate.webdevelopement} desc={translate.webdevelopementdesc} />
          <Service
            icon={<PhoneAndroidIcon className={classes.iconStyle} />}
            title={translate.mobileapplication} desc={translate.mobileapplicationdesc} />
        </Grid>
      </Grid>

    </Grid>
  )
}
