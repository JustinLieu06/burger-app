export React from 'react';
import classes from './Modal.module.css';

const modal = (props) => (
  <div classname={classes.Modal}>
    {props.children}
  </div>
);

export default modal;