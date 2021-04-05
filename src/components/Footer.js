import React from 'react'
import './Footer.css'
import {Typography} from '@material-ui/core'
import resumeData from '../utils/resumeData'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <Typography className='footer_name' style={{fontWeight: '600'}}>{resumeData.name}</Typography>
            </div>
            <div className='footer_right'>
                <Typography className='footer_copyright'> Developed by <a href='/'> @shalawfatah </a> - Design: <a href='https://themeforest.com/tavonline' target='_blank'>@tavonline.net</a></Typography>
            </div>            
        </div>
    )
}

export default Footer
