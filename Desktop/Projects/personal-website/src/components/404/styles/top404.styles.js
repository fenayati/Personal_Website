import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 30
    }
  },
  fullHeight: {
    height: "100%"
  },
  titleProjectRequest: {
    marginBottom: 20,
    marginTop: 20
  },
  topImage: {
    marginBottom: 20,
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 250
    }
  }
}))
export default useStyles