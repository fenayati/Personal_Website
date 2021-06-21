import { makeStyles } from '@material-ui/core/styles'

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
      paddingTop: 80
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

export default useStyles