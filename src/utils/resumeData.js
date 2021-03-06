import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import AssistantIcon from '@material-ui/icons/Assistant';
import SettingsIcon from '@material-ui/icons/Settings';
import { GitHub, Language } from '@material-ui/icons'
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';

export default {
    name: 'Shalaw Fatah',
    title: 'Web Developer',
    birthday: '6th Jan',
    email: 'shalaw.fatah@gmail.com',
    address: 'Clark Drive, BC, CA',
    phone: 'ON REQUEST',
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
        Dribbble: {
            link: 'https://dribbble.com/shalaw-fatah',
            text: '@shalaw-fatah',
            icon: <SportsBasketballIcon />
        },
    },
    about: "I'm a self taught web developer, with a major focus on front-end development. I love working with Javascript, my favorite library for front-end is React. But enough about coding. What I love more is working with innovative and creative people, people with a grand vision and great inspiration. I love to help those who want to help the community. I want to work on projects that have a clear vision for the betterment of the society. If you have such a project, let me know.",
    experiences: [
        {
            title: 'Web Developer',
            date: '2018 - 2021',
            company: 'Freelance',
            description: 'My work was two-folds, first, I have to build websites for clients. I mostly use Wordpress and Shopify. Second, take care of the maintenance and SEO on regular basis.'
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
            description: ['JS', 'React', 'Typescript', 'Redux', 'CSS', 'SASS' ]
        },
        {
            title: 'Back-end',
            description: ['Node', 'Express', 'PHP', 'API']
        },
        {
            title: 'Databases',
            description: ['Firebase', 'MongoDB', 'MYSQL', 'POSTGRESQL', 'Redis']
        },
        {
            title: 'Source Control',
            description: ['Git', 'Docker', 'Linux', 'cPanel']
        }
    ],
    portfolio: [
        {
            tag: 'React',
            image: 'https://cdn.dribbble.com/users/4482322/screenshots/15076759/media/e7a3cf66762beb37318baba4f5bb3bab.png?compress=1&resize=1600x1200',
            title: 'Profile',
            stack: ['Gatsby', 'Strapi', 'Tailwind'],
            description: 'This is a statically-generated React portfolio I built with GatsbyJS in the front-end and Strapi CMS in the backend. The tech used in this project includes major React features like hooks, modular design, API calls, etc.',
            caption: 'This is a statically-generated React portfolio I built with GatsbyJS in the front-end and Strapi CMS in the backend.',
            links: [
                {link: 'https://shalaw-portfolio.netlify.app', icon: <Language />},
                {link: 'https://github.com/shalawfatah/shalaw-portfolio', icon: <GitHub />}
            ]
        },
        {
            tag: 'React',
            image: 'https://cdn.dribbble.com/users/4482322/screenshots/16052668/media/c229d3aff1c527560e048ef0531cdcf7.jpg?compress=1&resize=1600x1200',
            title: 'Shiver',
            stack: ['React', 'Typescript', 'Golang', 'PWA', 'Graphql', 'GORM'],
            description: "Shiver is an online community for sharing and enjoying urban legends, mythology, scary stories, the occult and many other facets of human culture.",
            caption: 'This is a PWA created with React, Typescript and Golang to share spooky stories.',
            links: [
                {link: 'https://shiver-web.vercel.app/', icon: <Language />},
                {link: 'https://github.com/chalkedgoose/shiver_web', icon: <GitHub />}
            ]
        },
        {
            tag: 'React',
            image: 'https://cdn.dribbble.com/users/4482322/screenshots/15425359/media/2bb9f97cbff231e0021fe75cb8733481.png?compress=1&resize=1600x1200',
            title: 'Worldwide Bee Website',
            stack: ['Gatsby', 'Leaflet', 'GIS', 'Strapi', 'Tailwind'],
            description: 'I built this website as a volunteer with a group of volunteers, from design to development, using GatsbyJS and Strapi CMS. Many technologies have been used in this website, including GIS [custom map and geolocation functionality], Tailwind CSS, MailChimp, and many others',
            caption: 'This is a website I built with React and Strapi, using many frontend tecnologies.',
            links: [
                {link: 'https://www.worldwidebee.org/', icon: <Language />},
                {link: 'https://github.com/shalawfatah/wwb-react-strapi', icon: <GitHub />}
            ]
        },
        {
            tag: 'React',
            image: 'https://cdn.dribbble.com/users/4482322/screenshots/15520834/media/f289ad9a08a2791f9fb93bc05e4a1d92.png?compress=1&resize=1600x1200',
            title: 'Resume Website',
            stack: ['Gatsby', 'Strapi', 'Tailwind'],
            description: 'This is a statically-generated React portfolio I built with GatsbyJS in the front-end and Strapi CMS in the backend. The tech used in this project includes major React features like hooks, modular design, API calls, etc.',
            caption: 'This is a statically-generated React portfolio I built with GatsbyJS in the front-end and Strapi CMS in the backend.',
            links: [
                {link: 'https://shalaw.netlify.app', icon: <Language />},
                {link: 'https://github.com/shalawfatah/shalaw-portfolio', icon: <GitHub />}
            ]
        },
        {
            tag: 'React',
            image: 'https://www.fossmint.com/wp-content/uploads/2020/03/Watch-Free-Movies-Online.png',
            title: 'Movie App',
            stack: ['React', 'API', 'Bootstrap'],
            description: 'This movie app is built with React and using MovieDB API.',
            caption: 'This movie app is built with React and using MovieDB API. Many features of React has been used here, including live search, hooks, and API.',
            links: [
                {link: 'https://react-movie-api-app.netlify.app/', icon: <Language />},
                {link: 'https://github.com/shalawfatah/react-movie-app-api', icon: <GitHub />}
            ]
        },
        {
            tag: 'React',
            image: 'https://image.shutterstock.com/image-vector/weather-forecast-poster-temperature-humidity-260nw-1711691812.jpg',
            title: 'Weather Progressive Web App',
            stack: ['React', 'API', 'CSS'],
            description: 'Using React and Open Weather API, I created this app to check the weather. However, the main objective was to include the progressive web app (PW) functionality, which allows the app to work offline and be installed as a standalone app on smartphones and computers.',
            caption: 'This is a progressive web app created with React, can be installed on computers and smartphones',
            links: [
                {link: 'https://react-weather-pwa-app.netlify.app/', icon: <Language />},
                {link: 'https://github.com/shalawfatah/weather-app', icon: <GitHub />}
            ]
        },
        {
            tag: 'Wordpress',
            image: 'https://cdn.dribbble.com/users/4482322/screenshots/9910720/media/6d898ae77a749ee4637333bd2c99f0cc.jpg?compress=1&resize=1600x1200',
            title: 'Ideation Resources Limited',
            stack: ['Wordpress', 'Elementor'],
            description: 'This website is built on Wordpress, using Elementor Page Builder and many other plugins. The client wanted a fast website with some illustrations to deliver the message that they want. ',
            caption: 'I built this website for a small business based in Vancouver',
            links: [
                {link: 'https://ideationresources.com/', icon: <Language />},
            ]
        },
        {
            tag: 'Wordpress',
            image: 'https://cdn.dribbble.com/users/4482322/screenshots/15195631/media/65604bfc1d485475b2a7883acb89d63e.png?compress=1&resize=1600x1200',
            title: 'Vancrown Home Service',
            stack: ['Wordpress', 'Elementor', 'CSS'],
            description: 'This website is built on Wordpress, using Elementor Page Builder and several other plugins. SEO and speed was the focus for the client. I tried to make SEO especially in focus for this website.',
            caption: 'I built this portfolio for a Vancouver-based renovation company.',
            links: [
                {link: 'https://vancrownhome.com', icon: <Language />},
            ]
        },
        {
            tag: 'Wordpress',
            image: 'https://cdn.dribbble.com/users/4482322/screenshots/10594776/media/a962b277106fe2032d32f0fe92500e14.png?compress=1&resize=1600x1200',
            title: 'Personal Portfolio',
            stack: ['Wordpress', 'Elementor', 'CSS'],
            description: 'This personal portfolio is made with Wordpress, using Elementor Page Builder, Astra theme, and with several modifications. Some plugins have been used to make the website better. ',
            caption: 'This is a personal portfolio made with Wordpress',
            links: [
                {link: 'https://shalaw.tech', icon: <Language />},
            ]
        },
        {
            tag: 'Shopify',
            image: 'https://egnition.io/web/wp-content/uploads/2020/07/how-shopify-works.jpg',
            title: 'The Mane Avenue Website',
            stack: ['Shopify', 'Debutify', 'CSS'],
            description: 'I built this website for a client in The Mane Avenue with Shopify. The client specifically asked for Shopify for the ease of use when it comes to ecommerce. The theme behind this is Debutify, many marginal apps have been used in the background to make the process smoother.',
            caption: 'I built this webshop for a client in The Mane Avenue',
            links: [
                {link: 'https://themaneavenue.ca/', icon: <Language />},
            ]
        },
        {
            tag: 'Shopify',
            image: 'https://cdn.dribbble.com/users/4482322/screenshots/9933736/media/1686bccfb8be9ab293e3aeb0f3824737.jpg?compress=1&resize=1600x1200',
            title: 'Fast Fashion Finds Website',
            stack: ['Shopify', 'Debutify', 'CSS'],
            description: 'I built this website for a client in Fast Fashion Finds with Shopify. The client asked for an accessible webshop which she can run by herlsef without the need of a web developer to maintain. The theme behind this is Debutify, many marginal apps have been used in the background to make the process smoother.',
            caption: 'I built this webshop for a client in Fast Fashion Finds',
            links: [
                {link: 'https://fastfashionfinds.com', icon: <Language />},
            ]
        },
        {
            tag: 'Javascript',
            image: 'https://cdn.dribbble.com/users/4482322/screenshots/10115255/media/f2e5eeaa426c7a700bab2b002327c534.jpg?compress=1&resize=1600x1200',
            title: 'Web Developer Profile',
            stack: ['JS', 'CSS', 'HTML'],
            description: 'I built this web developer profile with Vanilla Javascript, mostly using DOM manipulator to animate the website and make it work smoothly. Several animations have been used, including sliders, on mouse hover photo change, etc.',
            caption: 'A web developer profile built with Vanilla Javascript',
            links: [
                {link: 'https://shalaw-sec-profile.netlify.app/', icon: <Language />},
            ]
        },
    ]
}

