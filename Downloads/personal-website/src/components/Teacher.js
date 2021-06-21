import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import Apis from '../constants/Apis'
import useStyles from './styles/teacher.styles'
import { getTranslate } from '../localization'

const translate = getTranslate()

export default function Contact({
  image,
  name,
  teacherProps,
  teacherProps2,
  dlLink,
  contactWay
}) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid
        className={classes.main}
        container
        direction='row'
        justify='flex-start'
        alignItems='center'
      >
        <div className={classes.divIcon}>
          <img
            src={Apis.BaseUrl + image}
            className={classes.profileImageTeachher}
            alt={name}
          />
          <Typography className={classes.title} variant='h6'>
            {name}
          </Typography>
          {teacherProps.map((tp) => (
            <Typography key={tp._id} className={classes.desc2} variant='subtitle2'>
              {tp.title}
            </Typography>
          ))}
        </div>
        <div className={classes.divDetail}>
          {teacherProps2.map((tp) => (
            <Typography key={tp._id} className={classes.desc} variant='subtitle2'>
              {tp.title}
            </Typography>
          ))}
          <Typography variant='h6' className={classes.contactdetails}>
            {translate.contactinfo}:
          </Typography>
          {contactWay.map((cw) => (
            <Typography variant='subtitle2' style={{ marginTop: 10 }}>
              {cw.title}: {cw.value}
            </Typography>
          ))}
          <Button
            color='primary'
            variant='outlined'
            style={{ marginTop: 10 }}
            component="a" href={dlLink} download={dlLink}
          >
            {translate.downloadCv}
          </Button>
        </div>
      </Grid>
    </div>
  )
}
