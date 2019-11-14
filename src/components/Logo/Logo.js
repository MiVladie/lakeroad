import React from 'react';

import { Link } from 'react-router-dom';

import classes from './Logo.module.css';

const logo = () => (
    <Link to = { '/' } className = { classes.Logo }>Lakeroad</Link>
);

export default logo;
