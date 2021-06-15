import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 260
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    margin: theme.spacing(2),
    marginLeft: 0,
    widt: 50,
    height: 50,
    backgroundColor: theme.palette.primary.backgroundColor,
    borderRadius: 0,
    border: "1px solid #2e344e",
    position: 'fixed',
    top: 20,
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  topDrawer: {
    width: "100%",
    padding: 20,
    borderBottom: "1px solid #2e344e",
    textAlign: "center"
  },
  profileImage: {
    width: 200,
    height: 200,
    maxWidth: "100%",
    borderRadius: 100,
    border: "7px solid #2e344e",
    verticalAlign: 'middle'

  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#191d2b",
    height: "100vh",
    borderRight: "1px solid #2e344e"

  },
  centerDrawer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  bottomDrawer: {
    padding: 15,
    borderTop: "1px solid #2e344e",
  },
  content: {
    flexGrow: 1,
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    position: 'relative',
  },
}))
export default useStyles