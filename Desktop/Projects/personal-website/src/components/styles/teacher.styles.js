import { makeStyles } from '@material-ui/core/styles'

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
export default useStyles