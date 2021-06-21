import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import StepConnector from '@material-ui/core/StepConnector'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import useStyles from './styles/stepper.styles'

export default function WorkStepper({ steps }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Stepper connector={<StepConnector className={classes.stepConnector} />}
        className={classes.stepper} orientation="vertical">
        {steps.map((step, index) => (index !== 0 && index !== (steps.length - 1)) ? (
          <Step active={true} key={index} >
            <StepLabel
              classes={{ label: classes.label }}
              className={classes.stepLabel} icon={<span className={classes.circle} />}>
              <Typography className={classes.date} variant="h6" >{step.year}</Typography>
              <Hidden xsDown>
                <span className={classes.line} ></span>
              </Hidden>
              <Typography className={classes.title} variant="h5" >{step.title}</Typography>
            </StepLabel>
            <StepContent className={classes.stepContent} >
              <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 15 }} >
                <Hidden xsDown>
                  <div style={{ width: 242 }} ></div>
                </Hidden>
                <div style={{ flex: 1 }} >
                  <Typography variant="h6" className={classes.subtitlestep} >{step.corporate}</Typography>
                  <Typography variant="body1" >{step.description}</Typography>
                </div>
              </div>
            </StepContent>
          </Step>
        ) : (index === 0) ? (
          <Step active={true} key={index} >
            <StepLabel icon={null}></StepLabel>
          </Step>
        ) : (null)
        )}
      </Stepper>
    </div>
  )
}