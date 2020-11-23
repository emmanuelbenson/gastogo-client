import React, {Component} from 'react';
import Joi from 'joi-browser';
import Input from './input'
import Select from './select'

class Form extends Component {
    state = { data: {}, errors: {} }

    validateForm = () => {
        const option = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, option);
    
        if (!error) return null;
    
        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
      };
    
      validateField = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
    
        return error ? error.details[0].message : null;
      };

      handleSubmit = (e) => {
        e.preventDefault();
    
        const errors = this.validateForm();
        this.setState({ errors: errors || {} });
    
        if (errors) return;
    
        this.doSubmit();
      };

      handleChangeInput = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateField(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
    
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
      };

      renderInput(name, label, type = 'text') {
        const { data, errors } = this.state;
        return (<Input
            error={errors[name]}
            name={name}
            label={label}
            value={data[name]}
            type={type}
            placeholder={label}
            onChange={this.handleChangeInput}
          />)
      } 

      renderSelect(label, name) {
        const {userTypes, errors} = this.state;
        return (<Select name={name} label={label} error={errors[name]} onChange={this.handleChangeInput} items={userTypes} />)
      }

      renderButton (label) {
      return (<button className="btn btn-success btn-block" hidden={this.validateForm()}>{label}</button>)
      }

}
 
export default Form;