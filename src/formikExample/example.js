import React from 'react';
import { withFormik } from 'formik';

const enhancer = withFormik({  
  // Transformamos las props externas a valores  
  mapPropsToValues: props => {    
    return {     
      email: props.initialEmail || ''   
    };  
  },  
  // Agregamos nuestra funcion de validacion custom  
  validate: (values, props) => {    
    const errors = {};   
    if (!values.email) {    
      errors.email = 'Required';   
    } 
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {    
      errors.email = 'Invalid email address';   
    }   
    return errors;  
  },  
  handleSubmit: values => { 
    // realizamos el submit  
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 400);
  },});

  const MyForm = props => ( 
    <form onSubmit={props.handleSubmit}>   
      <div>
        <input  
          name="email"
          onChange={props.handleChange}  
          value={props.values.email} />   
        {props.errors.email && props.touched.email && props.errors.email}
      </div>
      <button type="submit">      
        Submit   
      </button> 
    </form>);
    
  export default enhancer(MyForm); 