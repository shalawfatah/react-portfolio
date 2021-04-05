import React from 'react'
import './Resume.css'
import {Grid, Icon, Paper, Typography} from '@material-ui/core'
import resumeData from '../utils/resumeData'
import CustomTimeLine, { WorkTimeLine } from './Timeline'
import {CustomTimelineItem} from './Timeline'
import WorkIcon from '@material-ui/icons/Work';
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineSeparator from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot';

import SchoolIcon from '@material-ui/icons/School';

const Resume = () => {
    return (
        <>
        {/* About Me */}
        <Grid container className='section p_45'>
            <Grid item className='section_title'>
                <span></span>
                <Typography variant='h6' className='section_title_text'>About Me</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
            </Grid>
        </Grid>

        {/* RESUME SECTION */}
        
        <Grid item className=' section_title' style={{marginLeft:'30px'}}>
                <span></span>
                <Typography variant='h6' className='section_title_text'>Resume</Typography>
            </Grid>
            <Grid item xs={12} className='section'>
                <Grid container>
                    <Grid item sm={12} md={6}>
                        <CustomTimeLine title='Experience' icon={<WorkIcon />}>
                            {resumeData.experiences.map(exp => {
                                return (
                                    // <TimelineItem>
                                    //     <TimelineContent>
                                    //         <Typography className='timeline_title'>{exp.title}</Typography>
                                    //         <Typography variant='caption' className='timeline_date'>{exp.date}</Typography>
                                    //         <Typography variant='body2' className='timeline_description'>{exp.description}</Typography>
                                    //     </TimelineContent>
                                    // </TimelineItem>
                                    <WorkTimeLine title={exp.title} company={exp.company} date={exp.date} content={exp.description} />
                                )
                            })}
                        </CustomTimeLine>
                    </Grid>
                    </Grid>
                    <Grid item sm={12} md={6} style={{marginTop:'50px'}}>
                    <CustomTimeLine title='Education' icon={<SchoolIcon />}>
                            {resumeData.education.map(edu => {
                                return (
                                    <WorkTimeLine title={edu.title} company={edu.school + ' @ '} date={edu.date} content={edu.description} />
                                )
                            })}
                        </CustomTimeLine>
                    </Grid>
                </Grid>
        {/* Experience and Education */}
        <Grid container className='section'>
            <Grid item className='section_title'>
                <span></span>
                <Typography variant='h6' className='section_title_text'>Services</Typography>
            </Grid>
            <Grid item xs={12} className='p_50'>
                <Grid container spacing={3} justify='space-around'>
                    {resumeData.services.map(service => 
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='service'>
                                <Icon className='service_icon'>{service.icon}</Icon>
                                <Typography className='service_title' variant='h6'>{service.title}</Typography>
                                <Typography className='service_description' varianet='caption'>{service.description}</Typography>
                            </div>
                        </Grid>
                        )}
                </Grid>
            </Grid>
        </Grid>

        {/* Services */}
        <Grid container className='section'>
            <Grid item className='section_title'>
                <span></span>
                <Typography variant='h6' className='section_title_text'>Skills</Typography>
            </Grid>
        <Grid container justify-content='space-between' className='section graybg pb_45 p_50' spacing={1}>
            {resumeData.skills.map(skill => {
                return (
                <Grid item xs={12} sm={6} md={3} >
                    <Paper elevation={0} className='skill'>
                        <Typography variant='h6' className='skill_title'>
                            {skill.title}
                        </Typography>
                        {skill.description.map(desc => {
                            return (
                            <Typography variant='body2' className='skill_description'>
                                <TimelineDot variant={'outlined'} className='timeline_dot' />
                                {desc}
                            </Typography>
                            )
                        })}
                    </Paper>
                </Grid>
                )
            })}
        </Grid>
        </Grid>
        </>
    )
}

export default Resume
