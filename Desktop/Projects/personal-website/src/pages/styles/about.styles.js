import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 80
    }
  },
  aboutGrid: {
    paddingTop: 15,
    paddingBottom: 60,
    paddingRight: 30,
    paddingLeft: 30,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 15,
      paddingLeft: 15,
      paddingTop: 0
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
      marginTop: 0,
      marginBottom: 15,
    }
  },
  iconStyle: {
    fontSize: 46,
    color: theme.palette.primary.main
  },
}))
export default useStyles