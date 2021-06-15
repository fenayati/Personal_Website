import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Modal } from '@material-ui/core'
import mobileImage from '../assets/images/mobileApp2.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  image: {
    width: "100%",
    cursor: 'pointer',
    "&:hover": {
      transform: "rotate(360deg)",
      transition: "1s"
    }
  },
  title: {
    textAlign: 'left',
    cursor: 'pointer',
    "& a": {
      textDecoration: "none",
      color: "#FFF",
      transition: ".4s",
      "&:hover": {
        color: theme.palette.primary.main,
        transition: ".4s"
      }
    }
  },
  ModalImage: {
    width: "100%",
    height: "100%"
  },
  modal: {
    width: "60%",
    height: "80%",
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 60,
    [theme.breakpoints.down('xs')]: {
      width: "90%",
      height: "50%",
    }
  }
}))
export default function Portfolio({ image, title, desc, href }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <>
      <Grid item lg={3} className={classes.root} >
        <img
          onClick={() => setOpen(true)}
          className={classes.image} src={mobileImage} alt={title} />
        <Typography className={classes.title} variant="h5" >
          <a href={href}> {title} </a>
        </Typography>
        <Typography variant="body1"> {desc} </Typography>
      </Grid>
      <Modal className={classes.modal} open={open} onClose={() => setOpen(false)} >
        <img className={classes.ModalImage} src={image} alt={title} />
      </Modal>
    </>
  )
}
