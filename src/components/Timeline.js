import React from 'react'
import './Timeline.css'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import ContactsIcon from '@material-ui/icons/Contacts';

const CustomTimeLine = ({title, icon, children}) => {
    return (
        <div>
            <Timeline className={'timeline'}>
                <TimelineItem className={'timeline_firstItem'}>
                    <TimelineSeparator>
                    <TimelineDot className={'timeline_dot_header'}>{icon}</TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent><Typography variant='h6' className={'timeline_header'}>{title}</Typography></TimelineContent>
                </TimelineItem>
                {children}
            </Timeline>
        </div>
    )
}
export const WorkTimeLine = ({company, title, date, content}) => {
    return (
        <div>
            <Timeline className={'timeline-work'}>
                <TimelineItem className={'timeline_firstItem_work'}>
                    <TimelineSeparator>
                    <TimelineDot className={'timeline_dot_header_work'} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className={'timeline_all_content_work'}>
                        <Typography variant='h6' className={'timeline_header_work'}>{title}</Typography>
                        <Typography variant='p' className={'timeline_company_work'}>{company} </Typography>
                        <Typography variant='caption' className={'timeline_date_work'}>{date}</Typography>
                        <Typography variant='body2' className={'timeline_content_work'}>{content}</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem>
    <TimelineSeparator className={'separator_padding'}>
        <TimelineDot variant={'outlined'} className={'timeline_dot_work'}/>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timeline_content'>
            {link ? (<Typography className='timeline_text'><span style={{fontWeight: '700'}}>{title}: </span>{' '}<a href={link} target='_blank'>{text}</a></Typography>)
            : (<Typography className='timeline_text'><span style={{fontWeight: '700'}}>{title}: </span>{text}</Typography>)}
        </TimelineContent>
    </TimelineItem>
)

export default CustomTimeLine
