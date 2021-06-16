import React, { useContext } from 'react'
import { SiteInfoContext } from '../contexts/SiteInfoContext'
import { Grid, Typography } from '@material-ui/core'
import Title from '../components/title'
import { getTranslate } from '../localization/index'
import Service from '../components/service'
import Helmet from '../components/Helmet'
import useStyles from './styles/about.styles'
import Apis from '../constants/Apis'

export default function AboutScreen() {
  let { siteInfo } = useContext(SiteInfoContext)
  const classes = useStyles()
  const translate = getTranslate()
  return (
    <Grid alignItems="flex-start" container className={classes.root} >
      <Helmet title={
        ((siteInfo && siteInfo.name) ? siteInfo.name : "" + " ")
        + " - " + translate.about}
        description={
          translate.hi + " " +
          ((siteInfo && siteInfo.name) ? siteInfo.name : "" + " ")
          + " " + translate.hi2 + ". " +
          ((siteInfo && siteInfo.aboutDescription) ? siteInfo.aboutDescription : "" + " ")
        } />
      <Grid className={classes.aboutGrid} item container xs={12}>
        <Title title={translate.aboutme} />
        <Grid container direction='row' >
          <Grid item xs={12} md={6} className={classes.ImageGrid}  >
            {(siteInfo && siteInfo.secondImage) ? (
              <img className={classes.mainImage}
                src={Apis.BaseUrl + ((siteInfo && siteInfo.secondImage) ? siteInfo.secondImage : "" + " ")}
                alt={translate.name} />
            ) : null}
          </Grid>
          <Grid item xs={12} md={6} className={classes.aboutTextGrid} >
            <Typography variant="h3" >{translate.hi}
              <span className={classes.nameText} >
                {((siteInfo && siteInfo.name) ? siteInfo.name : "" + " ")}
              </span>
              {translate.hi2}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 10 }} >
              {((siteInfo && siteInfo.aboutDescription) ? siteInfo.aboutDescription : "" + " ")}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }} >
              <b style={{ minWidth: 100, display: 'inline-block' }} >{translate.age}</b>
              {' : '}
              {((siteInfo && siteInfo.age) ? siteInfo.age : "" + " ")} {translate.years}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }} >
              <b style={{ minWidth: 100, display: 'inline-block' }} >
                {translate.nationality}
              </b>
              {' : '}
              {
                ((siteInfo && siteInfo.nationality) ? siteInfo.nationality : "" + " ")
              }            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }} >
              <b style={{ minWidth: 100, display: 'inline-block' }} >{translate.languages}</b>
              {' : '}
              {((siteInfo && siteInfo.langauges) ? siteInfo.langauges : "" + " ")}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }} >
              <b style={{ minWidth: 100, display: 'inline-block' }} >{translate.phone}</b>
              {' : '}
              {((siteInfo && siteInfo.phone) ? siteInfo.phone : "" + " ")}
            </Typography>

            <Typography variant="subtitle2" style={{ marginTop: 15 }} color="primary">
              {((siteInfo && siteInfo.aboutQute) ? siteInfo.aboutQute : "" + " ")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid className={classes.aboutGrid} item container xs={12}>
        <Title title={translate.services} />
        <Grid container direction='row' >
          {siteInfo && siteInfo.services && siteInfo.services.map((service) => (
            <Service
              key={service._id}
              icon={<img src={Apis.BaseUrl + service.image} className={classes.iconStyle} />}
              title={service.title} desc={service.description} />
          ))}
        </Grid>
      </Grid>

    </Grid>
  )
}
