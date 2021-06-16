import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    overflow: 'hidden',
    position: 'relative',
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  divIcons: {
    marginTop: 25
  },
  iconButtnStyle: {
    border: "2px solid #2e344e",
    marginRight: 8,
    marginLeft: 8,
    transition: "0.5s",
    "&:hover": {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      transition: "1s",
    }
  },
  bgEffect: {
    position: 'absolute',
    width: "100%",
    height: "100%",
    transform: "rotateZ(45deg)"
  }
}))

export default useStyles