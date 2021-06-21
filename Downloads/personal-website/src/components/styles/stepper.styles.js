import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  stepConnector: {
    paddingBottom: 0,
    "& span": {
      borderLeft: "3px solid #2e344e"
    }
  },
  stepContent: {
    borderLeft: "3px solid #2e344e",
    marginTop: 0,
    display: 'flex'
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    border: "5px solid #2e344e",
    marginLeft: 6
  },
  stepLabel: {
    display: 'flex',
    flexDirection: 'row'
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',

    }
  },
  title: {
    color: theme.palette.primary.main
  },
  line: {
    width: 30,
    height: 1,
    backgroundColor: "#2e344e",
    marginRight: 15
  },
  date: {
    width: 200,
    textAlign: 'left'
  },
  stepper: {
    backgroundColor: "transparent",
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingRight: 0,
    }
  },
  subtitlestep: {
    textAlign: 'left'
  }
}))
export default useStyles