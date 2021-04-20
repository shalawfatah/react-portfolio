import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@material-ui/core'
import TabPanel from '@material-ui/core/Tabs'
import React, {useState} from 'react'
import resumeData from '../utils/resumeData'
import './Portfolio.css'

const Portfolio = () => {
    const [tabValue, setTabValue] = useState('All')
    const [projectDialogue, setProjectDialogue] = useState(false)

    return (
        <Grid container spacing={1} className='section pb_45 pt_45'>
            <Grid item className='section_title mb_20'>
                <span></span>
                <h6 className='section_title_text'>Portfolio</h6>
            </Grid>
            <Grid item xs={12}>
                <Tabs value={tabValue} onChange={(event, newValue) => setTabValue(newValue)} aria-label="app tab" indicatorColor='white' className='customTabs'>
                    <Tab label="All" value="All" className={tabValue == 'All' ? 'custom_Tabs active' : 'customTabs_item'} />
                    {[...new Set(resumeData.portfolio.map(item => item.tag))].map(title => {
                        return (
                            <Tab label = {title} value={title}  className={tabValue == title ? 'custom_Tabs active' : 'customTabs_item'} />
                        )
                    })}
                </Tabs>
                <Grid item xs={12}>
                    <Grid container spacing={3} className='all_tabs_container'>
                        {resumeData.portfolio.map(project => {
                            return (
                            <>
                            {tabValue == project.tag || tabValue == "All" ? (
                                 <Grid item >
                                    <Grow in timeout={1000} xs={12} sm={6} md={4}>
                                    <Card className='customCard' onClick={() => setProjectDialogue(project)}>
                                        <CardActionArea>
                                            <CardMedia className='customCard_image' image={project.image} title={project.title} />
                                                <CardContent>
                                                    <Typography variant={'body2'} className='customCard_title'>{project.title}</Typography>
                                                    <Typography className='customCard_description' variant='body2'>{project.caption}</Typography>
                                                </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    </Grow>
                                </Grid>
                            ) : null}
                            </>
                            )
                        })}
                    </Grid>
                </Grid>
                <Grid>
        {
        <Dialog open={projectDialogue} onClose={() => setProjectDialogue(false)} className='projectDialog' maxWidth={"lg"} fullWidth>
            <DialogTitle onClose={() => setProjectDialogue(false)}>{projectDialogue.title}</DialogTitle>
            <img src={projectDialogue.image} alt='' className='projectDialog_image' className='projectDialog_image' />
            <DialogContent>
            {project.stack.map(st => {
                            return (
                                <Typography variant={'body2'} className='techStack'>{st}</Typography>
                            )
                        })}
                <Typography className='projectDialog_description'>{projectDialogue.description}</Typography>
            </DialogContent>
            <Typography variant='caption' style={{textAlign:'center'}}>Visit this project by clicking the icons below</Typography>
            <DialogActions className='projectDialog_actions'>
                {projectDialogue?.links?.map(link => {
                    return (
                        <a className='projectDialog_icon' href={link.link} target='_blank'  rel="noreferrer">{link.icon}</a>
                    )
                })}
            </DialogActions>
        </Dialog>
    }
    </Grid>
</Grid>
        </Grid>
    )
}

export default Portfolio
