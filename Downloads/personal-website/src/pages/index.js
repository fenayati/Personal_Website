import React, { useState } from 'react'
import { Drawer, CssBaseline, IconButton, Hidden } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import './styles/index.css'
import useStyles from './styles/indes.styles'
import Menu from '../components/Menu'
import Routes from '../routes'

function MasterLayout(props) {
  const { container } = props
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Menu classes={classes} setMobileOpen={setMobileOpen} />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <Menu classes={classes} setMobileOpen={setMobileOpen} />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <span className="line1" />
        <span className="line2" />
        <span className="line3" />
        <span className="line4" />
        <Routes />
      </main>
    </div>
  )
}


export default MasterLayout