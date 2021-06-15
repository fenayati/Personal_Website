import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import StepConnector from '@material-ui/core/StepConnector'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'

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



export default function MyStepper({ steps }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Stepper connector={<StepConnector className={classes.stepConnector} />}
                className={classes.stepper} orientation="vertical">
                {steps.map((step) => step.id >= 0 ? (
                    <Step active={true} key={step.id} >
                        <StepLabel
                            classes={{ label: classes.label }}
                            className={classes.stepLabel} icon={<span className={classes.circle} />}>
                            <Typography className={classes.date} variant="h6" >{step.date}</Typography>
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
                                    <Typography variant="h6" className={classes.subtitlestep} >{step.subtitle}</Typography>
                                    <Typography variant="body1" >{step.content}</Typography>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ) : step.id === -1 ? (
                    <Step active={true} key={step.id} >
                        <StepLabel icon={null}></StepLabel>
                    </Step>
                ) : (null)
                )}
            </Stepper>
        </div>
    )
}