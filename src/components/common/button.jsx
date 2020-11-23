import React from 'react';

const Button = ({title, onValidate, onClick}) => {
    return ( <button className="btn btn-primary btn-block" onClick={onClick} disabled={onValidate}>
    {title}
  </button> );
}
 
export default Button;