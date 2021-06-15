import React from 'react'
import { Grid, Container, Typography, Box } from '@material-ui/core'
import useStyles from './styles/top404.styles'
import image404 from '../../assets/images/404.png'
import { getTranslate } from '../../localization'

export default function Top404() {
    const classes = useStyles()
    const translte = getTranslate()
    return (
        <Box pt={20} pb={20} className={classes.root} >
            <Container className={classes.fullHeight} maxWidth="md" >
                <Grid className={classes.fullHeight} container direction="column" alignItems="center" justify="center" >
                    <img src={image404} alt="" className={classes.topImage} />
                    <Typography variant="body1" className={classes.titleProjectRequest} >
                        {translte.PageNotFound}
                    </Typography>
                </Grid>
            </Container>
        </Box>
    )
}
