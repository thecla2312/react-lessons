import React from 'react'
// prop - pass variables and value ftom one component to another

//book title
const Employee = ({ img, name, role, children }) => {
    //const {img, role, name} = props
    console.log(img, name, role);
}
const Employees = () => {
  return (
    <div>Employees</div>
  )
}

export default Employees