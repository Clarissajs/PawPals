import React from 'react'
import { Input } from 'reactstrap'

// For use in <Field /> to couple redux-form and reactstrap input

const CustomInput = (props) => (
  <Input {...props.input} placeholder={props.placeholder} type={props.type}/>
)

export default CustomInput