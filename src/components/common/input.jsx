import React from 'react';

const Input = ({name, label, error, onChange, ...rest}) => {
    return ( <div className="form-group position-relative">
    <label htmlFor={name}>
      { label }{" "}      
    </label>
    
    <input
      {...rest}
      onChange={onChange && onChange}
      name={name}
      className="form-control pl-5"
      id={name}
      required=""
    />
    {error && <small className="text-danger"><cite>{error}</cite></small>}
  </div> );
}
 
export default Input;