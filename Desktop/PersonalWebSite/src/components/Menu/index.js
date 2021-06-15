import React from 'react'
import { Typography, List, ListItem, ListItemText, Button } from '@material-ui/core'
import ProfileImage from '../../assets/images/profile.jpg'
import { getTranslate, lang } from '../../localization'
import { Link, useLocation } from 'react-router-dom'
const basePath = lang === "fa" ? "/fa" : ""

export default function Drawer({ classes, setMobileOpen }) {
  const translate = getTranslate()
  const pathName = useLocation().pathname
  let changeLangPath = lang === "fa" ? pathName.substring(3) : "/fa" + pathName

  const chekActiveRoute = (path) => {
    if (pathName === path || pathName === `/fa${path}` || pathName === `/fa${path}/` || (path === "/" && pathName === "/fa")) {
      return true
    }
    return false
  }
  return (
    <>
      <div className={classes.topDrawer} >
        <img src={ProfileImage} alt={translate.name} className={classes.profileImage} />
      </div>
      <div className={classes.centerDrawer} >
        <List style={{ width: "100%" }} >
          <ListItem className={chekActiveRoute("/") ? null : "listItem"}
            style={{ backgroundColor: chekActiveRoute("/") ? "#037fff" : "transparent", paddingLeft: 0, paddingRight: 0 }}
            onClick={() => { setMobileOpen(false) }}
            component={Link}
            to={`${basePath}/`}
            button>
            <ListItemText disableTypography={true}
              children={<Typography className="listItemText"
                style={{ color: chekActiveRoute("/") ? "#fff" : "#a4acc4" }}
                variant="body2" >{translate.home}</Typography>}
            />
            <div className="overlay" />
          </ListItem>
          <ListItem className={chekActiveRoute("/about") ? null : "listItem"}
            style={{
              backgroundColor: chekActiveRoute("/about") ? "#037fff" : "transparent",
              paddingLeft: 0, paddingRight: 0
            }}
            onClick={() => { setMobileOpen(false) }}
            component={Link}
            to={`${basePath}/about`}
            button>
            <ListItemText disableTypography={true}
              children={<Typography className="listItemText"
                style={{ color: chekActiveRoute("/about") ? "#fff" : "#a4acc4" }}
                variant="body2" >{translate.about}</Typography>}
            />
            <div className="overlay" />
          </ListItem>
          <ListItem className={chekActiveRoute("/resume") ? null : "listItem"}
            style={{
              backgroundColor: chekActiveRoute("/resume") ? "#037fff" : "transparent",
              paddingLeft: 0, paddingRight: 0
            }}
            onClick={() => { setMobileOpen(false) }}
            component={Link}
            to={`${basePath}/resume`}
            button>
            <ListItemText disableTypography={true}
              children={<Typography className="listItemText"
                style={{ color: chekActiveRoute("/resume") ? "#fff" : "#a4acc4" }}
                variant="body2" >{translate.resume}</Typography>}
            />
            <div className="overlay" />
          </ListItem>
          <ListItem className={chekActiveRoute("/portfolio") ? null : "listItem"}
            style={{
              backgroundColor: chekActiveRoute("/portfolio") ? "#037fff" : "transparent",
              paddingLeft: 0, paddingRight: 0
            }}
            onClick={() => { setMobileOpen(false) }}
            component={Link}
            to={`${basePath}/portfolio`}
            button>
            <ListItemText disableTypography={true}
              children={<Typography className="listItemText"
                style={{ color: chekActiveRoute("/portfolio") ? "#fff" : "#a4acc4" }}
                variant="body2" >{translate.portfolios}</Typography>}
            />
            <div className="overlay" />
          </ListItem>
          <ListItem className={chekActiveRoute("/contact") ? null : "listItem"}
            style={{
              backgroundColor: chekActiveRoute("/contact") ? "#037fff" : "transparent",
              paddingLeft: 0, paddingRight: 0
            }}
            onClick={() => { setMobileOpen(false) }}
            component={Link}
            to={`${basePath}/contact`}
            button>
            <ListItemText disableTypography={true}
              children={<Typography className="listItemText"
                style={{ color: chekActiveRoute("/contact") ? "#fff" : "#a4acc4" }}
                variant="body2" >{translate.contact}</Typography>}
            />
            <div className="overlay" />
          </ListItem>
        </List>
      </div>

      <div className={classes.bottomDrawer} >
        <Button color={lang === "fa" ? "primary" : "secondary"}
          component="a" href={changeLangPath}
        >فارسی</Button>
        {'/'}
        <Button color={lang === "en" ? "primary" : "secondary"}
          component="a" href={changeLangPath}
        >English</Button>
      </div>
    </>
  )
}
