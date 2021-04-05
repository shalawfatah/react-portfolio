import { Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import resumeData from '../../utils/resumeData'
import Button from '../Button'
import './Contact.css'


const Contact = () => {
    return (
        <Grid container className='section' spacing={3}>
            <Grid item xs={12} md={7}>
                <Grid container >
                    <Grid item className='section_title mb_30'>
                        <span></span>
                        <h6 className='section_title_text'>Contact Me</h6>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextField fullWidth name='name' label='Name ' />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextField fullWidth name='email' label='Email ' />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth name='message' multiline rows={4} label='Message... ' />
                            </Grid>
                            <Grid item xs={12} >
                                <Button text='Submit' />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
                <Grid container>
                    <Grid item className='section_title mb_30'>
                        <span></span>
                        <h6 className='section_title_text'>Contact Information</h6>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography className='contactInfo_item'>
                                    <span>Address: </span>
                                    {resumeData.address}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className='contactInfo_item'>
                                    <span>Phone: </span>
                                    {resumeData.phone}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className='contactInfo_item'>
                                    <span>Email: </span>
                                    {resumeData.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container className='contactInfo_socialsContainer'>
                                    {Object.keys(resumeData.socials).map(social => {
                                        return (
                                            <Grid item className='contactInfo_social'>
                                                <a href={resumeData.socials[social].link}>{resumeData.socials[social].icon}</a>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Contact
