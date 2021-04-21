import React from 'react'
import {Button, Form, FormControl, Nav, Navbar, NavDropDown} from 'react-bootstrap'
import {HomeRounded, SchoolRounded, WorkOffRounded, Facebook, Twitter, LinkedIn, GitHub, Telegram} from '@material-ui/icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, NavLink, withRouter} from 'react-router-dom'
import resumeData from '../utils/resumeData'
import CustomButton from './Button'
import './Header.css'

const Header = (props) => {
    const pathName = props?.location?.pathname
    return (
        <Navbar expand='lg' sticky='top' className='header'>
            <Nav.Link as={NavLink} to='/' className='header_navlink'>
                <Navbar.Brand className='header_home'>
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link as={NavLink} to='/' className={pathName == '/' ? 'header_link_active' : 'header_link'} style={{fontWeight: '600'}}>RESUME</Nav.Link>
                </Nav>
                <Nav className=''>
                    <Nav.Link as={NavLink} to='/portfolio' className={pathName == '/portfolio' ? 'header_link_active' : 'header_link'} style={{fontWeight: '600'}}>PORTFOLIO</Nav.Link>
                </Nav>
                <Nav className='header_left'>
                    <Nav.Link as={NavLink} to='/contact' className={pathName == '/contact' ? 'header_link_active' : 'header_link'} style={{fontWeight: '600'}}>CONTACT</Nav.Link>
                </Nav>

                <div className='header_right'>
                    {Object.keys(resumeData.socials).map(key => {
                        return (
                        <a style={{width:'50px', height: '50px'}} href={resumeData.socials[key].link} target='_blank'  rel="noreferrer">{resumeData.socials[key].icon}</a>
                        )
                    })}
                    <Nav.Link as={NavLink} to='/contact'>
                    <CustomButton text={'Hire Me'} icon={<Telegram />} />
                    </Nav.Link>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header)
