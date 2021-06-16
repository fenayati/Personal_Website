import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    backgroundImage: "linear-gradient(to right, #1d2429 0%, #2a2c3b 100%)",
  },
  skillGrid: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 30,
    paddingLeft: 30,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 5,
      paddingLeft: 5,
    }

  },
  skillSecondTitle: {
    marginLeft: 10
  },
  titr: {
    fontWeight: 'bold',
    color: theme.palette.primary.main
  },

}))
export default useStyles