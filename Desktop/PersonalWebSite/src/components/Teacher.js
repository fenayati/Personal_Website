import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 20,
  },
  main: {
    backgroundColor: '#1d2429',
    zIndex: 1,
    border: '1px solid #2e344e',
    borderTop: '5px solid #2e344e',
    padding: theme.spacing(8),
    transition: '.4s',
    '&:hover': {
      borderTopColor: theme.palette.primary.main,
      transition: '.4s',
    },
  },

  title: {
    textAlign: 'left',
    marginTop: 10,
  },
  desc: {
    cursor: 'pointer',
    transition: '1s',
    '&:hover': {
      color: theme.palette.primary.main,
      transition: '.4s',
    },
  },
  desc2: {
    cursor: 'pointer',
    transition: '1s',
    textAlign: 'center',
    '&:hover': {
      color: theme.palette.primary.main,
      transition: '.4s',
    },
  },
  divIcon: {
    margin: 10,
    padding: 10,
    paddingBottom: 5,
    borderRight: '1px solid #2e344e',
    marginRight: 25,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    [theme.breakpoints.down('sm')]: {
      borderRight: 'none',
      borderBottom: '1px solid #2e344e',
      padding: 0,
      paddingBottom: 10,
      margin: 0,
      marginBottom: 10,
      width: '100%',
    },
  },
  divDetail: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  profileImageTeachher: {
    height: 140,
    borderRadius: 140,
  },
  contactdetails: {
    textAlign: 'left',
    color: theme.palette.primary.main,
    marginTop: 10,
  },
}))

export default function Contact({
  mobile,
  image,
  name,
  teacherProps,
  teacherProps2,
  onClick,
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
            src={image}
            className={classes.profileImageTeachher}
            alt={name}
          />
          <Typography className={classes.title} variant='h6'>
            {name}
          </Typography>
          {teacherProps.map((tp) => (
            <Typography key={tp} className={classes.desc2} variant='subtitle2'>
              {tp}
            </Typography>
          ))}
        </div>
        <div className={classes.divDetail}>
          {teacherProps2.map((tp) => (
            <Typography key={tp} className={classes.desc} variant='subtitle2'>
              {tp}
            </Typography>
          ))}
          <Typography variant='h6' className={classes.contactdetails}>
            راه های ارتباطی:
          </Typography>
          <Typography variant='subtitle2' style={{ marginTop: 10 }}>
            تلفن تماس: {mobile}
          </Typography>
          <Typography variant='subtitle2' style={{ marginTop: 5 }}>
            تلگرام / واتساپ: {mobile}
          </Typography>
          <Button
            onClick={onClick}
            color='primary'
            variant='outlined'
            style={{ marginTop: 10 }}
          >
            دانلود رزومه کامل
          </Button>
        </div>
      </Grid>
    </div>
  )
}
