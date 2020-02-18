import React from 'react';
import classes from './Modal.module.css';

const modal = (props) => (
  //TODO
  <div className={classes.Modal}>
    {props.children}
  </div>
);

export default modal;