import React, { Component } from 'react';

import Logo from '../../components/Logo/Logo.js';
import NavItem from './NavItem/NavItem.js';

import menuIcon from '../../assets/Images/menu.png';
import closeIcon from '../../assets/Images/close.png';

import classes from './Navigation.module.css';

class Navigation extends Component {
    state = {
        navIsOpen: false
    }

    onMenuClick = () => {
        this.setState({
            navIsOpen: !this.state.navIsOpen
        })
    }

    render () {       
        return (            
            <section className = { classes.Navigation }>
                <Logo />   

                <div className = { [classes.Module, this.state.navIsOpen ? null : classes.ModuleClose].join(' ') }>
                    <div className = { classes.NavItem }>  
                        <NavItem clicked = { this.onMenuClick } type = 'home' />
                        <NavItem clicked = { this.onMenuClick } type = 'music' />
                        <NavItem clicked = { this.onMenuClick } type = 'social' />
                        <NavItem clicked = { this.onMenuClick } type = 'about' />
                    </div>       
                </div>
                
                <button onClick = { this.onMenuClick } className = { classes.HamburgerMenuBtn }>
                    <img src = { this.state.navIsOpen ? closeIcon : menuIcon } alt = 'navIcon' />
                </button>

            </section>      
        ); 
    }
};

export default Navigation;
