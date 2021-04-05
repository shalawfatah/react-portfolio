import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import AssistantIcon from '@material-ui/icons/Assistant';
import SettingsIcon from '@material-ui/icons/Settings';
import { GitHub, Language, YouTube } from '@material-ui/icons'

export default {
    name: 'Shalaw Fatah',
    title: 'Web Developer',
    birthday: '6th Jan 1988',
    email: 'shalaw.fatah@gmail.com',
    address: 'University Cres, Burnaby, BC',
    phone: '236-886-5606',
    socials: {
        Facebook: {
            link: 'https://facebook.com/shalawfatah',
            text: '@shalawfatah',
            icon: <FacebookIcon />
        },
        Linkedin: {
            link: 'https://linkedin.com/in/shalawfatah',
            text: '@shalawfatah',
            icon: <LinkedInIcon />
        },
        Twitter: {
            link: 'https://twitter.com/shalawfatah',
            text: '@shalawfatah',
            icon: <TwitterIcon />
        },
        Github: {
            link: 'https://github.com/shalawfatah',
            text: '@shalawfatah',
            icon: <GitHubIcon />
        },
    },
    about: "I'm a self taught web developer, with a major focus on front-end development. I love working with Javascript, my favorite library for front-end is React. But enough about coding. What I love more is working with innovative and creative people, people with a grand vision and great inspiration. I love to help those who want to help the community. I want to work on projects that have a clear vision for the betterment of the society. If you have such a project, let me know.",
    experiences: [
        {
            title: 'Front/Backend Web Developer',
            date: '2021 - Present',
            company: 'eVisionMedia',
            description: 'As a digitl marketing agency, I had to take care of the maintenace of many websites, and also built websites with different tech-stacks.'
        },
        {
            title: 'Web Developer',
            date: '2018 - 2021',
            company: 'Freelance',
            description: 'My work was two-folds, 1) build websites for clients. 2) take care of the maintenance and SEO on regular basis.'
        },
        {
            title: 'Creative Officer',
            date: '2015 - 2018',
            company: 'SuliMedia',
            description: 'My work was to write advertisement ideas, catchy slogans, branding formulas for several clients of this marketing agency'
        },
        {
            title: 'Project Manager',
            date: '2013 - 2015',
            company: 'Mellat News Agency',
            description: 'My work was to manage this project, which was a news agency service. I had to take care of the digital aspect and day-to-day activities of the website.'
        }
    ],
    education: [
        {
            title: 'MBA in Project Management',
            date: '2015 - 2017',
            school: 'AUIS',
            description: 'Studied Masters degree in Project Management in an American University'
        },
        {
            title: 'Bachelor of Arts in IS',
            date: '2008 - 2012',
            school: 'AUIS',
            description: 'Studied this multidisciplinary field in the newly-founded American University in Iraq.'
        },
        {
            title: '+5 Online Coding Certificates',
            date: '2018 - Present',
            school: 'Online',
            description: 'Udemy, Frontend Masters, and StackOverflow are places I spent time on most of the time.'
        }
    ],
    services: [
        {
            title: 'Web Development', 
            description: 'I can build websites with many webstacks, including PHP and JS, & CMS',
            icon: <VerticalSplitIcon />
        },
        {
            title: 'Brand Identity', 
            description: 'I can make your brand appear better on the internet, take care of SEO & Ads',
            icon: <AssistantIcon />
        },{
            title: 'Web Maintenance', 
            description: 'I can fix your website if there is an issue, and maintain its relevance by updating',
            icon: <SettingsIcon />
        }
    ],
    skills: [
        {
            title: 'Front-end',
            description: ['Javascript', 'React', 'TypeScript', 'Bootstrap', 'Tailwind', 'Material-UI']
        },
        {
            title: 'Back-end',
            description: ['Node', 'Express', 'PHP']
        },
        {
            title: 'Databases',
            description: ['Firebase', 'MongoDB', 'MYSQL', 'POSTGRESQL']
        },
        {
            title: 'Source Control',
            description: ['Git', 'Github', 'Scrum/Agile', 'cPanel']
        }
    ],
    portfolio: [
        {
            tag: 'React',
            image: 'https://www.cloudways.com/blog/wp-content/uploads/Why-ReactJS-Should-be-a-Perfect-Choice-for-Your-Next-Front-end-Application-Banner.jpg',
            title: 'Project 1',
            description: 'lorem22 asdsadsd awewewe',
            caption: 'A short description',
            links: [
                {link: 'https://google.com', icon: <YouTube />},
                {link: 'https://google.com', icon: <GitHub />},
                {link: 'https://google.com', icon: <Language />},
            ]
        },
        {
            tag: 'React',
            image: 'https://www.cloudways.com/blog/wp-content/uploads/Why-ReactJS-Should-be-a-Perfect-Choice-for-Your-Next-Front-end-Application-Banner.jpg',
            title: 'React Project 2',
            description: 'lorem22 asdsadsd awewewe',
            caption: 'A short description',
            links: [
                {link: 'https://google.com', icon: <YouTube />},
                {link: 'https://google.com', icon: <GitHub />},
                {link: 'https://google.com', icon: <Language />},
            ]
        },
        {
            tag: 'Javascript',
            image: 'https://www.cloudways.com/blog/wp-content/uploads/Why-ReactJS-Should-be-a-Perfect-Choice-for-Your-Next-Front-end-Application-Banner.jpg',
            title: 'Wordpress Project 1',
            description: 'lorem22 asdsadsd awewewe',
            caption: 'A short description',
            links: [
                {link: 'https://google.com', icon: <YouTube />},
                {link: 'https://google.com', icon: <GitHub />},
                {link: 'https://google.com', icon: <Language />},
            ]
        },
        {
            tag: 'Wordpress',
            image: 'https://www.cloudways.com/blog/wp-content/uploads/Why-ReactJS-Should-be-a-Perfect-Choice-for-Your-Next-Front-end-Application-Banner.jpg',
            title: 'Shopify Project 1',
            description: 'lorem22 asdsadsd awewewe',
            caption: 'A short description',
            links: [
                {link: 'https://google.com', icon: <YouTube />},
                {link: 'https://google.com', icon: <GitHub />},
                {link: 'https://google.com', icon: <Language />},
            ]
        },
        {
            tag: 'Python',
            image: 'https://www.cloudways.com/blog/wp-content/uploads/Why-ReactJS-Should-be-a-Perfect-Choice-for-Your-Next-Front-end-Application-Banner.jpg',
            title: 'Python Project 1',
            description: 'lorem22 asdsadsd awewewe',
            caption: 'A short description',
            links: [
                {link: 'https://google.com', icon: <YouTube />},
                {link: 'https://google.com', icon: <GitHub />},
                {link: 'https://google.com', icon: <Language />},
            ]
        },
        {
            tag: 'PHP',
            image: 'https://www.cloudways.com/blog/wp-content/uploads/Why-ReactJS-Should-be-a-Perfect-Choice-for-Your-Next-Front-end-Application-Banner.jpg',
            title: 'PHP Project 1',
            description: 'lorem22 asdsadsd awewewe',
            caption: 'A short description',
            links: [
                {link: 'https://google.com', icon: <YouTube />},
                {link: 'https://google.com', icon: <GitHub />},
                {link: 'https://google.com', icon: <Language />},
            ]
        }
    ]
}

