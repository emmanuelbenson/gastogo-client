import React from 'react';

const Select = ({name, label, error, onChange, items}) => {
    return ( <div className="form-group position-relative">
    <label htmlFor={name}>
      { label }{" "}      
    </label>

    <select onChange={onChange && onChange} required="" id={name} name={name} className="form-control pl-5">
        <option value="">--Select--</option>
        {items && items.map((key,val) => <option key={key} value={key.replace(' ', '')}>{key.toUpperCase()}</option>)}
    </select>    
    {error && <small className="text-danger"><cite>{error}</cite></small>}
  </div> );
}
 
export default Select;