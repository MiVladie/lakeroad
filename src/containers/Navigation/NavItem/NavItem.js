import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import classes from './NavItem.module.css';

class NavItem extends Component {
    render () {
        return (
            <NavLink                 
                onClick = { this.props.clicked }
                to = { this.props.type === 'home' ? '/' : '/' + this.props.type } 
                className = { classes.NavItem } 
                activeClassName = { classes.active }
                exact >
                { this.props.type }
            </NavLink>
        );
    }
};

export default NavItem;
