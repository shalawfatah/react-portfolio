import { Typography } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import ProfileImage from '../assets/images/pro-img.png'
import CustomTimeLine from './Timeline'
import {CustomTimelineItem} from './Timeline'
import resumeData from '../utils/resumeData'
import ContactsIcon from '@material-ui/icons/Contacts';
import CustomButton from './Button'
import GetAppIcon from '@material-ui/icons/GetApp';


const Sidebar = () => {
    return (
        <div className='profile container-shadow'>
            <div className='profile_name'>
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
            </div>
            <div className='profile_image'>
                <img src={ProfileImage} alt='profile image'></img>
            </div>
            <div className='profile_information'>
                <CustomTimeLine icon={<ContactsIcon />} >
                    <CustomTimelineItem title={'Name'} text={resumeData.name}  />
                    <CustomTimelineItem title={'Title'} text={resumeData.title}  />
                    <CustomTimelineItem title={'Email'} text={resumeData.email}  />
                    <CustomTimelineItem title={'Address'} text={resumeData.address}  />
                    {Object.keys(resumeData.socials).map(key => {
                        return (
                        <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
                        )
                    })}
                </CustomTimeLine>
                <br />
                <div className='button_container'>
                <CustomButton text={'Download CV'} icon={<GetAppIcon />} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
