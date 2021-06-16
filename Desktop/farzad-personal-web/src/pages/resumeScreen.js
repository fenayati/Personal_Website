import React, { useContext } from 'react'
import { SiteInfoContext } from '../contexts/SiteInfoContext'
import { Grid, Typography, Button } from '@material-ui/core'
import Title from '../components/title'
import Skill from '../components/skill'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import WorkStepper from '../components/WorkStepper'
import EducationSteper from '../components/EducationSteps'
import Teacher from '../components/Teacher'
import Helmet from '../components/Helmet'
import { getTranslate } from '../localization'
import useStyles from './styles/resume.styles'

export default function FarzadScreen() {
  let { siteInfo } = useContext(SiteInfoContext)
  const translate = getTranslate()
  const classes = useStyles()


  return (
    <Grid alignItems="flex-start" container className={classes.root} >
      <Helmet
        title={(siteInfo && siteInfo != null && siteInfo.name) ? siteInfo.name : "" + " - " + translate.resume}
        description={
          translate.resumeDesc
        } />
      <Grid container style={{ marginTop: 30 }}>
        <Grid item xs={12} md={12} style={{ padding: 15 }}  >
          <Teacher
            image={(siteInfo && siteInfo.homeImage) ? siteInfo.homeImage : ""}
            name={(siteInfo && siteInfo.name) ? siteInfo.name : ""}
            teacherProps={(siteInfo && siteInfo.primaryTitles) ? siteInfo.primaryTitles : []}
            teacherProps2={(siteInfo && siteInfo.secondaryTitles) ? siteInfo.secondaryTitles : []}
            contactWay={(siteInfo && siteInfo.contactWay) ? siteInfo.contactWay : []}
            dlLink={(siteInfo && siteInfo.resumeLink) ? siteInfo.resumeLink : ""}
          />
        </Grid>
      </Grid>

      <Grid className={classes.skillGrid} item container xs={12}>
        <Title title={translate.myskills} />
        <Grid container direction='row' >
          {((siteInfo && siteInfo.skills) ? siteInfo.skills : []).map((skill) => (
            <Grid item xs={12} md={6}  >
              <Skill value={skill.percent} title={skill.title} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid className={classes.skillGrid} item container xs={12}>
        <Title title={translate.resume} />
        <Grid container direction='row' justify="flex-start" alignItems="center"  >
          <LocalLibraryIcon style={{ fontSize: 34 }} />
          <Typography className={classes.skillSecondTitle} variant="h4">
            {translate.educationalqualifications}
          </Typography>
        </Grid>
        <Grid container style={{ marginTop: 15, marginBottom: 15 }} >
          <EducationSteper steps={(siteInfo && siteInfo.degrees) ? [
            { _id: -1, year: "", title: "", university: "", descrption: "" },
            ...siteInfo.degrees,
            { _id: -2, year: "", title: "", university: "", descrption: "" },
          ] : []} />
        </Grid>
        <Grid container direction='row' justify="flex-start" alignItems="center"  >
          <BusinessCenterIcon style={{ fontSize: 34 }} />
          <Typography className={classes.skillSecondTitle} variant="h4">
            {translate.workingexperience}
          </Typography>
        </Grid>
        <Grid container style={{ marginTop: 15, marginBottom: 15 }} >
          <WorkStepper steps={(siteInfo && siteInfo.works) ? [
            { _id: -1, year: "", title: "", corporate: "", descrption: "" },
            ...siteInfo.works,
            { _id: -2, year: "", title: "", corporate: "", descrption: "" },
          ] : []} />
        </Grid>
        <Typography style={{ marginTop: 15, width: "100%" }} variant="subtitle2">
          <span className={classes.titr} >{translate.note}: </span>
          {translate.resumeNote}
        </Typography>
        <Button variant="text" color="primary"
          component="a"
          href={(siteInfo && siteInfo.resumeLink) ? siteInfo.resumeLink : ""}
          download={(siteInfo && siteInfo.resumeLink) ? siteInfo.resumeLink : ""}>
          {translate.downloadCv}
        </Button>

      </Grid>

    </Grid>
  )
}
