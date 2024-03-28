import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Dashboard.css';

export const Dashboard = () => {
  return (
    <div className="navbar">
      <div className="line"></div>
      <div className="navbar-container">
        <Link to="/ticket-raise-form">
        <Button  variant='contained' style={{color:"white"}}>Raise Query</Button>
        </Link>
       
        <Button  variant='outlined' style={{marginLeft:"1rem"}}>Contact</Button>
      </div>
      <div className="line"></div> 
    </div>
  );
};
